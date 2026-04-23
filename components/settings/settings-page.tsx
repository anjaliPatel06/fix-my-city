"use client"
import { useTheme } from "@/lib/theme-provider"
import type { Language } from "@/lib/i18n"
import { Moon, Sun, Globe, Bell, Eye, Contrast, HelpCircle, Info } from "lucide-react"

export function SettingsPage() {
  const { theme, language, setTheme, setLanguage, toggleTheme } = useTheme()

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Settings</h1>
        <p className="text-lg text-muted-foreground mb-12">Customize your Fix My City experience</p>

        {/* Display Section */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-6">
          <h2 className="text-2xl font-bold mb-6">Display</h2>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {theme === "light" ? (
                  <Sun className="w-6 h-6 text-primary" />
                ) : (
                  <Moon className="w-6 h-6 text-primary" />
                )}
              </div>
              <div>
                <p className="font-semibold">Theme</p>
                <p className="text-sm text-muted-foreground">{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`px-3 py-2 rounded-lg font-medium transition-all ${
                  theme === "light"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`px-3 py-2 rounded-lg font-medium transition-all ${
                  theme === "dark"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Language Selection */}
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Language</p>
                <p className="text-sm text-muted-foreground">{language === "en" ? "English" : "हिंदी (Hindi)"}</p>
              </div>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary font-semibold"
            >
              <option value="en">English (EN)</option>
              <option value="hi" className="font-devanagari">
                हिंदी (HI)
              </option>
            </select>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-6">
          <h2 className="text-2xl font-bold mb-6">Notifications</h2>

          <div className="space-y-4">
            {[
              {
                title: "Status Updates",
                description: "Get notified when your complaint status changes",
                id: "status",
              },
              {
                title: "Similar Issues",
                description: "Alerts about similar issues reported in your area",
                id: "similar",
              },
              {
                title: "Community Activity",
                description: "Updates on comments and upvotes on your reports",
                id: "community",
              },
            ].map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{notif.title}</p>
                    <p className="text-sm text-muted-foreground">{notif.description}</p>
                  </div>
                </div>
                <button className="w-12 h-6 rounded-full bg-primary transition-colors relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Section */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-6">
          <h2 className="text-2xl font-bold mb-6">Accessibility</h2>

          <div className="space-y-4">
            {[
              {
                title: "Large Text",
                description: "Increase font size across the app",
                id: "text",
                icon: Eye,
              },
              {
                title: "High Contrast",
                description: "Enhance contrast for better visibility",
                id: "contrast",
                icon: Contrast,
              },
            ].map(({ title, description, id, icon: Icon }) => (
              <div
                key={id}
                className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
                <button className="w-12 h-6 rounded-full bg-muted transition-colors relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-background rounded-full" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Help & Info Section */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">Help & Information</h2>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold">FAQ</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>

            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold">About Fix My City</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>

            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
              <div className="flex items-center gap-3">
                📧<span className="font-semibold">Contact Support</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm mb-2">Fix My City - AI Civic Platform</p>
          <p className="text-xs">Version 1.0.0 • Updated Nov 2024</p>
        </div>
      </div>
    </div>
  )
}
