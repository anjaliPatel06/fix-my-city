"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { useTheme } from "@/lib/theme-provider"
import { Search, MapPin, ThumbsUp, MessageCircle } from "lucide-react"
import { useAuth } from "@/components/auth-context"
import type { ComplaintRecord } from "@/lib/types"

type FilterType = "near" | "trending" | "urgent" | "latest"

const UPVOTED_STORAGE_KEY = "fmc_upvoted_issues"

export function CommunityPage() {
  const { language } = useTheme()
  const { profile } = useAuth()
  const [activeFilter, setActiveFilter] = useState<FilterType>("trending")
  const [searchTerm, setSearchTerm] = useState("")
  const [issues, setIssues] = useState<ComplaintRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [upvotedIssues, setUpvotedIssues] = useState<string[]>([])

  const filters: Array<{ id: FilterType; label: string; icon: ReactNode }> = [
    { id: "near", label: "Near Me", icon: <MapPin className="w-4 h-4" /> },
    { id: "trending", label: "Trending", icon: "T" },
    { id: "urgent", label: "Urgent", icon: "!" },
    { id: "latest", label: "Latest", icon: "L" },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const raw = window.localStorage.getItem(UPVOTED_STORAGE_KEY)
      const parsed = raw ? JSON.parse(raw) : []
      setUpvotedIssues(Array.isArray(parsed) ? parsed : [])
    } catch {
      setUpvotedIssues([])
    }
  }, [])

  useEffect(() => {
    let active = true

    const loadIssues = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/reports", { cache: "no-store" })
        const data = await response.json()

        if (!response.ok || data?.success === false) {
          throw new Error(data?.error || "Failed to load community issues.")
        }

        if (active) {
          setIssues(Array.isArray(data.reports) ? data.reports : [])
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Failed to load community issues.")
        }
      } finally {
        if (active) {
          setIsLoading(false)
        }
      }
    }

    loadIssues()

    return () => {
      active = false
    }
  }, [])

  const statusColors: Record<string, string> = {
    Submitted: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
    Assigned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    "In Progress": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    Resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  }

  const filteredIssues = [...issues]
    .filter((issue) => {
      const searchableText = [
        issue.title,
        issue.category,
        issue.city,
        issue.address,
        issue.ticketId,
      ]
        .join(" ")
        .toLowerCase()

      if (searchTerm && !searchableText.includes(searchTerm.toLowerCase())) {
        return false
      }

      if (activeFilter === "urgent") {
        return issue.urgency === "High"
      }

      if (activeFilter === "near" && profile?.city) {
        return issue.city.toLowerCase() === profile.city.toLowerCase()
      }

      return true
    })
    .sort((a, b) => {
      if (activeFilter === "trending") {
        return b.upvotes - a.upvotes
      }

      if (activeFilter === "urgent") {
        const urgencyScore = { High: 3, Medium: 2, Low: 1 }
        return urgencyScore[b.urgency] - urgencyScore[a.urgency]
      }

      return b.createdAt.localeCompare(a.createdAt)
    })

  const handleUpvote = async (ticketId: string) => {
    if (upvotedIssues.includes(ticketId)) {
      return
    }

    try {
      setError(null)

      const response = await fetch(`/api/reports/${encodeURIComponent(ticketId)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "upvote" }),
      })
      const data = await response.json()

      if (!response.ok || data?.success === false) {
        throw new Error(data?.error || "Failed to upvote issue.")
      }

      const updatedIssue = data.report as ComplaintRecord
      setIssues((currentIssues) =>
        currentIssues.map((issue) =>
          issue.ticketId === updatedIssue.ticketId ? updatedIssue : issue,
        ),
      )

      const nextUpvotedIssues = [...upvotedIssues, ticketId]
      setUpvotedIssues(nextUpvotedIssues)
      window.localStorage.setItem(UPVOTED_STORAGE_KEY, JSON.stringify(nextUpvotedIssues))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upvote issue.")
    }
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Issues</h1>
          <p className="text-lg text-muted-foreground">
            See complaints submitted by citizens and track what is happening around your area.
          </p>
        </div>

        <div className="mb-8 relative">
          <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by category, city, address, or ticket ID..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => {
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            )
          })}
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">Loading community complaints...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue) => (
              <Link
                key={issue.ticketId}
                href={`/community/${encodeURIComponent(issue.ticketId)}`}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={issue.photoUrl || "/placeholder.svg"}
                    alt={issue.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[issue.status] || statusColors.Submitted
                    }`}
                  >
                    {issue.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{issue.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                        {issue.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {issue.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault()
                        void handleUpvote(issue.ticketId)
                      }}
                      disabled={upvotedIssues.includes(issue.ticketId)}
                      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                        upvotedIssues.includes(issue.ticketId)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{issue.upvotes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{issue.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!isLoading && filteredIssues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              {issues.length === 0
                ? "No complaints have been submitted yet. New reports will appear here automatically."
                : "No issues found matching your search"}
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
