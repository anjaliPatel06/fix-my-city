"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useReport } from "@/lib/report-context"
import Link from "next/link"
import { CheckCircle, Download, Share2, Plus } from "lucide-react"

export function SuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { reportData } = useReport()
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  const tokenId = searchParams.get("token") || reportData.tokenId

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setConfetti(particles)
  }, [])

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12 relative overflow-hidden">
      {/* Confetti Animation */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none animate-bounce"
          style={{
            left: `${particle.left}%`,
            top: "-10px",
            animation: `fall 3s ease-in forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-2xl mx-auto px-4 w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse" />
            <CheckCircle className="w-24 h-24 text-green-500 animate-bounce" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Complaint Submitted!</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          Thank you for helping improve your city. Your report has been successfully submitted and assigned a tracking
          ID.
        </p>

        {/* Ticket Card */}
        {tokenId && (
          <div className="bg-card rounded-2xl border-2 border-primary p-8 mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-2">Your Ticket ID</p>
            <p className="text-3xl md:text-4xl font-bold text-primary font-mono mb-2">{tokenId}</p>
            <p className="text-sm text-muted-foreground">Use this ID to track your complaint status</p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
          <p className="text-sm text-muted-foreground">
            📧 A confirmation email has been sent to your registered email address with your ticket ID and next steps.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href={`/track?id=${tokenId}`}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Track Status
            <ArrowRight className="w-5 h-5" />
          </Link>

          <button
            onClick={() => {
              navigator.share?.({
                title: "Fix My City Report",
                text: `I just reported an issue to Fix My City. Ticket ID: ${tokenId}`,
              })
            }}
            className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share
          </button>

          <button className="px-6 py-3 rounded-lg border-2 border-muted text-foreground font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download PDF
          </button>

          <Link
            href="/report"
            className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Report
          </Link>
        </div>

        <Link href="/" className="text-primary hover:underline font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

function ArrowRight({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
