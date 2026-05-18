import { NextRequest, NextResponse } from "next/server";
import { updateDatabase } from "@/lib/server/database";
import { hashPassword, normalizeEmail, sanitizeUser } from "@/lib/server/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const trimmedName = String(name ?? "").trim();
    const normalizedEmail = normalizeEmail(String(email ?? ""));
    const plainPassword = String(password ?? "");

    if (!trimmedName || !normalizedEmail || !plainPassword) {
      return NextResponse.json(
        { success: false, error: "Name, email, and password are required." },
        { status: 400 },
      );
    }

    if (plainPassword.length < 6) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 6 characters long." },
        { status: 400 },
      );
    }

    const createdUser = await updateDatabase((database) => {
      const existingUser = database.users.find((user) => user.email === normalizedEmail);

      if (existingUser) {
        throw new Error("An account with this email already exists.");
      }

      const now = new Date().toISOString();
      const nextUser = {
        name: trimmedName,
        email: normalizedEmail,
        role: "user" as const,
        passwordHash: hashPassword(plainPassword),
        profile: {
          firstName: trimmedName,
        },
        createdAt: now,
        updatedAt: now,
      };

      database.users.push(nextUser);
      return nextUser;
    });

    return NextResponse.json({
      success: true,
      user: sanitizeUser(createdUser),
      profile: createdUser.profile,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Signup failed.",
      },
      { status: 400 },
    );
  }
}
