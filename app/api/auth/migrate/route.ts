import { NextRequest, NextResponse } from "next/server";
import { updateDatabase } from "@/lib/server/database";
import { normalizeEmail } from "@/lib/server/auth";
import type { Profile, Role } from "@/lib/types";

type LegacyStoredUser = {
  name?: string;
  email?: string;
  passwordHash?: string;
  role?: Role;
  profile?: Profile;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const users = Array.isArray(body?.users) ? (body.users as LegacyStoredUser[]) : [];

    if (users.length === 0) {
      return NextResponse.json({ success: true, migrated: 0 });
    }

    const migratedCount = await updateDatabase((database) => {
      let migrated = 0;

      for (const user of users) {
        const email = normalizeEmail(String(user.email ?? ""));
        const name = String(user.name ?? "").trim();
        const passwordHash = String(user.passwordHash ?? "").trim();

        if (!email || !name || !passwordHash) {
          continue;
        }

        const existingUser = database.users.find((entry) => entry.email === email);
        if (existingUser) {
          if (!existingUser.profile && user.profile) {
            existingUser.profile = user.profile;
            existingUser.updatedAt = new Date().toISOString();
          }
          continue;
        }

        const now = new Date().toISOString();
        database.users.push({
          name,
          email,
          role: user.role === "admin" ? "admin" : "user",
          passwordHash,
          profile: user.profile ?? { firstName: name },
          createdAt: now,
          updatedAt: now,
        });
        migrated += 1;
      }

      return migrated;
    });

    return NextResponse.json({ success: true, migrated: migratedCount });
  } catch (error) {
    console.error("migrate error:", error);
    return NextResponse.json(
      { success: false, error: "Migration failed." },
      { status: 500 },
    );
  }
}
