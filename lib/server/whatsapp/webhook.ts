import crypto from "node:crypto";
import type { NextRequest } from "next/server";
import { getWhatsAppConfig, normalizePhoneNumber } from "@/lib/server/whatsapp/config";

export type ParsedInboundWhatsAppMessage = {
  from: string;
  type: "text" | "image";
  text: string;
  messageId?: string;
  profileName?: string;
  timestamp?: string;
  mediaId?: string;
  mimeType?: string;
  sha256?: string;
};

export type WebhookVerificationResult =
  | { ok: true; challenge: string }
  | { ok: false; reason: string };

export function verifyWhatsAppWebhookChallenge(req: NextRequest): WebhookVerificationResult {
  const verifyToken = getWhatsAppConfig().verifyToken;
  const mode = req.nextUrl.searchParams.get("hub.mode");
  const token = req.nextUrl.searchParams.get("hub.verify_token");
  const challenge = req.nextUrl.searchParams.get("hub.challenge");

  if (mode === "subscribe" && verifyToken && token === verifyToken && challenge) {
    return { ok: true, challenge };
  }

  return { ok: false, reason: "Webhook verification failed." };
}

export function verifyMetaWebhookSignature(rawBody: string, signatureHeader: string | null) {
  const { appSecret } = getWhatsAppConfig();

  if (!appSecret) {
    return true;
  }

  if (!signatureHeader?.startsWith("sha256=")) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac("sha256", appSecret)
    .update(rawBody, "utf8")
    .digest("hex");
  const actualSignature = signatureHeader.slice("sha256=".length);
  const expected = Buffer.from(expectedSignature, "hex");
  const actual = Buffer.from(actualSignature, "hex");

  // Meta signs webhook bodies with the app secret. timingSafeEqual avoids leaking
  // partial signature matches when this route is exposed publicly in production.
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

export function parseInboundWhatsAppMessages(payload: unknown): ParsedInboundWhatsAppMessage[] {
  const root = payload as any;

  if (root?.object !== "whatsapp_business_account") {
    return [];
  }

  const messages: ParsedInboundWhatsAppMessage[] = [];

  for (const entry of Array.isArray(root?.entry) ? root.entry : []) {
    for (const change of Array.isArray(entry?.changes) ? entry.changes : []) {
      const value = change?.value;
      const contacts = Array.isArray(value?.contacts) ? value.contacts : [];
      const messagesList = Array.isArray(value?.messages) ? value.messages : [];
      const nameByPhone = new Map<string, string>();

      for (const contact of contacts) {
        const waId = normalizePhoneNumber(String(contact?.wa_id ?? ""));
        const profileName = String(contact?.profile?.name ?? "").trim();

        if (waId && profileName) {
          nameByPhone.set(waId, profileName);
        }
      }

      for (const message of messagesList) {
        if (message?.type !== "text" && message?.type !== "image") {
          continue;
        }

        const from = normalizePhoneNumber(String(message?.from ?? ""));
        const text =
          message?.type === "text" && typeof message?.text?.body === "string"
            ? message.text.body.trim()
            : typeof message?.image?.caption === "string"
              ? message.image.caption.trim()
              : "";

        if (!from) {
          continue;
        }

        messages.push({
          from,
          type: message.type,
          text,
          messageId: typeof message?.id === "string" ? message.id : undefined,
          profileName: nameByPhone.get(from),
          timestamp: typeof message?.timestamp === "string" ? message.timestamp : undefined,
          mediaId: typeof message?.image?.id === "string" ? message.image.id : undefined,
          mimeType:
            typeof message?.image?.mime_type === "string" ? message.image.mime_type : undefined,
          sha256: typeof message?.image?.sha256 === "string" ? message.image.sha256 : undefined,
        });
      }
    }
  }

  return messages;
}
