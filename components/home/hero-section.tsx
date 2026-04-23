"use client"
import Link from "next/link"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent">
                AI-Powered Civic Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">{t.reportProblems}</h1>

            <p className="text-lg text-muted-foreground leading-relaxed">{t.subtext}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/report"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                {t.reportIssue}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/track"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                {t.trackComplaint}
                <MapPin className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">2.5K+</div>
                <p className="text-sm text-muted-foreground">Issues Resolved</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">45</div>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

            {/* Map marker illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <svg
                  className="w-full h-full max-w-sm"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simple city map illustration */}
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" className="text-primary/20" />

                  {/* Map markers */}
                  <g className="text-primary/60">
                    <circle cx="70" cy="70" r="6" fill="currentColor" />
                    <circle cx="130" cy="80" r="6" fill="currentColor" />
                    <circle cx="100" cy="130" r="6" fill="currentColor" />
                  </g>
                </svg>

                {/* Center marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg animate-pulse">
                    📍
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
