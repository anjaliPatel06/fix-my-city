import type { ComplaintRecord } from "@/lib/types";

function isUsableText(value?: string) {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return !["", "extracting...", "unknown", "n/a", "na"].includes(normalized);
}

export function getComplaintArea(complaint: Pick<ComplaintRecord, "address" | "exactLocation" | "landmark" | "description">) {
  const exactLocation = complaint.exactLocation?.trim();
  const address = complaint.address?.trim();
  const landmark = complaint.landmark?.trim();
  const description = complaint.description?.trim();

  if (isUsableText(exactLocation) && exactLocation !== description) {
    return exactLocation!;
  }

  if (isUsableText(address) && address !== description) {
    return address!;
  }

  if (isUsableText(landmark) && landmark !== description) {
    return landmark!;
  }

  return address || exactLocation || "Location not specified";
}

export function getComplaintLocationLabel(
  complaint: Pick<
    ComplaintRecord,
    "address" | "exactLocation" | "landmark" | "description" | "city" | "pincode" | "location"
  >,
) {
  const area = getComplaintArea(complaint);
  const parts = [area, complaint.city, complaint.pincode]
    .filter((value) => isUsableText(value))
    .map((value) => value!.trim());

  if (parts.length > 0) {
    return Array.from(new Set(parts)).join(", ");
  }

  return complaint.location || "Location not specified";
}
