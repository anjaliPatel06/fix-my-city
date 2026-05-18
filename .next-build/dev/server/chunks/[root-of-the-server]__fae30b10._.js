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
    const categoryMatchers = [
        {
            keywords: [
                "garbage",
                "kachra",
                "waste",
                "trash"
            ],
            category: "Garbage"
        },
        {
            keywords: [
                "pothole",
                "gadda",
                "road damage"
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
            category: "Broken Streetlight"
        },
        {
            keywords: [
                "water leakage",
                "water leak",
                "paani leak",
                "pipeline",
                "sewer",
                "drain"
            ],
            category: "Water Leakage"
        },
        {
            keywords: [
                "traffic signal",
                "signal",
                "red light"
            ],
            category: "Traffic Signal Issue"
        },
        {
            keywords: [
                "dog",
                "stray animal",
                "animal",
                "cow",
                "monkey"
            ],
            category: "Stray Animals"
        }
    ];
    const matchedCategory = categoryMatchers.find(({ keywords })=>keywords.some((keyword)=>text.includes(keyword)));
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
function detectAddress(message) {
    const text = message.trim();
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
    if (addressHints.some((hint)=>text.toLowerCase().includes(hint))) {
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
  "address": "If any landmarks, street signs, or shop names are visible, extract them. Otherwise write 'Extracting...'",
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

//# sourceMappingURL=%5Broot-of-the-server%5D__fae30b10._.js.map