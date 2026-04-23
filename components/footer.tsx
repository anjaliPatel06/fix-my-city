"use client"
import Link from "next/link"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const { language } = useTheme()
  const t = translations[language]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg text-primary mb-2">{t.fixMyCity}</div>
            <p className="text-sm text-muted-foreground">{t.poweredBy}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t.aboutUs}</h3>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {t.aboutUs}
            </Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {t.contact}
            </Link>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {t.terms}
            </Link>
            <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {t.privacy}
            </Link>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Social</h3>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {t.fixMyCity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
