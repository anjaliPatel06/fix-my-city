import { NextRequest, NextResponse } from "next/server";
import { flashModel } from "@/lib/gemini";
import { advanceReportConversation } from "@/lib/server/report-agent";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const history = Array.isArray(body?.history) ? body.history : [];
  const userMessage =
    typeof body?.userMessage === "string" ? body.userMessage.trim() : "";

  const data = await advanceReportConversation({
    userMessage,
    currentExtracted: body?.currentExtracted,
    history,
    modelGenerate: async ({ prompt, responseSchema }) => {
      const result = await flashModel.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json",
          responseSchema,
        },
      });

      return result.response.text();
    },
  });

  return NextResponse.json({
    success: true,
    data,
  });
}
