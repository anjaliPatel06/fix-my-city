import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: "Text extraction endpoint is not implemented in this build.",
    },
    { status: 501 },
  )
}
