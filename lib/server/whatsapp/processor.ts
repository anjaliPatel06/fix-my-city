import { flashModel } from "@/lib/gemini";
import {
  advanceReportConversation,
  buildInitialReportQuestion,
  buildNextQuestion,
} from "@/lib/server/report-agent";
import { createComplaintForUser } from "@/lib/server/reports";
import { sendWhatsAppTextMessage } from "@/lib/server/whatsapp/client";
import { downloadAndStoreWhatsAppImage } from "@/lib/server/whatsapp/media";
import {
  appendWhatsAppReportMessages,
  upsertWhatsAppReportForSession,
} from "@/lib/server/whatsapp/reports";
import {
  claimPendingWhatsAppSessionByStartMessage,
  claimWhatsAppSessionByToken,
  extractWhatsAppSessionToken,
  getActiveWhatsAppSessionByPhone,
  getLatestWhatsAppSessionByPhone,
  isCleanWhatsAppStartMessage,
  saveWhatsAppSessionProgress,
} from "@/lib/server/whatsapp/sessions";
import type { ParsedInboundWhatsAppMessage } from "@/lib/server/whatsapp/webhook";
import type { ReportConversationFields, WhatsAppSession } from "@/lib/types";

const UNLINKED_SESSION_MESSAGE =
  "Fix My City par WhatsApp complaint start karne ke liye pehle app ke Report section se WhatsApp option open karein.";

function isKnownText(value?: string) {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return !["", "extracting...", "unknown", "n/a", "na"].includes(normalized);
}

function buildMessageRecord(input: {
  direction: "incoming" | "outgoing";
  body: string;
  at: string;
  from?: string;
  to?: string;
  messageId?: string;
  mediaId?: string;
  mediaUrl?: string;
  profileName?: string;
  timestamp?: string;
}) {
  return input;
}

function buildImageRequestMessage() {
  return "Ab complaint ki ek clear photo WhatsApp par upload kar dein. Photo milte hi main report submit kar dunga.";
}

function areReportFieldsComplete(fields: ReportConversationFields) {
  return (
    isKnownText(fields.category) &&
    isKnownText(fields.description) &&
    isKnownText(fields.city) &&
    /^\d{6}$/.test(fields.pincode.trim()) &&
    isKnownText(fields.exactLocation)
  );
}

async function sendAndRecordReply({
  to,
  body,
  sessionToken,
  currentExtracted,
  status,
  complaintTicketId,
  failureReason,
  mediaDownloadError,
}: {
  to: string;
  body: string;
  sessionToken: string;
  currentExtracted?: Parameters<typeof appendWhatsAppReportMessages>[0]["currentExtracted"];
  status?: Parameters<typeof appendWhatsAppReportMessages>[0]["status"];
  complaintTicketId?: string;
  failureReason?: string;
  mediaDownloadError?: string;
}) {
  const sentAt = new Date().toISOString();
  const sent = await sendWhatsAppTextMessage(to, body);

  await appendWhatsAppReportMessages({
    sessionToken,
    currentExtracted,
    status,
    complaintTicketId,
    failureReason,
    mediaDownloadError,
    messages: [
      buildMessageRecord({
        direction: "outgoing",
        to,
        body,
        messageId: sent.messages?.[0]?.id,
        at: sentAt,
      }),
    ],
  });
}

async function createComplaintFromWhatsAppSession({
  session,
  imageUrl,
}: {
  session: WhatsAppSession;
  imageUrl: string;
}) {
  const exactLocation = isKnownText(session.currentExtracted.exactLocation)
    ? session.currentExtracted.exactLocation
    : session.currentExtracted.address;

  return createComplaintForUser({
    userEmail: session.userEmail,
    userName: session.userName,
    category: session.currentExtracted.category,
    description: session.currentExtracted.description,
    address: exactLocation,
    exactLocation,
    landmark: session.currentExtracted.landmark,
    city: session.currentExtracted.city,
    pincode: session.currentExtracted.pincode,
    urgency: session.currentExtracted.urgency,
    imageUrl,
    photoUrl: imageUrl,
    latitude: session.currentExtracted.latitude,
    longitude: session.currentExtracted.longitude,
  });
}

async function completeComplaintIfReady({
  session,
  to,
  imageUrl,
  historyPrefix,
}: {
  session: WhatsAppSession;
  to: string;
  imageUrl: string;
  historyPrefix: WhatsAppSession["history"];
}) {
  if (!areReportFieldsComplete(session.currentExtracted)) {
    return false;
  }

  try {
    console.info("whatsapp complaint creation started", { token: session.token });
    const complaint = await createComplaintFromWhatsAppSession({ session, imageUrl });
    const finalReply = `Dhanyavaad! Aapki complaint submit ho gayi hai.\nTrack ID: ${complaint.ticketId}\nIsse app ke Track page par dekh sakte hain.`;
    const replyAt = new Date().toISOString();
    const finalHistory = [
      ...historyPrefix,
      { role: "assistant" as const, content: finalReply, at: replyAt },
    ];

    await saveWhatsAppSessionProgress({
      token: session.token,
      currentExtracted: session.currentExtracted,
      history: finalHistory,
      status: "submitted",
      complaintTicketId: complaint.ticketId,
    });

    await sendAndRecordReply({
      to,
      body: finalReply,
      sessionToken: session.token,
      currentExtracted: session.currentExtracted,
      status: "submitted",
      complaintTicketId: complaint.ticketId,
    });
    console.info("whatsapp complaint creation completed", {
      token: session.token,
      ticketId: complaint.ticketId,
      imageUrl,
    });
  } catch (error) {
    const failureReason = error instanceof Error ? error.message : "Complaint creation failed.";
    console.error("whatsapp complaint creation error:", error);

    await sendAndRecordReply({
      to,
      body: `Photo mil gayi thi, lekin complaint save nahi ho saki: ${failureReason}`,
      sessionToken: session.token,
      currentExtracted: session.currentExtracted,
      status: "failed",
      failureReason,
    });
  }

  return true;
}

async function startLinkedWhatsAppSession({
  session,
  message,
}: {
  session: WhatsAppSession;
  message: ParsedInboundWhatsAppMessage;
}) {
  await upsertWhatsAppReportForSession({
    session,
    phoneNumber: message.from,
    profileName: message.profileName,
    status: "collecting",
  });

  const now = new Date().toISOString();
  const introMessage =
    session.history.length > 0
      ? buildNextQuestion(session.currentExtracted)
      : buildInitialReportQuestion(session.userName);
  const history =
    session.history.length > 0
      ? session.history
      : [{ role: "assistant" as const, content: introMessage, at: now }];

  await appendWhatsAppReportMessages({
    sessionToken: session.token,
    messages: [
      buildMessageRecord({
        direction: "incoming",
        from: message.from,
        body: message.text,
        messageId: message.messageId,
        profileName: message.profileName,
        timestamp: message.timestamp,
        at: now,
      }),
    ],
  });

  await saveWhatsAppSessionProgress({
    token: session.token,
    currentExtracted: session.currentExtracted,
    history,
    status: "collecting",
  });

  await sendAndRecordReply({
    to: message.from,
    body: introMessage,
    sessionToken: session.token,
    currentExtracted: session.currentExtracted,
    status: "collecting",
  });
}

export async function processIncomingWhatsAppMessage(message: ParsedInboundWhatsAppMessage) {
  const token = extractWhatsAppSessionToken(message.text);

  if (token) {
    const session = await claimWhatsAppSessionByToken({
      token,
      phoneNumber: message.from,
      profileName: message.profileName,
    });

    await startLinkedWhatsAppSession({ session, message });
    return;
  }

  const session = await getActiveWhatsAppSessionByPhone(message.from);

  if (!session) {
    if (isCleanWhatsAppStartMessage(message.text)) {
      const pendingSession = await claimPendingWhatsAppSessionByStartMessage({
        phoneNumber: message.from,
        profileName: message.profileName,
      });

      if (pendingSession) {
        await startLinkedWhatsAppSession({ session: pendingSession, message });
        return;
      }
    }

    const latestSession = await getLatestWhatsAppSessionByPhone(message.from);

    if (latestSession?.status === "submitted" && latestSession.complaintTicketId) {
      await sendWhatsAppTextMessage(
        message.from,
        `Aapki complaint pehle hi submit ho chuki hai. Track ID: ${latestSession.complaintTicketId}. Dhanyavaad!`,
      );
      return;
    }

    await sendWhatsAppTextMessage(message.from, UNLINKED_SESSION_MESSAGE);
    return;
  }

  if (session.complaintTicketId) {
    await sendWhatsAppTextMessage(
      message.from,
      `Aapki complaint pehle hi submit ho chuki hai. Track ID: ${session.complaintTicketId}. Dhanyavaad!`,
    );
    return;
  }

  const receivedAt = new Date().toISOString();
  let imageUrl = session.currentExtracted.imageUrl;
  let mediaDownloadError: string | undefined;

  if (message.type === "image") {
    if (!message.mediaId) {
      mediaDownloadError = "WhatsApp image media ID is missing.";
    } else {
      try {
        console.info("whatsapp media download started", {
          mediaId: message.mediaId,
          from: message.from,
        });
        const storedImage = await downloadAndStoreWhatsAppImage({
          mediaId: message.mediaId,
          mimeType: message.mimeType,
        });
        imageUrl = storedImage.imageUrl;
        console.info("whatsapp media download completed", {
          mediaId: message.mediaId,
          imageUrl,
          size: storedImage.size,
        });
      } catch (error) {
        mediaDownloadError =
          error instanceof Error ? error.message : "WhatsApp image download failed.";
        console.error("whatsapp media download error:", error);
      }
    }
  }

  await appendWhatsAppReportMessages({
    sessionToken: session.token,
    imageUrl,
    mediaId: message.mediaId,
    mediaDownloadError,
    messages: [
      buildMessageRecord({
        direction: "incoming",
        from: message.from,
        body: message.text || (message.type === "image" ? "[Image uploaded]" : ""),
        messageId: message.messageId,
        mediaId: message.mediaId,
        mediaUrl: imageUrl,
        profileName: message.profileName,
        timestamp: message.timestamp,
        at: receivedAt,
      }),
    ],
  });

  if (mediaDownloadError) {
    await sendAndRecordReply({
      to: message.from,
      body: `${mediaDownloadError} Kripya JPG, PNG ya WebP image dobara bhejein.`,
      sessionToken: session.token,
      currentExtracted: session.currentExtracted,
      status: "collecting",
      mediaDownloadError,
    });
    return;
  }

  const currentExtractedWithImage: ReportConversationFields = {
    ...session.currentExtracted,
    ...(imageUrl ? { imageUrl } : {}),
  };

  if (message.type === "image" && !message.text.trim()) {
    const imageHistory = [
      ...session.history,
      { role: "user" as const, content: "[Image uploaded]", at: receivedAt },
    ];
    const updatedSession = await saveWhatsAppSessionProgress({
      token: session.token,
      currentExtracted: currentExtractedWithImage,
      history: imageHistory,
      status: "collecting",
    });

    if (
      imageUrl &&
      (await completeComplaintIfReady({
        session: updatedSession,
        to: message.from,
        imageUrl,
        historyPrefix: imageHistory,
      }))
    ) {
      return;
    }

    const imageFollowUp = `Photo mil gayi hai. ${buildNextQuestion(updatedSession.currentExtracted)}`;
    const imageFollowUpAt = new Date().toISOString();
    const imageFollowUpHistory = [
      ...imageHistory,
      { role: "assistant" as const, content: imageFollowUp, at: imageFollowUpAt },
    ];

    await saveWhatsAppSessionProgress({
      token: updatedSession.token,
      currentExtracted: updatedSession.currentExtracted,
      history: imageFollowUpHistory,
      status: "collecting",
    });

    await sendAndRecordReply({
      to: message.from,
      body: imageFollowUp,
      sessionToken: updatedSession.token,
      currentExtracted: updatedSession.currentExtracted,
      status: "collecting",
    });
    return;
  }

  const step = await advanceReportConversation({
    userMessage: message.text,
    currentExtracted: currentExtractedWithImage,
    history: session.history,
    modelGenerate: async ({ prompt, responseSchema }) => {
      const result = await flashModel.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json",
          responseSchema,
        },
      });

      return result.response.text();
    },
  });
  const extractedWithImage: ReportConversationFields = {
    ...step.extracted,
    ...(imageUrl ? { imageUrl } : {}),
  };

  let status: "collecting" | "submitted" = "collecting";
  let complaintTicketId: string | undefined;
  let assistantReply = step.agent_reply;
  let failureReason: string | undefined;

  if (step.complete) {
    if (!imageUrl) {
      assistantReply = `${step.agent_reply}\n${buildImageRequestMessage()}`;
    } else {
      try {
        console.info("whatsapp complaint creation started", { token: session.token });
        const complaint = await createComplaintForUser({
          userEmail: session.userEmail,
          userName: session.userName,
          category: step.extracted.category,
          description: step.extracted.description,
          address: step.extracted.exactLocation || step.extracted.address,
          exactLocation: step.extracted.exactLocation || step.extracted.address,
          landmark: step.extracted.landmark,
          city: step.extracted.city,
          pincode: step.extracted.pincode,
          urgency: step.extracted.urgency,
          imageUrl,
          photoUrl: imageUrl,
          latitude: step.extracted.latitude,
          longitude: step.extracted.longitude,
        });

        complaintTicketId = complaint.ticketId;
        status = "submitted";
        assistantReply = `${step.agent_reply}\nDhanyavaad! Aapki complaint submit ho gayi hai.\nTrack ID: ${complaint.ticketId}\nIsse app ke Track page par dekh sakte hain.`;
        console.info("whatsapp complaint creation completed", {
          token: session.token,
          ticketId: complaint.ticketId,
          imageUrl,
        });
      } catch (error) {
        failureReason = error instanceof Error ? error.message : "Complaint creation failed.";
        console.error("whatsapp complaint creation error:", error);
        assistantReply =
          error instanceof Error
            ? `Details mil gayi thi, lekin complaint save nahi ho saki: ${error.message}`
            : "Details mil gayi thi, lekin complaint save nahi ho saki. Kripya dobara koshish karein.";
      }
    }
  }

  const replyAt = new Date().toISOString();
  const nextHistory = [
    ...session.history,
    { role: "user" as const, content: message.text, at: receivedAt },
    { role: "assistant" as const, content: assistantReply, at: replyAt },
  ];

  await saveWhatsAppSessionProgress({
    token: session.token,
    currentExtracted: extractedWithImage,
    history: nextHistory,
    status,
    complaintTicketId,
  });

  await sendAndRecordReply({
    to: message.from,
    body: assistantReply,
    sessionToken: session.token,
    currentExtracted: extractedWithImage,
    status: failureReason ? "failed" : status,
    complaintTicketId,
    failureReason,
  });
}
