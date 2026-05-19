import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";
import { predictDepartmentFromInputs } from "@/lib/server/department-classifier";
import {
  extractReportFieldsFromText,
  normalizeExtractedReportFields,
} from "@/lib/server/report-extraction";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are a civic issue analyzer. Look at the image provided and combine it with any user-written complaint details.
Return ONLY valid JSON (no markdown tags like \`\`\`json).
Format:
{
  "category": "e.g., Pothole, Garbage, Stray Animals, Broken Streetlight, etc. If unknown or not a civic issue, write 'Unknown'",
  "description": "A brief 2-3 sentence description of the problem seen in the image.",
  "urgency": "High", // High, Medium, or Low based on danger or impact
  "address": "Exact area, landmark, street sign, or shop name only. Never put the issue description here. Otherwise write 'Extracting...'",
  "exactLocation": "Same exact area/landmark value as address when known. Otherwise write 'Extracting...'",
  "city": "If discernible from signs, else 'Extracting...'",
  "pincode": "If discernible, else 'Extracting...'"
}

Rules:
- Use both the photo and the user's written report together.
- If the text provides location details like area, city, landmark, or pincode, prefer those over guessing from the image.
- Only return 'Extracting...' when the detail is missing in both image and text.
- If the typed description clearly names the issue, location, severity, or surroundings, use that information confidently.
`;

function cleanJsonResponse(rawText: string) {
  const trimmed = rawText.trim().replace(/```json|```/gi, "").trim();
  const startIndex = trimmed.indexOf("{");
  const endIndex = trimmed.lastIndexOf("}");

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Invalid format returned");
  }

  return JSON.parse(trimmed.substring(startIndex, endIndex + 1));
}

function normalizeExtractedValue(value: unknown, fallback = "Extracting...") {
  if (typeof value !== "string") return fallback;

  const trimmed = value.trim();
  if (!trimmed) return fallback;
  return trimmed;
}

function normalizeUrgency(value: unknown) {
  if (typeof value !== "string") return "Medium";

  const normalized = value.trim().toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "low") return "Low";
  return "Medium";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64 } = body;
    const description =
      typeof body?.description === "string" ? body.description.trim() : "";
    const existingFields =
      typeof body?.existingFields === "object" && body?.existingFields !== null
        ? body.existingFields
        : {};

    if (!imageBase64) {
      return NextResponse.json({ success: false, error: "No image provided" }, { status: 400 });
    }

    const textFallback = extractReportFieldsFromText(description, existingFields);

    const contextPrompt = `User complaint text:
${description || "No typed description provided."}

Existing extracted fields from the report flow:
${JSON.stringify(existingFields, null, 2)}

Use the complaint text, existing fields, and image together to extract the best final details.`;

    let parsed: Record<string, unknown> = {};

    try {
      const result = await flashModel.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              { text: SYSTEM_PROMPT },
              { text: contextPrompt },
              {
                inlineData: {
                  data: imageBase64.split(",")[1],
                  mimeType: imageBase64.substring(
                    imageBase64.indexOf(":") + 1,
                    imageBase64.indexOf(";"),
                  ),
                },
              },
            ],
          },
        ],
        generationConfig: { responseMimeType: "application/json" },
      });

      parsed = cleanJsonResponse(result.response.text());
    } catch (modelError) {
      console.error("Gemini photo extraction failed, using text fallback:", modelError);
    }

    const mergedData = normalizeExtractedReportFields({
      category:
        normalizeExtractedValue(parsed?.category, "Unknown") !== "Unknown"
          ? normalizeExtractedValue(parsed?.category, "Unknown")
          : textFallback.category,
      description:
        normalizeExtractedValue(parsed?.description) !== "Extracting..."
          ? normalizeExtractedValue(parsed?.description)
          : textFallback.description,
      urgency: normalizeUrgency(parsed?.urgency || textFallback.urgency),
      address:
        normalizeExtractedValue(parsed?.address) !== "Extracting..."
          ? normalizeExtractedValue(parsed?.address)
          : textFallback.address,
      city:
        normalizeExtractedValue(parsed?.city) !== "Extracting..."
          ? normalizeExtractedValue(parsed?.city)
          : textFallback.city,
      pincode:
        normalizeExtractedValue(parsed?.pincode) !== "Extracting..."
          ? normalizeExtractedValue(parsed?.pincode)
          : textFallback.pincode,
    });

    let departmentPrediction = null;

    try {
      const classifierDescription =
        description || String(mergedData?.description ?? "").trim();

      if (classifierDescription) {
        departmentPrediction = await predictDepartmentFromInputs({
          description: classifierDescription,
          imageBase64,
        });
      }
    } catch (classifierError) {
      console.error("Photo department classification error:", classifierError);
    }

    return NextResponse.json({
      success: true,
      data: {
        ...mergedData,
        exactLocation: mergedData.address,
        departmentPrediction,
      },
    });
  } catch (err: any) {
    console.error("Photo analysis error:", err?.message || err);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to analyze photo" },
      { status: 500 },
    );
  }
}
