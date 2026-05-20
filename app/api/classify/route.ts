import { NextRequest, NextResponse } from "next/server";
import { predictDepartmentFromInputs } from "@/lib/server/department-classifier";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const description = String(body?.description ?? "").trim();
    const imageBase64 =
      typeof body?.imageBase64 === "string" ? body.imageBase64 : undefined;

    if (!description) {
      return NextResponse.json(
        { success: false, error: "Description is required for classification." },
        { status: 400 },
      );
    }

    const departmentPrediction = await predictDepartmentFromInputs({
      description,
      imageBase64,
    });

    return NextResponse.json({
      success: true,
      data: departmentPrediction,
    });
  } catch (error) {
    console.error("classify error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Department classification failed.",
      },
      { status: 500 },
    );
  }
}
