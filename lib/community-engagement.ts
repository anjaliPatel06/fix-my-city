export const UPVOTED_STORAGE_KEY = "fmc_upvoted_issues";
export const COMMUNITY_ACTOR_STORAGE_KEY = "fmc_community_actor_id";

export function getCommunityActorId(userEmail?: string | null) {
  if (userEmail) {
    return userEmail.trim().toLowerCase();
  }

  if (typeof window === "undefined") {
    return "";
  }

  const existingActorId = window.localStorage.getItem(COMMUNITY_ACTOR_STORAGE_KEY);
  if (existingActorId) {
    return existingActorId;
  }

  const nextActorId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? `anon:${crypto.randomUUID()}`
      : `anon:${Date.now()}-${Math.random().toString(36).slice(2)}`;

  window.localStorage.setItem(COMMUNITY_ACTOR_STORAGE_KEY, nextActorId);
  return nextActorId;
}
