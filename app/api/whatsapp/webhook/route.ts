import { NextRequest, NextResponse } from "next/server";
import {
  isWhatsAppConfigured,
  parseInboundWhatsAppMessages,
  processIncomingWhatsAppMessage,
  sendWhatsAppTextMessage,
  verifyMetaWebhookSignature,
  verifyWhatsAppWebhookChallenge,
} from "@/lib/server/whatsapp";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const verification = verifyWhatsAppWebhookChallenge(req);

  if (verification.ok) {
    return new NextResponse(verification.challenge, { status: 200 });
  }

  return NextResponse.json(
    { success: false, error: verification.reason },
    { status: 403 },
  );
}

export async function POST(req: NextRequest) {
  if (!isWhatsAppConfigured()) {
    return NextResponse.json(
      { success: false, error: "WhatsApp integration is not configured." },
      { status: 503 },
    );
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-hub-signature-256");

    // In production, set META_APP_SECRET so requests are accepted only when
    // signed by Meta. Local ngrok tests can omit it while the app is being wired.
    if (!verifyMetaWebhookSignature(rawBody, signature)) {
      return NextResponse.json(
        { success: false, error: "Invalid Meta webhook signature." },
        { status: 401 },
      );
    }

    const payload = JSON.parse(rawBody);
    const inboundMessages = parseInboundWhatsAppMessages(payload);

    for (const message of inboundMessages) {
      try {
        await processIncomingWhatsAppMessage(message);
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
