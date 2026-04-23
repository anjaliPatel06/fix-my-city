import type React from "react"
// Added fonts for English (Inter) and Hindi (Noto Sans Devanagari)
import type { Metadata } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"
import Chatbot from "@/components/chatbot/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
})

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
      <body className={`${inter.variable} ${notoSansDevanagari.variable} font-sans antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Chatbot/>
        <Analytics />
      </body>
    </html>
  )
}
