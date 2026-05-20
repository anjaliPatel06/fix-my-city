"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { startWhatsAppReportSession } from "@/lib/whatsapp-client"
import { Phone, Type, MessageCircle, ArrowRight } from "lucide-react"

export function SessionStartPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const { language } = useTheme()
  const t = translations[language]
  const [isLaunchingWhatsApp, setIsLaunchingWhatsApp] = useState(false)
  const [whatsappError, setWhatsappError] = useState<string | null>(null)

  const handleWhatsAppStart = async () => {
    if (isLoading || isLaunchingWhatsApp) {
      return
    }

    if (!user) {
      router.push("/login?redirect=%2Freport")
      return
    }

    try {
      setIsLaunchingWhatsApp(true)
      setWhatsappError(null)

      const session = await startWhatsAppReportSession({
        userEmail: user.email,
        userName: user.name,
      })

      window.location.assign(session.launchLink)
    } catch (error) {
      setWhatsappError(
        error instanceof Error ? error.message : "Unable to open the WhatsApp complaint flow.",
      )
      setIsLaunchingWhatsApp(false)
    }
  }

  const options = [
    {
      key: "calling",
      icon: Phone,
      title: "Start AI Call",
      description: "AI officer will ask questions and fill the form automatically.",
      href: "/report/calling",
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "text",
      icon: Type,
      title: t.startWithText,
      description: "Type out the issue details",
      href: "/report/text",
      color: "from-green-500 to-green-600",
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      title: t.continueWhatsApp,
      description: "Continue reporting on WhatsApp with your linked account",
      href: "#",
      color: "from-teal-500 to-teal-600",
    },
  ] as const

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.startReporting}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.takeLessThanMinute}</p>
        </div>

        {whatsappError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {whatsappError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option) => {
            const Icon = option.icon
            const isWhatsAppOption = option.key === "whatsapp"

            return (
              <button
                key={option.key}
                onClick={isWhatsAppOption ? handleWhatsAppStart : () => router.push(option.href)}
                disabled={isWhatsAppOption && (isLaunchingWhatsApp || isLoading)}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left disabled:cursor-not-allowed disabled:opacity-70"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                <p className="text-muted-foreground mb-6 text-sm">{option.description}</p>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  {isWhatsAppOption && isLaunchingWhatsApp ? "Opening WhatsApp..." : "Continue"}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> AI calling is the fastest way to report. WhatsApp now opens a linked complaint chat
            for your signed-in account.
          </p>
        </div>
      </div>
    </div>
  )
}
