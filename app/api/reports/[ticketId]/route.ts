import { NextRequest, NextResponse } from "next/server";
import { readDatabase } from "@/lib/server/database";
import { normalizeEmail } from "@/lib/server/auth";
import {
  updateComplaintStatusForDepartmentAdmin,
  upvoteComplaint,
} from "@/lib/server/reports";
import type { ComplaintStatus } from "@/lib/types";

type RouteContext = {
  params: Promise<{
    ticketId: string;
  }>;
};

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { ticketId } = await context.params;
    const normalizedTicketId = decodeURIComponent(ticketId);
    const userEmail = normalizeEmail(req.nextUrl.searchParams.get("userEmail") ?? "");
    const role = req.nextUrl.searchParams.get("role");

    const database = await readDatabase();
    const complaint = database.complaints.find(
      (entry) => entry.ticketId === normalizedTicketId,
    );

    if (!complaint) {
      return NextResponse.json(
        { success: false, error: "Complaint not found." },
        { status: 404 },
      );
    }

    if (role !== "admin" && complaint.userEmail !== userEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "You can only track complaints filed from your own account.",
        },
        { status: 403 },
      );
    }

    return NextResponse.json({ success: true, report: complaint });
  } catch (error) {
    console.error("report get error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load complaint." },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const { ticketId } = await context.params;
    const normalizedTicketId = decodeURIComponent(ticketId);
    const body = await req.json().catch(() => ({}));

    if (body?.action === "upvote") {
      const report = await upvoteComplaint(normalizedTicketId);
      return NextResponse.json({ success: true, report });
    }

    if (body?.action === "update-status") {
      const nextStatus = String(body?.status ?? "") as ComplaintStatus;
      const adminDepartment = String(body?.adminDepartment ?? "").trim();

      if (!adminDepartment) {
        return NextResponse.json(
          { success: false, error: "Admin department is required." },
          { status: 400 },
        );
      }

      if (!["Submitted", "Assigned", "In Progress", "Resolved"].includes(nextStatus)) {
        return NextResponse.json(
          { success: false, error: "Invalid complaint status." },
          { status: 400 },
        );
      }

      const report = await updateComplaintStatusForDepartmentAdmin({
        ticketId: normalizedTicketId,
        nextStatus,
        adminDepartment,
      });

      return NextResponse.json({ success: true, report });
    }

    return NextResponse.json(
      { success: false, error: "Unsupported report action." },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update complaint.",
      },
      { status: 400 },
    );
  }
}
