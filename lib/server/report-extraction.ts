import { REPORT_CATEGORY_MATCHERS } from "@/lib/server/report-agent";

export type ExtractedReportFields = {
  category: string;
  description: string;
  address: string;
  city: string;
  pincode: string;
  urgency: "Low" | "Medium" | "High";
};

const UNKNOWN_VALUE = "Extracting...";

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizeDigits(value: string) {
  return value
    .replace(/[\u0966]/g, "0")
    .replace(/[\u0967]/g, "1")
    .replace(/[\u0968]/g, "2")
    .replace(/[\u0969]/g, "3")
    .replace(/[\u096A]/g, "4")
    .replace(/[\u096B]/g, "5")
    .replace(/[\u096C]/g, "6")
    .replace(/[\u096D]/g, "7")
    .replace(/[\u096E]/g, "8")
    .replace(/[\u096F]/g, "9");
}

function pickKnownString(...values: unknown[]) {
  for (const value of values) {
    if (typeof value !== "string") continue;

    const trimmed = value.trim();
    if (
      trimmed &&
      trimmed.toLowerCase() !== "unknown" &&
      trimmed.toLowerCase() !== "extracting..."
    ) {
      return trimmed;
    }
  }

  return undefined;
}

export function detectCategory(message: string) {
  const text = message.toLowerCase();

  const matchedCategory = REPORT_CATEGORY_MATCHERS.find(({ keywords }) =>
    keywords.some((keyword) => text.includes(keyword)),
  );

  return matchedCategory?.category;
}

export function detectUrgency(message: string): ExtractedReportFields["urgency"] | undefined {
  const text = message.toLowerCase();

  if (
    text.includes("urgent") ||
    text.includes("emergency") ||
    text.includes("danger") ||
    text.includes("jaldi") ||
    text.includes("serious") ||
    text.includes("accident")
  ) {
    return "High";
  }

  if (text.includes("minor") || text.includes("small") || text.includes("normal")) {
    return "Low";
  }

  return undefined;
}

export function detectPincode(message: string) {
  const normalizedMessage = normalizeDigits(message);
  const directMatch = normalizedMessage.match(/\b\d{6}\b/)?.[0];
  if (directMatch) return directMatch;

  const compactDigits = normalizedMessage.replace(/\D/g, "");
  if (compactDigits.length === 6) {
    return compactDigits;
  }

  return undefined;
}

export function detectCity(message: string) {
  const trimmed = message.trim();
  if (!trimmed) return undefined;

  const explicitMatch = trimmed.match(
    /(?:city|shehar|shahar|in)\s*(?:is|hai|=|:)?\s*([a-zA-Z][a-zA-Z\s]{1,40})/i,
  );

  if (explicitMatch?.[1]) {
    return titleCase(explicitMatch[1].trim());
  }

  const cityBeforeAreaMatch = trimmed.match(
    /([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:area|road|street|sector|colony|nagar|gali|chowk)/i,
  );
  if (cityBeforeAreaMatch?.[1] && cityBeforeAreaMatch[1].trim().split(/\s+/).length <= 2) {
    return titleCase(cityBeforeAreaMatch[1].trim());
  }

  return undefined;
}

function cleanLocationCandidate(value?: string) {
  if (!value) return undefined;

  const cleaned = titleCase(
    value
      .replace(
        /\b(?:causing|create|creating|due|because|with|especially|during|increase|risk|accidents?|traffic|congestion|hai|is|are|on|for)\b.*$/i,
        "",
      )
      .replace(/[.,;].*$/, "")
      .replace(/\s+/g, " ")
      .trim(),
  );

  return cleaned.length >= 3 ? cleaned : undefined;
}

export function detectAddress(message: string) {
  const text = message.trim();
  const landmarkMatch = text.match(
    /\b(?:near|opposite|behind|landmark|beside|next to)\s+(.{3,80})/i,
  );
  const landmark = cleanLocationCandidate(landmarkMatch?.[1]);
  if (landmark) return landmark;

  const addressHints = [
    "road",
    "street",
    "sector",
    "block",
    "colony",
    "nagar",
    "area",
    "gali",
    "chowk",
    "near",
    "opposite",
    "behind",
    "beside",
  ];

  if (
    addressHints.some((hint) => text.toLowerCase().includes(hint)) &&
    text.split(/\s+/).length <= 8
  ) {
    return text;
  }

  return undefined;
}

export function normalizeExtractedReportFields(input?: Partial<ExtractedReportFields> | null) {
  return {
    category: pickKnownString(input?.category) ?? "Unknown",
    description: pickKnownString(input?.description) ?? UNKNOWN_VALUE,
    address: pickKnownString(input?.address) ?? UNKNOWN_VALUE,
    city: pickKnownString(input?.city) ?? UNKNOWN_VALUE,
    pincode: pickKnownString(input?.pincode) ?? UNKNOWN_VALUE,
    urgency: input?.urgency === "High" || input?.urgency === "Low" ? input.urgency : "Medium",
  } satisfies ExtractedReportFields;
}

export function extractReportFieldsFromText(
  description: string,
  existingFields?: Partial<ExtractedReportFields> | null,
) {
  const text = description.trim();
  const existing = normalizeExtractedReportFields(existingFields);

  return {
    category: pickKnownString(existing.category, detectCategory(text)) ?? "Unknown",
    description: pickKnownString(text, existing.description) ?? UNKNOWN_VALUE,
    address: pickKnownString(existing.address, detectAddress(text)) ?? UNKNOWN_VALUE,
    city: pickKnownString(existing.city, detectCity(text)) ?? UNKNOWN_VALUE,
    pincode: pickKnownString(existing.pincode, detectPincode(text)) ?? UNKNOWN_VALUE,
    urgency: detectUrgency(text) ?? existing.urgency ?? "Medium",
  } satisfies ExtractedReportFields;
}
