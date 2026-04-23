"use client"
import { useTheme } from "@/lib/theme-provider"
import { MapPin, Brain, AlertCircle, Shield, ThumbsUp, TrendingUp } from "lucide-react"

export function FeaturesGrid() {
  const { language } = useTheme()

  const features = [
    { icon: MapPin, title: "GPS Tagging", description: "Precise location tracking" },
    { icon: Brain, title: "AI Categorization", description: "Automatic issue classification" },
    { icon: AlertCircle, title: "Urgency Detection", description: "Smart priority assessment" },
    { icon: Shield, title: "Spam Detection", description: "AI-powered verification" },
    { icon: ThumbsUp, title: "Community Upvotes", description: "Vote on important issues" },
    { icon: TrendingUp, title: "Auto Escalation", description: "Priority-based handling" },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI capabilities to make reporting and tracking effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors hover:shadow-lg duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
