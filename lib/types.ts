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
  exactLocation: string;
  landmark: string;
  city: string;
  pincode: string;
  urgency: "Low" | "Medium" | "High";
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
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

export type ComplaintComment = {
  id: string;
  authorId: string;
  authorName: string;
  body: string;
  createdAt: string;
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
  exactLocation?: string;
  landmark?: string;
  latitude?: number;
  longitude?: number;
  urgency: "Low" | "Medium" | "High";
  photoUrl?: string;
  imageUrl?: string;
  status: ComplaintStatus;
  upvotes: number;
  likedBy?: string[];
  comments?: ComplaintComment[];
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

export type WhatsAppMessageDirection = "incoming" | "outgoing";

export type WhatsAppMessageRecord = {
  direction: WhatsAppMessageDirection;
  from?: string;
  to?: string;
  body: string;
  messageId?: string;
  mediaId?: string;
  mediaUrl?: string;
  profileName?: string;
  timestamp?: string;
  at: string;
};

export type WhatsAppReportStatus =
  | "collecting"
  | "submitted"
  | "failed"
  | "expired";

export type WhatsAppReportRecord = {
  id: string;
  sessionToken: string;
  phoneNumber: string;
  profileName?: string;
  userEmail: string;
  userName: string;
  status: WhatsAppReportStatus;
  currentExtracted: ReportConversationFields;
  messages: WhatsAppMessageRecord[];
  imageUrl?: string;
  mediaId?: string;
  mediaDownloadError?: string;
  complaintTicketId?: string;
  failureReason?: string;
  createdAt: string;
  updatedAt: string;
};

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
  whatsappReports: WhatsAppReportRecord[];
};
