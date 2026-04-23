"use client"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { Phone, Mic, Zap, Send } from "lucide-react"

export function HowItWorks() {
  const { language } = useTheme()
  const t = translations[language]

  const steps = [
    { icon: Phone, title: "AI Calls You", description: "AI officer connects via browser instantly" },
    { icon: Mic, title: "Speak Naturally", description: "Answer questions conversationally" },
    { icon: Zap, title: "AI Fills Details", description: "All information extracted automatically" },
    { icon: Send, title: "Upload & Submit", description: "Add photo and send to authorities" },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howitworks}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to report and track civic issues in your city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%+12px)] w-[calc(100%-24px)] h-0.5 bg-border" />
                )}

                <div className="bg-background rounded-xl p-8 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
