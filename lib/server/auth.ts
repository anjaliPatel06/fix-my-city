import { createHash } from "node:crypto";
import type { AppUser, Profile, StoredUser } from "@/lib/types";

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export function deriveDisplayName(currentName: string, profile: Profile) {
  if (!profile) return currentName;

  const nextName = [profile.firstName, profile.lastName]
    .filter((value) => typeof value === "string" && value.trim() !== "")
    .join(" ")
    .trim();

  return nextName || currentName;
}

export function sanitizeUser(user: StoredUser): AppUser {
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
  };
}
