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
    "general complaints cell": "General Complaints Cell"
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
    if (database.users.length === 0 && database.complaints.length === 0) {
        database.users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSeedAdminUsers"])();
        database.complaints = [];
        database.whatsappSessions = [];
        return true;
    }
    const hasLegacyAdmin = database.users.some((user)=>user.role === "admin" && (!user.department || user.email === "admin@fixmycity.com" || user.name === "City Admin"));
    if (!hasLegacyAdmin) {
        return false;
    }
    database.users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSeedAdminUsers"])();
    database.complaints = [];
    database.whatsappSessions = [];
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
    if (normalized.includes("garbage") || normalized.includes("waste") || normalized.includes("trash")) {
        return "Sanitation";
    }
    if (normalized.includes("pothole") || normalized.includes("road") || normalized.includes("footpath")) {
        return "Public Works";
    }
    if (normalized.includes("streetlight") || normalized.includes("street light") || normalized.includes("light")) {
        return "Electricity";
    }
    if (normalized.includes("sewer") || normalized.includes("sewage") || normalized.includes("manhole") || normalized.includes("drainage")) {
        return "Sewerage";
    }
    if (normalized.includes("water") || normalized.includes("leak") || normalized.includes("pipeline") || normalized.includes("tap")) {
        return "Water Supply";
    }
    if (normalized.includes("signal") || normalized.includes("traffic") || normalized.includes("parking")) {
        return "Traffic Police";
    }
    if (normalized.includes("encroachment") || normalized.includes("hawker") || normalized.includes("municipal")) {
        return "Municipal Corp";
    }
    if (normalized.includes("tree") || normalized.includes("park") || normalized.includes("branch") || normalized.includes("garden")) {
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
    if (normalized.includes("animal") || normalized.includes("dog") || normalized.includes("cow")) {
        return "Animal Control";
    }
    if (normalized.includes("toilet") || normalized.includes("washroom") || normalized.includes("public sanitation")) {
        return "Public Sanitation";
    }
    if (normalized.includes("bus stop") || normalized.includes("transport") || normalized.includes("auto stand")) {
        return "Transport";
    }
    if (normalized.includes("fire") || normalized.includes("gas leak") || normalized.includes("flammable")) {
        return "Fire Department";
    }
    return "Municipal Corp";
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
function buildComplaintRecord(input, existingTicketIds) {
    const now = new Date().toISOString();
    const fallbackDepartment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDepartmentName"])(inferDepartment(input.category, input.description));
    const departmentPrediction = input.departmentPrediction ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFallbackDepartmentPrediction"])(fallbackDepartment);
    const assignedDepartment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeDepartmentName"])(departmentPrediction.source === "model" && departmentPrediction.autoRoute ? departmentPrediction.department : fallbackDepartment);
    const officer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOfficerByDepartment"])(assignedDepartment);
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
            imageBase64: input.photoUrl
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDatabase"])((database)=>{
        const complaint = database.complaints.find((entry)=>entry.ticketId === ticketId);
        if (!complaint) {
            throw new Error("Complaint not found.");
        }
        complaint.upvotes += 1;
        complaint.urgency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$departments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deriveUrgencyFromUpvotes"])(complaint.urgency, complaint.upvotes);
        complaint.updatedAt = new Date().toISOString();
        return complaint;
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
"[project]/app/api/reports/[ticketId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/reports.ts [app-route] (ecmascript)");
;
;
;
;
async function GET(req, context) {
    try {
        const { ticketId } = await context.params;
        const normalizedTicketId = decodeURIComponent(ticketId);
        const userEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(req.nextUrl.searchParams.get("userEmail") ?? "");
        const role = req.nextUrl.searchParams.get("role");
        const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
        const complaint = database.complaints.find((entry)=>entry.ticketId === normalizedTicketId);
        if (!complaint) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Complaint not found."
            }, {
                status: 404
            });
        }
        if (role !== "admin" && complaint.userEmail !== userEmail) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "You can only track complaints filed from your own account."
            }, {
                status: 403
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            report: complaint
        });
    } catch (error) {
        console.error("report get error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to load complaint."
        }, {
            status: 500
        });
    }
}
async function PATCH(req, context) {
    try {
        const { ticketId } = await context.params;
        const normalizedTicketId = decodeURIComponent(ticketId);
        const body = await req.json().catch(()=>({}));
        if (body?.action === "upvote") {
            const report = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upvoteComplaint"])(normalizedTicketId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                report
            });
        }
        if (body?.action === "update-status") {
            const nextStatus = String(body?.status ?? "");
            const adminDepartment = String(body?.adminDepartment ?? "").trim();
            if (!adminDepartment) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Admin department is required."
                }, {
                    status: 400
                });
            }
            if (![
                "Submitted",
                "Assigned",
                "In Progress",
                "Resolved"
            ].includes(nextStatus)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "Invalid complaint status."
                }, {
                    status: 400
                });
            }
            const report = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateComplaintStatusForDepartmentAdmin"])({
                ticketId: normalizedTicketId,
                nextStatus,
                adminDepartment
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                report
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Unsupported report action."
        }, {
            status: 400
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Failed to update complaint."
        }, {
            status: 400
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34a5389e._.js.map