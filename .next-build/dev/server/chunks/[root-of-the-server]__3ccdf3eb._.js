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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
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
    const adminEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].email);
    const existingAdmin = database.users.find((user)=>user.email === adminEmail);
    if (existingAdmin) {
        return false;
    }
    const now = new Date().toISOString();
    const adminUser = {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].name,
        email: adminEmail,
        role: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].role,
        passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEMO_ADMIN"].password),
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
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

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
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
;
;
;
;
const execFileAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__["execFile"]);
const MODEL_CANDIDATE_PATHS = [
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "ml", "fix_my_city_model.pkl"),
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "ml", "fix_my_city_model.joblib")
];
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
function resolveModelPath() {
    for (const candidatePath of MODEL_CANDIDATE_PATHS){
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(candidatePath)) {
            return candidatePath;
        }
    }
    throw new Error("No department classifier model file was found in the ml directory.");
}
async function predictDepartmentFromInputs({ description, imageBase64 }) {
    const trimmedDescription = description.trim();
    if (!trimmedDescription) {
        throw new Error("Description is required for department prediction.");
    }
    const tempImagePath = await writeTempImageFile(imageBase64);
    try {
        const modelPath = resolveModelPath();
        const args = [
            SCRIPT_PATH,
            "--model",
            modelPath,
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
    ()=>pickComplaintImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ticketId$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ticketId.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/department-classifier.ts [app-route] (ecmascript)");
;
;
;
;
const OFFICERS_BY_DEPARTMENT = {
    "Public Works": {
        name: "Rajesh Kumar",
        role: "Road Maintenance Officer",
        phone: "+91 98765 12002"
    },
    "Sanitation": {
        name: "Anita Verma",
        role: "Sanitation Officer",
        phone: "+91 98765 12001"
    },
    "Electricity": {
        name: "Neha Singh",
        role: "Electrical Inspector",
        phone: "+91 98765 12003"
    },
    "Water Supply": {
        name: "Mohit Sharma",
        role: "Water Supply Officer",
        phone: "+91 98765 12004"
    },
    "Sewerage": {
        name: "Kavita Rao",
        role: "Sewerage Response Officer",
        phone: "+91 98765 12008"
    },
    "Traffic Police": {
        name: "Pooja Nair",
        role: "Traffic Control Officer",
        phone: "+91 98765 12005"
    },
    "Municipal Corp": {
        name: "Sonal Gupta",
        role: "Municipal Complaints Officer",
        phone: "+91 98765 12007"
    },
    "Horticulture": {
        name: "Amit Yadav",
        role: "Horticulture Officer",
        phone: "+91 98765 12009"
    },
    "Pollution Control": {
        name: "Farah Ali",
        role: "Pollution Control Inspector",
        phone: "+91 98765 12010"
    },
    "Health": {
        name: "Drishti Mehta",
        role: "Public Health Officer",
        phone: "+91 98765 12011"
    },
    "Town Planning": {
        name: "Vivek Sinha",
        role: "Town Planning Officer",
        phone: "+91 98765 12012"
    },
    "Animal Control": {
        name: "Rohit Das",
        role: "Animal Care Officer",
        phone: "+91 98765 12006"
    },
    "Public Sanitation": {
        name: "Nitin Bansal",
        role: "Public Sanitation Officer",
        phone: "+91 98765 12013"
    },
    "Transport": {
        name: "Meera Joseph",
        role: "Transport Operations Officer",
        phone: "+91 98765 12014"
    },
    "Fire Department": {
        name: "Arjun Patel",
        role: "Fire Safety Officer",
        phone: "+91 98765 12015"
    },
    "General Complaints Cell": {
        name: "Sonal Gupta",
        role: "Complaint Resolution Officer",
        phone: "+91 98765 12007"
    }
};
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
    const fallbackDepartment = inferDepartment(input.category, input.description);
    const departmentPrediction = input.departmentPrediction ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFallbackDepartmentPrediction"])(fallbackDepartment);
    const assignedDepartment = departmentPrediction.source === "model" && departmentPrediction.autoRoute ? departmentPrediction.department : fallbackDepartment;
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
}),
"[project]/app/api/reports/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/database.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/reports.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
async function POST(req) {
    try {
        const body = await req.json();
        const userEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeEmail"])(String(body?.userEmail ?? ""));
        const userName = String(body?.userName ?? "").trim();
        const category = String(body?.category ?? "").trim();
        const description = String(body?.description ?? "").trim();
        const address = String(body?.address ?? "").trim();
        const city = String(body?.city ?? "").trim();
        const pincode = String(body?.pincode ?? "").trim();
        const urgency = body?.urgency === "High" || body?.urgency === "Low" ? body.urgency : "Medium";
        const photoUrl = typeof body?.photoUrl === "string" ? body.photoUrl : undefined;
        if (!userEmail || !userName || !category || !description || !address || !city || !pincode) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing required complaint details."
            }, {
                status: 400
            });
        }
        const complaint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$reports$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComplaintForUser"])({
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            ticketId: complaint.ticketId,
            report: complaint
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : "Report creation failed."
        }, {
            status: 400
        });
    }
}
async function GET() {
    try {
        const database = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDatabase"])();
        const reports = [
            ...database.complaints
        ].sort((a, b)=>b.createdAt.localeCompare(a.createdAt));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            reports
        });
    } catch (error) {
        console.error("reports get error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to load reports."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ccdf3eb._.js.map