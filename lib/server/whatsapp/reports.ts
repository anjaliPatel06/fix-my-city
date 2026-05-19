import crypto from "node:crypto";
import type {
  ReportConversationFields,
  WhatsAppMessageRecord,
  WhatsAppReportStatus,
  WhatsAppSession,
} from "@/lib/types";
import { updateDatabase } from "@/lib/server/database";
import { normalizeReportConversationFields } from "@/lib/server/report-agent";
import { normalizePhoneNumber } from "@/lib/server/whatsapp/config";

function createWhatsAppReportId() {
  return `WA-${crypto.randomBytes(8).toString("hex").toUpperCase()}`;
}

export async function upsertWhatsAppReportForSession({
  session,
  phoneNumber,
  profileName,
  status = "collecting",
}: {
  session: WhatsAppSession;
  phoneNumber: string;
  profileName?: string;
  status?: WhatsAppReportStatus;
}) {
  const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

  return updateDatabase((database) => {
    const now = new Date().toISOString();
    let report = database.whatsappReports.find(
      (entry) => entry.sessionToken === session.token,
    );

    if (!report) {
      report = {
        id: createWhatsAppReportId(),
        sessionToken: session.token,
        phoneNumber: normalizedPhoneNumber,
        profileName,
        userEmail: session.userEmail,
        userName: session.userName,
        status,
        currentExtracted: normalizeReportConversationFields(session.currentExtracted),
        messages: [],
        createdAt: now,
        updatedAt: now,
      };
      database.whatsappReports.unshift(report);
      return report;
    }

    report.phoneNumber = normalizedPhoneNumber;
    report.profileName = profileName || report.profileName;
    report.userName = session.userName || report.userName;
    report.status = status;
    report.currentExtracted = normalizeReportConversationFields(session.currentExtracted);
    report.updatedAt = now;
    return report;
  });
}

export async function appendWhatsAppReportMessages({
  sessionToken,
  messages,
  currentExtracted,
  status,
  complaintTicketId,
  failureReason,
  imageUrl,
  mediaId,
  mediaDownloadError,
}: {
  sessionToken: string;
  messages: WhatsAppMessageRecord[];
  currentExtracted?: ReportConversationFields;
  status?: WhatsAppReportStatus;
  complaintTicketId?: string;
  failureReason?: string;
  imageUrl?: string;
  mediaId?: string;
  mediaDownloadError?: string;
}) {
  return updateDatabase((database) => {
    const report = database.whatsappReports.find(
      (entry) => entry.sessionToken === sessionToken,
    );

    if (!report) {
      throw new Error("WhatsApp report record not found.");
    }

    report.messages.push(...messages);

    if (currentExtracted) {
      report.currentExtracted = normalizeReportConversationFields(currentExtracted);
    }

    if (status) {
      report.status = status;
    }

    if (complaintTicketId) {
      report.complaintTicketId = complaintTicketId;
    }

    if (failureReason) {
      report.failureReason = failureReason;
    }

    if (imageUrl) {
      report.imageUrl = imageUrl;
    }

    if (mediaId) {
      report.mediaId = mediaId;
    }

    if (mediaDownloadError) {
      report.mediaDownloadError = mediaDownloadError;
    }

    report.updatedAt = new Date().toISOString();
    return report;
  });
}
