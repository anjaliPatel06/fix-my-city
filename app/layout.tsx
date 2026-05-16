import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"
import Chatbot from "@/components/chatbot/chatbot"

export const metadata: Metadata = {
  title: "Fix My City",
  description: "AI-powered civic issue reporting platform",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
