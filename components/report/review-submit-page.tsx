"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useReport } from "@/lib/report-context"
import { ArrowLeft, ArrowRight, Edit2 } from "lucide-react"

export function ReviewSubmitPage() {
  const router = useRouter()
  const { reportData, updateReportData } = useReport()
  const [editingField, setEditingField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [data, setData] = useState(reportData)

  const handleFieldChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    updateReportData(data)

    // Simulate API call
    setTimeout(() => {
      const tokenId = `FIXC${Date.now().toString().slice(-6).toUpperCase()}`
      updateReportData({ tokenId })
      router.push(`/report/success?token=${tokenId}`)
    }, 1500)
  }

  const urgencyColors: Record<string, string> = {
    Low: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    Medium: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Review Your Report</h1>
        <p className="text-lg text-muted-foreground mb-8">Make sure everything is correct before submitting</p>

        {/* Note about AI-filled data */}
        <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-400 dark:border-blue-800 rounded-xl p-4 mb-8 flex gap-3">
          <span className="text-lg flex-shrink-0">ℹ️</span>
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Note:</strong> These details were filled automatically from your AI call. Review and correct if
            needed.
          </p>
        </div>

        {/* Photo Preview */}
        {data.photoUrl && (
          <div className="bg-card rounded-xl p-6 border border-border mb-8">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Photo</p>
            <img
              src={data.photoUrl || "/placeholder.svg"}
              alt="Report"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Details */}
        <div className="space-y-4 mb-8">
          {[
            { key: "category", label: "Category" },
            { key: "address", label: "Address" },
            { key: "city", label: "City" },
            { key: "pincode", label: "Pincode" },
            { key: "description", label: "Description" },
            { key: "urgency", label: "Urgency Level" },
          ].map(({ key, label }) => (
            <div key={key} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-muted-foreground uppercase">{label}</label>
                <button
                  onClick={() => setEditingField(editingField === key ? null : key)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {editingField === key ? (
                <div className="flex gap-2">
                  {key === "urgency" ? (
                    <select
                      value={data[key as keyof typeof data] || ""}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  ) : (
                    <textarea
                      value={data[key as keyof typeof data] || ""}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-background border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={key === "description" ? 3 : 1}
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
                <div>
                  {key === "urgency" ? (
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${urgencyColors[data.urgency || "Low"]}`}
                    >
                      {data.urgency}
                    </span>
                  ) : (
                    <p className="text-foreground font-medium whitespace-pre-wrap">{data[key as keyof typeof data]}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="flex-1 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <ArrowRight className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Report
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
