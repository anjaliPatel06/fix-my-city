"use client"

import type React from "react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, MapPin, Phone, Upload, ThumbsUp } from "lucide-react"
import { ComplaintDetails } from "./complaint-details"
import { StatusTimeline } from "./status-timeline"

export function TrackingPage() {
  const searchParams = useSearchParams()
  const [ticketId, setTicketId] = useState(searchParams.get("id") || "")
  const [searchSubmitted, setSearchSubmitted] = useState(!!searchParams.get("id"))
  const [complaint, setComplaint] = useState<any>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (ticketId.trim()) {
      // Simulate API call
      setComplaint({
        ticketId,
        category: "Pothole - Road Damage",
        description: "Large pothole on Main Street causing traffic issues",
        location: "Main Street, Market Area, Mumbai 400001",
        photoUrl: "/pothole.png",
        status: "In Progress",
        createdAt: "2 days ago",
        lastUpdated: "6 hours ago",
        assignedDepartment: "Mumbai Municipal Corporation (BMC)",
        officer: {
          name: "Rajesh Kumar",
          role: "Senior Officer",
          phone: "+91 98765 43210",
        },
        upvotes: 234,
        urgency: "High",
        timeline: [
          { status: "Submitted", date: "2024-01-18", completed: true },
          { status: "Assigned", date: "2024-01-18", completed: true },
          { status: "In Progress", date: "2024-01-19", completed: true },
          { status: "Resolved", date: "Expected: 2024-01-22", completed: false },
        ],
      })
      setSearchSubmitted(true)
    }
  }

  if (!searchSubmitted) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Complaint</h1>
            <p className="text-lg text-muted-foreground">Enter your ticket ID to check the status of your report</p>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                placeholder="Enter Ticket ID (e.g., FIXC123456)"
                className="w-full px-6 py-4 rounded-lg bg-card border-2 border-border focus:outline-none focus:border-primary text-lg"
              />
              <Search className="absolute right-4 top-4 w-6 h-6 text-muted-foreground" />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all text-lg"
            >
              Search
            </button>
          </form>

          <div className="mt-12 text-center text-muted-foreground">
            <p className="text-sm mb-4">Need help finding your ticket ID?</p>
            <p className="text-sm">
              Check your email confirmation for the ticket ID sent when you submitted your report.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!complaint) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 w-full text-center">
          <h1 className="text-2xl font-bold mb-2">Complaint not found</h1>
          <p className="text-muted-foreground mb-6">
            The ticket ID you entered could not be found. Please check and try again.
          </p>
          <button
            onClick={() => setSearchSubmitted(false)}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <button
          onClick={() => setSearchSubmitted(false)}
          className="mb-8 text-primary hover:underline font-semibold flex items-center gap-2"
        >
          ← Search another complaint
        </button>

        {/* Ticket ID and Status Bar */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Ticket ID</p>
              <p className="text-3xl font-bold font-mono text-primary">{complaint.ticketId}</p>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-4 py-2 rounded-full font-semibold text-sm ${
                  complaint.status === "Submitted"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                    : complaint.status === "Assigned"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                      : complaint.status === "In Progress"
                        ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                }`}
              >
                {complaint.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Created</p>
              <p className="font-semibold">{complaint.createdAt}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Updated</p>
              <p className="font-semibold">{complaint.lastUpdated}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Upvotes</p>
              <p className="font-semibold flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" /> {complaint.upvotes}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Urgency</p>
              <p
                className={`font-semibold px-2 py-1 rounded inline-block text-xs ${
                  complaint.urgency === "High"
                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                    : complaint.urgency === "Medium"
                      ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                }`}
              >
                {complaint.urgency}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ComplaintDetails complaint={complaint} />
            <StatusTimeline timeline={complaint.timeline} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Department Info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Assigned To</h3>
              <p className="text-sm text-muted-foreground mb-4">{complaint.assignedDepartment}</p>

              <div className="space-y-3 pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-medium mb-1">{complaint.officer.name}</p>
                  <p className="text-xs text-muted-foreground">{complaint.officer.role}</p>
                </div>

                <a
                  href={`tel:${complaint.officer.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {complaint.officer.phone}
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-colors text-sm">
                  <Upload className="w-4 h-4" />
                  Add Follow-up Photo
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors text-sm">
                  📧 Contact Assigned Officer
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors text-sm">
                  🔔 Subscribe to Updates
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Location</h3>
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border border-border">
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mt-3">{complaint.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
