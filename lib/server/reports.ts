import type {
  ComplaintRecord,
  ComplaintStatus,
  ComplaintTimelineItem,
  DepartmentPrediction,
} from "@/lib/types";
import { generateTicketId } from "@/lib/ticketId";
import { normalizeEmail } from "@/lib/server/auth";
import { updateDatabase } from "@/lib/server/database";
import {
  deriveUrgencyFromUpvotes,
  getOfficerByDepartment,
  normalizeDepartmentName,
} from "@/lib/server/departments";
import {
  buildFallbackDepartmentPrediction,
  predictDepartmentFromInputs,
} from "@/lib/server/department-classifier";

export type ReportInput = {
  userEmail: string;
  userName: string;
  category: string;
  description: string;
  address: string;
  city: string;
  pincode: string;
  urgency: "Low" | "Medium" | "High";
  photoUrl?: string;
  departmentPrediction?: DepartmentPrediction;
};

export function inferDepartment(category: string, description = "") {
  const normalized = `${category} ${description}`.toLowerCase();

  if (
    normalized.includes("garbage") ||
    normalized.includes("waste") ||
    normalized.includes("trash")
  ) {
    return "Sanitation";
  }

  if (
    normalized.includes("pothole") ||
    normalized.includes("road") ||
    normalized.includes("footpath")
  ) {
    return "Public Works";
  }

  if (
    normalized.includes("streetlight") ||
    normalized.includes("street light") ||
    normalized.includes("light")
  ) {
    return "Electricity";
  }

  if (
    normalized.includes("sewer") ||
    normalized.includes("sewage") ||
    normalized.includes("manhole") ||
    normalized.includes("drainage")
  ) {
    return "Sewerage";
  }

  if (
    normalized.includes("water") ||
    normalized.includes("leak") ||
    normalized.includes("pipeline") ||
    normalized.includes("tap")
  ) {
    return "Water Supply";
  }

  if (
    normalized.includes("signal") ||
    normalized.includes("traffic") ||
    normalized.includes("parking")
  ) {
    return "Traffic Police";
  }

  if (
    normalized.includes("encroachment") ||
    normalized.includes("hawker") ||
    normalized.includes("municipal")
  ) {
    return "Municipal Corp";
  }

  if (
    normalized.includes("tree") ||
    normalized.includes("park") ||
    normalized.includes("branch") ||
    normalized.includes("garden")
  ) {
    return "Horticulture";
  }

  if (
    normalized.includes("pollution") ||
    normalized.includes("smoke") ||
    normalized.includes("noise") ||
    normalized.includes("air")
  ) {
    return "Pollution Control";
  }

  if (
    normalized.includes("mosquito") ||
    normalized.includes("health") ||
    normalized.includes("stagnant")
  ) {
    return "Health";
  }

  if (
    normalized.includes("illegal construction") ||
    normalized.includes("unauthorized") ||
    normalized.includes("building")
  ) {
    return "Town Planning";
  }

  if (
    normalized.includes("animal") ||
    normalized.includes("dog") ||
    normalized.includes("cow")
  ) {
    return "Animal Control";
  }

  if (
    normalized.includes("toilet") ||
    normalized.includes("washroom") ||
    normalized.includes("public sanitation")
  ) {
    return "Public Sanitation";
  }

  if (
    normalized.includes("bus stop") ||
    normalized.includes("transport") ||
    normalized.includes("auto stand")
  ) {
    return "Transport";
  }

  if (
    normalized.includes("fire") ||
    normalized.includes("gas leak") ||
    normalized.includes("flammable")
  ) {
    return "Fire Department";
  }

  return "Municipal Corp";
}

export function buildLocation(address: string, city: string, pincode: string) {
  return [address, city, pincode].filter((value) => value && value.trim() !== "").join(", ");
}

export function buildComplaintTimeline(createdAt: string): ComplaintTimelineItem[] {
  return [
    { status: "Submitted", date: createdAt, completed: true },
    { status: "Assigned", date: "Pending assignment", completed: false },
    { status: "In Progress", date: "Waiting for action", completed: false },
    { status: "Resolved", date: "Pending resolution", completed: false },
  ];
}

export function createUniqueTicketId(existingTicketIds: Set<string>) {
  let ticketId = generateTicketId();

  while (existingTicketIds.has(ticketId)) {
    ticketId = generateTicketId();
  }

  return ticketId;
}

export function pickComplaintImage(category: string, fallbackPhotoUrl?: string) {
  if (fallbackPhotoUrl && fallbackPhotoUrl.trim() !== "") {
    return fallbackPhotoUrl;
  }

  const normalized = category.toLowerCase();

  if (normalized.includes("garbage")) return "/garbage.jpg";
  if (normalized.includes("streetlight") || normalized.includes("light")) {
    return "/streetlight.jpg";
  }
  if (normalized.includes("water")) return "/clear-water-ripples.png";
  if (normalized.includes("traffic") || normalized.includes("signal")) {
    return "/busy-city-traffic.png";
  }
  if (normalized.includes("park")) return "/sunny-city-park.png";
  return "/pothole.png";
}

export function buildComplaintRecord(
  input: ReportInput,
  existingTicketIds: Set<string>,
): ComplaintRecord {
  const now = new Date().toISOString();
  const fallbackDepartment = normalizeDepartmentName(
    inferDepartment(input.category, input.description),
  );
  const departmentPrediction =
    input.departmentPrediction ?? buildFallbackDepartmentPrediction(fallbackDepartment);
  const assignedDepartment = normalizeDepartmentName(
    departmentPrediction.source === "model" && departmentPrediction.autoRoute
      ? departmentPrediction.department
      : fallbackDepartment,
  );
  const officer = getOfficerByDepartment(assignedDepartment);
  const ticketId = createUniqueTicketId(existingTicketIds);
  const status: ComplaintStatus = "Submitted";

  return {
    ticketId,
    userEmail: input.userEmail,
    userName: input.userName,
    title: `${input.category} reported in ${input.city}`,
    category: input.category,
    description: input.description,
    address: input.address,
    city: input.city,
    pincode: input.pincode,
    location: buildLocation(input.address, input.city, input.pincode),
    urgency: input.urgency,
    photoUrl: pickComplaintImage(input.category, input.photoUrl),
    status,
    upvotes: 0,
    commentsCount: 0,
    assignedDepartment,
    departmentPrediction,
    officer,
    timeline: buildComplaintTimeline(now),
    createdAt: now,
    updatedAt: now,
  };
}

async function resolveDepartmentPrediction(input: ReportInput) {
  try {
    return await predictDepartmentFromInputs({
      description: input.description,
      imageBase64: input.photoUrl,
    });
  } catch (error) {
    console.error("department classifier error:", error);
    return buildFallbackDepartmentPrediction(
      inferDepartment(input.category, input.description),
    );
  }
}

export async function createComplaintForUser(input: ReportInput) {
  const normalizedEmail = normalizeEmail(input.userEmail);

  return updateDatabase(async (database) => {
    const user = database.users.find((entry) => entry.email === normalizedEmail);

    if (!user) {
      throw new Error("Please sign in before submitting a complaint.");
    }

    const departmentPrediction = await resolveDepartmentPrediction(input);
    const ticketIdSet = new Set(database.complaints.map((entry) => entry.ticketId));
    const complaint = buildComplaintRecord(
      {
        ...input,
        userEmail: normalizedEmail,
        userName: input.userName.trim() || user.name,
        departmentPrediction,
      },
      ticketIdSet,
    );

    database.complaints.unshift(complaint);
    return complaint;
  });
}

export async function upvoteComplaint(ticketId: string) {
  return updateDatabase((database) => {
    const complaint = database.complaints.find((entry) => entry.ticketId === ticketId);

    if (!complaint) {
      throw new Error("Complaint not found.");
    }

    complaint.upvotes += 1;
    complaint.urgency = deriveUrgencyFromUpvotes(complaint.urgency, complaint.upvotes);
    complaint.updatedAt = new Date().toISOString();

    return complaint;
  });
}

const TIMELINE_SEQUENCE: ComplaintStatus[] = [
  "Submitted",
  "Assigned",
  "In Progress",
  "Resolved",
];

function buildUpdatedTimeline(
  timeline: ComplaintTimelineItem[],
  nextStatus: ComplaintStatus,
  updatedAt: string,
) {
  const nextStatusIndex = TIMELINE_SEQUENCE.indexOf(nextStatus);

  return TIMELINE_SEQUENCE.map((status, index) => {
    const existingItem = timeline.find((item) => item.status === status);

    if (index < nextStatusIndex) {
      return {
        status,
        date: existingItem?.date && existingItem.date !== "Pending assignment" && existingItem.date !== "Waiting for action" && existingItem.date !== "Pending resolution"
          ? existingItem.date
          : updatedAt,
        completed: true,
      };
    }

    if (index === nextStatusIndex) {
      return {
        status,
        date: updatedAt,
        completed: true,
      };
    }

    if (status === "Assigned") {
      return { status, date: "Pending assignment", completed: false };
    }

    if (status === "In Progress") {
      return { status, date: "Waiting for action", completed: false };
    }

    return { status, date: "Pending resolution", completed: false };
  });
}

export async function updateComplaintStatusForDepartmentAdmin(input: {
  ticketId: string;
  nextStatus: ComplaintStatus;
  adminDepartment: string;
}) {
  return updateDatabase((database) => {
    const complaint = database.complaints.find((entry) => entry.ticketId === input.ticketId);

    if (!complaint) {
      throw new Error("Complaint not found.");
    }

    if (complaint.assignedDepartment !== input.adminDepartment) {
      throw new Error("You can only manage complaints assigned to your department.");
    }

    const updatedAt = new Date().toISOString();
    complaint.status = input.nextStatus;
    complaint.timeline = buildUpdatedTimeline(
      complaint.timeline,
      input.nextStatus,
      updatedAt,
    );
    complaint.updatedAt = updatedAt;

    return complaint;
  });
}
