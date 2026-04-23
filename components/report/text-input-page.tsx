"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useReport } from "@/lib/report-context"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function TextInputPage() {
  const router = useRouter()
  const { reportData, updateReportData } = useReport()
  const [description, setDescription] = useState(reportData.description || "")

  const handleNext = () => {
    if (description.trim()) {
      updateReportData({ description })
      router.push("/report/photo")
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Describe the Issue</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Provide as much detail as possible so we can categorize and address it quickly
        </p>

        <div className="bg-card rounded-xl p-6 border border-border mb-8">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue you want to report... Include location, type, and any other relevant details."
            className="w-full h-40 p-4 rounded-lg bg-background border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* AI Tip */}
          <div className="mt-4 p-3 bg-secondary rounded-lg text-sm text-muted-foreground">
            💡 <strong>AI Tip:</strong> Our AI will automatically detect the issue category, location, and urgency
            level.
          </div>
        </div>

        {/* Character count */}
        <div className="text-right text-sm text-muted-foreground mb-8">{description.length} characters</div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="flex-1 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!description.trim()}
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
