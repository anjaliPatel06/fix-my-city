"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Loader2, MapPin, Phone, ThumbsUp } from "lucide-react"
import type { ComplaintRecord } from "@/lib/types"
import { ComplaintDetails } from "@/components/track/complaint-details"
import { StatusTimeline } from "@/components/track/status-timeline"

const statusColors: Record<string, string> = {
  Submitted: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
  Assigned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
  "In Progress": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
  Resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
}

export function CommunityIssueDetailsPage() {
  const params = useParams<{ ticketId: string }>()
  const ticketId = decodeURIComponent(params.ticketId)
  const [complaint, setComplaint] = useState<ComplaintRecord | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    const loadComplaint = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/reports", { cache: "no-store" })
        const data = await response.json()

        if (!response.ok || data?.success === false) {
          throw new Error(data?.error || "Failed to load issue details.")
        }

        const report = Array.isArray(data.reports)
          ? (data.reports as ComplaintRecord[]).find((entry) => entry.ticketId === ticketId)
          : null

        if (!report) {
          throw new Error("Issue not found.")
        }

        if (active) {
          setComplaint(report)
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Failed to load issue details.")
        }
      } finally {
        if (active) {
          setIsLoading(false)
        }
      }
    }

    loadComplaint()

    return () => {
      active = false
    }
  }, [ticketId])

  const createdAtLabel = useMemo(() => {
    if (!complaint) return ""
    return new Date(complaint.createdAt).toLocaleString("en-IN")
  }, [complaint])

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading issue details...</span>
        </div>
      </div>
    )
  }

  if (!complaint || error) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-semibold mb-2">Issue details unavailable</h1>
          <p className="text-muted-foreground mb-6">{error || "We could not find this issue."}</p>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Community
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/community"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>

        <div className="mb-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    statusColors[complaint.status] || statusColors.Submitted
                  }`}
                >
                  {complaint.status}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {complaint.category}
                </span>
                <span className="text-sm text-muted-foreground">{complaint.ticketId}</span>
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">{complaint.title}</h1>
                <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {complaint.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-auto sm:min-w-[280px]">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted-foreground mb-1">Upvotes</p>
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <ThumbsUp className="h-4 w-4" />
                  {complaint.upvotes}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted-foreground mb-1">Urgency</p>
                <p className="text-lg font-semibold">{complaint.urgency}</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted-foreground mb-1">Reported On</p>
                <p className="text-sm font-medium">{createdAtLabel}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <ComplaintDetails complaint={complaint} />
            <StatusTimeline timeline={complaint.timeline} />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Managed By</h2>
              <p className="text-sm text-muted-foreground mb-4">{complaint.assignedDepartment}</p>

              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="font-semibold">{complaint.officer.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{complaint.officer.role}</p>
                <a
                  href={`tel:${complaint.officer.phone}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {complaint.officer.phone}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Track This Issue</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Open the full tracking page to follow the report with its ticket ID and timeline.
              </p>
              <Link
                href={`/track?id=${encodeURIComponent(complaint.ticketId)}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Open Track View
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Current Stage</h2>
              <p className="text-sm text-muted-foreground mb-2">This issue is currently in:</p>
              <p className="text-xl font-semibold">{complaint.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
