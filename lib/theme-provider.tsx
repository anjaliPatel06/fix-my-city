"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type Language = "en" | "hi"

interface ThemeContextType {
  theme: Theme
  language: Language
  setTheme: (theme: Theme) => void
  setLanguage: (lang: Language) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light"
    const savedLanguage = (localStorage.getItem("language") as Language) || "en"

    setThemeState(savedTheme)
    setLanguageState(savedLanguage)
    applyTheme(savedTheme)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  const applyTheme = (newTheme: Theme) => {
    if (typeof window !== "undefined") {
      const html = document.documentElement
      if (newTheme === "dark") {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, language, setTheme, setLanguage, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (undefined === context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
