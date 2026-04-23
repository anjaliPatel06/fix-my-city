"use client"
import { useRouter } from "next/navigation"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { Phone, Type, MessageCircle, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "918770833631" // apna/dummy number, without + and spaces
const WHATSAPP_MESSAGE =
  "Hi, I want to report a civic issue on Fix My City."

const WHATSAPP_LINK =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(WHATSAPP_MESSAGE)


export function SessionStartPage() {
  const router = useRouter()
  const { language } = useTheme()
  const t = translations[language]

  const options = [
    {
      icon: Phone,
      title: "Start AI Call",
      description: "AI officer will ask questions and fill the form automatically.",
      href: "/report/calling",
      color: "from-blue-500 to-blue-600",
      external: false,
    },
    {
      icon: Type,
      title: t.startWithText,
      description: "Type out the issue details",
      href: "/report/text",
      color: "from-green-500 to-green-600",
      external: false,
    },
    {
      icon: MessageCircle,
      title: t.continueWhatsApp,
      description: "Continue reporting on WhatsApp",
      href: WHATSAPP_LINK,
      color: "from-teal-500 to-teal-600",
      external: true,  
    },
  ]

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.startReporting}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.takeLessThanMinute}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.title}
                onClick={() => router.push(option.href)}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                <p className="text-muted-foreground mb-6 text-sm">{option.description}</p>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pro Tip:</strong> AI calling is the fastest way to report. Just speak naturally and the AI will
            automatically fill in all the details for you.
          </p>
        </div>
      </div>
    </div>
  )
}
