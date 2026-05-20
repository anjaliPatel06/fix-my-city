import { NextRequest, NextResponse } from "next/server";
import { readDatabase, updateDatabase } from "@/lib/server/database";
import {
  deriveDisplayName,
  normalizeEmail,
  sanitizeUser,
} from "@/lib/server/auth";
import type { Profile } from "@/lib/types";

export async function GET(req: NextRequest) {
  try {
    const email = normalizeEmail(req.nextUrl.searchParams.get("email") ?? "");

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 },
      );
    }

    const database = await readDatabase();
    const user = database.users.find((entry) => entry.email === email);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      user: sanitizeUser(user),
      profile: user.profile,
    });
  } catch (error) {
    console.error("profile get error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load profile." },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { email, profile } = await req.json();
    const normalizedEmail = normalizeEmail(String(email ?? ""));
    const nextProfile = (profile ?? null) as Profile;

    if (!normalizedEmail || !nextProfile) {
      return NextResponse.json(
        { success: false, error: "Email and profile are required." },
        { status: 400 },
      );
    }

    const updatedUser = await updateDatabase((database) => {
      const user = database.users.find((entry) => entry.email === normalizedEmail);

      if (!user) {
        throw new Error("User not found.");
      }

      user.profile = nextProfile;
      user.name = deriveDisplayName(user.name, nextProfile);
      user.updatedAt = new Date().toISOString();

      return user;
    });

    return NextResponse.json({
      success: true,
      user: sanitizeUser(updatedUser),
      profile: updatedUser.profile,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update profile.",
      },
      { status: 400 },
    );
  }
}
