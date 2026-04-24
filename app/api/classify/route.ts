import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { description, imageBase64, mediaType } = await req.json();

    const parts: any[] = [];

    if (imageBase64) {
      parts.push({
        inlineData: {
          mimeType: mediaType || "image/jpeg",
          data: imageBase64,
        },
      });
    }

    parts.push({
      text: `User description: "${description}"

Return ONLY valid JSON (no markdown, no extra text):
{
  "category": "",
  "department": "",
  "address": "",
  "city": "",
  "pincode": "",
  "description": "",
  "urgency": "high | medium | low",
  "confidence": 0.0
}

Rules:
- Pothole/Road → Public Works Department (PWD)
- Garbage/Waste → Sanitation / Municipal Corporation
- Broken Streetlight → Electricity Department
- Water Leak/Flooding → Water Board
- Encroachment → Town Planning Department
- Other → General Complaints Cell`,
    });

    const result = await flashModel.generateContent(parts);
    const text = result.response.text().trim();

    // Remove markdown fences if present
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return NextResponse.json({ success: true, data: parsed });
  } catch (err) {
    console.error("classify error:", err);
    return NextResponse.json({ success: false, error: "Classification failed" }, { status: 500 });
  }
}