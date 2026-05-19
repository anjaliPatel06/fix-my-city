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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/server/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
        role: user.role,
        department: user.department
    };
}
}),
"[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWhatsAppConfig",
    ()=>getWhatsAppConfig,
    "isWhatsAppConfigured",
    ()=>isWhatsAppConfigured,
    "normalizePhoneNumber",
    ()=>normalizePhoneNumber
]);
function readTrimmedEnv(name) {
    return process.env[name]?.trim() || "";
}
function normalizePhoneNumber(value) {
    return value.replace(/\D/g, "");
}
function getWhatsAppConfig() {
    return {
        businessNumber: normalizePhoneNumber(readTrimmedEnv("WHATSAPP_BUSINESS_NUMBER")),
        phoneNumberId: readTrimmedEnv("WHATSAPP_PHONE_NUMBER_ID"),
        accessToken: readTrimmedEnv("WHATSAPP_ACCESS_TOKEN"),
        verifyToken: readTrimmedEnv("WHATSAPP_VERIFY_TOKEN"),
        graphVersion: readTrimmedEnv("WHATSAPP_GRAPH_VERSION") || "v23.0",
        appSecret: readTrimmedEnv("META_APP_SECRET")
    };
}
function isWhatsAppConfigured() {
    const config = getWhatsAppConfig();
    return Boolean(config.businessNumber && config.phoneNumberId && config.accessToken && config.verifyToken);
}
}),
"[project]/lib/server/whatsapp/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendWhatsAppTextMessage",
    ()=>sendWhatsAppTextMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
async function sendWhatsAppTextMessage(to, body) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])();
    if (!config.phoneNumberId || !config.accessToken) {
        throw new Error("WhatsApp Cloud API credentials are missing.");
    }
    const response = await fetch(`https://graph.facebook.com/${config.graphVersion}/${config.phoneNumberId}/messages`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${config.accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(to),
            type: "text",
            text: {
                preview_url: false,
                body
            }
        })
    });
    const data = await response.json().catch(()=>null);
    if (!response.ok) {
        throw new Error(data?.error?.message || "Failed to send WhatsApp reply through the Cloud API.");
    }
    return data;
}
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/server/departments.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_DEFAULT_PASSWORD",
    ()=>ADMIN_DEFAULT_PASSWORD,
    "DEPARTMENT_ADMIN_SEEDS",
    ()=>DEPARTMENT_ADMIN_SEEDS,
    "buildSeedAdminUsers",
    ()=>buildSeedAdminUsers,
    "deriveUrgencyFromUpvotes",
    ()=>deriveUrgencyFromUpvotes,
    "getOfficerByDepartment",
    ()=>getOfficerByDepartment,
    "normalizeDepartmentName",
    ()=>normalizeDepartmentName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
;
const ADMIN_DEFAULT_PASSWORD = "FixMyCity@2026";
const DEPARTMENT_ADMIN_SEEDS = [
    {
        name: "Rajesh Kumar",
        email: "rajesh.kumar@fixmycity.com",
        department: "Public Works",
        role: "Road Maintenance Officer",
        phone: "+91 98765 12002"
    },
    {
        name: "Anita Verma",
        email: "anita.verma@fixmycity.com",
        department: "Sanitation",
        role: "Sanitation Officer",
        phone: "+91 98765 12001"
    },
    {
        name: "Neha Singh",
        email: "neha.singh@fixmycity.com",
        department: "Electricity",
        role: "Electrical Inspector",
        phone: "+91 98765 12003"
    },
    {
        name: "Mohit Sharma",
        email: "mohit.sharma@fixmycity.com",
        department: "Water Supply",
        role: "Water Supply Officer",
        phone: "+91 98765 12004"
    },
    {
        name: "Kavita Rao",
        email: "kavita.rao@fixmycity.com",
        department: "Sewerage",
        role: "Sewerage Response Officer",
        phone: "+91 98765 12008"
    },
    {
        name: "Pooja Nair",
        email: "pooja.nair@fixmycity.com",
        department: "Traffic Police",
        role: "Traffic Control Officer",
        phone: "+91 98765 12005"
    },
    {
        name: "Sonal Gupta",
        email: "sonal.gupta@fixmycity.com",
        department: "Municipal Corp",
        role: "Municipal Complaints Officer",
        phone: "+91 98765 12007"
    },
    {
        name: "Amit Yadav",
        email: "amit.yadav@fixmycity.com",
        department: "Horticulture",
        role: "Horticulture Officer",
        phone: "+91 98765 12009"
    },
    {
        name: "Farah Ali",
        email: "farah.ali@fixmycity.com",
        department: "Pollution Control",
        role: "Pollution Control Inspector",
        phone: "+91 98765 12010"
    },
    {
        name: "Drishti Mehta",
        email: "drishti.mehta@fixmycity.com",
        department: "Health",
        role: "Public Health Officer",
        phone: "+91 98765 12011"
    },
    {
        name: "Vivek Sinha",
        email: "vivek.sinha@fixmycity.com",
        department: "Town Planning",
        role: "Town Planning Officer",
        phone: "+91 98765 12012"
    },
    {
        name: "Rohit Das",
        email: "rohit.das@fixmycity.com",
        department: "Animal Control",
        role: "Animal Care Officer",
        phone: "+91 98765 12006"
    },
    {
        name: "Nitin Bansal",
        email: "nitin.bansal@fixmycity.com",
        department: "Public Sanitation",
        role: "Public Sanitation Officer",
        phone: "+91 98765 12013"
    },
    {
        name: "Meera Joseph",
        email: "meera.joseph@fixmycity.com",
        department: "Transport",
        role: "Transport Operations Officer",
        phone: "+91 98765 12014"
    },
    {
        name: "Arjun Patel",
        email: "arjun.patel@fixmycity.com",
        department: "Fire Department",
        role: "Fire Safety Officer",
        phone: "+91 98765 12015"
    },
    {
        name: "Sonal Gupta",
        email: "complaints.cell@fixmycity.com",
        department: "General Complaints Cell",
        role: "Complaint Resolution Officer",
        phone: "+91 98765 12007"
    }
];
const DEPARTMENT_ALIAS_MAP = {
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
    "complaints cell": "General Complaints Cell"
};
const OFFICERS_BY_DEPARTMENT = new Map(DEPARTMENT_ADMIN_SEEDS.map((admin)=>[
        admin.department,
        {
            name: admin.name,
            email: admin.email,
            role: admin.role,
            phone: admin.phone,
            department: admin.department
        }
    ]));
function normalizeDepartmentName(department) {
    const normalizedKey = department.trim().toLowerCase();
    return DEPARTMENT_ALIAS_MAP[normalizedKey] ?? department.trim();
}
function getOfficerByDepartment(department) {
    const normalizedDepartment = normalizeDepartmentName(department);
    return OFFICERS_BY_DEPARTMENT.get(normalizedDepartment) ?? OFFICERS_BY_DEPARTMENT.get("General Complaints Cell");
}
function buildSeedAdminUsers() {
    const now = new Date().toISOString();
    return DEPARTMENT_ADMIN_SEEDS.map((admin)=>({
            name: admin.name,
            email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(admin.email),
            role: "admin",
            department: admin.department,
            passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(ADMIN_DEFAULT_PASSWORD),
            profile: {
                firstName: admin.name.split(" ")[0] ?? admin.name,
                lastName: admin.name.split(" ").slice(1).join(" ") || undefined,
                city: "Ujjain",
                state: "Madhya Pradesh",
                country: "India"
            },
            createdAt: now,
            updatedAt: now
        }));
}
function deriveUrgencyFromUpvotes(currentUrgency, upvotes) {
    if (currentUrgency === "High" || upvotes >= 10) {
        return "High";
    }
    if (currentUrgency === "Medium" || upvotes >= 5) {
        return "Medium";
    }
    return "Low";
}
}),
"[project]/lib/server/database.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readDatabase",
    ()=>readDatabase,
    "updateDatabase",
    ()=>updateDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/departments.ts [app-route] (ecmascript)");
;
;
;
const DB_DIRECTORY = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data");
const DB_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(DB_DIRECTORY, "fix-my-city-db.json");
const DEFAULT_DATABASE = {
    users: [],
    complaints: [],
    whatsappSessions: [],
    whatsappReports: []
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
            whatsappSessions: Array.isArray(parsed.whatsappSessions) ? parsed.whatsappSessions : [],
            whatsappReports: Array.isArray(parsed.whatsappReports) ? parsed.whatsappReports : []
        };
    } catch  {
        return {
            users: [],
            complaints: [],
            whatsappSessions: [],
            whatsappReports: []
        };
    }
}
async function writeRawDatabase(database) {
    await ensureDatabaseFile();
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(DB_FILE, JSON.stringify(database, null, 2), "utf8");
}
async function ensureSeedData(database) {
    if (database.users.length === 0 && database.complaints.length === 0) {
        database.users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSeedAdminUsers"])();
        database.complaints = [];
        database.whatsappSessions = [];
        database.whatsappReports = [];
        return true;
    }
    const hasLegacyAdmin = database.users.some((user)=>user.role === "admin" && (!user.department || user.email === "admin@fixmycity.com" || user.name === "City Admin"));
    if (!hasLegacyAdmin) {
        return false;
    }
    database.users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSeedAdminUsers"])();
    database.complaints = [];
    database.whatsappSessions = [];
    database.whatsappReports = [];
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
"[project]/lib/server/report-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REPORT_CATEGORY_MATCHERS",
    ()=>REPORT_CATEGORY_MATCHERS,
    "REPORT_RESPONSE_SCHEMA",
    ()=>REPORT_RESPONSE_SCHEMA,
    "UNKNOWN_REPORT_VALUE",
    ()=>UNKNOWN_REPORT_VALUE,
    "advanceReportConversation",
    ()=>advanceReportConversation,
    "buildInitialReportQuestion",
    ()=>buildInitialReportQuestion,
    "buildNextQuestion",
    ()=>buildNextQuestion,
    "normalizeReportConversationFields",
    ()=>normalizeReportConversationFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
const UNKNOWN_REPORT_VALUE = "Extracting...";
const REPORT_RESPONSE_SCHEMA = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT,
    properties: {
        agent_reply: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
        },
        extracted: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT,
            properties: {
                category: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                description: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                address: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                exactLocation: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                landmark: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                city: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                pincode: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING
                },
                urgency: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING,
                    format: "enum",
                    enum: [
                        "High",
                        "Medium",
                        "Low"
                    ]
                }
            },
            required: [
                "category",
                "description",
                "address",
                "exactLocation",
                "landmark",
                "city",
                "pincode",
                "urgency"
            ]
        },
        complete: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].BOOLEAN
        }
    },
    required: [
        "agent_reply",
        "extracted",
        "complete"
    ]
};
const SYSTEM_PROMPT = `You are a Fix My City AI civic call assistant for India.
Respond only in simple Hindi or Hinglish, like a natural phone call.

Your job is to help the citizen report a civic issue and collect these fields:
1. category
2. description
3. city
4. address
5. exactLocation
6. landmark
7. pincode
8. urgency

Strict rules:
- Ask only ONE follow-up question at a time.
- Use the current extracted fields as the source of truth. Never erase already known fields.
- Update fields only when the user's latest message gives new information.
- Supported categories include Pothole, Garbage, Streetlight, Water Leakage, Sewage, Traffic Issue, Pollution, Park Issue, Animal Issue, Fire Hazard, and General Issue.
- If the user gives an issue type like garbage, pothole, streetlight, water leakage, sewage, traffic, pollution, park, animal, fire hazard, etc., fill category immediately.
- If the user describes the problem in a sentence, use that sentence as description.
- Ask for exact area/location/landmark only after city and pincode are known.
- address, exactLocation, and landmark must contain only the exact area/location/landmark, not the complaint description.
- Keep address, exactLocation, and landmark aligned when the user gives one precise location answer.
- If all required fields are known, set complete to true and reply with a short confirmation in Hinglish.
- Return valid JSON only. No markdown, no explanation outside JSON.
- If a field is still unknown, set it to "Extracting...".`;
function isKnownValue(value) {
    if (typeof value !== "string") return false;
    const normalized = value.trim().toLowerCase();
    return normalized !== "" && normalized !== "extracting..." && normalized !== "listening..." && normalized !== "..." && normalized !== "unknown" && normalized !== "n/a" && normalized !== "na";
}
function normalizeUrgency(value) {
    if (typeof value !== "string") return "Medium";
    const normalized = value.trim().toLowerCase();
    if (normalized === "high") return "High";
    if (normalized === "low") return "Low";
    return "Medium";
}
function titleCase(value) {
    return value.toLowerCase().split(/\s+/).filter(Boolean).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function isFillerReply(value) {
    const normalized = value.trim().toLowerCase();
    return [
        "haan",
        "han",
        "ha",
        "yes",
        "ok",
        "okay",
        "theek hai",
        "thik hai",
        "hmm",
        "hmmm",
        "hello",
        "hi",
        "namaste",
        "nahi",
        "nahin",
        "no"
    ].includes(normalized);
}
function normalizeCityCandidate(value) {
    if (!value) return undefined;
    const cleaned = titleCase(value.replace(/\b(?:hai|is|mein|me|mai|ka|ki|ke)\b/gi, " ").replace(/\s+/g, " ").trim());
    if (!cleaned || isFillerReply(cleaned)) return undefined;
    return cleaned;
}
function normalizeDigits(value) {
    return value.replace(/[\u0966]/g, "0").replace(/[\u0967]/g, "1").replace(/[\u0968]/g, "2").replace(/[\u0969]/g, "3").replace(/[\u096A]/g, "4").replace(/[\u096B]/g, "5").replace(/[\u096C]/g, "6").replace(/[\u096D]/g, "7").replace(/[\u096E]/g, "8").replace(/[\u096F]/g, "9");
}
function digitWordToNumber(word) {
    const normalized = word.toLowerCase();
    const mapping = {
        zero: "0",
        oh: "0",
        o: "0",
        one: "1",
        two: "2",
        to: "2",
        too: "2",
        three: "3",
        four: "4",
        for: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        ate: "8",
        nine: "9",
        shunya: "0",
        sunya: "0",
        ek: "1",
        do: "2",
        teen: "3",
        tin: "3",
        char: "4",
        chaar: "4",
        chara: "4",
        panch: "5",
        paanch: "5",
        cheh: "6",
        chhe: "6",
        chhah: "6",
        saat: "7",
        sat: "7",
        aath: "8",
        aat: "8",
        nau: "9",
        zeroo: "0"
    };
    return mapping[normalized];
}
function normalizeReportConversationFields(input) {
    return {
        category: isKnownValue(input?.category) ? String(input?.category).trim() : UNKNOWN_REPORT_VALUE,
        description: isKnownValue(input?.description) ? String(input?.description).trim() : UNKNOWN_REPORT_VALUE,
        address: isKnownValue(input?.address) ? String(input?.address).trim() : UNKNOWN_REPORT_VALUE,
        exactLocation: isKnownValue(input?.exactLocation) ? String(input?.exactLocation).trim() : UNKNOWN_REPORT_VALUE,
        landmark: isKnownValue(input?.landmark) ? String(input?.landmark).trim() : UNKNOWN_REPORT_VALUE,
        city: isKnownValue(input?.city) ? String(input?.city).trim() : UNKNOWN_REPORT_VALUE,
        pincode: isKnownValue(input?.pincode) ? String(input?.pincode).trim() : UNKNOWN_REPORT_VALUE,
        urgency: normalizeUrgency(input?.urgency),
        imageUrl: isKnownValue(input?.imageUrl) ? String(input?.imageUrl).trim() : undefined,
        latitude: typeof input?.latitude === "number" ? input.latitude : undefined,
        longitude: typeof input?.longitude === "number" ? input.longitude : undefined
    };
}
function mergeFields(baseFields, incomingFields) {
    const normalizedIncoming = normalizeReportConversationFields(incomingFields);
    const nextUrgency = typeof incomingFields?.urgency === "string" ? normalizeUrgency(incomingFields.urgency) : baseFields.urgency;
    return {
        category: isKnownValue(normalizedIncoming.category) ? normalizedIncoming.category : baseFields.category,
        description: isKnownValue(normalizedIncoming.description) ? normalizedIncoming.description : baseFields.description,
        address: isKnownValue(normalizedIncoming.address) ? normalizedIncoming.address : baseFields.address,
        exactLocation: isKnownValue(normalizedIncoming.exactLocation) ? normalizedIncoming.exactLocation : baseFields.exactLocation,
        landmark: isKnownValue(normalizedIncoming.landmark) ? normalizedIncoming.landmark : baseFields.landmark,
        city: isKnownValue(normalizedIncoming.city) ? normalizedIncoming.city : baseFields.city,
        pincode: isKnownValue(normalizedIncoming.pincode) ? normalizedIncoming.pincode : baseFields.pincode,
        urgency: nextUrgency,
        imageUrl: normalizedIncoming.imageUrl ?? baseFields.imageUrl,
        latitude: normalizedIncoming.latitude ?? baseFields.latitude,
        longitude: normalizedIncoming.longitude ?? baseFields.longitude
    };
}
function parseJsonResponse(text) {
    const trimmed = text.trim().replace(/```json|```/gi, "").trim();
    const firstBrace = trimmed.indexOf("{");
    const lastBrace = trimmed.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1) {
        throw new Error("Model did not return JSON.");
    }
    return JSON.parse(trimmed.slice(firstBrace, lastBrace + 1));
}
const REPORT_CATEGORY_MATCHERS = [
    {
        keywords: [
            "garbage",
            "kachra",
            "waste",
            "trash",
            "dump"
        ],
        category: "Garbage"
    },
    {
        keywords: [
            "pothole",
            "gadda",
            "road damage",
            "damaged road",
            "broken road",
            "footpath",
            "sidewalk"
        ],
        category: "Pothole"
    },
    {
        keywords: [
            "streetlight",
            "street light",
            "light pole",
            "light kharab"
        ],
        category: "Streetlight"
    },
    {
        keywords: [
            "water leakage",
            "water leak",
            "paani leak",
            "pipeline",
            "tap leak"
        ],
        category: "Water Leakage"
    },
    {
        keywords: [
            "sewer",
            "sewage",
            "manhole",
            "drainage",
            "drain overflow",
            "nali"
        ],
        category: "Sewage"
    },
    {
        keywords: [
            "traffic signal",
            "traffic",
            "signal",
            "red light",
            "parking",
            "jam"
        ],
        category: "Traffic Issue"
    },
    {
        keywords: [
            "pollution",
            "smoke",
            "noise",
            "air pollution",
            "water pollution"
        ],
        category: "Pollution"
    },
    {
        keywords: [
            "park",
            "garden",
            "tree",
            "branch",
            "playground"
        ],
        category: "Park Issue"
    },
    {
        keywords: [
            "dog",
            "stray animal",
            "animal",
            "cow",
            "monkey"
        ],
        category: "Animal Issue"
    },
    {
        keywords: [
            "fire",
            "gas leak",
            "flammable",
            "short circuit",
            "fire hazard"
        ],
        category: "Fire Hazard"
    },
    {
        keywords: [
            "general issue",
            "complaint",
            "other issue"
        ],
        category: "General Issue"
    }
];
function detectCategory(message) {
    const text = message.toLowerCase();
    const matchedCategory = REPORT_CATEGORY_MATCHERS.find(({ keywords })=>keywords.some((keyword)=>text.includes(keyword)));
    return matchedCategory?.category;
}
function detectUrgency(message) {
    const text = message.toLowerCase();
    if (text.includes("urgent") || text.includes("emergency") || text.includes("bahut serious") || text.includes("danger") || text.includes("jaldi")) {
        return "High";
    }
    if (text.includes("minor") || text.includes("normal")) {
        return "Low";
    }
    return undefined;
}
function detectPincode(message) {
    const normalizedMessage = normalizeDigits(message);
    const directMatch = normalizedMessage.match(/\b\d{6}\b/)?.[0];
    if (directMatch) return directMatch;
    const compactDigits = normalizedMessage.replace(/\D/g, "");
    if (compactDigits.length === 6) {
        return compactDigits;
    }
    const tokens = normalizedMessage.toLowerCase().split(/[\s,.-]+/).map((token)=>token.trim()).filter(Boolean);
    const spokenDigits = tokens.map((token)=>digitWordToNumber(token)).filter((token)=>Boolean(token)).join("");
    if (spokenDigits.length === 6) {
        return spokenDigits;
    }
    return undefined;
}
function detectCity(message) {
    const trimmed = message.trim();
    if (!trimmed || isFillerReply(trimmed)) return undefined;
    const explicitMatch = trimmed.match(/(?:city|shehar|shahar)\s*(?:hai|is|=|:)?\s*([a-zA-Z][a-zA-Z\s]{1,40})/i);
    if (explicitMatch?.[1]) {
        return normalizeCityCandidate(explicitMatch[1]);
    }
    const possessiveMatch = trimmed.match(/^([a-zA-Z][a-zA-Z\s]{1,20})\s+ke\s+(?:area|road|street|sector|colony|nagar|gali|chowk)/i);
    if (possessiveMatch?.[1]) {
        return normalizeCityCandidate(possessiveMatch[1]);
    }
    const inMatch = trimmed.match(/\b(?:in|mein|me|mai)\s+([a-zA-Z][a-zA-Z\s]{1,30}?)(?:\s+(?:ke|ki|ka|area|road|street|sector|colony|nagar|gali|chowk|pincode)\b|[,.]|$)/i);
    if (inMatch?.[1]) {
        return normalizeCityCandidate(inMatch[1]);
    }
    const cityBeforeAreaMatch = trimmed.match(/([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:area|road|street|sector|colony|nagar|gali|chowk).*?(?:mein|me|mai|hai)/i);
    if (cityBeforeAreaMatch?.[1] && cityBeforeAreaMatch[1].trim().split(/\s+/).length <= 2) {
        return normalizeCityCandidate(cityBeforeAreaMatch[1]);
    }
    if (/^[a-zA-Z\s]{2,40}$/.test(trimmed) && trimmed.split(/\s+/).length <= 3) {
        const lower = trimmed.toLowerCase();
        const fillerWords = [
            "haan",
            "han",
            "yes",
            "okay",
            "ok",
            "nahi",
            "nahin"
        ];
        const hasAddressShape = Boolean(detectAddress(trimmed));
        const hasCategoryShape = Boolean(detectCategory(trimmed));
        if (!fillerWords.includes(lower) && !hasAddressShape && !hasCategoryShape) {
            return normalizeCityCandidate(trimmed);
        }
    }
    return undefined;
}
function cleanLocationCandidate(value) {
    if (!value) return undefined;
    const cleaned = titleCase(value.replace(/\b(?:causing|create|creating|due|because|with|especially|during|increase|risk|accidents?|traffic|congestion|hai|is|are|on|for)\b.*$/i, "").replace(/[.,;].*$/, "").replace(/\s+/g, " ").trim());
    if (!cleaned || cleaned.length < 3 || isFillerReply(cleaned)) return undefined;
    return cleaned;
}
function extractLandmark(message) {
    const text = message.trim();
    const match = text.match(/\b(?:near|opposite|behind|landmark|beside|next to)\s+(.{3,80})/i);
    return cleanLocationCandidate(match?.[1]);
}
function detectAddress(message, options = {}) {
    const text = message.trim();
    const landmark = extractLandmark(text);
    if (landmark) return landmark;
    const addressHints = [
        "road",
        "street",
        "sector",
        "block",
        "colony",
        "nagar",
        "area",
        "gali",
        "chowk",
        "near",
        "opposite",
        "behind"
    ];
    if (addressHints.some((hint)=>text.toLowerCase().includes(hint)) && (!options.preciseOnly || text.split(/\s+/).length <= 8)) {
        return text;
    }
    return undefined;
}
function detectDescription(message) {
    const text = message.trim();
    if (text.length < 8) return undefined;
    if (isFillerReply(text)) return undefined;
    if (detectPincode(text)) return undefined;
    if (detectCity(text) === text && text.split(/\s+/).length <= 3) return undefined;
    return text;
}
function getNextMissingField(fields) {
    if (!isKnownValue(fields.category)) return "category";
    if (!isKnownValue(fields.description)) return "description";
    if (!isKnownValue(fields.city)) return "city";
    if (!/^\d{6}$/.test(fields.pincode.trim())) return "pincode";
    if (!isKnownValue(fields.exactLocation)) {
        return "exactLocation";
    }
    return null;
}
function hasFieldValue(fields, field) {
    if (!field) return false;
    if (field === "pincode") {
        return /^\d{6}$/.test(fields.pincode.trim());
    }
    if (field === "urgency") {
        return [
            "High",
            "Medium",
            "Low"
        ].includes(fields.urgency);
    }
    return isKnownValue(fields[field]);
}
function inferRequestedField(history, currentFields) {
    const lastAssistantMessage = [
        ...history
    ].reverse().find((entry)=>entry?.role === "assistant" && typeof entry?.content === "string")?.content?.toLowerCase();
    if (!lastAssistantMessage) {
        return getNextMissingField(currentFields);
    }
    if (lastAssistantMessage.includes("pincode")) return "pincode";
    if (lastAssistantMessage.includes("exact") || lastAssistantMessage.includes("landmark") || lastAssistantMessage.includes("area") || lastAssistantMessage.includes("address")) {
        return "exactLocation";
    }
    if (lastAssistantMessage.includes("city") || lastAssistantMessage.includes("shehar") || lastAssistantMessage.includes("shahar")) {
        return "city";
    }
    if (lastAssistantMessage.includes("detail") || lastAssistantMessage.includes("problem exactly") || lastAssistantMessage.includes("problem kya") || lastAssistantMessage.includes("description")) {
        return "description";
    }
    if (lastAssistantMessage.includes("civic problem") || lastAssistantMessage.includes("issue") || lastAssistantMessage.includes("garbage") || lastAssistantMessage.includes("pothole") || lastAssistantMessage.includes("streetlight") || lastAssistantMessage.includes("water") || lastAssistantMessage.includes("sewage") || lastAssistantMessage.includes("traffic") || lastAssistantMessage.includes("pollution") || lastAssistantMessage.includes("park") || lastAssistantMessage.includes("animal") || lastAssistantMessage.includes("fire")) {
        return "category";
    }
    return getNextMissingField(currentFields);
}
function applyContextualAnswer(userMessage, requestedField) {
    const text = userMessage.trim();
    if (!text || isFillerReply(text) || !requestedField) {
        return {};
    }
    switch(requestedField){
        case "category":
            {
                const category = detectCategory(text);
                if (category) return {
                    category
                };
                if (text.split(/\s+/).length <= 5) {
                    return {
                        category: titleCase(text)
                    };
                }
                return {};
            }
        case "description":
            return text.length >= 8 ? {
                description: text
            } : {};
        case "city":
            {
                const city = detectCity(text);
                if (city) return {
                    city
                };
                const beforeKeMatch = text.match(/^([a-zA-Z][a-zA-Z\s]{1,20})\s+ke\b/i);
                if (beforeKeMatch?.[1] && beforeKeMatch[1].trim().split(/\s+/).length <= 2) {
                    const fallbackCity = normalizeCityCandidate(beforeKeMatch[1]);
                    return fallbackCity ? {
                        city: fallbackCity
                    } : {};
                }
                const firstWordsMatch = text.match(/^([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:mein|me|mai)\b/i);
                if (firstWordsMatch?.[1] && firstWordsMatch[1].trim().split(/\s+/).length <= 2) {
                    const fallbackCity = normalizeCityCandidate(firstWordsMatch[1]);
                    return fallbackCity ? {
                        city: fallbackCity
                    } : {};
                }
                return {};
            }
        case "address":
        case "exactLocation":
            {
                const landmark = extractLandmark(text);
                const location = detectAddress(text) || text;
                return text.length >= 4 ? {
                    address: location,
                    exactLocation: location,
                    ...landmark ? {
                        landmark
                    } : {}
                } : {};
            }
        case "landmark":
            return text.length >= 3 ? {
                landmark: text
            } : {};
        case "pincode":
            {
                const pincode = detectPincode(text);
                return pincode ? {
                    pincode
                } : {};
            }
        case "urgency":
            {
                const urgency = detectUrgency(text);
                return urgency ? {
                    urgency
                } : {};
            }
        default:
            return {};
    }
}
function applyHeuristics(userMessage, currentFields) {
    const nextFields = {
        ...currentFields
    };
    const category = detectCategory(userMessage);
    if (!isKnownValue(nextFields.category) && category) {
        nextFields.category = category;
    }
    const pincode = detectPincode(userMessage);
    if (!isKnownValue(nextFields.pincode) && pincode) {
        nextFields.pincode = pincode;
    }
    const city = detectCity(userMessage);
    if (!isKnownValue(nextFields.city) && city) {
        nextFields.city = city;
    }
    const address = detectAddress(userMessage, {
        preciseOnly: true
    });
    if (!isKnownValue(nextFields.address) && address) {
        nextFields.address = address;
    }
    const landmark = extractLandmark(userMessage);
    if (!isKnownValue(nextFields.landmark) && landmark) {
        nextFields.landmark = landmark;
    }
    const description = detectDescription(userMessage);
    if (!isKnownValue(nextFields.description) && description) {
        nextFields.description = description;
    }
    const urgency = detectUrgency(userMessage);
    if (urgency) {
        nextFields.urgency = urgency;
    }
    return nextFields;
}
function areRequiredFieldsComplete(fields) {
    return isKnownValue(fields.category) && isKnownValue(fields.description) && isKnownValue(fields.city) && /^\d{6}$/.test(fields.pincode.trim()) && isKnownValue(fields.exactLocation);
}
function buildNextQuestion(fields) {
    if (!isKnownValue(fields.category)) {
        return "Kaunsi civic problem hai, jaise garbage, pothole, streetlight, water leakage, sewage, traffic, pollution, park, animal ya fire issue?";
    }
    if (!isKnownValue(fields.description)) {
        return "Thoda detail mein batayein, problem exactly kya hai?";
    }
    if (!isKnownValue(fields.city)) {
        return "Yeh kis city mein hai?";
    }
    if (!/^\d{6}$/.test(fields.pincode.trim())) {
        return "Wahan ka 6 digit pincode batayein.";
    }
    if (!isKnownValue(fields.exactLocation)) {
        return "Please share the exact location or nearby landmark.";
    }
    return "Dhanyavaad, maine saari details note kar li hain.";
}
function buildConfirmationMessage(fields) {
    const location = isKnownValue(fields.exactLocation) ? fields.exactLocation : fields.address;
    return `Dhanyavaad. Maine note kar liya: ${fields.category}, ${fields.city}, ${location}, pincode ${fields.pincode}.`;
}
function buildFallbackResponse(userMessage, currentFields, history) {
    const requestedField = inferRequestedField(history, currentFields);
    const contextFields = applyContextualAnswer(userMessage, requestedField);
    const heuristicFields = applyHeuristics(userMessage, mergeFields(currentFields, contextFields));
    const complete = areRequiredFieldsComplete(heuristicFields);
    return {
        agent_reply: complete ? "Dhanyavaad, maine aapki complaint ki saari zaroori details note kar li hain." : buildNextQuestion(heuristicFields),
        extracted: heuristicFields,
        complete
    };
}
function buildInitialReportQuestion(name) {
    const greeting = name?.trim() ? `Namaste ${name.trim()}. ` : "Namaste. ";
    return `${greeting}Fix My City par complaint register karne ke liye ${buildNextQuestion(normalizeReportConversationFields())}`;
}
async function advanceReportConversation({ userMessage, currentExtracted, history, modelGenerate }) {
    const trimmedUserMessage = userMessage.trim();
    const normalizedHistory = Array.isArray(history) ? history : [];
    const normalizedCurrentExtracted = normalizeReportConversationFields(currentExtracted);
    if (!trimmedUserMessage) {
        return {
            agent_reply: "Mujhe aapki baat clear nahin mili. Kripya dobara batayein.",
            extracted: normalizedCurrentExtracted,
            complete: false
        };
    }
    try {
        const requestedField = inferRequestedField(normalizedHistory, normalizedCurrentExtracted);
        const contextFields = applyContextualAnswer(trimmedUserMessage, requestedField);
        const contextualExtracted = mergeFields(normalizedCurrentExtracted, contextFields);
        const heuristicExtracted = applyHeuristics(trimmedUserMessage, contextualExtracted);
        if (requestedField && !hasFieldValue(normalizedCurrentExtracted, requestedField) && hasFieldValue(heuristicExtracted, requestedField)) {
            const complete = areRequiredFieldsComplete(heuristicExtracted);
            return {
                agent_reply: complete ? buildConfirmationMessage(heuristicExtracted) : buildNextQuestion(heuristicExtracted),
                extracted: heuristicExtracted,
                complete
            };
        }
        if (!modelGenerate) {
            return buildFallbackResponse(trimmedUserMessage, normalizedCurrentExtracted, normalizedHistory);
        }
        const historyText = normalizedHistory.map((entry)=>{
            const role = entry?.role === "user" ? "User" : "Assistant";
            return `${role}: ${entry?.content ?? ""}`;
        }).join("\n");
        const prompt = `${SYSTEM_PROMPT}

Current extracted fields:
${JSON.stringify(contextualExtracted, null, 2)}

Field currently being asked:
${requestedField ?? "none"}

${historyText ? `Conversation so far:\n${historyText}\n` : ""}Latest user message:
${trimmedUserMessage}`;
        const rawResponse = await modelGenerate({
            prompt,
            responseSchema: REPORT_RESPONSE_SCHEMA
        });
        const parsed = parseJsonResponse(rawResponse);
        const modelExtracted = normalizeReportConversationFields(parsed?.extracted);
        if (requestedField !== "exactLocation") {
            if (!isKnownValue(normalizedCurrentExtracted.exactLocation)) {
                modelExtracted.exactLocation = UNKNOWN_REPORT_VALUE;
            }
            if (isKnownValue(heuristicExtracted.address)) {
                modelExtracted.address = heuristicExtracted.address;
            } else if (!isKnownValue(normalizedCurrentExtracted.address)) {
                modelExtracted.address = UNKNOWN_REPORT_VALUE;
            }
            if (!isKnownValue(normalizedCurrentExtracted.landmark)) {
                modelExtracted.landmark = isKnownValue(heuristicExtracted.landmark) ? heuristicExtracted.landmark : UNKNOWN_REPORT_VALUE;
            }
        }
        const mergedFields = mergeFields(contextualExtracted, modelExtracted);
        const extracted = mergeFields(mergedFields, applyHeuristics(trimmedUserMessage, mergedFields));
        const complete = areRequiredFieldsComplete(extracted);
        return {
            agent_reply: complete ? buildConfirmationMessage(extracted) : buildNextQuestion(extracted),
            extracted,
            complete
        };
    } catch (error) {
        console.error("report-agent error details:", error);
        return buildFallbackResponse(trimmedUserMessage, normalizedCurrentExtracted, normalizedHistory);
    }
}
}),
"[project]/lib/server/whatsapp/reports.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendWhatsAppReportMessages",
    ()=>appendWhatsAppReportMessages,
    "upsertWhatsAppReportForSession",
    ()=>upsertWhatsAppReportForSession
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/report-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
;
;
;
function createWhatsAppReportId() {
    return `WA-${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomBytes(8).toString("hex").toUpperCase()}`;
}
async function upsertWhatsAppReportForSession({ session, phoneNumber, profileName, status = "collecting" }) {
    const normalizedPhoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(phoneNumber);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const now = new Date().toISOString();
        let report = database.whatsappReports.find((entry)=>entry.sessionToken === session.token);
        if (!report) {
            report = {
                id: createWhatsAppReportId(),
                sessionToken: session.token,
                phoneNumber: normalizedPhoneNumber,
                profileName,
                userEmail: session.userEmail,
                userName: session.userName,
                status,
                currentExtracted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeReportConversationFields"])(session.currentExtracted),
                messages: [],
                createdAt: now,
                updatedAt: now
            };
            database.whatsappReports.unshift(report);
            return report;
        }
        report.phoneNumber = normalizedPhoneNumber;
        report.profileName = profileName || report.profileName;
        report.userName = session.userName || report.userName;
        report.status = status;
        report.currentExtracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeReportConversationFields"])(session.currentExtracted);
        report.updatedAt = now;
        return report;
    });
}
async function appendWhatsAppReportMessages({ sessionToken, messages, currentExtracted, status, complaintTicketId, failureReason, imageUrl, mediaId, mediaDownloadError }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const report = database.whatsappReports.find((entry)=>entry.sessionToken === sessionToken);
        if (!report) {
            throw new Error("WhatsApp report record not found.");
        }
        report.messages.push(...messages);
        if (currentExtracted) {
            report.currentExtracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeReportConversationFields"])(currentExtracted);
        }
        if (status) {
            report.status = status;
        }
        if (complaintTicketId) {
            report.complaintTicketId = complaintTicketId;
        }
        if (failureReason) {
            report.failureReason = failureReason;
        }
        if (imageUrl) {
            report.imageUrl = imageUrl;
        }
        if (mediaId) {
            report.mediaId = mediaId;
        }
        if (mediaDownloadError) {
            report.mediaDownloadError = mediaDownloadError;
        }
        report.updatedAt = new Date().toISOString();
        return report;
    });
}
}),
"[project]/lib/server/whatsapp/media.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadAndStoreWhatsAppImage",
    ()=>downloadAndStoreWhatsAppImage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
;
;
const DEFAULT_MAX_MEDIA_BYTES = 8 * 1024 * 1024;
const SUPPORTED_IMAGE_TYPES = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp"
};
function getMaxMediaBytes() {
    const configured = Number(process.env.WHATSAPP_MAX_IMAGE_BYTES);
    return Number.isFinite(configured) && configured > 0 ? configured : DEFAULT_MAX_MEDIA_BYTES;
}
function sanitizeFileSegment(value) {
    return value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80) || "whatsapp-image";
}
function extensionForMimeType(mimeType) {
    return SUPPORTED_IMAGE_TYPES[mimeType.toLowerCase()];
}
async function getWhatsAppMediaMetadata(mediaId) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])();
    if (!config.accessToken) {
        throw new Error("WhatsApp access token is missing.");
    }
    const response = await fetch(`https://graph.facebook.com/${config.graphVersion}/${encodeURIComponent(mediaId)}`, {
        headers: {
            Authorization: `Bearer ${config.accessToken}`
        }
    });
    const data = await response.json().catch(()=>null);
    if (!response.ok || !data?.url) {
        throw new Error("Unable to read WhatsApp media metadata.");
    }
    return data;
}
async function downloadAndStoreWhatsAppImage({ mediaId, mimeType }) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])();
    const metadata = await getWhatsAppMediaMetadata(mediaId);
    const resolvedMimeType = metadata.mime_type || mimeType || "";
    const extension = extensionForMimeType(resolvedMimeType);
    if (!extension) {
        throw new Error("Unsupported WhatsApp image type.");
    }
    if (typeof metadata.file_size === "number" && metadata.file_size > getMaxMediaBytes()) {
        throw new Error("WhatsApp image is too large.");
    }
    if (!config.accessToken) {
        throw new Error("WhatsApp access token is missing.");
    }
    // Meta returns a short-lived media URL. The binary download must also include
    // the Graph API bearer token; the URL is not public and should not be stored.
    const mediaUrl = metadata.url;
    if (!mediaUrl) {
        throw new Error("WhatsApp media URL is missing.");
    }
    const mediaResponse = await fetch(mediaUrl, {
        headers: {
            Authorization: `Bearer ${config.accessToken}`
        }
    });
    if (!mediaResponse.ok) {
        throw new Error("WhatsApp image download failed.");
    }
    const contentType = mediaResponse.headers.get("content-type")?.split(";")[0].trim() || "";
    const downloadedExtension = extensionForMimeType(contentType || resolvedMimeType);
    if (!downloadedExtension) {
        throw new Error("Downloaded WhatsApp media is not a supported image.");
    }
    const bytes = Buffer.from(await mediaResponse.arrayBuffer());
    if (bytes.byteLength > getMaxMediaBytes()) {
        throw new Error("WhatsApp image is too large.");
    }
    const uploadDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", "whatsapp");
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDirectory, {
        recursive: true
    });
    const safeMediaId = sanitizeFileSegment(mediaId);
    const safeHash = sanitizeFileSegment(metadata.sha256 || Date.now().toString(36));
    const fileName = `${safeMediaId}-${safeHash}.${downloadedExtension}`;
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(uploadDirectory, fileName);
    // Local and traditional Node deployments can serve public/uploads directly.
    // Serverless production should swap this write for durable object storage.
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, bytes);
    return {
        imageUrl: `/uploads/whatsapp/${fileName}`,
        mimeType: contentType || resolvedMimeType,
        size: bytes.byteLength
    };
}
}),
"[project]/lib/gemini.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flashModel",
    ()=>flashModel,
    "genAI",
    ()=>genAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const flashModel = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});
}),
"[project]/lib/ticketId.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/lib/server/department-classifier.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFallbackDepartmentPrediction",
    ()=>buildFallbackDepartmentPrediction,
    "predictDepartmentFromInputs",
    ()=>predictDepartmentFromInputs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:child_process [external] (node:child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
;
;
;
const execFileAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__["execFile"]);
const MODEL_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "ml", "fix_my_city_model.joblib");
const SCRIPT_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "scripts", "predict_department.py");
function getPythonCommands() {
    const customPython = process.env.FIX_MY_CITY_PYTHON?.trim();
    const commands = [];
    if (customPython) {
        commands.push({
            command: customPython,
            args: []
        });
    }
    commands.push({
        command: "python",
        args: []
    }, {
        command: "python3",
        args: []
    }, {
        command: "py",
        args: [
            "-3"
        ]
    });
    return commands;
}
function getImageExtensionFromMimeType(mimeType) {
    if (mimeType.includes("png")) return ".png";
    if (mimeType.includes("webp")) return ".webp";
    if (mimeType.includes("gif")) return ".gif";
    return ".jpg";
}
function parseImagePayload(imageBase64) {
    if (!imageBase64 || !imageBase64.trim()) {
        return null;
    }
    const trimmed = imageBase64.trim();
    const dataUrlMatch = trimmed.match(/^data:(.+?);base64,(.+)$/);
    if (dataUrlMatch) {
        return {
            mimeType: dataUrlMatch[1],
            base64: dataUrlMatch[2],
            extension: getImageExtensionFromMimeType(dataUrlMatch[1])
        };
    }
    if (trimmed.startsWith("/")) {
        return null;
    }
    return {
        mimeType: "image/jpeg",
        base64: trimmed,
        extension: ".jpg"
    };
}
async function writeTempImageFile(imageBase64) {
    const parsed = parseImagePayload(imageBase64);
    if (!parsed) {
        return null;
    }
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir(), `fix-my-city-${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID()}${parsed.extension}`);
    const fileBuffer = Buffer.from(parsed.base64, "base64");
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, fileBuffer);
    return filePath;
}
function buildFallbackPrediction(department) {
    return {
        department,
        labelIdx: -1,
        confidence: 0,
        autoRoute: false,
        top3: [
            {
                department,
                confidence: 0
            }
        ],
        source: "fallback"
    };
}
async function runPythonPrediction(args) {
    let lastError;
    for (const python of getPythonCommands()){
        try {
            const { stdout } = await execFileAsync(python.command, [
                ...python.args,
                ...args
            ], {
                maxBuffer: 1024 * 1024
            });
            return stdout.trim();
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError instanceof Error ? lastError : new Error("No supported Python runtime was able to run the classifier.");
}
async function predictDepartmentFromInputs({ description, imageBase64 }) {
    const trimmedDescription = description.trim();
    if (!trimmedDescription) {
        throw new Error("Description is required for department prediction.");
    }
    const tempImagePath = await writeTempImageFile(imageBase64);
    try {
        const args = [
            SCRIPT_PATH,
            "--model",
            MODEL_PATH,
            "--description",
            trimmedDescription
        ];
        if (tempImagePath) {
            args.push("--image", tempImagePath);
        }
        const stdout = await runPythonPrediction(args);
        const parsed = JSON.parse(stdout);
        return {
            department: String(parsed?.department ?? ""),
            labelIdx: Number.isFinite(parsed?.label_idx) ? Number(parsed.label_idx) : -1,
            confidence: Number.isFinite(parsed?.confidence) ? Number(parsed.confidence) : 0,
            autoRoute: Boolean(parsed?.auto_route),
            top3: Array.isArray(parsed?.top3) ? parsed.top3.map((entry)=>({
                    department: String(entry?.department ?? ""),
                    confidence: Number.isFinite(entry?.confidence) ? Number(entry.confidence) : 0
                })) : [],
            source: "model"
        };
    } finally{
        if (tempImagePath) {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["unlink"])(tempImagePath).catch(()=>undefined);
        }
    }
}
function buildFallbackDepartmentPrediction(department) {
    return buildFallbackPrediction(department);
}
}),
"[project]/lib/server/reports.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addComplaintComment",
    ()=>addComplaintComment,
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
    ()=>pickComplaintImage,
    "toggleComplaintUpvote",
    ()=>toggleComplaintUpvote,
    "updateComplaintStatusForDepartmentAdmin",
    ()=>updateComplaintStatusForDepartmentAdmin,
    "upvoteComplaint",
    ()=>upvoteComplaint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ticketId.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/departments.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/department-classifier.ts [app-route] (ecmascript)");
;
;
;
;
;
function inferDepartment(category, description = "") {
    const normalized = `${category} ${description}`.toLowerCase();
    if (normalized.includes("general issue") || normalized.includes("general complaint") || normalized.includes("other issue")) {
        return "General Complaints Cell";
    }
    if (normalized.includes("garbage") || normalized.includes("waste") || normalized.includes("trash") || normalized.includes("dump")) {
        return "Sanitation";
    }
    if (normalized.includes("pothole") || normalized.includes("road") || normalized.includes("footpath") || normalized.includes("sidewalk")) {
        return "Public Works";
    }
    if (normalized.includes("streetlight") || normalized.includes("street light") || normalized.includes("light pole") || normalized.includes("light")) {
        return "Electricity";
    }
    if (normalized.includes("sewer") || normalized.includes("sewage") || normalized.includes("manhole") || normalized.includes("drainage") || normalized.includes("drain overflow")) {
        return "Sewerage";
    }
    if (normalized.includes("water") || normalized.includes("leak") || normalized.includes("pipeline") || normalized.includes("tap")) {
        return "Water Supply";
    }
    if (normalized.includes("signal") || normalized.includes("traffic") || normalized.includes("parking") || normalized.includes("jam")) {
        return "Traffic Police";
    }
    if (normalized.includes("encroachment") || normalized.includes("hawker") || normalized.includes("municipal")) {
        return "Municipal Corp";
    }
    if (normalized.includes("tree") || normalized.includes("park") || normalized.includes("branch") || normalized.includes("garden") || normalized.includes("playground")) {
        return "Horticulture";
    }
    if (normalized.includes("pollution") || normalized.includes("smoke") || normalized.includes("noise") || normalized.includes("air")) {
        return "Pollution Control";
    }
    if (normalized.includes("mosquito") || normalized.includes("health") || normalized.includes("stagnant")) {
        return "Health";
    }
    if (normalized.includes("illegal construction") || normalized.includes("unauthorized") || normalized.includes("building")) {
        return "Town Planning";
    }
    if (normalized.includes("animal") || normalized.includes("dog") || normalized.includes("cow") || normalized.includes("monkey")) {
        return "Animal Control";
    }
    if (normalized.includes("toilet") || normalized.includes("washroom") || normalized.includes("public sanitation")) {
        return "Public Sanitation";
    }
    if (normalized.includes("bus stop") || normalized.includes("transport") || normalized.includes("auto stand")) {
        return "Transport";
    }
    if (normalized.includes("fire") || normalized.includes("gas leak") || normalized.includes("flammable") || normalized.includes("short circuit")) {
        return "Fire Department";
    }
    return "General Complaints Cell";
}
function buildLocation(address, city, pincode, landmark) {
    return [
        address,
        landmark,
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
    let ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTicketId"])();
    while(existingTicketIds.has(ticketId)){
        ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTicketId"])();
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
function normalizeOptionalText(value) {
    const normalized = value?.trim();
    if (!normalized) return undefined;
    const lower = normalized.toLowerCase();
    if ([
        "extracting...",
        "unknown",
        "n/a",
        "na"
    ].includes(lower)) {
        return undefined;
    }
    return normalized;
}
function normalizeActorId(value) {
    return value.trim().toLowerCase();
}
function ensureEngagementFields(complaint) {
    if (!Array.isArray(complaint.likedBy)) {
        complaint.likedBy = [];
    }
    if (!Array.isArray(complaint.comments)) {
        complaint.comments = [];
    }
    // Older reports only stored a numeric upvote count. Preserve that count by
    // reserving legacy actor slots before applying the new per-user toggle model.
    const legacyUpvoteCount = Math.max(0, complaint.upvotes || 0);
    while(complaint.likedBy.length < legacyUpvoteCount){
        complaint.likedBy.push(`legacy:${complaint.ticketId}:${complaint.likedBy.length + 1}`);
    }
    complaint.upvotes = complaint.likedBy.length;
    complaint.commentsCount = complaint.comments.length;
}
function createCommentId(existingComments) {
    const existingIds = new Set(existingComments.map((comment)=>comment.id));
    let id = `CMT-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    while(existingIds.has(id)){
        id = `CMT-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    }
    return id;
}
function buildComplaintRecord(input, existingTicketIds) {
    const now = new Date().toISOString();
    const fallbackDepartment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDepartmentName"])(inferDepartment(input.category, input.description));
    const departmentPrediction = input.departmentPrediction ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFallbackDepartmentPrediction"])(fallbackDepartment);
    const assignedDepartment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDepartmentName"])(departmentPrediction.source === "model" && departmentPrediction.autoRoute ? departmentPrediction.department : fallbackDepartment);
    const officer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOfficerByDepartment"])(assignedDepartment);
    const ticketId = createUniqueTicketId(existingTicketIds);
    const status = "Submitted";
    const exactLocation = normalizeOptionalText(input.exactLocation) || input.address;
    const area = exactLocation;
    const landmark = normalizeOptionalText(input.landmark);
    const uploadedImage = normalizeOptionalText(input.imageUrl) || normalizeOptionalText(input.photoUrl);
    const photoUrl = pickComplaintImage(input.category, uploadedImage);
    return {
        ticketId,
        userEmail: input.userEmail,
        userName: input.userName,
        title: `${input.category} reported in ${input.city}`,
        category: input.category,
        description: input.description,
        address: area,
        exactLocation,
        landmark,
        city: input.city,
        pincode: input.pincode,
        location: buildLocation(exactLocation, input.city, input.pincode, landmark),
        latitude: input.latitude,
        longitude: input.longitude,
        urgency: input.urgency,
        photoUrl,
        imageUrl: uploadedImage || photoUrl,
        status,
        upvotes: 0,
        likedBy: [],
        comments: [],
        commentsCount: 0,
        assignedDepartment,
        departmentPrediction,
        officer,
        timeline: buildComplaintTimeline(now),
        createdAt: now,
        updatedAt: now
    };
}
async function resolveDepartmentPrediction(input) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["predictDepartmentFromInputs"])({
            description: input.description,
            imageBase64: input.photoUrl?.startsWith("data:") ? input.photoUrl : undefined
        });
    } catch (error) {
        console.error("department classifier error:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFallbackDepartmentPrediction"])(inferDepartment(input.category, input.description));
    }
}
async function createComplaintForUser(input) {
    const normalizedEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(input.userEmail);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])(async (database)=>{
        const user = database.users.find((entry)=>entry.email === normalizedEmail);
        if (!user) {
            throw new Error("Please sign in before submitting a complaint.");
        }
        const departmentPrediction = await resolveDepartmentPrediction(input);
        const ticketIdSet = new Set(database.complaints.map((entry)=>entry.ticketId));
        const complaint = buildComplaintRecord({
            ...input,
            userEmail: normalizedEmail,
            userName: input.userName.trim() || user.name,
            departmentPrediction
        }, ticketIdSet);
        database.complaints.unshift(complaint);
        return complaint;
    });
}
async function upvoteComplaint(ticketId) {
    const { complaint } = await toggleComplaintUpvote({
        ticketId,
        actorId: "legacy-community-user"
    });
    return complaint;
}
async function toggleComplaintUpvote(input) {
    const actorId = normalizeActorId(input.actorId);
    if (!actorId) {
        throw new Error("A user identifier is required to like an issue.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const complaint = database.complaints.find((entry)=>entry.ticketId === input.ticketId);
        if (!complaint) {
            throw new Error("Complaint not found.");
        }
        ensureEngagementFields(complaint);
        const existingIndex = complaint.likedBy.indexOf(actorId);
        const liked = existingIndex === -1;
        if (liked) {
            complaint.likedBy.push(actorId);
        } else {
            complaint.likedBy.splice(existingIndex, 1);
        }
        complaint.upvotes = complaint.likedBy.length;
        complaint.urgency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deriveUrgencyFromUpvotes"])(complaint.urgency, complaint.upvotes);
        complaint.updatedAt = new Date().toISOString();
        console.info("[community] like toggle persisted", {
            ticketId: complaint.ticketId,
            actorId,
            liked,
            upvotes: complaint.upvotes
        });
        return {
            complaint,
            liked
        };
    });
}
async function addComplaintComment(input) {
    const authorId = normalizeActorId(input.authorId);
    const authorName = input.authorName.trim();
    const body = input.body.trim();
    if (!authorId) {
        throw new Error("A user identifier is required to comment.");
    }
    if (!body) {
        throw new Error("Comment cannot be empty.");
    }
    if (body.length > 500) {
        throw new Error("Comment must be 500 characters or less.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const complaint = database.complaints.find((entry)=>entry.ticketId === input.ticketId);
        if (!complaint) {
            throw new Error("Complaint not found.");
        }
        ensureEngagementFields(complaint);
        const now = new Date().toISOString();
        const comment = {
            id: createCommentId(complaint.comments),
            authorId,
            authorName: authorName || "Community Member",
            body,
            createdAt: now
        };
        complaint.comments.push(comment);
        complaint.commentsCount = complaint.comments.length;
        complaint.updatedAt = now;
        console.info("[community] comment persisted", {
            ticketId: complaint.ticketId,
            authorId,
            commentId: comment.id,
            commentsCount: complaint.commentsCount
        });
        return {
            complaint,
            comment
        };
    });
}
const TIMELINE_SEQUENCE = [
    "Submitted",
    "Assigned",
    "In Progress",
    "Resolved"
];
function buildUpdatedTimeline(timeline, nextStatus, updatedAt) {
    const nextStatusIndex = TIMELINE_SEQUENCE.indexOf(nextStatus);
    return TIMELINE_SEQUENCE.map((status, index)=>{
        const existingItem = timeline.find((item)=>item.status === status);
        if (index < nextStatusIndex) {
            return {
                status,
                date: existingItem?.date && existingItem.date !== "Pending assignment" && existingItem.date !== "Waiting for action" && existingItem.date !== "Pending resolution" ? existingItem.date : updatedAt,
                completed: true
            };
        }
        if (index === nextStatusIndex) {
            return {
                status,
                date: updatedAt,
                completed: true
            };
        }
        if (status === "Assigned") {
            return {
                status,
                date: "Pending assignment",
                completed: false
            };
        }
        if (status === "In Progress") {
            return {
                status,
                date: "Waiting for action",
                completed: false
            };
        }
        return {
            status,
            date: "Pending resolution",
            completed: false
        };
    });
}
async function updateComplaintStatusForDepartmentAdmin(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const complaint = database.complaints.find((entry)=>entry.ticketId === input.ticketId);
        if (!complaint) {
            throw new Error("Complaint not found.");
        }
        if (complaint.assignedDepartment !== input.adminDepartment) {
            throw new Error("You can only manage complaints assigned to your department.");
        }
        const updatedAt = new Date().toISOString();
        complaint.status = input.nextStatus;
        complaint.timeline = buildUpdatedTimeline(complaint.timeline, input.nextStatus, updatedAt);
        complaint.updatedAt = updatedAt;
        return complaint;
    });
}
}),
"[project]/lib/server/whatsapp/sessions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildWhatsAppLaunchLink",
    ()=>buildWhatsAppLaunchLink,
    "buildWhatsAppStartMessage",
    ()=>buildWhatsAppStartMessage,
    "claimPendingWhatsAppSessionByStartMessage",
    ()=>claimPendingWhatsAppSessionByStartMessage,
    "claimWhatsAppSessionByToken",
    ()=>claimWhatsAppSessionByToken,
    "createWhatsAppComplaintSession",
    ()=>createWhatsAppComplaintSession,
    "extractWhatsAppSessionToken",
    ()=>extractWhatsAppSessionToken,
    "getActiveWhatsAppSessionByPhone",
    ()=>getActiveWhatsAppSessionByPhone,
    "getLatestWhatsAppSessionByPhone",
    ()=>getLatestWhatsAppSessionByPhone,
    "isCleanWhatsAppStartMessage",
    ()=>isCleanWhatsAppStartMessage,
    "saveWhatsAppSessionProgress",
    ()=>saveWhatsAppSessionProgress
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/report-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
;
;
;
;
const WHATSAPP_SESSION_TTL_MS = 1000 * 60 * 60 * 2;
const WHATSAPP_START_MESSAGE = "Hi, I want to report a civic issue on Fix My City.";
function createSessionToken() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomBytes(6).toString("hex").toUpperCase();
}
function isSessionExpired(session) {
    return Date.parse(session.expiresAt) <= Date.now();
}
function extendSessionExpiry() {
    return new Date(Date.now() + WHATSAPP_SESSION_TTL_MS).toISOString();
}
function buildWhatsAppStartMessage(token) {
    void token;
    return WHATSAPP_START_MESSAGE;
}
function buildWhatsAppLaunchLink(token) {
    const { businessNumber } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])();
    if (!businessNumber) return null;
    return `https://wa.me/${businessNumber}?text=${encodeURIComponent(buildWhatsAppStartMessage(token))}`;
}
function extractWhatsAppSessionToken(text) {
    const match = text.match(/\bFMC_START\s+([A-Z0-9-]+)/i);
    return match?.[1]?.toUpperCase();
}
function isCleanWhatsAppStartMessage(text) {
    return text.trim().toLowerCase() === WHATSAPP_START_MESSAGE.toLowerCase();
}
async function createWhatsAppComplaintSession({ userEmail, userName }) {
    const normalizedUserEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(userEmail);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const user = database.users.find((entry)=>entry.email === normalizedUserEmail);
        if (!user) {
            throw new Error("Please sign in before starting a WhatsApp complaint.");
        }
        const now = new Date().toISOString();
        const token = createSessionToken();
        const session = {
            token,
            userEmail: normalizedUserEmail,
            userName: userName.trim() || user.name,
            status: "pending_link",
            currentExtracted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeReportConversationFields"])(),
            history: [],
            createdAt: now,
            updatedAt: now,
            expiresAt: extendSessionExpiry()
        };
        database.whatsappSessions = database.whatsappSessions.filter((entry)=>entry.status === "submitted" || entry.userEmail !== normalizedUserEmail || isSessionExpired(entry));
        database.whatsappSessions.unshift(session);
        return session;
    });
}
async function claimWhatsAppSessionByToken({ token, phoneNumber, profileName }) {
    const normalizedPhoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(phoneNumber);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const session = database.whatsappSessions.find((entry)=>entry.token === token);
        if (!session) {
            throw new Error("This WhatsApp complaint link is invalid. Please start again from the app.");
        }
        if (isSessionExpired(session)) {
            session.status = "expired";
            session.updatedAt = new Date().toISOString();
            throw new Error("This WhatsApp complaint link has expired. Please start again from the app.");
        }
        if (session.phoneNumber && session.phoneNumber !== normalizedPhoneNumber) {
            throw new Error("This WhatsApp complaint link is already linked to another number.");
        }
        session.phoneNumber = normalizedPhoneNumber;
        session.status = "collecting";
        session.updatedAt = new Date().toISOString();
        session.expiresAt = extendSessionExpiry();
        if (profileName?.trim()) {
            session.userName = session.userName || profileName.trim();
        }
        return session;
    });
}
async function claimPendingWhatsAppSessionByStartMessage({ phoneNumber, profileName }) {
    const normalizedPhoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(phoneNumber);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const session = database.whatsappSessions.find((entry)=>entry.status === "pending_link" && !entry.phoneNumber && !isSessionExpired(entry));
        if (!session) {
            return null;
        }
        session.phoneNumber = normalizedPhoneNumber;
        session.status = "collecting";
        session.updatedAt = new Date().toISOString();
        session.expiresAt = extendSessionExpiry();
        if (profileName?.trim()) {
            session.userName = session.userName || profileName.trim();
        }
        return session;
    });
}
async function getActiveWhatsAppSessionByPhone(phoneNumber) {
    const normalizedPhoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(phoneNumber);
    const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
    return database.whatsappSessions.find((entry)=>entry.phoneNumber === normalizedPhoneNumber && entry.status !== "submitted" && entry.status !== "expired" && !isSessionExpired(entry));
}
async function getLatestWhatsAppSessionByPhone(phoneNumber) {
    const normalizedPhoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(phoneNumber);
    const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
    return database.whatsappSessions.find((entry)=>entry.phoneNumber === normalizedPhoneNumber && !isSessionExpired(entry));
}
async function saveWhatsAppSessionProgress({ token, currentExtracted, history, status, complaintTicketId }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const session = database.whatsappSessions.find((entry)=>entry.token === token);
        if (!session) {
            throw new Error("WhatsApp session not found.");
        }
        session.currentExtracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeReportConversationFields"])(currentExtracted);
        session.history = history;
        session.status = status;
        session.updatedAt = new Date().toISOString();
        session.expiresAt = extendSessionExpiry();
        if (complaintTicketId) {
            session.complaintTicketId = complaintTicketId;
        }
        return session;
    });
}
}),
"[project]/lib/server/whatsapp/processor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processIncomingWhatsAppMessage",
    ()=>processIncomingWhatsAppMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gemini.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/report-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/reports.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/media.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/reports.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/sessions.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const UNLINKED_SESSION_MESSAGE = "Fix My City par WhatsApp complaint start karne ke liye pehle app ke Report section se WhatsApp option open karein.";
function isKnownText(value) {
    if (!value) return false;
    const normalized = value.trim().toLowerCase();
    return ![
        "",
        "extracting...",
        "unknown",
        "n/a",
        "na"
    ].includes(normalized);
}
function buildMessageRecord(input) {
    return input;
}
function buildImageRequestMessage() {
    return "Ab complaint ki ek clear photo WhatsApp par upload kar dein. Photo milte hi main report submit kar dunga.";
}
function areReportFieldsComplete(fields) {
    return isKnownText(fields.category) && isKnownText(fields.description) && isKnownText(fields.city) && /^\d{6}$/.test(fields.pincode.trim()) && isKnownText(fields.exactLocation);
}
async function sendAndRecordReply({ to, body, sessionToken, currentExtracted, status, complaintTicketId, failureReason, mediaDownloadError }) {
    const sentAt = new Date().toISOString();
    const sent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppTextMessage"])(to, body);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendWhatsAppReportMessages"])({
        sessionToken,
        currentExtracted,
        status,
        complaintTicketId,
        failureReason,
        mediaDownloadError,
        messages: [
            buildMessageRecord({
                direction: "outgoing",
                to,
                body,
                messageId: sent.messages?.[0]?.id,
                at: sentAt
            })
        ]
    });
}
async function createComplaintFromWhatsAppSession({ session, imageUrl }) {
    const exactLocation = isKnownText(session.currentExtracted.exactLocation) ? session.currentExtracted.exactLocation : session.currentExtracted.address;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComplaintForUser"])({
        userEmail: session.userEmail,
        userName: session.userName,
        category: session.currentExtracted.category,
        description: session.currentExtracted.description,
        address: exactLocation,
        exactLocation,
        landmark: session.currentExtracted.landmark,
        city: session.currentExtracted.city,
        pincode: session.currentExtracted.pincode,
        urgency: session.currentExtracted.urgency,
        imageUrl,
        photoUrl: imageUrl,
        latitude: session.currentExtracted.latitude,
        longitude: session.currentExtracted.longitude
    });
}
async function completeComplaintIfReady({ session, to, imageUrl, historyPrefix }) {
    if (!areReportFieldsComplete(session.currentExtracted)) {
        return false;
    }
    try {
        console.info("whatsapp complaint creation started", {
            token: session.token
        });
        const complaint = await createComplaintFromWhatsAppSession({
            session,
            imageUrl
        });
        const finalReply = `Dhanyavaad! Aapki complaint submit ho gayi hai.\nTrack ID: ${complaint.ticketId}\nIsse app ke Track page par dekh sakte hain.`;
        const replyAt = new Date().toISOString();
        const finalHistory = [
            ...historyPrefix,
            {
                role: "assistant",
                content: finalReply,
                at: replyAt
            }
        ];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveWhatsAppSessionProgress"])({
            token: session.token,
            currentExtracted: session.currentExtracted,
            history: finalHistory,
            status: "submitted",
            complaintTicketId: complaint.ticketId
        });
        await sendAndRecordReply({
            to,
            body: finalReply,
            sessionToken: session.token,
            currentExtracted: session.currentExtracted,
            status: "submitted",
            complaintTicketId: complaint.ticketId
        });
        console.info("whatsapp complaint creation completed", {
            token: session.token,
            ticketId: complaint.ticketId,
            imageUrl
        });
    } catch (error) {
        const failureReason = error instanceof Error ? error.message : "Complaint creation failed.";
        console.error("whatsapp complaint creation error:", error);
        await sendAndRecordReply({
            to,
            body: `Photo mil gayi thi, lekin complaint save nahi ho saki: ${failureReason}`,
            sessionToken: session.token,
            currentExtracted: session.currentExtracted,
            status: "failed",
            failureReason
        });
    }
    return true;
}
async function startLinkedWhatsAppSession({ session, message }) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertWhatsAppReportForSession"])({
        session,
        phoneNumber: message.from,
        profileName: message.profileName,
        status: "collecting"
    });
    const now = new Date().toISOString();
    const introMessage = session.history.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildNextQuestion"])(session.currentExtracted) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildInitialReportQuestion"])(session.userName);
    const history = session.history.length > 0 ? session.history : [
        {
            role: "assistant",
            content: introMessage,
            at: now
        }
    ];
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendWhatsAppReportMessages"])({
        sessionToken: session.token,
        messages: [
            buildMessageRecord({
                direction: "incoming",
                from: message.from,
                body: message.text,
                messageId: message.messageId,
                profileName: message.profileName,
                timestamp: message.timestamp,
                at: now
            })
        ]
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveWhatsAppSessionProgress"])({
        token: session.token,
        currentExtracted: session.currentExtracted,
        history,
        status: "collecting"
    });
    await sendAndRecordReply({
        to: message.from,
        body: introMessage,
        sessionToken: session.token,
        currentExtracted: session.currentExtracted,
        status: "collecting"
    });
}
async function processIncomingWhatsAppMessage(message) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractWhatsAppSessionToken"])(message.text);
    if (token) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["claimWhatsAppSessionByToken"])({
            token,
            phoneNumber: message.from,
            profileName: message.profileName
        });
        await startLinkedWhatsAppSession({
            session,
            message
        });
        return;
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActiveWhatsAppSessionByPhone"])(message.from);
    if (!session) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCleanWhatsAppStartMessage"])(message.text)) {
            const pendingSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["claimPendingWhatsAppSessionByStartMessage"])({
                phoneNumber: message.from,
                profileName: message.profileName
            });
            if (pendingSession) {
                await startLinkedWhatsAppSession({
                    session: pendingSession,
                    message
                });
                return;
            }
        }
        const latestSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestWhatsAppSessionByPhone"])(message.from);
        if (latestSession?.status === "submitted" && latestSession.complaintTicketId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppTextMessage"])(message.from, `Aapki complaint pehle hi submit ho chuki hai. Track ID: ${latestSession.complaintTicketId}. Dhanyavaad!`);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppTextMessage"])(message.from, UNLINKED_SESSION_MESSAGE);
        return;
    }
    if (session.complaintTicketId) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppTextMessage"])(message.from, `Aapki complaint pehle hi submit ho chuki hai. Track ID: ${session.complaintTicketId}. Dhanyavaad!`);
        return;
    }
    const receivedAt = new Date().toISOString();
    let imageUrl = session.currentExtracted.imageUrl;
    let mediaDownloadError;
    if (message.type === "image") {
        if (!message.mediaId) {
            mediaDownloadError = "WhatsApp image media ID is missing.";
        } else {
            try {
                console.info("whatsapp media download started", {
                    mediaId: message.mediaId,
                    from: message.from
                });
                const storedImage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["downloadAndStoreWhatsAppImage"])({
                    mediaId: message.mediaId,
                    mimeType: message.mimeType
                });
                imageUrl = storedImage.imageUrl;
                console.info("whatsapp media download completed", {
                    mediaId: message.mediaId,
                    imageUrl,
                    size: storedImage.size
                });
            } catch (error) {
                mediaDownloadError = error instanceof Error ? error.message : "WhatsApp image download failed.";
                console.error("whatsapp media download error:", error);
            }
        }
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendWhatsAppReportMessages"])({
        sessionToken: session.token,
        imageUrl,
        mediaId: message.mediaId,
        mediaDownloadError,
        messages: [
            buildMessageRecord({
                direction: "incoming",
                from: message.from,
                body: message.text || (message.type === "image" ? "[Image uploaded]" : ""),
                messageId: message.messageId,
                mediaId: message.mediaId,
                mediaUrl: imageUrl,
                profileName: message.profileName,
                timestamp: message.timestamp,
                at: receivedAt
            })
        ]
    });
    if (mediaDownloadError) {
        await sendAndRecordReply({
            to: message.from,
            body: `${mediaDownloadError} Kripya JPG, PNG ya WebP image dobara bhejein.`,
            sessionToken: session.token,
            currentExtracted: session.currentExtracted,
            status: "collecting",
            mediaDownloadError
        });
        return;
    }
    const currentExtractedWithImage = {
        ...session.currentExtracted,
        ...imageUrl ? {
            imageUrl
        } : {}
    };
    if (message.type === "image" && !message.text.trim()) {
        const imageHistory = [
            ...session.history,
            {
                role: "user",
                content: "[Image uploaded]",
                at: receivedAt
            }
        ];
        const updatedSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveWhatsAppSessionProgress"])({
            token: session.token,
            currentExtracted: currentExtractedWithImage,
            history: imageHistory,
            status: "collecting"
        });
        if (imageUrl && await completeComplaintIfReady({
            session: updatedSession,
            to: message.from,
            imageUrl,
            historyPrefix: imageHistory
        })) {
            return;
        }
        const imageFollowUp = `Photo mil gayi hai. ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildNextQuestion"])(updatedSession.currentExtracted)}`;
        const imageFollowUpAt = new Date().toISOString();
        const imageFollowUpHistory = [
            ...imageHistory,
            {
                role: "assistant",
                content: imageFollowUp,
                at: imageFollowUpAt
            }
        ];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveWhatsAppSessionProgress"])({
            token: updatedSession.token,
            currentExtracted: updatedSession.currentExtracted,
            history: imageFollowUpHistory,
            status: "collecting"
        });
        await sendAndRecordReply({
            to: message.from,
            body: imageFollowUp,
            sessionToken: updatedSession.token,
            currentExtracted: updatedSession.currentExtracted,
            status: "collecting"
        });
        return;
    }
    const step = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["advanceReportConversation"])({
        userMessage: message.text,
        currentExtracted: currentExtractedWithImage,
        history: session.history,
        modelGenerate: async ({ prompt, responseSchema })=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flashModel"].generateContent({
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.2,
                    responseMimeType: "application/json",
                    responseSchema
                }
            });
            return result.response.text();
        }
    });
    const extractedWithImage = {
        ...step.extracted,
        ...imageUrl ? {
            imageUrl
        } : {}
    };
    let status = "collecting";
    let complaintTicketId;
    let assistantReply = step.agent_reply;
    let failureReason;
    if (step.complete) {
        if (!imageUrl) {
            assistantReply = `${step.agent_reply}\n${buildImageRequestMessage()}`;
        } else {
            try {
                console.info("whatsapp complaint creation started", {
                    token: session.token
                });
                const complaint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComplaintForUser"])({
                    userEmail: session.userEmail,
                    userName: session.userName,
                    category: step.extracted.category,
                    description: step.extracted.description,
                    address: step.extracted.exactLocation || step.extracted.address,
                    exactLocation: step.extracted.exactLocation || step.extracted.address,
                    landmark: step.extracted.landmark,
                    city: step.extracted.city,
                    pincode: step.extracted.pincode,
                    urgency: step.extracted.urgency,
                    imageUrl,
                    photoUrl: imageUrl,
                    latitude: step.extracted.latitude,
                    longitude: step.extracted.longitude
                });
                complaintTicketId = complaint.ticketId;
                status = "submitted";
                assistantReply = `${step.agent_reply}\nDhanyavaad! Aapki complaint submit ho gayi hai.\nTrack ID: ${complaint.ticketId}\nIsse app ke Track page par dekh sakte hain.`;
                console.info("whatsapp complaint creation completed", {
                    token: session.token,
                    ticketId: complaint.ticketId,
                    imageUrl
                });
            } catch (error) {
                failureReason = error instanceof Error ? error.message : "Complaint creation failed.";
                console.error("whatsapp complaint creation error:", error);
                assistantReply = error instanceof Error ? `Details mil gayi thi, lekin complaint save nahi ho saki: ${error.message}` : "Details mil gayi thi, lekin complaint save nahi ho saki. Kripya dobara koshish karein.";
            }
        }
    }
    const replyAt = new Date().toISOString();
    const nextHistory = [
        ...session.history,
        {
            role: "user",
            content: message.text,
            at: receivedAt
        },
        {
            role: "assistant",
            content: assistantReply,
            at: replyAt
        }
    ];
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveWhatsAppSessionProgress"])({
        token: session.token,
        currentExtracted: extractedWithImage,
        history: nextHistory,
        status,
        complaintTicketId
    });
    await sendAndRecordReply({
        to: message.from,
        body: assistantReply,
        sessionToken: session.token,
        currentExtracted: extractedWithImage,
        status: failureReason ? "failed" : status,
        complaintTicketId,
        failureReason
    });
}
}),
"[project]/lib/server/whatsapp/webhook.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseInboundWhatsAppMessages",
    ()=>parseInboundWhatsAppMessages,
    "verifyMetaWebhookSignature",
    ()=>verifyMetaWebhookSignature,
    "verifyWhatsAppWebhookChallenge",
    ()=>verifyWhatsAppWebhookChallenge
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
;
function verifyWhatsAppWebhookChallenge(req) {
    const verifyToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])().verifyToken;
    const mode = req.nextUrl.searchParams.get("hub.mode");
    const token = req.nextUrl.searchParams.get("hub.verify_token");
    const challenge = req.nextUrl.searchParams.get("hub.challenge");
    if (mode === "subscribe" && verifyToken && token === verifyToken && challenge) {
        return {
            ok: true,
            challenge
        };
    }
    return {
        ok: false,
        reason: "Webhook verification failed."
    };
}
function verifyMetaWebhookSignature(rawBody, signatureHeader) {
    const { appSecret } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWhatsAppConfig"])();
    if (!appSecret) {
        return true;
    }
    if (!signatureHeader?.startsWith("sha256=")) {
        return false;
    }
    const expectedSignature = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", appSecret).update(rawBody, "utf8").digest("hex");
    const actualSignature = signatureHeader.slice("sha256=".length);
    const expected = Buffer.from(expectedSignature, "hex");
    const actual = Buffer.from(actualSignature, "hex");
    // Meta signs webhook bodies with the app secret. timingSafeEqual avoids leaking
    // partial signature matches when this route is exposed publicly in production.
    return expected.length === actual.length && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].timingSafeEqual(expected, actual);
}
function parseInboundWhatsAppMessages(payload) {
    const root = payload;
    if (root?.object !== "whatsapp_business_account") {
        return [];
    }
    const messages = [];
    for (const entry of Array.isArray(root?.entry) ? root.entry : []){
        for (const change of Array.isArray(entry?.changes) ? entry.changes : []){
            const value = change?.value;
            const contacts = Array.isArray(value?.contacts) ? value.contacts : [];
            const messagesList = Array.isArray(value?.messages) ? value.messages : [];
            const nameByPhone = new Map();
            for (const contact of contacts){
                const waId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(String(contact?.wa_id ?? ""));
                const profileName = String(contact?.profile?.name ?? "").trim();
                if (waId && profileName) {
                    nameByPhone.set(waId, profileName);
                }
            }
            for (const message of messagesList){
                if (message?.type !== "text" && message?.type !== "image") {
                    continue;
                }
                const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePhoneNumber"])(String(message?.from ?? ""));
                const text = message?.type === "text" && typeof message?.text?.body === "string" ? message.text.body.trim() : typeof message?.image?.caption === "string" ? message.image.caption.trim() : "";
                if (!from) {
                    continue;
                }
                messages.push({
                    from,
                    type: message.type,
                    text,
                    messageId: typeof message?.id === "string" ? message.id : undefined,
                    profileName: nameByPhone.get(from),
                    timestamp: typeof message?.timestamp === "string" ? message.timestamp : undefined,
                    mediaId: typeof message?.image?.id === "string" ? message.image.id : undefined,
                    mimeType: typeof message?.image?.mime_type === "string" ? message.image.mime_type : undefined,
                    sha256: typeof message?.image?.sha256 === "string" ? message.image.sha256 : undefined
                });
            }
        }
    }
    return messages;
}
}),
"[project]/lib/server/whatsapp.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/reports.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/media.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$processor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/processor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/sessions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$webhook$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/webhook.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/app/api/whatsapp/session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/server/whatsapp.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/sessions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/whatsapp/config.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const userEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(String(body?.userEmail ?? ""));
        const userName = String(body?.userName ?? "").trim();
        if (!userEmail || !userName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing user details for WhatsApp launch."
            }, {
                status: 400
            });
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWhatsAppConfigured"])()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "WhatsApp integration is not configured yet. Please add the WhatsApp Cloud API environment variables first."
            }, {
                status: 503
            });
        }
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWhatsAppComplaintSession"])({
            userEmail,
            userName
        });
        const launchLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$whatsapp$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildWhatsAppLaunchLink"])(session.token);
        if (!launchLink) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "WhatsApp business number is missing."
            }, {
                status: 503
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            expiresAt: session.expiresAt,
            launchLink
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to start the WhatsApp complaint flow."
        }, {
            status: 400
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bcf431ae._.js.map