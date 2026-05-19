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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

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
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

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
"[project]/lib/server/report-extraction.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectAddress",
    ()=>detectAddress,
    "detectCategory",
    ()=>detectCategory,
    "detectCity",
    ()=>detectCity,
    "detectPincode",
    ()=>detectPincode,
    "detectUrgency",
    ()=>detectUrgency,
    "extractReportFieldsFromText",
    ()=>extractReportFieldsFromText,
    "normalizeExtractedReportFields",
    ()=>normalizeExtractedReportFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/report-agent.ts [app-route] (ecmascript)");
;
const UNKNOWN_VALUE = "Extracting...";
function titleCase(value) {
    return value.toLowerCase().split(/\s+/).filter(Boolean).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function normalizeDigits(value) {
    return value.replace(/[\u0966]/g, "0").replace(/[\u0967]/g, "1").replace(/[\u0968]/g, "2").replace(/[\u0969]/g, "3").replace(/[\u096A]/g, "4").replace(/[\u096B]/g, "5").replace(/[\u096C]/g, "6").replace(/[\u096D]/g, "7").replace(/[\u096E]/g, "8").replace(/[\u096F]/g, "9");
}
function pickKnownString(...values) {
    for (const value of values){
        if (typeof value !== "string") continue;
        const trimmed = value.trim();
        if (trimmed && trimmed.toLowerCase() !== "unknown" && trimmed.toLowerCase() !== "extracting...") {
            return trimmed;
        }
    }
    return undefined;
}
function detectCategory(message) {
    const text = message.toLowerCase();
    const matchedCategory = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["REPORT_CATEGORY_MATCHERS"].find(({ keywords })=>keywords.some((keyword)=>text.includes(keyword)));
    return matchedCategory?.category;
}
function detectUrgency(message) {
    const text = message.toLowerCase();
    if (text.includes("urgent") || text.includes("emergency") || text.includes("danger") || text.includes("jaldi") || text.includes("serious") || text.includes("accident")) {
        return "High";
    }
    if (text.includes("minor") || text.includes("small") || text.includes("normal")) {
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
    return undefined;
}
function detectCity(message) {
    const trimmed = message.trim();
    if (!trimmed) return undefined;
    const explicitMatch = trimmed.match(/(?:city|shehar|shahar|in)\s*(?:is|hai|=|:)?\s*([a-zA-Z][a-zA-Z\s]{1,40})/i);
    if (explicitMatch?.[1]) {
        return titleCase(explicitMatch[1].trim());
    }
    const cityBeforeAreaMatch = trimmed.match(/([a-zA-Z][a-zA-Z\s]{1,20})\s+(?:area|road|street|sector|colony|nagar|gali|chowk)/i);
    if (cityBeforeAreaMatch?.[1] && cityBeforeAreaMatch[1].trim().split(/\s+/).length <= 2) {
        return titleCase(cityBeforeAreaMatch[1].trim());
    }
    return undefined;
}
function cleanLocationCandidate(value) {
    if (!value) return undefined;
    const cleaned = titleCase(value.replace(/\b(?:causing|create|creating|due|because|with|especially|during|increase|risk|accidents?|traffic|congestion|hai|is|are|on|for)\b.*$/i, "").replace(/[.,;].*$/, "").replace(/\s+/g, " ").trim());
    return cleaned.length >= 3 ? cleaned : undefined;
}
function detectAddress(message) {
    const text = message.trim();
    const landmarkMatch = text.match(/\b(?:near|opposite|behind|landmark|beside|next to)\s+(.{3,80})/i);
    const landmark = cleanLocationCandidate(landmarkMatch?.[1]);
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
        "behind",
        "beside"
    ];
    if (addressHints.some((hint)=>text.toLowerCase().includes(hint)) && text.split(/\s+/).length <= 8) {
        return text;
    }
    return undefined;
}
function normalizeExtractedReportFields(input) {
    return {
        category: pickKnownString(input?.category) ?? "Unknown",
        description: pickKnownString(input?.description) ?? UNKNOWN_VALUE,
        address: pickKnownString(input?.address) ?? UNKNOWN_VALUE,
        city: pickKnownString(input?.city) ?? UNKNOWN_VALUE,
        pincode: pickKnownString(input?.pincode) ?? UNKNOWN_VALUE,
        urgency: input?.urgency === "High" || input?.urgency === "Low" ? input.urgency : "Medium"
    };
}
function extractReportFieldsFromText(description, existingFields) {
    const text = description.trim();
    const existing = normalizeExtractedReportFields(existingFields);
    return {
        category: pickKnownString(existing.category, detectCategory(text)) ?? "Unknown",
        description: pickKnownString(text, existing.description) ?? UNKNOWN_VALUE,
        address: pickKnownString(existing.address, detectAddress(text)) ?? UNKNOWN_VALUE,
        city: pickKnownString(existing.city, detectCity(text)) ?? UNKNOWN_VALUE,
        pincode: pickKnownString(existing.pincode, detectPincode(text)) ?? UNKNOWN_VALUE,
        urgency: detectUrgency(text) ?? existing.urgency ?? "Medium"
    };
}
}),
"[project]/app/api/analyze-photo/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gemini.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/department-classifier.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$extraction$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/report-extraction.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
const SYSTEM_PROMPT = `You are a civic issue analyzer. Look at the image provided and combine it with any user-written complaint details.
Return ONLY valid JSON (no markdown tags like \`\`\`json).
Format:
{
  "category": "e.g., Pothole, Garbage, Stray Animals, Broken Streetlight, etc. If unknown or not a civic issue, write 'Unknown'",
  "description": "A brief 2-3 sentence description of the problem seen in the image.",
  "urgency": "High", // High, Medium, or Low based on danger or impact
  "address": "Exact area, landmark, street sign, or shop name only. Never put the issue description here. Otherwise write 'Extracting...'",
  "exactLocation": "Same exact area/landmark value as address when known. Otherwise write 'Extracting...'",
  "city": "If discernible from signs, else 'Extracting...'",
  "pincode": "If discernible, else 'Extracting...'"
}

Rules:
- Use both the photo and the user's written report together.
- If the text provides location details like area, city, landmark, or pincode, prefer those over guessing from the image.
- Only return 'Extracting...' when the detail is missing in both image and text.
- If the typed description clearly names the issue, location, severity, or surroundings, use that information confidently.
`;
function cleanJsonResponse(rawText) {
    const trimmed = rawText.trim().replace(/```json|```/gi, "").trim();
    const startIndex = trimmed.indexOf("{");
    const endIndex = trimmed.lastIndexOf("}");
    if (startIndex === -1 || endIndex === -1) {
        throw new Error("Invalid format returned");
    }
    return JSON.parse(trimmed.substring(startIndex, endIndex + 1));
}
function normalizeExtractedValue(value, fallback = "Extracting...") {
    if (typeof value !== "string") return fallback;
    const trimmed = value.trim();
    if (!trimmed) return fallback;
    return trimmed;
}
function normalizeUrgency(value) {
    if (typeof value !== "string") return "Medium";
    const normalized = value.trim().toLowerCase();
    if (normalized === "high") return "High";
    if (normalized === "low") return "Low";
    return "Medium";
}
async function POST(req) {
    try {
        const body = await req.json();
        const { imageBase64 } = body;
        const description = typeof body?.description === "string" ? body.description.trim() : "";
        const existingFields = typeof body?.existingFields === "object" && body?.existingFields !== null ? body.existingFields : {};
        if (!imageBase64) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "No image provided"
            }, {
                status: 400
            });
        }
        const textFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$extraction$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractReportFieldsFromText"])(description, existingFields);
        const contextPrompt = `User complaint text:
${description || "No typed description provided."}

Existing extracted fields from the report flow:
${JSON.stringify(existingFields, null, 2)}

Use the complaint text, existing fields, and image together to extract the best final details.`;
        let parsed = {};
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flashModel"].generateContent({
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: SYSTEM_PROMPT
                            },
                            {
                                text: contextPrompt
                            },
                            {
                                inlineData: {
                                    data: imageBase64.split(",")[1],
                                    mimeType: imageBase64.substring(imageBase64.indexOf(":") + 1, imageBase64.indexOf(";"))
                                }
                            }
                        ]
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            });
            parsed = cleanJsonResponse(result.response.text());
        } catch (modelError) {
            console.error("Gemini photo extraction failed, using text fallback:", modelError);
        }
        const mergedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$report$2d$extraction$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeExtractedReportFields"])({
            category: normalizeExtractedValue(parsed?.category, "Unknown") !== "Unknown" ? normalizeExtractedValue(parsed?.category, "Unknown") : textFallback.category,
            description: normalizeExtractedValue(parsed?.description) !== "Extracting..." ? normalizeExtractedValue(parsed?.description) : textFallback.description,
            urgency: normalizeUrgency(parsed?.urgency || textFallback.urgency),
            address: normalizeExtractedValue(parsed?.address) !== "Extracting..." ? normalizeExtractedValue(parsed?.address) : textFallback.address,
            city: normalizeExtractedValue(parsed?.city) !== "Extracting..." ? normalizeExtractedValue(parsed?.city) : textFallback.city,
            pincode: normalizeExtractedValue(parsed?.pincode) !== "Extracting..." ? normalizeExtractedValue(parsed?.pincode) : textFallback.pincode
        });
        let departmentPrediction = null;
        try {
            const classifierDescription = description || String(mergedData?.description ?? "").trim();
            if (classifierDescription) {
                departmentPrediction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$department$2d$classifier$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["predictDepartmentFromInputs"])({
                    description: classifierDescription,
                    imageBase64
                });
            }
        } catch (classifierError) {
            console.error("Photo department classification error:", classifierError);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                ...mergedData,
                exactLocation: mergedData.address,
                departmentPrediction
            }
        });
    } catch (err) {
        console.error("Photo analysis error:", err?.message || err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err?.message || "Failed to analyze photo"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6fac9007._.js.map