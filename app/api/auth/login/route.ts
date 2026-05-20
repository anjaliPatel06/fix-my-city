import { NextRequest, NextResponse } from "next/server";
import { readDatabase } from "@/lib/server/database";
import { hashPassword, normalizeEmail, sanitizeUser } from "@/lib/server/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();
    const normalizedEmail = normalizeEmail(String(email ?? ""));
    const passwordHash = hashPassword(String(password ?? ""));

    const database = await readDatabase();
    const matchedUser = database.users.find((user) => user.email === normalizedEmail);

    if (!matchedUser) {
      return NextResponse.json(
        { success: false, error: "No account found with this email." },
        { status: 404 },
      );
    }

    if (matchedUser.role !== role) {
      return NextResponse.json(
        {
          success: false,
          error:
            role === "admin"
              ? "This account does not have admin access."
              : "Please choose the correct login type for this account.",
        },
        { status: 403 },
      );
    }

    if (matchedUser.passwordHash !== passwordHash) {
      return NextResponse.json(
        { success: false, error: "Incorrect password." },
        { status: 401 },
      );
    }

    return NextResponse.json({
      success: true,
      user: sanitizeUser(matchedUser),
      profile: matchedUser.profile,
    });
  } catch (error) {
    console.error("login error:", error);
    return NextResponse.json(
      { success: false, error: "Login failed." },
      { status: 500 },
    );
  }
}
