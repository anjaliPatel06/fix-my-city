import { NextRequest, NextResponse } from "next/server";
import { readDatabase } from "@/lib/server/database";
import { normalizeEmail } from "@/lib/server/auth";
import { createComplaintForUser } from "@/lib/server/reports";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userEmail = normalizeEmail(String(body?.userEmail ?? ""));
    const userName = String(body?.userName ?? "").trim();
    const category = String(body?.category ?? "").trim();
    const description = String(body?.description ?? "").trim();
    const address = String(body?.address ?? "").trim();
    const city = String(body?.city ?? "").trim();
    const pincode = String(body?.pincode ?? "").trim();
    const urgency =
      body?.urgency === "High" || body?.urgency === "Low" ? body.urgency : "Medium";
    const photoUrl = typeof body?.photoUrl === "string" ? body.photoUrl : undefined;

    if (!userEmail || !userName || !category || !description || !address || !city || !pincode) {
      return NextResponse.json(
        { success: false, error: "Missing required complaint details." },
        { status: 400 },
      );
    }

    const complaint = await createComplaintForUser({
      userEmail,
      userName,
      category,
      description,
      address,
      city,
      pincode,
      urgency,
      photoUrl,
    });

    return NextResponse.json({
      success: true,
      ticketId: complaint.ticketId,
      report: complaint,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Report creation failed.",
      },
      { status: 400 },
    );
  }
}

export async function GET() {
  try {
    const database = await readDatabase();
    const reports = [...database.complaints].sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    );

    return NextResponse.json({ success: true, reports });
  } catch (error) {
    console.error("reports get error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load reports." },
      { status: 500 },
    );
  }
}
