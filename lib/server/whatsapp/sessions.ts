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
import {
  getWhatsAppConfig,
  normalizePhoneNumber,
} from "@/lib/server/whatsapp/config";

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

const WHATSAPP_SESSION_TTL_MS = 1000 * 60 * 60 * 2;
const WHATSAPP_START_MESSAGE = "Hi, I want to report a civic issue on Fix My City.";

function createSessionToken() {
  return crypto.randomBytes(6).toString("hex").toUpperCase();
}

function isSessionExpired(session: Pick<WhatsAppSession, "expiresAt">) {
  return Date.parse(session.expiresAt) <= Date.now();
}

function extendSessionExpiry() {
  return new Date(Date.now() + WHATSAPP_SESSION_TTL_MS).toISOString();
}

export function buildWhatsAppStartMessage(token: string) {
  void token;
  return WHATSAPP_START_MESSAGE;
}

export function buildWhatsAppLaunchLink(token: string) {
  const { businessNumber } = getWhatsAppConfig();
  if (!businessNumber) return null;

  return `https://wa.me/${businessNumber}?text=${encodeURIComponent(
    buildWhatsAppStartMessage(token),
  )}`;
}

export function extractWhatsAppSessionToken(text: string) {
  const match = text.match(/\bFMC_START\s+([A-Z0-9-]+)/i);
  return match?.[1]?.toUpperCase();
}

export function isCleanWhatsAppStartMessage(text: string) {
  return text.trim().toLowerCase() === WHATSAPP_START_MESSAGE.toLowerCase();
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

export async function claimPendingWhatsAppSessionByStartMessage({
  phoneNumber,
  profileName,
}: {
  phoneNumber: string;
  profileName?: string;
}) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

  return updateDatabase((database) => {
    const session = database.whatsappSessions.find(
      (entry) =>
        entry.status === "pending_link" &&
        !entry.phoneNumber &&
        !isSessionExpired(entry),
    );

    if (!session) {
      return null;
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

export async function getLatestWhatsAppSessionByPhone(phoneNumber: string) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
  const database = await readDatabase();

  return database.whatsappSessions.find(
    (entry) => entry.phoneNumber === normalizedPhoneNumber && !isSessionExpired(entry),
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
