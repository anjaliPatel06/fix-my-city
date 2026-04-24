import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";

const SYSTEM_PROMPT = `You are a virtual civic officer for FixMyCity India.
Language: Respond ONLY in simple Hindi/Hinglish. NEVER reply in English. Keep it natural like a real phone call.

You must collect these 5 things:
1. Category of issue (e.g., Garbage, Pothole)
2. Description
3. Address
4. City
5. Pincode

CRITICAL RULES:
- Ask exactly ONE question at a time. Never ask multiple questions in a single reply.
- If the user says "garbage problem", IMMEDIATELY save "Garbage" in Category and "Garbage problem" in Description, and then ask "Yeh kis city mein hai?"
- Keep asking until all 5 details are populated.
- Set complete to true ONLY when all 5 are 100% known.

OUTPUT FORMAT (Valid JSON only):
{
  "agent_reply": "<Your Hinglish reply, e.g., 'Achha, yeh samasya kis city mein hai?'>",
  "extracted": {
    "category": "<extracted or 'Extracting...'>",
    "description": "<extracted or 'Extracting...'>",
    "address": "<extracted or 'Extracting...'>",
    "city": "<extracted or 'Extracting...'>",
    "pincode": "<extracted or 'Extracting...'>",
    "urgency": "<High/Medium/Low>"
  },
  "complete": false
}`;

export async function POST(req: NextRequest) {
  try {
    const { history, userMessage } = await req.json();

    // Build conversation as text for Gemini
    const historyText = (history || [])
      .map((h: any) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}

${historyText ? "Conversation so far:\n" + historyText + "\n" : ""}User: ${userMessage}`;

    const result = await flashModel.generateContent(prompt);
    const text = result.response.text().trim();

    // The result should already be JSON because we forced the MimeType
    // But just in case, strip markdown
    const startIndex = text.indexOf("{");
    const endIndex = text.lastIndexOf("}");
    if (startIndex === -1 || endIndex === -1) {
      return NextResponse.json({ success: false, error: "Invalid JSON format returned" }, { status: 500 });
    }

    const clean = text.substring(startIndex, endIndex + 1);
    const parsed = JSON.parse(clean);

    return NextResponse.json({ success: true, data: parsed });
  } catch (err: any) {
    console.error("voice-agent error details:", err?.message || err);
    return NextResponse.json({ success: false, error: err?.message || "Voice agent failed" }, { status: 500 });
  }
}