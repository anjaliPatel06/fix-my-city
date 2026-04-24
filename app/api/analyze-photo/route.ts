import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";

const SYSTEM_PROMPT = `You are a civic issue analyzer. Look at the image provided and extract details about the civic problem shown.
Return ONLY valid JSON (no markdown tags like \`\`\`json).
Format:
{
  "category": "e.g., Pothole, Garbage, Stray Animals, Broken Streetlight, etc. If unknown or not a civic issue, write 'Unknown'",
  "description": "A brief 2-3 sentence description of the problem seen in the image.",
  "urgency": "High", // High, Medium, or Low based on danger or impact
  "address": "If any landmarks, street signs, or shop names are visible, extract them. Otherwise write 'Extracting...'",
  "city": "If discernible from signs, else 'Extracting...'",
  "pincode": "If discernible, else 'Extracting...'"
}
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64 } = body;

    if (!imageBase64) {
      return NextResponse.json({ success: false, error: "No image provided" }, { status: 400 });
    }

    // Pass the image to Gemini
    const result = await flashModel.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: SYSTEM_PROMPT },
            {
              inlineData: {
                data: imageBase64.split(",")[1], // Remove the data:image/jpeg;base64, part
                mimeType: imageBase64.substring(imageBase64.indexOf(":") + 1, imageBase64.indexOf(";"))
              }
            }
          ]
        }
      ],
      generationConfig: { responseMimeType: "application/json" }
    });

    const text = result.response.text().trim();
    const startIndex = text.indexOf("{");
    const endIndex = text.lastIndexOf("}");
    
    if (startIndex === -1 || endIndex === -1) {
      return NextResponse.json({ success: false, error: "Invalid format returned" }, { status: 500 });
    }

    const clean = text.substring(startIndex, endIndex + 1);
    const parsed = JSON.parse(clean);

    return NextResponse.json({ success: true, data: parsed });
  } catch (err: any) {
    console.error("Photo analysis error:", err?.message || err);
    return NextResponse.json({ success: false, error: err?.message || "Failed to analyze photo" }, { status: 500 });
  }
}
