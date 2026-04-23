"use client"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function TrendingIssues() {
  const issues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Roads",
      upvotes: 234,
      status: "In Progress",
      distance: "2.3 km",
    },
    {
      id: 2,
      title: "Broken Streetlight",
      category: "Lighting",
      upvotes: 189,
      status: "Pending",
      distance: "3.1 km",
    },
    {
      id: 3,
      title: "Water Leakage",
      category: "Utilities",
      upvotes: 156,
      status: "Assigned",
      distance: "1.8 km",
    },
    {
      id: 4,
      title: "Garbage Collection",
      category: "Sanitation",
      upvotes: 142,
      status: "In Progress",
      distance: "4.2 km",
    },
  ]

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Assigned: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "In Progress": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    Resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Trending Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Hot Issues in Your City</h2>
          </div>

          <Link href="/community" className="text-primary hover:underline font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{issue.title}</h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {issue.category}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[issue.status]}`}>
                  {issue.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>👍 {issue.upvotes} upvotes</span>
                  <span>📍 {issue.distance} away</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
