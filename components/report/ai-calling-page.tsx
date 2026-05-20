"use client"

import React, { useState, useEffect, useRef } from "react"
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
  const callStateRef = useRef<CallState>("connecting")
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const isMutedRef = useRef(false)
  const [showConversation, setShowConversation] = useState(false)

  const [extractedData, setExtractedData] = useState<ExtractedData>({
    category: "Extracting...",
    address: "Extracting...",
    city: "Extracting...",
    pincode: "...",
    description: "Listening...",
    urgency: "Medium",
  })
  const extractedDataRef = useRef<ExtractedData>({
    category: "Extracting...",
    address: "Extracting...",
    city: "Extracting...",
    pincode: "...",
    description: "Listening...",
    urgency: "Medium",
  })

  const [history, setHistory] = useState<{ role: string; content: string }[]>([])
  const historyRef = useRef<{ role: string; content: string }[]>([])
  const [conversation, setConversation] = useState<{ role: string; content: string }[]>([])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const isSpeakingRef = useRef(false)


  useEffect(() => {
    historyRef.current = history
    callStateRef.current = callState
    isMutedRef.current = isMuted
    isSpeakingRef.current = isSpeaking
  }, [history, callState, isMuted, isSpeaking])

  useEffect(() => {
    extractedDataRef.current = extractedData
  }, [extractedData])

  const mergeExtractedData = (current: ExtractedData, incoming?: Partial<ExtractedData>) => ({
    category: incoming?.category && incoming.category !== "Extracting..." ? incoming.category : current.category,
    address: incoming?.address && incoming.address !== "Extracting..." ? incoming.address : current.address,
    city: incoming?.city && incoming.city !== "Extracting..." ? incoming.city : current.city,
    pincode: incoming?.pincode && incoming.pincode !== "Extracting..." ? incoming.pincode : current.pincode,
    description:
      incoming?.description && incoming.description !== "Extracting..." ? incoming.description : current.description,
    urgency: incoming?.urgency || current.urgency,
  })

  // Start call manually to bypass autoplay restrictions that block audio
  const handleStartCall = () => {
    setCallState("on-call")
    
    // 1. Synchronously unlock browser speech engine on user click
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(""))
    }

    // Trigger immediately so browser knows it's a direct user action allowing mic
    handleAgentTurn("Hello! I am the Fix My City AI assistant. What issue would you like to report today?")
  }

  // Timer loop
  useEffect(() => {
    if (callState === "on-call") {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [callState])

  // Send message to local backend AI model
  const handleAgentTurn = async (initialGreeting?: string) => {
    setIsSpeaking(true)
    isSpeakingRef.current = true

    if (initialGreeting) {
      setConversation((prev) => [...prev, { role: "agent", content: initialGreeting }])
      setHistory((prev) => [...prev, { role: "assistant", content: initialGreeting }])
      await speakOutLoud(initialGreeting)
      setIsSpeaking(false)
      isSpeakingRef.current = false
      startListening()
      return
    }
  }

  // Synthesize agent voice
  const speakOutLoud = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel() // clear any stuck voice from previous actions
        const utterance = new SpeechSynthesisUtterance(text)
        
        // Prevent garbage collection bug in Chrome which causes onend to fail
        ;(window as any).currentUtterance = utterance;
        
        // Ensure browser speaks by picking a common fallback language if Hindi is not installed
        utterance.lang = "en-IN"
        utterance.rate = 1.0

        let isResolved = false;
        
        // 10 second fallback incase the speech engine hangs
        const fallbackTimer = setTimeout(() => {
          if (!isResolved) {
             isResolved = true;
             console.warn("Speech API hung up. Using fallback timeout.");
             resolve();
          }
        }, 10000);

        utterance.onend = () => {
          if (!isResolved) {
            isResolved = true;
            clearTimeout(fallbackTimer);
            resolve();
          }
        }
        
        utterance.onerror = (e) => {
          console.warn("Speech warning/error:", e)
          if (!isResolved) {
            isResolved = true;
            clearTimeout(fallbackTimer);
            resolve();
          }
        }

        console.log("AI is speaking:", text)
        window.speechSynthesis.speak(utterance)
      } else {
        resolve()
      }
    })
  }

  const isMicRef = useRef(false)

  // Use Native Web Speech API without any external packages
  const startListening = () => {
    if (isMicRef.current) return; // Prevent overlapping mic instances
    
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      // Fallback native language
      recognition.lang = "en-IN" 
      recognition.interimResults = false
      recognition.maxAlternatives = 1
      recognition.continuous = false;

      let hasRecognized = false;

      recognition.onresult = async (event: any) => {
        hasRecognized = true;
        const transcript = event.results[0][0].transcript.trim()
        console.log("User said:", transcript)
        
        if (!transcript) {
           isMicRef.current = false
           startListening()
           return
        }
        
        setConversation((prev) => [...prev, { role: "user", content: transcript }])
        
        // Pass to Backend Model ONLY
        try {
          // Pause mic while checking backend
          recognition.stop()
          setIsSpeaking(true)
          isSpeakingRef.current = true // Treat backend processing + speaking as 'speaking' phase to block double-listening
          
          const res = await fetch("/api/voice-agent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              history: historyRef.current,
              userMessage: transcript,
              currentExtracted: extractedDataRef.current,
            }),
          })
          const data = await res.json()
          
          if (data.success && data.data) {
             const { agent_reply, extracted, complete } = data.data
             const nextExtracted = mergeExtractedData(extractedDataRef.current, extracted)
             extractedDataRef.current = nextExtracted
             setExtractedData(nextExtracted)

             setConversation((prev) => [...prev, { role: "agent", content: agent_reply }])
             setHistory((prev) => [
                ...prev, 
                { role: "user", content: transcript },
                { role: "assistant", content: agent_reply }
             ])

             await speakOutLoud(agent_reply)

             setIsSpeaking(false)
             isSpeakingRef.current = false // Ready to listen again
             if (complete) {
               setTimeout(() => setCallState("completed"), 2000)
             } else {
               // keep listening after speaking
               startListening()
             }
          } else {
             console.warn("API returned error/false:", data)
             setConversation((prev) => [
               ...prev,
               {
                 role: "agent",
                 content: "Mujhe thodi technical dikkat aa rahi hai. Kripya ek baar phir se batayein.",
               },
             ])
             await speakOutLoud("Mujhe thodi technical dikkat aa rahi hai. Kripya ek baar phir se batayein.")
             setIsSpeaking(false)
             isSpeakingRef.current = false
             startListening()
          }
        } catch (error) {
          console.warn("API fetch exception:", error)
          setConversation((prev) => [
            ...prev,
            {
              role: "agent",
              content: "Connection issue aa gaya. Kripya apni baat ek baar phir boliye.",
            },
          ])
          await speakOutLoud("Connection issue aa gaya. Kripya apni baat ek baar phir boliye.")
          setIsSpeaking(false)
          isSpeakingRef.current = false
          startListening()
        }
      }

      recognition.onerror = (e: any) => {
        isMicRef.current = false
        console.warn("Mic status/warning:", e.error)
        if (e.error === 'no-speech' || e.error === 'aborted') {
           // Handled by onend gracefully
           return;
        }
        // Auto retry listening on error if not muted
        setTimeout(() => {
          if (!isSpeakingRef.current && callStateRef.current === "on-call") startListening()
        }, 2000)
      }

      recognition.onend = () => {
         isMicRef.current = false
         // If mic stopped but we didn't catch words and we aren't currently waiting on AI
         if (!hasRecognized && !isMutedRef.current && !isSpeakingRef.current && callStateRef.current === "on-call") {
             console.log("Mic went quiet, restarting...")
             startListening()
         }
      }

      if (!isMutedRef.current && !isSpeakingRef.current && callStateRef.current === "on-call") {
        console.log("Mic started listening...")
        isMicRef.current = true
        try {
          recognition.start()
        } catch(e) {
          isMicRef.current = false
          console.warn("Could not start mic:", e)
        }
      }
    }
  }

  const handleEndCall = () => {
    setCallState("completed")
    window.speechSynthesis.cancel() // Stop talking when ended
  }

  const handleProceed = () => {
    updateReportData(extractedDataRef.current)
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

            <p className="text-sm text-muted-foreground mb-4">Connecting...</p>
            <button
              onClick={handleStartCall}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Start Conversation Now <Mic className="w-5 h-5" />
            </button>
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
                  {conversation.length === 0 && <p className="text-muted-foreground text-center">Starting conversation...</p>}
                  {conversation.map((msg, i) => (
                    <p key={i}>
                      <span className={msg.role === "agent" ? "text-primary font-semibold" : "text-blue-600 dark:text-blue-400 font-semibold"}>
                        {msg.role === "agent" ? "AI" : "You"}:
                      </span>{" "}
                      {msg.content}
                    </p>
                  ))}
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
