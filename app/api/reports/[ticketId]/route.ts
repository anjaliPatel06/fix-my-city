import { NextRequest, NextResponse } from "next/server";
import { readDatabase } from "@/lib/server/database";
import { normalizeEmail } from "@/lib/server/auth";
import {
  addComplaintComment,
  toggleComplaintUpvote,
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

    if (body?.action === "toggle-upvote") {
      const actorId = String(body?.actorId ?? body?.userEmail ?? "").trim();

      if (!actorId) {
        return NextResponse.json(
          { success: false, error: "User identifier is required to like this issue." },
          { status: 400 },
        );
      }

      const { complaint: report, liked } = await toggleComplaintUpvote({
        ticketId: normalizedTicketId,
        actorId,
      });

      console.info("[api/reports] community like toggle", {
        ticketId: normalizedTicketId,
        actorId,
        liked,
      });

      return NextResponse.json({ success: true, report, liked });
    }

    if (body?.action === "add-comment") {
      const authorId = String(body?.authorId ?? body?.userEmail ?? "").trim();
      const authorName = String(body?.authorName ?? body?.userName ?? "").trim();
      const commentBody = String(body?.comment ?? body?.body ?? "").trim();

      if (!authorId) {
        return NextResponse.json(
          { success: false, error: "User identifier is required to comment." },
          { status: 400 },
        );
      }

      if (!commentBody) {
        return NextResponse.json(
          { success: false, error: "Comment cannot be empty." },
          { status: 400 },
        );
      }

      const { complaint: report, comment } = await addComplaintComment({
        ticketId: normalizedTicketId,
        authorId,
        authorName,
        body: commentBody,
      });

      console.info("[api/reports] community comment submitted", {
        ticketId: normalizedTicketId,
        authorId,
        commentId: comment.id,
      });

      return NextResponse.json({ success: true, report, comment });
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
