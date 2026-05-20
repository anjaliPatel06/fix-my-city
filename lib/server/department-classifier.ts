import crypto from "node:crypto";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { unlink, writeFile } from "node:fs/promises";
import type { DepartmentPrediction } from "@/lib/types";

const execFileAsync = promisify(execFile);

const MODEL_PATH = path.join(process.cwd(), "ml", "fix_my_city_model.joblib");
const SCRIPT_PATH = path.join(process.cwd(), "scripts", "predict_department.py");

type PythonCommand = {
  command: string;
  args: string[];
};

function getPythonCommands(): PythonCommand[] {
  const customPython = process.env.FIX_MY_CITY_PYTHON?.trim();
  const commands: PythonCommand[] = [];

  if (customPython) {
    commands.push({ command: customPython, args: [] });
  }

  commands.push(
    { command: "python", args: [] },
    { command: "python3", args: [] },
    { command: "py", args: ["-3"] },
  );

  return commands;
}

function getImageExtensionFromMimeType(mimeType: string) {
  if (mimeType.includes("png")) return ".png";
  if (mimeType.includes("webp")) return ".webp";
  if (mimeType.includes("gif")) return ".gif";
  return ".jpg";
}

function parseImagePayload(imageBase64?: string) {
  if (!imageBase64 || !imageBase64.trim()) {
    return null;
  }

  const trimmed = imageBase64.trim();
  const dataUrlMatch = trimmed.match(/^data:(.+?);base64,(.+)$/);

  if (dataUrlMatch) {
    return {
      mimeType: dataUrlMatch[1],
      base64: dataUrlMatch[2],
      extension: getImageExtensionFromMimeType(dataUrlMatch[1]),
    };
  }

  if (trimmed.startsWith("/")) {
    return null;
  }

  return {
    mimeType: "image/jpeg",
    base64: trimmed,
    extension: ".jpg",
  };
}

async function writeTempImageFile(imageBase64?: string) {
  const parsed = parseImagePayload(imageBase64);

  if (!parsed) {
    return null;
  }

  const filePath = path.join(
    os.tmpdir(),
    `fix-my-city-${crypto.randomUUID()}${parsed.extension}`,
  );
  const fileBuffer = Buffer.from(parsed.base64, "base64");
  await writeFile(filePath, fileBuffer);

  return filePath;
}

function buildFallbackPrediction(department: string): DepartmentPrediction {
  return {
    department,
    labelIdx: -1,
    confidence: 0,
    autoRoute: false,
    top3: [{ department, confidence: 0 }],
    source: "fallback",
  };
}

async function runPythonPrediction(args: string[]) {
  let lastError: unknown;

  for (const python of getPythonCommands()) {
    try {
      const { stdout } = await execFileAsync(python.command, [...python.args, ...args], {
        maxBuffer: 1024 * 1024,
      });

      return stdout.trim();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("No supported Python runtime was able to run the classifier.");
}

export async function predictDepartmentFromInputs({
  description,
  imageBase64,
}: {
  description: string;
  imageBase64?: string;
}): Promise<DepartmentPrediction> {
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
      trimmedDescription,
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
      top3: Array.isArray(parsed?.top3)
        ? parsed.top3.map((entry: any) => ({
            department: String(entry?.department ?? ""),
            confidence: Number.isFinite(entry?.confidence) ? Number(entry.confidence) : 0,
          }))
        : [],
      source: "model",
    };
  } finally {
    if (tempImagePath) {
      await unlink(tempImagePath).catch(() => undefined);
    }
  }
}

export function buildFallbackDepartmentPrediction(department: string) {
  return buildFallbackPrediction(department);
}
