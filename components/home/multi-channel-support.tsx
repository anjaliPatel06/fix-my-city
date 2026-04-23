"use client"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { Globe, MessageCircle, Smartphone, Mic } from "lucide-react"
import Link from "next/link"  

const WHATSAPP_NUMBER = "918770833631";

const WHATSAPP_MESSAGE =
  "Hi, I want to report a civic issue on Fix My City.";

const WHATSAPP_LINK =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(WHATSAPP_MESSAGE);

<button
  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
  className="px-4 py-2 bg-green-500 text-white rounded"
>
  Test WhatsApp
</button>

export function MultiChannelSupport() {
  const { language } = useTheme()
  const t = translations[language]

  const channels = [
    { icon: Globe, title: "Website", description: "Report directly from web" },
    { icon: MessageCircle, title: "WhatsApp Bot", description: "Report on WhatsApp",href: WHATSAPP_LINK },
    { icon: Smartphone, title: "Mobile App", description: "Native iOS/Android app" },
    { icon: Mic, title: "Voice Assistant", description: "Report hands-free" },
  ]as const

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.multiChannel}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Report issues however you prefer - we support multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon

            const content = (
      <>
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-accent" />
        </div>

        <h3 className="font-semibold mb-2">{channel.title}</h3>
        <p className="text-sm text-muted-foreground">{channel.description}</p>
      </>
    )

    // agar href hai (sirf WhatsApp ke liye), to pura card clickable Link banao
    if ("href" in channel && channel.href) {
      return (
        <Link
          key={channel.title}
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background rounded-xl p-6 text-center border border-border cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          {content}
        </Link>
      )
    }



            return (
              <div key={channel.title} className="bg-background rounded-xl p-6 text-center border border-border">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
