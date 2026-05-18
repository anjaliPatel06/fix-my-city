import crypto from "node:crypto";
import type {
  ReportConversationFields,
  ReportConversationMessage,
  WhatsAppSession,
  WhatsAppSessionStatus,
} from "@/lib/types";
import { normalizeEmail } from "@/lib/server/auth";
import { readDatabase, updateDatabase } from "@/lib/server/database";
import { normalizeReportConversationFields } from "@/lib/server/report-agent";

type CreateWhatsAppSessionInput = {
  userEmail: string;
  userName: string;
};

type SaveWhatsAppSessionInput = {
  token: string;
  currentExtracted: ReportConversationFields;
  history: ReportConversationMessage[];
  status: WhatsAppSessionStatus;
  complaintTicketId?: string;
};

type ParsedInboundWhatsAppMessage = {
  from: string;
  text: string;
  messageId?: string;
  profileName?: string;
  timestamp?: string;
};

const WHATSAPP_SESSION_TTL_MS = 1000 * 60 * 60 * 2;

function normalizePhoneNumber(value: string) {
  return value.replace(/\D/g, "");
}

function createSessionToken() {
  return crypto.randomBytes(6).toString("hex").toUpperCase();
}

function getGraphVersion() {
  return process.env.WHATSAPP_GRAPH_VERSION?.trim() || "v23.0";
}

function getBusinessNumber() {
  return normalizePhoneNumber(process.env.WHATSAPP_BUSINESS_NUMBER || "");
}

export function buildWhatsAppStartMessage(token: string) {
  return `Hi, I want to report a civic issue on Fix My City.\nFMC_START ${token}`;
}

export function buildWhatsAppLaunchLink(token: string) {
  const businessNumber = getBusinessNumber();
  if (!businessNumber) return null;

  return `https://wa.me/${businessNumber}?text=${encodeURIComponent(
    buildWhatsAppStartMessage(token),
  )}`;
}

export function isWhatsAppConfigured() {
  return Boolean(
    getBusinessNumber() &&
      process.env.WHATSAPP_PHONE_NUMBER_ID?.trim() &&
      process.env.WHATSAPP_ACCESS_TOKEN?.trim() &&
      process.env.WHATSAPP_VERIFY_TOKEN?.trim(),
  );
}

function isSessionExpired(session: Pick<WhatsAppSession, "expiresAt">) {
  return Date.parse(session.expiresAt) <= Date.now();
}

function extendSessionExpiry() {
  return new Date(Date.now() + WHATSAPP_SESSION_TTL_MS).toISOString();
}

export function extractWhatsAppSessionToken(text: string) {
  const match = text.match(/\bFMC_START\s+([A-Z0-9-]+)/i);
  return match?.[1]?.toUpperCase();
}

export function parseInboundWhatsAppMessages(payload: any): ParsedInboundWhatsAppMessage[] {
  if (payload?.object !== "whatsapp_business_account") {
    return [];
  }

  const messages: ParsedInboundWhatsAppMessage[] = [];

  for (const entry of Array.isArray(payload?.entry) ? payload.entry : []) {
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
        if (message?.type !== "text") {
          continue;
        }

        const from = normalizePhoneNumber(String(message?.from ?? ""));
        const text = typeof message?.text?.body === "string" ? message.text.body.trim() : "";

        if (!from || !text) {
          continue;
        }

        messages.push({
          from,
          text,
          messageId: typeof message?.id === "string" ? message.id : undefined,
          profileName: nameByPhone.get(from),
          timestamp: typeof message?.timestamp === "string" ? message.timestamp : undefined,
        });
      }
    }
  }

  return messages;
}

export async function createWhatsAppComplaintSession({
  userEmail,
  userName,
}: CreateWhatsAppSessionInput) {
  const normalizedUserEmail = normalizeEmail(userEmail);

  return updateDatabase((database) => {
    const user = database.users.find((entry) => entry.email === normalizedUserEmail);

    if (!user) {
      throw new Error("Please sign in before starting a WhatsApp complaint.");
    }

    const now = new Date().toISOString();
    const token = createSessionToken();
    const session: WhatsAppSession = {
      token,
      userEmail: normalizedUserEmail,
      userName: userName.trim() || user.name,
      status: "pending_link",
      currentExtracted: normalizeReportConversationFields(),
      history: [],
      createdAt: now,
      updatedAt: now,
      expiresAt: extendSessionExpiry(),
    };

    database.whatsappSessions = database.whatsappSessions.filter(
      (entry) =>
        entry.status === "submitted" ||
        entry.userEmail !== normalizedUserEmail ||
        isSessionExpired(entry),
    );

    database.whatsappSessions.unshift(session);
    return session;
  });
}

export async function claimWhatsAppSessionByToken({
  token,
  phoneNumber,
  profileName,
}: {
  token: string;
  phoneNumber: string;
  profileName?: string;
}) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

  return updateDatabase((database) => {
    const session = database.whatsappSessions.find((entry) => entry.token === token);

    if (!session) {
      throw new Error("This WhatsApp complaint link is invalid. Please start again from the app.");
    }

    if (isSessionExpired(session)) {
      session.status = "expired";
      session.updatedAt = new Date().toISOString();
      throw new Error("This WhatsApp complaint link has expired. Please start again from the app.");
    }

    if (session.phoneNumber && session.phoneNumber !== normalizedPhoneNumber) {
      throw new Error("This WhatsApp complaint link is already linked to another number.");
    }

    session.phoneNumber = normalizedPhoneNumber;
    session.status = "collecting";
    session.updatedAt = new Date().toISOString();
    session.expiresAt = extendSessionExpiry();

    if (profileName?.trim()) {
      session.userName = session.userName || profileName.trim();
    }

    return session;
  });
}

export async function getActiveWhatsAppSessionByPhone(phoneNumber: string) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
  const database = await readDatabase();

  return database.whatsappSessions.find(
    (entry) =>
      entry.phoneNumber === normalizedPhoneNumber &&
      entry.status !== "submitted" &&
      entry.status !== "expired" &&
      !isSessionExpired(entry),
  );
}

export async function saveWhatsAppSessionProgress({
  token,
  currentExtracted,
  history,
  status,
  complaintTicketId,
}: SaveWhatsAppSessionInput) {
  return updateDatabase((database) => {
    const session = database.whatsappSessions.find((entry) => entry.token === token);

    if (!session) {
      throw new Error("WhatsApp session not found.");
    }

    session.currentExtracted = normalizeReportConversationFields(currentExtracted);
    session.history = history;
    session.status = status;
    session.updatedAt = new Date().toISOString();
    session.expiresAt = extendSessionExpiry();

    if (complaintTicketId) {
      session.complaintTicketId = complaintTicketId;
    }

    return session;
  });
}

export async function sendWhatsAppTextMessage(to: string, body: string) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN?.trim();

  if (!phoneNumberId || !accessToken) {
    throw new Error("WhatsApp Cloud API credentials are missing.");
  }

  const response = await fetch(
    `https://graph.facebook.com/${getGraphVersion()}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

  return data;
}
