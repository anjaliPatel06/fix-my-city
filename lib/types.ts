export type Role = "user" | "admin";

export type Profile = {
  firstName: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  maritalStatus?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
} | null;

export type AppUser = {
  name: string;
  email: string;
  role: Role;
  department?: string;
};

export type ReportConversationFields = {
  category: string;
  description: string;
  address: string;
  city: string;
  pincode: string;
  urgency: "Low" | "Medium" | "High";
};

export type ReportConversationMessage = {
  role: "assistant" | "user";
  content: string;
  at: string;
};

export type StoredUser = AppUser & {
  passwordHash: string;
  profile: Profile;
  createdAt: string;
  updatedAt: string;
};

export type ComplaintStatus =
  | "Submitted"
  | "Assigned"
  | "In Progress"
  | "Resolved";

export type ComplaintTimelineItem = {
  status: ComplaintStatus;
  date: string;
  completed: boolean;
};

export type ComplaintOfficer = {
  name: string;
  email: string;
  role: string;
  phone: string;
  department: string;
};

export type DepartmentPredictionOption = {
  department: string;
  confidence: number;
};

export type DepartmentPrediction = {
  department: string;
  labelIdx: number;
  confidence: number;
  autoRoute: boolean;
  top3: DepartmentPredictionOption[];
  source: "model" | "fallback";
};

export type ComplaintRecord = {
  ticketId: string;
  userEmail: string;
  userName: string;
  title: string;
  category: string;
  description: string;
  address: string;
  city: string;
  pincode: string;
  location: string;
  urgency: "Low" | "Medium" | "High";
  photoUrl?: string;
  status: ComplaintStatus;
  upvotes: number;
  commentsCount: number;
  assignedDepartment: string;
  departmentPrediction?: DepartmentPrediction;
  officer: ComplaintOfficer;
  timeline: ComplaintTimelineItem[];
  createdAt: string;
  updatedAt: string;
};

export type WhatsAppSessionStatus =
  | "pending_link"
  | "collecting"
  | "submitted"
  | "expired";

export type WhatsAppSession = {
  token: string;
  userEmail: string;
  userName: string;
  phoneNumber?: string;
  status: WhatsAppSessionStatus;
  currentExtracted: ReportConversationFields;
  history: ReportConversationMessage[];
  complaintTicketId?: string;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
};

export type AppDatabase = {
  users: StoredUser[];
  complaints: ComplaintRecord[];
  whatsappSessions: WhatsAppSession[];
};
