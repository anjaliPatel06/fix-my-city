import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";
import {
  advanceReportConversation,
  buildInitialReportQuestion,
  buildNextQuestion,
} from "@/lib/server/report-agent";
import { createComplaintForUser } from "@/lib/server/reports";
import {
  claimWhatsAppSessionByToken,
  extractWhatsAppSessionToken,
  getActiveWhatsAppSessionByPhone,
  isWhatsAppConfigured,
  parseInboundWhatsAppMessages,
  saveWhatsAppSessionProgress,
  sendWhatsAppTextMessage,
} from "@/lib/server/whatsapp";

export const runtime = "nodejs";

const UNLINKED_SESSION_MESSAGE =
  "Fix My City par WhatsApp complaint start karne ke liye pehle app ke Report section se WhatsApp option open karein.";

export async function GET(req: NextRequest) {
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN?.trim();
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && verifyToken && token === verifyToken && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json(
    { success: false, error: "Webhook verification failed." },
    { status: 403 },
  );
}

async function replyToLinkedSession(message: {
  from: string;
  text: string;
  profileName?: string;
}) {
  const token = extractWhatsAppSessionToken(message.text);

  if (token) {
    const session = await claimWhatsAppSessionByToken({
      token,
      phoneNumber: message.from,
      profileName: message.profileName,
    });

    const introMessage =
      session.history.length > 0
        ? buildNextQuestion(session.currentExtracted)
        : buildInitialReportQuestion(session.userName);
    const now = new Date().toISOString();
    const history =
      session.history.length > 0
        ? session.history
        : [{ role: "assistant" as const, content: introMessage, at: now }];

    await saveWhatsAppSessionProgress({
      token: session.token,
      currentExtracted: session.currentExtracted,
      history,
      status: "collecting",
    });

    await sendWhatsAppTextMessage(message.from, introMessage);
    return;
  }

  const session = await getActiveWhatsAppSessionByPhone(message.from);

  if (!session) {
    await sendWhatsAppTextMessage(message.from, UNLINKED_SESSION_MESSAGE);
    return;
  }

  const step = await advanceReportConversation({
    userMessage: message.text,
    currentExtracted: session.currentExtracted,
    history: session.history,
    modelGenerate: async ({ prompt, responseSchema }) => {
      const result = await flashModel.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json",
          responseSchema,
        },
      });

      return result.response.text();
    },
  });

  let status: "collecting" | "submitted" = "collecting";
  let complaintTicketId: string | undefined;
  let assistantReply = step.agent_reply;

  if (step.complete) {
    try {
      const complaint = await createComplaintForUser({
        userEmail: session.userEmail,
        userName: session.userName,
        category: step.extracted.category,
        description: step.extracted.description,
        address: step.extracted.address,
        city: step.extracted.city,
        pincode: step.extracted.pincode,
        urgency: step.extracted.urgency,
      });

      complaintTicketId = complaint.ticketId;
      status = "submitted";
      assistantReply = `${step.agent_reply}\nAapki complaint submit ho gayi hai. Ticket ID: ${complaint.ticketId}. Isse app ke Track page par dekh sakte hain.`;
    } catch (error) {
      assistantReply =
        error instanceof Error
          ? `Details mil gayi thi, lekin complaint save nahi ho saki: ${error.message}`
          : "Details mil gayi thi, lekin complaint save nahi ho saki. Kripya dobara koshish karein.";
    }
  }

  const now = new Date().toISOString();
  const nextHistory = [
    ...session.history,
    { role: "user" as const, content: message.text, at: now },
    { role: "assistant" as const, content: assistantReply, at: now },
  ];

  await saveWhatsAppSessionProgress({
    token: session.token,
    currentExtracted: step.extracted,
    history: nextHistory,
    status,
    complaintTicketId,
  });

  await sendWhatsAppTextMessage(message.from, assistantReply);
}

export async function POST(req: NextRequest) {
  if (!isWhatsAppConfigured()) {
    return NextResponse.json(
      { success: false, error: "WhatsApp integration is not configured." },
      { status: 503 },
    );
  }

  try {
    const payload = await req.json();
    const inboundMessages = parseInboundWhatsAppMessages(payload);

    for (const message of inboundMessages) {
      try {
        await replyToLinkedSession(message);
      } catch (error) {
        console.error("whatsapp webhook message error:", error);

        try {
          await sendWhatsAppTextMessage(
            message.from,
            "Maaf kijiye, complaint process karte waqt issue aa gaya. Kripya dobara koshish karein.",
          );
        } catch (replyError) {
          console.error("whatsapp webhook fallback reply error:", replyError);
        }
      }
    }

    return NextResponse.json({ success: true, received: inboundMessages.length });
  } catch (error) {
    console.error("whatsapp webhook error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process WhatsApp webhook." },
      { status: 500 },
    );
  }
}
