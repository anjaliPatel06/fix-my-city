"use client"

import type React from "react"
import { ThemeProvider } from "@/lib/theme-provider"
import { Header } from "./header"
import { Footer } from "./footer"
import { AuthProvider } from "@/components/auth-context" 

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
            <AuthProvider>   
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      </AuthProvider>
    </ThemeProvider>
  )
}
