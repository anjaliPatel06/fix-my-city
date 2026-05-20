import { getWhatsAppConfig, normalizePhoneNumber } from "@/lib/server/whatsapp/config";

export type WhatsAppSendTextResult = {
  messaging_product?: string;
  contacts?: Array<{ input?: string; wa_id?: string }>;
  messages?: Array<{ id?: string; message_status?: string }>;
};

export async function sendWhatsAppTextMessage(to: string, body: string) {
  const config = getWhatsAppConfig();

  if (!config.phoneNumberId || !config.accessToken) {
    throw new Error("WhatsApp Cloud API credentials are missing.");
  }

  const response = await fetch(
    `https://graph.facebook.com/${config.graphVersion}/${config.phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: normalizePhoneNumber(to),
        type: "text",
        text: {
          preview_url: false,
          body,
        },
      }),
    },
  );

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.error?.message || "Failed to send WhatsApp reply through the Cloud API.",
    );
  }

  return data as WhatsAppSendTextResult;
}
