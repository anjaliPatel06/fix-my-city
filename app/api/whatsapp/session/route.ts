import { NextRequest, NextResponse } from "next/server";
import { normalizeEmail } from "@/lib/server/auth";
import {
  buildWhatsAppLaunchLink,
  createWhatsAppComplaintSession,
  isWhatsAppConfigured,
} from "@/lib/server/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userEmail = normalizeEmail(String(body?.userEmail ?? ""));
    const userName = String(body?.userName ?? "").trim();

    if (!userEmail || !userName) {
      return NextResponse.json(
        { success: false, error: "Missing user details for WhatsApp launch." },
        { status: 400 },
      );
    }

    if (!isWhatsAppConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "WhatsApp integration is not configured yet. Please add the WhatsApp Cloud API environment variables first.",
        },
        { status: 503 },
      );
    }

    const session = await createWhatsAppComplaintSession({ userEmail, userName });
    const launchLink = buildWhatsAppLaunchLink(session.token);

    if (!launchLink) {
      return NextResponse.json(
        { success: false, error: "WhatsApp business number is missing." },
        { status: 503 },
      );
    }

    return NextResponse.json({
      success: true,
      token: session.token,
      expiresAt: session.expiresAt,
      launchLink,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to start the WhatsApp complaint flow.",
      },
      { status: 400 },
    );
  }
}
