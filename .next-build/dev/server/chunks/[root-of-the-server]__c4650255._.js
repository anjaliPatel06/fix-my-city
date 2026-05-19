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
"[project]/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const { email, password, role } = await req.json();
        const normalizedEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(String(email ?? ""));
        const passwordHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(String(password ?? ""));
        const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
        const matchedUser = database.users.find((user)=>user.email === normalizedEmail);
        if (!matchedUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "No account found with this email."
            }, {
                status: 404
            });
        }
        if (matchedUser.role !== role) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: role === "admin" ? "This account does not have admin access." : "Please choose the correct login type for this account."
            }, {
                status: 403
            });
        }
        if (matchedUser.passwordHash !== passwordHash) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Incorrect password."
            }, {
                status: 401
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeUser"])(matchedUser),
            profile: matchedUser.profile
        });
    } catch (error) {
        console.error("login error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Login failed."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c4650255._.js.map