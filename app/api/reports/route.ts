import { NextRequest, NextResponse } from "next/server";
import { generateTicketId } from "@/lib/ticketId";

// In-memory store (replace with DB later)
const reports: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const ticket = {
      ticketId: generateTicketId(),
      ...body,
      status: "Received",
      createdAt: new Date().toISOString(),
    };

    reports.push(ticket);

    return NextResponse.json({ success: true, ticketId: ticket.ticketId });
  } catch (err) {
    console.error("reports error:", err);
    return NextResponse.json({ success: false, error: "Report creation failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, reports });
}