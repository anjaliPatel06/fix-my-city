"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useReport } from "@/lib/report-context"
import { PhoneOff, Mic, MicOff, ArrowRight } from "lucide-react"

type CallState = "connecting" | "on-call" | "completed"

interface ExtractedData {
  category: string
  address: string
  city: string
  pincode: string
  description: string
  urgency: "Low" | "Medium" | "High"
}

export function AICallingPage() {
  const router = useRouter()
  const { updateReportData } = useReport()
  const [callState, setCallState] = useState<CallState>("connecting")
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showConversation, setShowConversation] = useState(false)

  // Simulated extracted data from AI call
  const [extractedData] = useState<ExtractedData>({
    category: "Pothole - Road Damage",
    address: "Main Street, Market Area",
    city: "Mumbai",
    pincode: "400001",
    description: "Large pothole on Main Street near the market causing traffic issues",
    urgency: "High",
  })

  // Simulate call progression
  useEffect(() => {
    const timer = setTimeout(() => {
      if (callState === "connecting") {
        setCallState("on-call")
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [callState])

  // Update call duration
  useEffect(() => {
    if (callState === "on-call") {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [callState])

  const handleEndCall = () => {
    setCallState("completed")
  }

  const handleProceed = () => {
    updateReportData(extractedData)
    router.push("/report/photo")
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 w-full">
        {callState === "connecting" && (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Connecting to Fix My City AI Agent...</h1>
            <p className="text-muted-foreground mb-12">Please wait while we connect you to the AI officer</p>

            {/* Animated Connecting Circle */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                <div
                  className="absolute inset-2 rounded-full border-4 border-primary/40 animate-spin"
                  style={{ animationDuration: "2s" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-4xl">
                    🤖
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">Connecting...</p>
          </div>
        )}

        {callState === "on-call" && (
          <div>
            {/* Header */}
            <h1 className="text-3xl font-bold mb-2 text-center">Talking to Fix My City AI Agent</h1>
            <p className="text-muted-foreground text-center mb-8">Answer the questions naturally</p>

            {/* Active Call Circle */}
            <div className="flex justify-center mb-12">
              <div className="relative w-40 h-40">
                {/* Pulse rings */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse"
                  style={{ animationDuration: "1.5s" }}
                />
                <div
                  className="absolute inset-4 rounded-full border-4 border-primary/20 animate-pulse"
                  style={{ animationDuration: "2s", animationDelay: "0.2s" }}
                />

                {/* Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-6xl shadow-lg">
                    🤖
                  </div>
                </div>
              </div>
            </div>

            {/* Status and Duration */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">On Call</p>
              <p className="text-3xl font-mono font-bold">{formatDuration(callDuration)}</p>
            </div>

            {/* Live Extraction Panel */}
            <div className="bg-card rounded-xl p-6 border border-border mb-8">
              <h2 className="text-lg font-semibold mb-4">Extracting Information in Real-time</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{extractedData.category}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Address</span>
                  <span className="font-medium text-green-600 dark:text-green-400 text-right text-sm">
                    {extractedData.address}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Description</span>
                  <span className="font-medium text-green-600 dark:text-green-400 text-right text-sm max-w-xs line-clamp-2">
                    {extractedData.description}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">Urgency</span>
                  <span
                    className={`font-medium text-sm px-3 py-1 rounded-full ${
                      extractedData.urgency === "High"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                        : extractedData.urgency === "Medium"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                    }`}
                  >
                    {extractedData.urgency}
                  </span>
                </div>
              </div>

              {/* Show Conversation Toggle */}
              <button
                onClick={() => setShowConversation(!showConversation)}
                className="w-full mt-4 px-3 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {showConversation ? "Hide Conversation" : "Show Conversation"}
              </button>

              {showConversation && (
                <div className="mt-4 p-3 bg-background rounded-lg max-h-40 overflow-y-auto text-xs space-y-2">
                  <p>
                    <span className="text-primary font-semibold">AI:</span> Hello! What issue would you like to report
                    today?
                  </p>
                  <p>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">You:</span> There's a pothole on
                    Main Street...
                  </p>
                  <p>
                    <span className="text-primary font-semibold">AI:</span> I've noted that. Can you tell me the exact
                    location?
                  </p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-all flex items-center justify-center"
              >
                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </button>

              <button
                onClick={handleEndCall}
                className="flex-1 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <PhoneOff className="w-5 h-5" />
                End Call
              </button>
            </div>
          </div>
        )}

        {callState === "completed" && (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Call Completed</h1>
            <p className="text-muted-foreground mb-8">Your information has been collected and verified</p>

            {/* Completion Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-6xl">
                ✓
              </div>
            </div>

            {/* Summary */}
            <div className="bg-card rounded-xl p-6 border border-border mb-8 text-left">
              <h2 className="text-lg font-semibold mb-4">Extracted Information</h2>
              <div className="space-y-3">
                {Object.entries(extractedData).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-background rounded-lg">
                    <span className="text-sm text-muted-foreground capitalize">{key}</span>
                    <span className="font-medium">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleProceed}
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Continue to Photo Upload
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
