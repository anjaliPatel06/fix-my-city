import { SchemaType, type Schema } from "@google/generative-ai";
import type { ReportConversationFields } from "@/lib/types";

export type ReportConversationResponse = {
  agent_reply: string;
  extracted: ReportConversationFields;
  complete: boolean;
};

export type ReportConversationHistoryEntry = {
  role?: string;
  content?: string;
};

type RequestedField =
  | "category"
  | "description"
  | "city"
  | "address"
  | "pincode"
  | "urgency";

type ModelGenerator = (input: {
  prompt: string;
  responseSchema: Schema;
}) => Promise<string>;

export const UNKNOWN_REPORT_VALUE = "Extracting...";

export const REPORT_RESPONSE_SCHEMA: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    agent_reply: { type: SchemaType.STRING },
    extracted: {
      type: SchemaType.OBJECT,
      properties: {
        category: { type: SchemaType.STRING },
        description: { type: SchemaType.STRING },
        address: { type: SchemaType.STRING },
        city: { type: SchemaType.STRING },
        pincode: { type: SchemaType.STRING },
        urgency: {
          type: SchemaType.STRING,
          format: "enum",
          enum: ["High", "Medium", "Low"],
        },
      },
      required: ["category", "description", "address", "city", "pincode", "urgency"],
    },
    complete: { type: SchemaType.BOOLEAN },
  },
  required: ["agent_reply", "extracted", "complete"],
};

const SYSTEM_PROMPT = `You are a Fix My City AI civic call assistant for India.
Respond only in simple Hindi or Hinglish, like a natural phone call.

Your job is to help the citizen report a civic issue and collect these fields:
1. category
2. description
3. city
4. address
5. pincode
6. urgency

Strict rules:
- Ask only ONE follow-up question at a time.
- Use the current extracted fields as the source of truth. Never erase already known fields.
- Update fields only when the user's latest message gives new information.
- If the user gives an issue type like garbage, pothole, streetlight, water leakage, etc., fill category immediately.
- If the user describes the problem in a sentence, use that sentence as description.
- If all required fields are known, set complete to true and reply with a short confirmation in Hinglish.
- Return valid JSON only. No markdown, no explanation outside JSON.
- If a field is still unknown, set it to "Extracting...".`;

function isKnownValue(value: unknown) {
  if (typeof value !== "string") return false;

  const normalized = value.trim().toLowerCase();
  return (
    normalized !== "" &&
    normalized !== "extracting..." &&
    normalized !== "listening..." &&
    normalized !== "..." &&
    normalized !== "unknown" &&
    normalized !== "n/a" &&
    normalized !== "na"
  );
}

function normalizeUrgency(value: unknown): ReportConversationFields["urgency"] {
  if (typeof value !== "string") return "Medium";

  const normalized = value.trim().toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "low") return "Low";
  return "Medium";
}

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function isFillerReply(value: string) {
  const normalized = value.trim().toLowerCase();
  return [
    "haan",
    "han",
    "ha",
    "yes",
    "ok",
    "okay",
    "theek hai",
    "thik hai",
    "hmm",
    "hmmm",
    "hello",
    "hi",
    "namaste",
    "nahi",
    "nahin",
    "no",
  ].includes(normalized);
}

function normalizeCityCandidate(value?: string) {
  if (!value) return undefined;

  const cleaned = titleCase(
    value
      .replace(/\b(?:hai|is|mein|me|mai|ka|ki|ke)\b/gi, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );

  if (!cleaned || isFillerReply(cleaned)) return undefined;
  return cleaned;
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

function digitWordToNumber(word: string) {
  const normalized = word.toLowerCase();

  const mapping: Record<string, string> = {
    zero: "0",
    oh: "0",
    o: "0",
    one: "1",
    two: "2",
    to: "2",
    too: "2",
    three: "3",
    four: "4",
    for: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    ate: "8",
    nine: "9",
    shunya: "0",
    sunya: "0",
    ek: "1",
    do: "2",
    teen: "3",
    tin: "3",
    char: "4",
    chaar: "4",
    chara: "4",
    panch: "5",
    paanch: "5",
    cheh: "6",
    chhe: "6",
    chhah: "6",
    saat: "7",
    sat: "7",
    aath: "8",
    aat: "8",
    nau: "9",
    zeroo: "0",
  };

  return mapping[normalized];
}

export function normalizeReportConversationFields(
  input?: Partial<ReportConversationFields> | null,
): ReportConversationFields {
  return {
    category: isKnownValue(input?.category)
      ? String(input?.category).trim()
      : UNKNOWN_REPORT_VALUE,
    description: isKnownValue(input?.description)
      ? String(input?.description).trim()
      : UNKNOWN_REPORT_VALUE,
    address: isKnownValue(input?.address)
      ? String(input?.address).trim()
      : UNKNOWN_REPORT_VALUE,
    city: isKnownValue(input?.city) ? String(input?.city).trim() : UNKNOWN_REPORT_VALUE,
    pincode: isKnownValue(input?.pincode)
      ? String(input?.pincode).trim()
      : UNKNOWN_REPORT_VALUE,
    urgency: normalizeUrgency(input?.urgency),
  };
}

function mergeFields(
  baseFields: ReportConversationFields,
  incomingFields?: Partial<ReportConversationFields> | null,
) {
  const normalizedIncoming = normalizeReportConversationFields(incomingFields);
  const nextUrgency =
    typeof incomingFields?.urgency === "string"
      ? normalizeUrgency(incomingFields.urgency)
      : baseFields.urgency;

  return {
    category: isKnownValue(normalizedIncoming.category)
      ? normalizedIncoming.category
      : baseFields.category,
    description: isKnownValue(normalizedIncoming.description)
      ? normalizedIncoming.description
      : baseFields.description,
    address: isKnownValue(normalizedIncoming.address)
      ? normalizedIncoming.address
      : baseFields.address,
    city: isKnownValue(normalizedIncoming.city)
      ? normalizedIncoming.city
      : baseFields.city,
    pincode: isKnownValue(normalizedIncoming.pincode)
      ? normalizedIncoming.pincode
      : baseFields.pincode,
    urgency: nextUrgency,
  } satisfies ReportConversationFields;
}

function parseJsonResponse(text: string) {
  const trimmed = text.trim().replace(/```json|```/gi, "").trim();
  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("Model did not return JSON.");
  }

  return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1));
}

function detectCategory(message: string) {
  const text = message.toLowerCase();

  const categoryMatchers: Array<{ keywords: string[]; category: string }> = [
    { keywords: ["garbage", "kachra", "waste", "trash"], category: "Garbage" },
    { keywords: ["pothole", "gadda", "road damage"], category: "Pothole" },
    {
      keywords: ["streetlight", "street light", "light pole", "light kharab"],
      category: "Broken Streetlight",
    },
    {
      keywords: ["water leakage", "water leak", "paani leak", "pipeline", "sewer", "drain"],
      category: "Water Leakage",
    },
    {
      keywords: ["traffic signal", "signal", "red light"],
      category: "Traffic Signal Issue",
    },
    {
      keywords: ["dog", "stray animal", "animal"],
      category: "Stray Animals",
    },
  ];

  const matchedCategory = categoryMatchers.find(({ keywords }) =>
    keywords.some((keyword) => text.includes(keyword)),
  );

  return matchedCategory?.category;
}

function detectUrgency(message: string): ReportConversationFields["urgency"] | undefined {
  const text = message.toLowerCase();

  if (
    text.includes("urgent") ||
    text.includes("emergency") ||
    text.includes("bahut serious") ||
    text.includes("danger") ||
    text.includes("jaldi")
  ) {
    return "High";
  }

  if (text.includes("minor") || text.includes("normal")) {
    return "Low";
  }

  return undefined;
}

function detectPincode(message: string) {
  const normalizedMessage = normalizeDigits(message);
  const directMatch = normalizedMessage.match(/\b\d{6}\b/)?.[0];
  if (directMatch) return directMatch;

  const compactDigits = normalizedMessage.replace(/\D/g, "");
  if (compactDigits.length === 6) {
    return compactDigits;
  }

  const tokens = normalizedMessage
    .toLowerCase()
    .split(/[\s,.-]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  const spokenDigits = tokens
    .map((token) => digitWordToNumber(token))
    .filter((token): token is string => Boolean(token))
    .join("");

  if (spokenDigits.length === 6) {
    return spokenDigits;
  }

  return undefined;
}

function detectCity(message: string) {
  const trimmed = message.trim();
  if (!trimmed || isFillerReply(trimmed)) return undefined;

  const explicitMatch = trimmed.match(
    /(?:city|shehar|shahar)\s*(?:hai|is|=|:)?\s*([a-zA-Z][a-zA-Z\s]{1,40})/i,
  );

  if (explicitMatch?.[1]) {
    return normalizeCityCandidate(explicitMatch[1]);
  }

  const possessiveMatch = trimmed.match(
    /^([a-zA-Z][a-zA-Z\s]{1,20})\s+ke\s+(?:area|road|street|sector|colony|nagar|gali|chowk)/i,
  );
  if (possessiveMatch?.[1]) {
    return normalizeCityCandidate(possessiveMatch[1]);
  }

  const inMatch = trimmed.match(
    /\b(?:in|mein|me|mai)\s+([a-zA-Z][a-zA-Z\s]{1,30}?)(?:\s+(?:ke|ki|ka|area|road|street|sector|colony|nagar|gali|chowk|pincode)\b|[,.]|$)/i,
  );
  if (inMatch?.[1]) {
    return normalizeCityCandidate(inMatch[1]);
  }

  const cityBeforeAreaMatch = trimmed.match(
    /([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:area|road|street|sector|colony|nagar|gali|chowk).*?(?:mein|me|mai|hai)/i,
  );
  if (cityBeforeAreaMatch?.[1] && cityBeforeAreaMatch[1].trim().split(/\s+/).length <= 2) {
    return normalizeCityCandidate(cityBeforeAreaMatch[1]);
  }

  if (/^[a-zA-Z\s]{2,40}$/.test(trimmed) && trimmed.split(/\s+/).length <= 3) {
    const lower = trimmed.toLowerCase();
    const fillerWords = ["haan", "han", "yes", "okay", "ok", "nahi", "nahin"];
    const hasAddressShape = Boolean(detectAddress(trimmed));
    const hasCategoryShape = Boolean(detectCategory(trimmed));
    if (!fillerWords.includes(lower) && !hasAddressShape && !hasCategoryShape) {
      return normalizeCityCandidate(trimmed);
    }
  }

  return undefined;
}

function detectAddress(message: string) {
  const text = message.trim();
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
  ];

  if (addressHints.some((hint) => text.toLowerCase().includes(hint))) {
    return text;
  }

  return undefined;
}

function detectDescription(message: string) {
  const text = message.trim();
  if (text.length < 8) return undefined;
  if (isFillerReply(text)) return undefined;

  if (detectPincode(text)) return undefined;
  if (detectCity(text) === text && text.split(/\s+/).length <= 3) return undefined;

  return text;
}

function getNextMissingField(fields: ReportConversationFields): RequestedField | null {
  if (!isKnownValue(fields.category)) return "category";
  if (!isKnownValue(fields.description)) return "description";
  if (!isKnownValue(fields.city)) return "city";
  if (!isKnownValue(fields.address)) return "address";
  if (!/^\d{6}$/.test(fields.pincode.trim())) return "pincode";
  return null;
}

function hasFieldValue(fields: ReportConversationFields, field: RequestedField | null) {
  if (!field) return false;
  if (field === "pincode") {
    return /^\d{6}$/.test(fields.pincode.trim());
  }
  if (field === "urgency") {
    return ["High", "Medium", "Low"].includes(fields.urgency);
  }
  return isKnownValue(fields[field]);
}

function inferRequestedField(
  history: ReportConversationHistoryEntry[],
  currentFields: ReportConversationFields,
): RequestedField | null {
  const lastAssistantMessage = [...history]
    .reverse()
    .find((entry) => entry?.role === "assistant" && typeof entry?.content === "string")
    ?.content?.toLowerCase();

  if (!lastAssistantMessage) {
    return getNextMissingField(currentFields);
  }

  if (lastAssistantMessage.includes("pincode")) return "pincode";
  if (lastAssistantMessage.includes("address") || lastAssistantMessage.includes("area")) {
    return "address";
  }
  if (
    lastAssistantMessage.includes("city") ||
    lastAssistantMessage.includes("shehar") ||
    lastAssistantMessage.includes("shahar")
  ) {
    return "city";
  }
  if (
    lastAssistantMessage.includes("detail") ||
    lastAssistantMessage.includes("problem exactly") ||
    lastAssistantMessage.includes("problem kya") ||
    lastAssistantMessage.includes("description")
  ) {
    return "description";
  }
  if (
    lastAssistantMessage.includes("civic problem") ||
    lastAssistantMessage.includes("issue") ||
    lastAssistantMessage.includes("garbage") ||
    lastAssistantMessage.includes("pothole") ||
    lastAssistantMessage.includes("streetlight")
  ) {
    return "category";
  }

  return getNextMissingField(currentFields);
}

function applyContextualAnswer(
  userMessage: string,
  requestedField: RequestedField | null,
): Partial<ReportConversationFields> {
  const text = userMessage.trim();
  if (!text || isFillerReply(text) || !requestedField) {
    return {};
  }

  switch (requestedField) {
    case "category": {
      const category = detectCategory(text);
      if (category) return { category };
      if (text.split(/\s+/).length <= 5) {
        return { category: titleCase(text) };
      }
      return {};
    }
    case "description":
      return text.length >= 8 ? { description: text } : {};
    case "city": {
      const city = detectCity(text);
      if (city) return { city };

      const beforeKeMatch = text.match(/^([a-zA-Z][a-zA-Z\s]{1,20})\s+ke\b/i);
      if (beforeKeMatch?.[1] && beforeKeMatch[1].trim().split(/\s+/).length <= 2) {
        const fallbackCity = normalizeCityCandidate(beforeKeMatch[1]);
        return fallbackCity ? { city: fallbackCity } : {};
      }

      const firstWordsMatch = text.match(/^([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:mein|me|mai)\b/i);
      if (firstWordsMatch?.[1] && firstWordsMatch[1].trim().split(/\s+/).length <= 2) {
        const fallbackCity = normalizeCityCandidate(firstWordsMatch[1]);
        return fallbackCity ? { city: fallbackCity } : {};
      }

      return {};
    }
    case "address":
      return text.length >= 4 ? { address: text } : {};
    case "pincode": {
      const pincode = detectPincode(text);
      return pincode ? { pincode } : {};
    }
    case "urgency": {
      const urgency = detectUrgency(text);
      return urgency ? { urgency } : {};
    }
    default:
      return {};
  }
}

function applyHeuristics(userMessage: string, currentFields: ReportConversationFields) {
  const nextFields = { ...currentFields };

  const category = detectCategory(userMessage);
  if (!isKnownValue(nextFields.category) && category) {
    nextFields.category = category;
  }

  const pincode = detectPincode(userMessage);
  if (!isKnownValue(nextFields.pincode) && pincode) {
    nextFields.pincode = pincode;
  }

  const city = detectCity(userMessage);
  if (!isKnownValue(nextFields.city) && city) {
    nextFields.city = city;
  }

  const address = detectAddress(userMessage);
  if (!isKnownValue(nextFields.address) && address) {
    nextFields.address = address;
  }

  const description = detectDescription(userMessage);
  if (!isKnownValue(nextFields.description) && description) {
    nextFields.description = description;
  }

  const urgency = detectUrgency(userMessage);
  if (urgency) {
    nextFields.urgency = urgency;
  }

  return nextFields;
}

function areRequiredFieldsComplete(fields: ReportConversationFields) {
  return (
    isKnownValue(fields.category) &&
    isKnownValue(fields.description) &&
    isKnownValue(fields.city) &&
    isKnownValue(fields.address) &&
    /^\d{6}$/.test(fields.pincode.trim())
  );
}

export function buildNextQuestion(fields: ReportConversationFields) {
  if (!isKnownValue(fields.category)) {
    return "Kaunsi civic problem hai, jaise garbage, pothole ya streetlight issue?";
  }

  if (!isKnownValue(fields.description)) {
    return "Thoda detail mein batayein, problem exactly kya hai?";
  }

  if (!isKnownValue(fields.city)) {
    return "Yeh kis city mein hai?";
  }

  if (!isKnownValue(fields.address)) {
    return "Is jagah ka exact address ya area batayein.";
  }

  if (!/^\d{6}$/.test(fields.pincode.trim())) {
    return "Wahan ka 6 digit pincode batayein.";
  }

  return "Dhanyavaad, maine saari details note kar li hain.";
}

function buildConfirmationMessage(fields: ReportConversationFields) {
  return `Dhanyavaad. Maine note kar liya: ${fields.category}, ${fields.city}, ${fields.address}, pincode ${fields.pincode}.`;
}

function buildFallbackResponse(
  userMessage: string,
  currentFields: ReportConversationFields,
  history: ReportConversationHistoryEntry[],
): ReportConversationResponse {
  const requestedField = inferRequestedField(history, currentFields);
  const contextFields = applyContextualAnswer(userMessage, requestedField);
  const heuristicFields = applyHeuristics(userMessage, mergeFields(currentFields, contextFields));
  const complete = areRequiredFieldsComplete(heuristicFields);

  return {
    agent_reply: complete
      ? "Dhanyavaad, maine aapki complaint ki saari zaroori details note kar li hain."
      : buildNextQuestion(heuristicFields),
    extracted: heuristicFields,
    complete,
  };
}

export function buildInitialReportQuestion(name?: string) {
  const greeting = name?.trim() ? `Namaste ${name.trim()}. ` : "Namaste. ";
  return `${greeting}Fix My City par complaint register karne ke liye ${buildNextQuestion(
    normalizeReportConversationFields(),
  )}`;
}

export async function advanceReportConversation({
  userMessage,
  currentExtracted,
  history,
  modelGenerate,
}: {
  userMessage: string;
  currentExtracted?: Partial<ReportConversationFields> | null;
  history?: ReportConversationHistoryEntry[];
  modelGenerate?: ModelGenerator;
}): Promise<ReportConversationResponse> {
  const trimmedUserMessage = userMessage.trim();
  const normalizedHistory = Array.isArray(history) ? history : [];
  const normalizedCurrentExtracted = normalizeReportConversationFields(currentExtracted);

  if (!trimmedUserMessage) {
    return {
      agent_reply: "Mujhe aapki baat clear nahin mili. Kripya dobara batayein.",
      extracted: normalizedCurrentExtracted,
      complete: false,
    };
  }

  try {
    const requestedField = inferRequestedField(normalizedHistory, normalizedCurrentExtracted);
    const contextFields = applyContextualAnswer(trimmedUserMessage, requestedField);
    const contextualExtracted = mergeFields(normalizedCurrentExtracted, contextFields);
    const heuristicExtracted = applyHeuristics(trimmedUserMessage, contextualExtracted);

    if (
      requestedField &&
      !hasFieldValue(normalizedCurrentExtracted, requestedField) &&
      hasFieldValue(heuristicExtracted, requestedField)
    ) {
      const complete = areRequiredFieldsComplete(heuristicExtracted);

      return {
        agent_reply: complete
          ? buildConfirmationMessage(heuristicExtracted)
          : buildNextQuestion(heuristicExtracted),
        extracted: heuristicExtracted,
        complete,
      };
    }

    if (!modelGenerate) {
      return buildFallbackResponse(
        trimmedUserMessage,
        normalizedCurrentExtracted,
        normalizedHistory,
      );
    }

    const historyText = normalizedHistory
      .map((entry) => {
        const role = entry?.role === "user" ? "User" : "Assistant";
        return `${role}: ${entry?.content ?? ""}`;
      })
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

Current extracted fields:
${JSON.stringify(contextualExtracted, null, 2)}

Field currently being asked:
${requestedField ?? "none"}

${historyText ? `Conversation so far:\n${historyText}\n` : ""}Latest user message:
${trimmedUserMessage}`;

    const rawResponse = await modelGenerate({
      prompt,
      responseSchema: REPORT_RESPONSE_SCHEMA,
    });
    const parsed = parseJsonResponse(rawResponse);
    const modelExtracted = normalizeReportConversationFields(parsed?.extracted);
    const mergedFields = mergeFields(contextualExtracted, modelExtracted);
    const extracted = mergeFields(
      mergedFields,
      applyHeuristics(trimmedUserMessage, mergedFields),
    );
    const complete = areRequiredFieldsComplete(extracted);

    return {
      agent_reply: complete ? buildConfirmationMessage(extracted) : buildNextQuestion(extracted),
      extracted,
      complete,
    };
  } catch (error) {
    console.error("report-agent error details:", error);
    return buildFallbackResponse(
      trimmedUserMessage,
      normalizedCurrentExtracted,
      normalizedHistory,
    );
  }
}
