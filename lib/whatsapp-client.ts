export type StartWhatsAppReportInput = {
  userEmail: string;
  userName: string;
};

export type StartWhatsAppReportResult = {
  expiresAt: string;
  launchLink: string;
};

export async function startWhatsAppReportSession(
  input: StartWhatsAppReportInput,
): Promise<StartWhatsAppReportResult> {
  const response = await fetch("/api/whatsapp/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false || !result?.launchLink) {
    throw new Error(result?.error || "Unable to open the WhatsApp complaint flow.");
  }

  return {
    expiresAt: String(result.expiresAt),
    launchLink: String(result.launchLink),
  };
}
