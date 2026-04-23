"use client"

import { useState } from "react"
import { useTheme } from "@/lib/theme-provider"
import { Search, MapPin, ThumbsUp, MessageCircle } from "lucide-react"

type FilterType = "near" | "trending" | "urgent" | "latest"

export function CommunityPage() {
  const { language } = useTheme()
  const [activeFilter, setActiveFilter] = useState<FilterType>("trending")
  const [searchTerm, setSearchTerm] = useState("")

  const filters = [
    { id: "near" as FilterType, label: "Near Me", icon: MapPin },
    { id: "trending" as FilterType, label: "Trending", icon: "📈" },
    { id: "urgent" as FilterType, label: "Urgent", icon: "⚠️" },
    { id: "latest" as FilterType, label: "Latest", icon: "🕐" },
  ]

  const issues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Roads",
      location: "2.3 km away",
      upvotes: 234,
      comments: 12,
      status: "In Progress",
      imageUrl: "/pothole.png",
    },
    {
      id: 2,
      title: "Broken Streetlight",
      category: "Lighting",
      location: "3.1 km away",
      upvotes: 189,
      comments: 8,
      status: "Pending",
      imageUrl: "/streetlight.jpg",
    },
    {
      id: 3,
      title: "Water Leakage Pipeline",
      category: "Utilities",
      location: "1.8 km away",
      upvotes: 156,
      comments: 5,
      status: "Assigned",
      imageUrl: "/clear-water-ripples.png",
    },
    {
      id: 4,
      title: "Garbage Collection Pending",
      category: "Sanitation",
      location: "4.2 km away",
      upvotes: 142,
      comments: 9,
      status: "In Progress",
      imageUrl: "/garbage.jpg",
    },
    {
      id: 5,
      title: "Damaged Traffic Signal",
      category: "Traffic",
      location: "2.9 km away",
      upvotes: 98,
      comments: 4,
      status: "Pending",
      imageUrl: "/busy-city-traffic.png",
    },
    {
      id: 6,
      title: "Unclean Park Area",
      category: "Parks",
      location: "5.1 km away",
      upvotes: 67,
      comments: 3,
      status: "Pending",
      imageUrl: "/sunny-city-park.png",
    },
  ]

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
    Assigned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    "In Progress": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    Resolved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  }

  const filteredIssues = issues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Issues</h1>
          <p className="text-lg text-muted-foreground">
            See what's being reported and upvote issues affecting your area
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search issues..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => {
            const Icon = typeof filter.icon === "string" ? null : filter.icon
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
                {Icon ? <Icon className="w-4 h-4" /> : filter.icon}
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIssues.map((issue) => (
            <div
              key={issue.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={issue.imageUrl || "/placeholder.svg"}
                  alt={issue.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[issue.status]}`}
                >
                  {issue.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{issue.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                      {issue.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {issue.location}
                    </span>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{issue.upvotes}</span>
                  </button>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{issue.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIssues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No issues found matching your search</p>
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
