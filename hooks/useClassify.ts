import { useState } from "react";

interface ClassifyResult {
  category: string;
  department: string;
  address: string;
  city: string;
  pincode: string;
  description: string;
  urgency: "high" | "medium" | "low";
  confidence: number;
}

export function useClassify() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ClassifyResult | null>(null);

  async function classify(description: string, imageFile?: File) {
    setLoading(true);
    setError(null);

    try {
      let imageBase64: string | undefined;
      let mediaType: string | undefined;

      if (imageFile) {
        mediaType = imageFile.type;
        imageBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve((reader.result as string).split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(imageFile);
        });
      }

      const res = await fetch("/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, imageBase64, mediaType }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.error);

      setResult(json.data);
      return json.data as ClassifyResult;
    } catch (err: any) {
      setError(err.message || "Classification failed");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { classify, loading, error, result };
}