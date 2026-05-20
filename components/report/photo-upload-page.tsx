"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { useReport } from "@/lib/report-context"
import { Camera, Upload, ArrowLeft, ArrowRight, Loader, Check } from "lucide-react"

type UploadState = "idle" | "uploading" | "success"

export function PhotoUploadPage() {
  const router = useRouter()
  const { reportData, updateReportData } = useReport()
  const [uploadState, setUploadState] = useState<UploadState>("idle")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processPhotoWithAI(file)
    }
  }

  const processPhotoWithAI = async (file: File) => {
    setUploadState("uploading")
    // Convert file to base64
    const reader = new FileReader()
    reader.onloadend = async () => {
      const base64data = reader.result as string
      
      try {
        const analyzeRes = await fetch("/api/analyze-photo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageBase64: base64data,
            description: reportData.description || "",
            existingFields: {
              category: reportData.category || "",
              address: reportData.address || "",
              exactLocation: reportData.exactLocation || "",
              city: reportData.city || "",
              pincode: reportData.pincode || "",
              urgency: reportData.urgency || "",
            },
          })
        })
        const analyzeData = await analyzeRes.json()

        let extractedUpdates = {}
        if (analyzeData.success && analyzeData.data) {
          const d = analyzeData.data
          extractedUpdates = {
            category: d.category && d.category !== "Unknown" ? d.category : reportData.category,
            description: d.description && d.description !== "Extracting..." ? d.description : reportData.description,
            address: d.address && d.address !== "Extracting..." ? d.address : reportData.address,
            exactLocation:
              d.exactLocation && d.exactLocation !== "Extracting..."
                ? d.exactLocation
                : d.address && d.address !== "Extracting..."
                  ? d.address
                  : reportData.exactLocation,
            city: d.city && d.city !== "Extracting..." ? d.city : reportData.city,
            pincode: d.pincode && d.pincode !== "Extracting..." ? d.pincode : reportData.pincode,
            urgency: d.urgency && d.urgency !== "Extracting..." ? d.urgency : reportData.urgency,
            departmentPrediction: d.departmentPrediction || reportData.departmentPrediction,
          }
        }

        // Apply state updates properly without triggering the React crash
        updateReportData({ 
          photoUrl: base64data,
          ...extractedUpdates
        })
        
        setUploadState("success")
      } catch (err) {
        console.error("Failed to analyze photo:", err)
        // Set success anyway so user can continue without AI blocking them
        updateReportData({ photoUrl: base64data })
        setUploadState("success")
      }
    }
    reader.readAsDataURL(file)
  }

  const handleCapture = () => {
    fileInputRef.current?.click()
  }

  const handleNext = () => {
    if (uploadState === "success") {
      router.push("/report/review")
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Add a Photo</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Upload a photo to help our AI verify and prioritize your report
        </p>

        {/* Camera Frame */}
        <div className="bg-card rounded-2xl border-4 border-dashed border-border p-8 mb-8 relative overflow-hidden">
          {uploadState === "idle" && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <p className="text-lg font-semibold mb-2">No photo selected</p>
              <p className="text-muted-foreground text-center">
                Click below to capture or upload a photo from your device
              </p>
            </div>
          )}

          {uploadState === "uploading" && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse">
                <Loader className="w-10 h-10 text-primary animate-spin" />
              </div>
              <p className="text-lg font-semibold mb-4 text-center">
                AI is analyzing your photo...<br/>
                <span className="text-sm font-normal text-muted-foreground mt-2 inline-block">Extracting location, issue type, and urgency...</span>
              </p>
            </div>
          )}

          {uploadState === "success" && reportData.photoUrl && (
            <div className="relative">
              <img
                src={reportData.photoUrl || "/placeholder.svg"}
                alt="Uploaded"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Check className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>

        {/* Upload Options */}
        {uploadState === "idle" && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={handleCapture}
              className="px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Take Photo
            </button>

            <button
              onClick={handleCapture}
              className="px-6 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload Photo
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileSelect}
          className="hidden"
        />

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
            disabled={uploadState !== "success"}
            className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground">
            📸 <strong>Tip:</strong> A clear photo helps our AI verify the issue accurately. Make sure lighting is good
            and the issue is clearly visible.
          </p>
        </div>
      </div>
    </div>
  )
}
