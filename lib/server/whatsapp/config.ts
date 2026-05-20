function readTrimmedEnv(name: string) {
  return process.env[name]?.trim() || "";
}

export function normalizePhoneNumber(value: string) {
  return value.replace(/\D/g, "");
}

export function getWhatsAppConfig() {
  return {
    businessNumber: normalizePhoneNumber(readTrimmedEnv("WHATSAPP_BUSINESS_NUMBER")),
    phoneNumberId: readTrimmedEnv("WHATSAPP_PHONE_NUMBER_ID"),
    accessToken: readTrimmedEnv("WHATSAPP_ACCESS_TOKEN"),
    verifyToken: readTrimmedEnv("WHATSAPP_VERIFY_TOKEN"),
    graphVersion: readTrimmedEnv("WHATSAPP_GRAPH_VERSION") || "v23.0",
    appSecret: readTrimmedEnv("META_APP_SECRET"),
  };
}

export function isWhatsAppConfigured() {
  const config = getWhatsAppConfig();

  return Boolean(
    config.businessNumber &&
      config.phoneNumberId &&
      config.accessToken &&
      config.verifyToken,
  );
}
