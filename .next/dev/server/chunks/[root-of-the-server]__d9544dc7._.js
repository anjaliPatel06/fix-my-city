module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_ADMIN",
    ()=>DEMO_ADMIN,
    "deriveDisplayName",
    ()=>deriveDisplayName,
    "hashPassword",
    ()=>hashPassword,
    "normalizeEmail",
    ()=>normalizeEmail,
    "sanitizeUser",
    ()=>sanitizeUser
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const DEMO_ADMIN = {
    name: "City Admin",
    email: "admin@fixmycity.com",
    password: "Admin@123",
    role: "admin"
};
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}
function hashPassword(password) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(password).digest("hex");
}
function deriveDisplayName(currentName, profile) {
    if (!profile) return currentName;
    const nextName = [
        profile.firstName,
        profile.lastName
    ].filter((value)=>typeof value === "string" && value.trim() !== "").join(" ").trim();
    return nextName || currentName;
}
function sanitizeUser(user) {
    return {
        name: user.name,
        email: user.email,
        role: user.role
    };
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/database.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readDatabase",
    ()=>readDatabase,
    "updateDatabase",
    ()=>updateDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/auth.ts [app-route] (ecmascript)");
;
;
;
const DB_DIRECTORY = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data");
const DB_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(DB_DIRECTORY, "fix-my-city-db.json");
const DEFAULT_DATABASE = {
    users: [],
    complaints: [],
    whatsappSessions: []
};
let mutationQueue = Promise.resolve();
async function ensureDatabaseFile() {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(DB_DIRECTORY, {
        recursive: true
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(DB_FILE, "utf8");
    } catch  {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(DB_FILE, JSON.stringify(DEFAULT_DATABASE, null, 2), "utf8");
    }
}
async function readRawDatabase() {
    await ensureDatabaseFile();
    try {
        const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(DB_FILE, "utf8");
        const parsed = JSON.parse(raw);
        return {
            users: Array.isArray(parsed.users) ? parsed.users : [],
            complaints: Array.isArray(parsed.complaints) ? parsed.complaints : [],
            whatsappSessions: Array.isArray(parsed.whatsappSessions) ? parsed.whatsappSessions : []
        };
    } catch  {
        return {
            users: [],
            complaints: [],
            whatsappSessions: []
        };
    }
}
async function writeRawDatabase(database) {
    await ensureDatabaseFile();
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(DB_FILE, JSON.stringify(database, null, 2), "utf8");
}
async function ensureSeedData(database) {
    const adminEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].email);
    const existingAdmin = database.users.find((user)=>user.email === adminEmail);
    if (existingAdmin) {
        return false;
    }
    const now = new Date().toISOString();
    const adminUser = {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].name,
        email: adminEmail,
        role: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].role,
        passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].password),
        profile: {
            firstName: "City",
            lastName: "Admin",
            city: "Demo City",
            state: "Admin State",
            country: "India"
        },
        createdAt: now,
        updatedAt: now
    };
    database.users.push(adminUser);
    return true;
}
async function readDatabase() {
    const database = await readRawDatabase();
    const seeded = await ensureSeedData(database);
    if (seeded) {
        await writeRawDatabase(database);
    }
    return database;
}
async function updateDatabase(updater) {
    let result;
    let capturedError;
    mutationQueue = mutationQueue.then(async ()=>{
        const database = await readDatabase();
        try {
            result = await updater(database);
            await writeRawDatabase(database);
        } catch (error) {
            capturedError = error;
        }
    });
    await mutationQueue;
    if (capturedError) {
        throw capturedError;
    }
    return result;
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/ticketId.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateTicketId",
    ()=>generateTicketId
]);
function generateTicketId() {
    const digits = Math.floor(100000 + Math.random() * 900000);
    return `FIXC${digits}`;
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/reports.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildComplaintRecord",
    ()=>buildComplaintRecord,
    "buildComplaintTimeline",
    ()=>buildComplaintTimeline,
    "buildLocation",
    ()=>buildLocation,
    "createComplaintForUser",
    ()=>createComplaintForUser,
    "createUniqueTicketId",
    ()=>createUniqueTicketId,
    "inferDepartment",
    ()=>inferDepartment,
    "pickComplaintImage",
    ()=>pickComplaintImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/ticketId.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/database.ts [app-route] (ecmascript)");
;
;
;
const OFFICERS_BY_DEPARTMENT = {
    "Sanitation Department": {
        name: "Anita Verma",
        role: "Sanitation Officer",
        phone: "+91 98765 12001"
    },
    "Public Works Department (PWD)": {
        name: "Rajesh Kumar",
        role: "Road Maintenance Officer",
        phone: "+91 98765 12002"
    },
    "Electricity Department": {
        name: "Neha Singh",
        role: "Electrical Inspector",
        phone: "+91 98765 12003"
    },
    "Water Board": {
        name: "Mohit Sharma",
        role: "Water Supply Officer",
        phone: "+91 98765 12004"
    },
    "Traffic Department": {
        name: "Pooja Nair",
        role: "Traffic Control Officer",
        phone: "+91 98765 12005"
    },
    "Animal Control Department": {
        name: "Rohit Das",
        role: "Animal Care Officer",
        phone: "+91 98765 12006"
    },
    "General Complaints Cell": {
        name: "Sonal Gupta",
        role: "Complaint Resolution Officer",
        phone: "+91 98765 12007"
    }
};
function inferDepartment(category) {
    const normalized = category.toLowerCase();
    if (normalized.includes("garbage") || normalized.includes("waste")) {
        return "Sanitation Department";
    }
    if (normalized.includes("pothole") || normalized.includes("road")) {
        return "Public Works Department (PWD)";
    }
    if (normalized.includes("streetlight") || normalized.includes("light")) {
        return "Electricity Department";
    }
    if (normalized.includes("water") || normalized.includes("drain") || normalized.includes("leak")) {
        return "Water Board";
    }
    if (normalized.includes("signal") || normalized.includes("traffic")) {
        return "Traffic Department";
    }
    if (normalized.includes("animal") || normalized.includes("dog")) {
        return "Animal Control Department";
    }
    return "General Complaints Cell";
}
function buildLocation(address, city, pincode) {
    return [
        address,
        city,
        pincode
    ].filter((value)=>value && value.trim() !== "").join(", ");
}
function buildComplaintTimeline(createdAt) {
    return [
        {
            status: "Submitted",
            date: createdAt,
            completed: true
        },
        {
            status: "Assigned",
            date: "Pending assignment",
            completed: false
        },
        {
            status: "In Progress",
            date: "Waiting for action",
            completed: false
        },
        {
            status: "Resolved",
            date: "Pending resolution",
            completed: false
        }
    ];
}
function createUniqueTicketId(existingTicketIds) {
    let ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTicketId"])();
    while(existingTicketIds.has(ticketId)){
        ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTicketId"])();
    }
    return ticketId;
}
function pickComplaintImage(category, fallbackPhotoUrl) {
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
function buildComplaintRecord(input, existingTicketIds) {
    const now = new Date().toISOString();
    const assignedDepartment = inferDepartment(input.category);
    const officer = OFFICERS_BY_DEPARTMENT[assignedDepartment] ?? OFFICERS_BY_DEPARTMENT["General Complaints Cell"];
    const ticketId = createUniqueTicketId(existingTicketIds);
    const status = "Submitted";
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
        officer,
        timeline: buildComplaintTimeline(now),
        createdAt: now,
        updatedAt: now
    };
}
async function createComplaintForUser(input) {
    const normalizedEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(input.userEmail);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const user = database.users.find((entry)=>entry.email === normalizedEmail);
        if (!user) {
            throw new Error("Please sign in before submitting a complaint.");
        }
        const ticketIdSet = new Set(database.complaints.map((entry)=>entry.ticketId));
        const complaint = buildComplaintRecord({
            ...input,
            userEmail: normalizedEmail,
            userName: input.userName.trim() || user.name
        }, ticketIdSet);
        database.complaints.unshift(complaint);
        return complaint;
    });
}
}),
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/app/api/reports/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/server/reports.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const userEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(String(body?.userEmail ?? ""));
        const userName = String(body?.userName ?? "").trim();
        const category = String(body?.category ?? "").trim();
        const description = String(body?.description ?? "").trim();
        const address = String(body?.address ?? "").trim();
        const city = String(body?.city ?? "").trim();
        const pincode = String(body?.pincode ?? "").trim();
        const urgency = body?.urgency === "High" || body?.urgency === "Low" ? body.urgency : "Medium";
        const photoUrl = typeof body?.photoUrl === "string" ? body.photoUrl : undefined;
        if (!userEmail || !userName || !category || !description || !address || !city || !pincode) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing required complaint details."
            }, {
                status: 400
            });
        }
        const complaint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComplaintForUser"])({
            userEmail,
            userName,
            category,
            description,
            address,
            city,
            pincode,
            urgency,
            photoUrl
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            ticketId: complaint.ticketId,
            report: complaint
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Report creation failed."
        }, {
            status: 400
        });
    }
}
async function GET() {
    try {
        const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
        const reports = [
            ...database.complaints
        ].sort((a, b)=>b.createdAt.localeCompare(a.createdAt));
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            reports
        });
    } catch (error) {
        console.error("reports get error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to load reports."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d9544dc7._.js.map