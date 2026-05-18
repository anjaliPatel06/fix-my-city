import type { ComplaintOfficer, StoredUser } from "@/lib/types";
import { hashPassword, normalizeEmail } from "@/lib/server/auth";

export type DepartmentAdminSeed = {
  name: string;
  email: string;
  department: string;
  role: string;
  phone: string;
};

export const ADMIN_DEFAULT_PASSWORD = "FixMyCity@2026";

export const DEPARTMENT_ADMIN_SEEDS: DepartmentAdminSeed[] = [
  {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@fixmycity.com",
    department: "Public Works",
    role: "Road Maintenance Officer",
    phone: "+91 98765 12002",
  },
  {
    name: "Anita Verma",
    email: "anita.verma@fixmycity.com",
    department: "Sanitation",
    role: "Sanitation Officer",
    phone: "+91 98765 12001",
  },
  {
    name: "Neha Singh",
    email: "neha.singh@fixmycity.com",
    department: "Electricity",
    role: "Electrical Inspector",
    phone: "+91 98765 12003",
  },
  {
    name: "Mohit Sharma",
    email: "mohit.sharma@fixmycity.com",
    department: "Water Supply",
    role: "Water Supply Officer",
    phone: "+91 98765 12004",
  },
  {
    name: "Kavita Rao",
    email: "kavita.rao@fixmycity.com",
    department: "Sewerage",
    role: "Sewerage Response Officer",
    phone: "+91 98765 12008",
  },
  {
    name: "Pooja Nair",
    email: "pooja.nair@fixmycity.com",
    department: "Traffic Police",
    role: "Traffic Control Officer",
    phone: "+91 98765 12005",
  },
  {
    name: "Sonal Gupta",
    email: "sonal.gupta@fixmycity.com",
    department: "Municipal Corp",
    role: "Municipal Complaints Officer",
    phone: "+91 98765 12007",
  },
  {
    name: "Amit Yadav",
    email: "amit.yadav@fixmycity.com",
    department: "Horticulture",
    role: "Horticulture Officer",
    phone: "+91 98765 12009",
  },
  {
    name: "Farah Ali",
    email: "farah.ali@fixmycity.com",
    department: "Pollution Control",
    role: "Pollution Control Inspector",
    phone: "+91 98765 12010",
  },
  {
    name: "Drishti Mehta",
    email: "drishti.mehta@fixmycity.com",
    department: "Health",
    role: "Public Health Officer",
    phone: "+91 98765 12011",
  },
  {
    name: "Vivek Sinha",
    email: "vivek.sinha@fixmycity.com",
    department: "Town Planning",
    role: "Town Planning Officer",
    phone: "+91 98765 12012",
  },
  {
    name: "Rohit Das",
    email: "rohit.das@fixmycity.com",
    department: "Animal Control",
    role: "Animal Care Officer",
    phone: "+91 98765 12006",
  },
  {
    name: "Nitin Bansal",
    email: "nitin.bansal@fixmycity.com",
    department: "Public Sanitation",
    role: "Public Sanitation Officer",
    phone: "+91 98765 12013",
  },
  {
    name: "Meera Joseph",
    email: "meera.joseph@fixmycity.com",
    department: "Transport",
    role: "Transport Operations Officer",
    phone: "+91 98765 12014",
  },
  {
    name: "Arjun Patel",
    email: "arjun.patel@fixmycity.com",
    department: "Fire Department",
    role: "Fire Safety Officer",
    phone: "+91 98765 12015",
  },
  {
    name: "Sonal Gupta",
    email: "complaints.cell@fixmycity.com",
    department: "General Complaints Cell",
    role: "Complaint Resolution Officer",
    phone: "+91 98765 12007",
  },
];

const DEPARTMENT_ALIAS_MAP: Record<string, string> = {
  "sanitation department": "Sanitation",
  sanitation: "Sanitation",
  "public works department": "Public Works",
  "public works": "Public Works",
  electricity: "Electricity",
  "electricity department": "Electricity",
  "water supply department": "Water Supply",
  "water supply": "Water Supply",
  sewerage: "Sewerage",
  "sewerage department": "Sewerage",
  "traffic police department": "Traffic Police",
  "traffic police": "Traffic Police",
  "municipal corporation": "Municipal Corp",
  "municipal corp": "Municipal Corp",
  horticulture: "Horticulture",
  "horticulture department": "Horticulture",
  "pollution control department": "Pollution Control",
  "pollution control": "Pollution Control",
  health: "Health",
  "health department": "Health",
  "town planning department": "Town Planning",
  "town planning": "Town Planning",
  "animal control department": "Animal Control",
  "animal control": "Animal Control",
  "public sanitation department": "Public Sanitation",
  "public sanitation": "Public Sanitation",
  transport: "Transport",
  "transport department": "Transport",
  "fire department": "Fire Department",
  "general complaints cell": "General Complaints Cell",
};

const OFFICERS_BY_DEPARTMENT = new Map<string, ComplaintOfficer>(
  DEPARTMENT_ADMIN_SEEDS.map((admin) => [
    admin.department,
    {
      name: admin.name,
      email: admin.email,
      role: admin.role,
      phone: admin.phone,
      department: admin.department,
    },
  ]),
);

export function normalizeDepartmentName(department: string) {
  const normalizedKey = department.trim().toLowerCase();
  return DEPARTMENT_ALIAS_MAP[normalizedKey] ?? department.trim();
}

export function getOfficerByDepartment(department: string) {
  const normalizedDepartment = normalizeDepartmentName(department);
  return (
    OFFICERS_BY_DEPARTMENT.get(normalizedDepartment) ??
    OFFICERS_BY_DEPARTMENT.get("General Complaints Cell")!
  );
}

export function buildSeedAdminUsers(): StoredUser[] {
  const now = new Date().toISOString();

  return DEPARTMENT_ADMIN_SEEDS.map((admin) => ({
    name: admin.name,
    email: normalizeEmail(admin.email),
    role: "admin" as const,
    department: admin.department,
    passwordHash: hashPassword(ADMIN_DEFAULT_PASSWORD),
    profile: {
      firstName: admin.name.split(" ")[0] ?? admin.name,
      lastName: admin.name.split(" ").slice(1).join(" ") || undefined,
      city: "Ujjain",
      state: "Madhya Pradesh",
      country: "India",
    },
    createdAt: now,
    updatedAt: now,
  }));
}

export function deriveUrgencyFromUpvotes(currentUrgency: "Low" | "Medium" | "High", upvotes: number) {
  if (currentUrgency === "High" || upvotes >= 10) {
    return "High" as const;
  }

  if (currentUrgency === "Medium" || upvotes >= 5) {
    return "Medium" as const;
  }

  return "Low" as const;
}
