export { sendWhatsAppTextMessage } from "@/lib/server/whatsapp/client";
export {
  getWhatsAppConfig,
  isWhatsAppConfigured,
  normalizePhoneNumber,
} from "@/lib/server/whatsapp/config";
export {
  appendWhatsAppReportMessages,
  upsertWhatsAppReportForSession,
} from "@/lib/server/whatsapp/reports";
export { downloadAndStoreWhatsAppImage } from "@/lib/server/whatsapp/media";
export { processIncomingWhatsAppMessage } from "@/lib/server/whatsapp/processor";
export {
  buildWhatsAppLaunchLink,
  buildWhatsAppStartMessage,
  claimPendingWhatsAppSessionByStartMessage,
  claimWhatsAppSessionByToken,
  createWhatsAppComplaintSession,
  extractWhatsAppSessionToken,
  getActiveWhatsAppSessionByPhone,
  getLatestWhatsAppSessionByPhone,
  isCleanWhatsAppStartMessage,
  saveWhatsAppSessionProgress,
} from "@/lib/server/whatsapp/sessions";
export {
  parseInboundWhatsAppMessages,
  verifyMetaWebhookSignature,
  verifyWhatsAppWebhookChallenge,
} from "@/lib/server/whatsapp/webhook";
export type { ParsedInboundWhatsAppMessage } from "@/lib/server/whatsapp/webhook";
