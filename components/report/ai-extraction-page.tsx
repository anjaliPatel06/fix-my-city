"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useReport } from "@/lib/report-context"
import { ArrowLeft, ArrowRight, Edit2, Loader } from "lucide-react"

interface ExtractedField {
  label: string
  value: string
  confidence?: number
  editable?: boolean
}

export function AIExtractionPage() {
  const router = useRouter()
  const { reportData, updateReportData } = useReport()
  const [isProcessing, setIsProcessing] = useState(true)
  const [editingField, setEditingField] = useState<string | null>(null)
  const [fields, setFields] = useState<Record<string, string>>({
    category: "Pothole - Road Damage",
    address: "Main Street, Market Area",
    city: "Mumbai",
    pincode: "400001",
    description: reportData.description || "Large pothole causing traffic issues",
    urgency: "High",
  })

  useEffect(() => {
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
  }, [])

  const handleFieldChange = (field: string, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    updateReportData({
      category: fields.category,
      address: fields.address,
      city: fields.city,
      pincode: fields.pincode,
      description: fields.description,
      urgency: fields.urgency as "Low" | "Medium" | "High",
    })
    router.push("/report/review")
  }

  const confidenceScores: Record<string, number> = {
    category: 95,
    address: 88,
    city: 92,
    pincode: 85,
    description: 98,
    urgency: 90,
  }

  if (isProcessing) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 w-full text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Loader className="w-8 h-8 text-primary animate-spin" />
          </div>
          <h1 className="text-3xl font-bold mb-2">AI is Processing Your Report</h1>
          <p className="text-muted-foreground">Our AI is analyzing your photo and extracting key information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">AI-Detected Details</h1>
        <p className="text-lg text-muted-foreground mb-8">Review and edit the auto-filled information if needed</p>

        {/* Warning Box */}
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 dark:border-yellow-800 rounded-xl p-4 mb-8 flex gap-3">
          <span className="text-lg flex-shrink-0">⚠️</span>
          <p className="text-sm text-yellow-900 dark:text-yellow-200">
            <strong>Note:</strong> AI can make mistakes. Please review and adjust the details below if needed.
          </p>
        </div>

        {/* Fields */}
        <div className="space-y-4 mb-8">
          {Object.entries(fields).map(([field, value]) => (
            <div key={field} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-muted-foreground uppercase">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <div className="flex items-center gap-2">
                  {confidenceScores[field] && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                      {confidenceScores[field]}% confident
                    </span>
                  )}
                  <button
                    onClick={() => setEditingField(editingField === field ? null : field)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {editingField === field ? (
                <div className="flex gap-2">
                  {field === "urgency" ? (
                    <select
                      value={value}
                      onChange={(e) => handleFieldChange(field, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleFieldChange(field, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  )}
                  <button
                    onClick={() => setEditingField(null)}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <p className="text-foreground font-medium">{value}</p>
              )}
            </div>
          ))}
        </div>

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
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
