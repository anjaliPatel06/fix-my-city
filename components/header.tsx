"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useAuth } from "@/components/auth-context"

export function Header() {
  const { theme, language, toggleTheme, setLanguage } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)  
  const t = translations[language]
  const {user,logout,profile} = useAuth();
  
  const avatarInitial =
    (profile?.firstName && profile.firstName.trim().charAt(0).toUpperCase()) ||
    (user?.name && user.name.trim().charAt(0).toUpperCase()) ||
    "U";


  const navItems = [
    { label: t.home, href: "/" },
    { label: t.report, href: "/report" },
    { label: t.track, href: "/track" },
    { label: t.community, href: "/community" },
    { label: t.help, href: "/help" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card text-card-foreground shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              F
            </div>
            <span className="hidden sm:inline">{t.fixMyCity}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              {language === "en" ? "EN" : "HI"}
            </button>
            
            {user && profileOpen && (
  <div className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-border bg-card/95 shadow-xl backdrop-blur px-4 py-4 text-sm">
    {/* Top: avatar + name */}
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
        {avatarInitial}
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-card-foreground">
          {profile?.firstName || user.name}
          {profile?.lastName ? ` ${profile.lastName}` : ""}
        </span>
        <span className="text-sm text-muted-foreground">
          {user.role === "admin" ? "City Admin" : "Citizen"}
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-border mb-3" />

    {/* Details list */}
    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
      <ProfileRow label="First Name" value={profile?.firstName} />
      <ProfileRow label="Middle Name" value={profile?.middleName} />
      <ProfileRow label="Last Name" value={profile?.lastName} />
      <ProfileRow label="Date of Birth" value={profile?.dob} />
      <ProfileRow label="Gender" value={profile?.gender} />
      <ProfileRow label="Marital Status" value={profile?.maritalStatus} />
      <ProfileRow label="Address Line 1" value={profile?.addressLine1} />
      <ProfileRow label="Address Line 2" value={profile?.addressLine2} />
      <ProfileRow label="City" value={profile?.city} />
      <ProfileRow label="State" value={profile?.state} />
      <ProfileRow label="Pincode" value={profile?.pincode} />
      <ProfileRow label="Country" value={profile?.country} />
    </div>

    {/* Actions */}
    <div className="mt-3 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={() => setProfileOpen(false)}
        className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:bg-muted/60 transition-colors"
      >
        Close
      </button>

      <Link
        href="/profile"
        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-colors"
        onClick={() => setProfileOpen(false)}
      >
        Edit Profile
      </Link>
    </div>
  </div>
)}


            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
             
             {/* Login Button */}
{!user && (
  <Link
    href="/login"
    className="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
  >
    Login / signup
  </Link>
)}

{/* Profile Icon */}
{user && (
    <>
      {/* Admin ho to Admin Panel link */}
      {user.role === "admin" && (
        <Link
          href="/admin/dashboard"
          className="hidden md:inline px-3 py-2 rounded-lg text-xs font-medium border border-border hover:bg-muted transition-colors"
        >
          Admin Panel
        </Link>
      )}
            {/* Profile icon */}
          
    <button
  type="button"
  onClick={() => setProfileOpen((prev) => !prev)}                
  onDoubleClick={() => {                                         
    setProfileOpen(false)
    setProfileModalOpen(true)
  }}
  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/60"
>
  {avatarInitial}
</button>


      {/* Logout */}
      <button
        onClick={logout}
        className="hidden md:inline px-3 py-2 rounded-lg text-xs font-medium border border-border hover:bg-muted transition-colors"
      >
        Logout
      </button>
    </>
  )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {/* Large profile modal – double click se */}
{user && profileModalOpen && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
    <div className="w-full max-w-2xl rounded-3xl bg-card text-card-foreground shadow-2xl border border-border px-6 py-5 max-h-[80vh] overflow-y-auto">
      {/* Top row: title + close */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            User Profile
          </p>
          <h2 className="text-lg font-semibold">
            {profile?.firstName || user.name}
            {profile?.lastName ? ` ${profile.lastName}` : ""}
          </h2>
          <p className="text-xs text-muted-foreground">
            {user.role === "admin" ? "City Admin" : "Citizen"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setProfileModalOpen(false)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-xs font-medium hover:bg-muted transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Big layout: left info, right address */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Personal Details
          </h3>
          <div className="space-y-1.5">
            <ProfileRow label="First Name" value={profile?.firstName} />
            <ProfileRow label="Middle Name" value={profile?.middleName} />
            <ProfileRow label="Last Name" value={profile?.lastName} />
            <ProfileRow label="Date of Birth" value={profile?.dob} />
            <ProfileRow label="Gender" value={profile?.gender} />
            <ProfileRow label="Marital Status" value={profile?.maritalStatus} />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Address Details
          </h3>
          <div className="space-y-1.5">
            <ProfileRow label="Address Line 1" value={profile?.addressLine1} />
            <ProfileRow label="Address Line 2" value={profile?.addressLine2} />
            <ProfileRow label="City" value={profile?.city} />
            <ProfileRow label="State" value={profile?.state} />
            <ProfileRow label="Pincode" value={profile?.pincode} />
            <ProfileRow label="Country" value={profile?.country} />
          </div>
        </div>
      </div>

      {/* Buttons bottom */}
      <div className="mt-5 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setProfileModalOpen(false)}
          className="px-4 py-2 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:bg-muted/60 transition-colors"
        >
          Close
        </button>
        <Link
          href="/profile"
          className="px-4 py-2 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-colors"
          onClick={() => setProfileModalOpen(false)}
        >
          Edit Profile
        </Link>
      </div>
    </div>
  </div>
)}

    </header>
  )
}
type ProfileRowProps = {
  label: string;
  value?: string | null;
};

function ProfileRow({ label, value }: ProfileRowProps) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-[11px] font-medium text-muted-foreground">
        {label}
      </span>
      <span className="text-[11px] text-card-foreground text-right max-w-[55%] truncate">
        {value && value.trim() !== "" ? value : "-"}
      </span>
    </div>
  );
}
