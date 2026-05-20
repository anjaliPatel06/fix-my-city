"use client"

import type { FormEvent, ReactNode } from "react"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, MessageCircle, Search, X } from "lucide-react"
import { useAuth } from "@/components/auth-context"

type Faq = {
  question: string
  answer: string
  tags: string[]
}

type SupportForm = {
  name: string
  email: string
  issue: string
  message: string
}

const faqs: Faq[] = [
  {
    question: "How do I report an issue?",
    answer:
      'You can report an issue by clicking the "Report Issue" button on the homepage. Start an AI call where our agent will ask questions and automatically fill in your report details. You can also use text or WhatsApp to submit your complaint. Our AI will automatically categorize and prioritize your report.',
    tags: ["report", "complaint", "whatsapp", "ai call"],
  },
  {
    question: "How does the AI calling work?",
    answer:
      "The AI officer connects to you via your browser using WebRTC technology. Just answer the questions naturally and the AI will extract all the relevant information from your responses, including location, issue type, and urgency level.",
    tags: ["ai call", "voice", "report"],
  },
  {
    question: "How do I track my complaint?",
    answer:
      "Go to the Track page and enter your ticket ID to see the real-time status of your complaint. You'll also receive email updates as the status changes.",
    tags: ["track", "ticket", "status"],
  },
  {
    question: "What happens after I submit a report?",
    answer:
      "After submission, your report is reviewed by our AI system, categorized, and assigned to the relevant civic department. You'll receive a ticket ID that you can use to track progress.",
    tags: ["submit", "department", "ticket", "status"],
  },
  {
    question: "Can I edit my report after submission?",
    answer:
      'You can request changes through the tracking page. Click "Contact Assigned Officer" to communicate any updates needed for your report.',
    tags: ["edit", "track", "officer"],
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, we follow strict data protection protocols. Your personal information is encrypted and only used for the civic reporting process and follow-up communications.",
    tags: ["privacy", "security", "account"],
  },
  {
    question: "How is priority determined?",
    answer:
      "Our AI system analyzes multiple factors including issue severity, community upvotes, location, and current workload to determine urgency levels.",
    tags: ["priority", "urgency", "community"],
  },
  {
    question: "Can I upvote issues reported by others?",
    answer:
      "Yes! Visit the Community page to see issues reported by others and upvote the ones that are important to you. More upvotes help prioritize faster resolution.",
    tags: ["community", "upvote", "priority"],
  },
  {
    question: "How long does it take to resolve an issue?",
    answer:
      "Resolution time depends on the issue type and department workload. Critical issues (High urgency) are typically addressed within 48-72 hours, while medium and low priority issues may take longer.",
    tags: ["resolution", "status", "department"],
  },
]

function highlightText(text: string, query: string): ReactNode {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) return text

  const escapedQuery = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"))

  return parts.map((part, index) =>
    part.toLowerCase() === trimmedQuery.toLowerCase() ? (
      <mark key={`${part}-${index}`} className="rounded bg-primary/20 px-0.5 text-foreground">
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function HelpPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [feedback, setFeedback] = useState<Record<string, "helpful" | "not-helpful">>({})
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [showSupportForm, setShowSupportForm] = useState(false)
  const [supportForm, setSupportForm] = useState<SupportForm>({
    name: user?.name || "",
    email: user?.email || "",
    issue: "",
    message: "",
  })
  const [supportErrors, setSupportErrors] = useState<Partial<SupportForm>>({})
  const [isSubmittingSupport, setIsSubmittingSupport] = useState(false)
  const [supportSuccess, setSupportSuccess] = useState("")
  const [trackId, setTrackId] = useState("")

  const filteredFaqs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      return faqs.map((faq, index) => ({ faq, index }))
    }

    return faqs
      .map((faq, index) => ({ faq, index }))
      .filter(({ faq }) =>
        [faq.question, faq.answer, ...faq.tags].join(" ").toLowerCase().includes(query),
      )
  }, [searchTerm])

  const relatedFaqs = useMemo(() => {
    if (expandedIndex === null) return []

    const activeFaq = faqs[expandedIndex]
    if (!activeFaq) return []

    return faqs
      .map((faq, index) => ({ faq, index }))
      .filter(({ index, faq }) => index !== expandedIndex && faq.tags.some((tag) => activeFaq.tags.includes(tag)))
      .slice(0, 3)
  }, [expandedIndex])

  const handleSupportOpen = () => {
    setIsSupportOpen(true)
    setSupportSuccess("")
    setSupportErrors({})
    setSupportForm((current) => ({
      ...current,
      name: current.name || user?.name || "",
      email: current.email || user?.email || "",
    }))
  }

  const handleSupportSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: Partial<SupportForm> = {}
    if (!supportForm.name.trim()) nextErrors.name = "Name is required."
    if (!isValidEmail(supportForm.email)) nextErrors.email = "Enter a valid email."
    if (!supportForm.issue.trim()) nextErrors.issue = "Select an issue type."
    if (supportForm.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters."
    }

    setSupportErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSubmittingSupport(true)
    window.setTimeout(() => {
      setIsSubmittingSupport(false)
      setSupportSuccess("Support request submitted. Our team will contact you shortly.")
      setSupportForm({
        name: user?.name || "",
        email: user?.email || "",
        issue: "",
        message: "",
      })
    }, 700)
  }

  const handleTrackSearch = () => {
    const nextTrackId = trackId.trim()
    if (!nextTrackId) return
    router.push(`/track?id=${encodeURIComponent(nextTrackId)}`)
  }

  const whatsappSupportUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    "Hi Fix My City Support, I need help with my complaint.",
  )}`

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-background to-secondary py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about Fix My City</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)
                setExpandedIndex(null)
              }}
              placeholder="Search help articles..."
              className="w-full px-6 py-3 pl-12 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-muted"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {filteredFaqs.map(({ faq, index }) => (
            <div
              key={faq.question}
              className="w-full bg-card rounded-xl border border-border p-6 text-left hover:border-primary/50 transition-all"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg">{highlightText(faq.question, searchTerm)}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedIndex === index && (
                <div className="text-muted-foreground mt-4 pt-4 border-t border-border">
                  <p>{highlightText(faq.answer, searchTerm)}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                    <span>Was this helpful?</span>
                    <button
                      type="button"
                      onClick={() => setFeedback((current) => ({ ...current, [faq.question]: "helpful" }))}
                      className={`rounded-full border border-border px-3 py-1 ${
                        feedback[faq.question] === "helpful" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      Helpful
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeedback((current) => ({ ...current, [faq.question]: "not-helpful" }))}
                      className={`rounded-full border border-border px-3 py-1 ${
                        feedback[faq.question] === "not-helpful"
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      Not Helpful
                    </button>
                    {feedback[faq.question] && <span className="text-xs">Thanks for your feedback.</span>}
                  </div>

                  {relatedFaqs.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Related FAQs</p>
                      <div className="space-y-2">
                        {relatedFaqs.map(({ faq: relatedFaq, index: relatedIndex }) => (
                          <button
                            key={relatedFaq.question}
                            type="button"
                            onClick={() => setExpandedIndex(relatedIndex)}
                            className="block text-sm text-primary hover:underline"
                          >
                            {relatedFaq.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <p className="font-semibold mb-2">No help articles found</p>
              <p className="text-sm text-muted-foreground mb-4">Try another keyword or contact support.</p>
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold mb-3">Track a complaint quickly</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={trackId}
              onChange={(event) => setTrackId(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleTrackSearch()
              }}
              placeholder="Enter Ticket ID (e.g., FIXC123456)"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              onClick={handleTrackSearch}
              disabled={!trackId.trim()}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all disabled:opacity-50"
            >
              Track
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our support team is here to help. Get in touch with us through email, phone, or our contact form.
          </p>
          <button
            type="button"
            onClick={handleSupportOpen}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
          >
            Contact Support
          </button>
        </div>
      </div>

      {isSupportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Contact Support</h2>
                <p className="text-sm text-muted-foreground">Choose a support option or raise a ticket.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsSupportOpen(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                aria-label="Close support"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="mailto:support@fixmycity.com?subject=Fix%20My%20City%20Support"
                className="rounded-xl border border-border p-4 text-center text-sm font-semibold hover:border-primary/50"
              >
                Email Support
              </a>
              <a
                href={whatsappSupportUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border p-4 text-center text-sm font-semibold hover:border-primary/50"
              >
                WhatsApp Support
              </a>
              <button
                type="button"
                onClick={() => {
                  setShowSupportForm(true)
                  setSupportSuccess("")
                }}
                className="rounded-xl border border-border p-4 text-center text-sm font-semibold hover:border-primary/50"
              >
                Raise Support Ticket
              </button>
            </div>

            {supportSuccess && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {supportSuccess}
              </div>
            )}

            {showSupportForm && (
              <form onSubmit={handleSupportSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      value={supportForm.name}
                      onChange={(event) => setSupportForm((current) => ({ ...current, name: event.target.value }))}
                      placeholder="Name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {supportErrors.name && <p className="mt-1 text-xs text-red-600">{supportErrors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      value={supportForm.email}
                      onChange={(event) => setSupportForm((current) => ({ ...current, email: event.target.value }))}
                      placeholder="Email"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {supportErrors.email && <p className="mt-1 text-xs text-red-600">{supportErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <select
                    value={supportForm.issue}
                    onChange={(event) => setSupportForm((current) => ({ ...current, issue: event.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select issue type</option>
                    <option value="Complaint tracking">Complaint tracking</option>
                    <option value="WhatsApp reporting">WhatsApp reporting</option>
                    <option value="Image upload">Image upload</option>
                    <option value="Account or login">Account or login</option>
                    <option value="Other">Other</option>
                  </select>
                  {supportErrors.issue && <p className="mt-1 text-xs text-red-600">{supportErrors.issue}</p>}
                </div>

                <div>
                  <textarea
                    value={supportForm.message}
                    onChange={(event) => setSupportForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Describe your issue"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {supportErrors.message && <p className="mt-1 text-xs text-red-600">{supportErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingSupport}
                  className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmittingSupport ? "Submitting..." : "Submit Support Request"}
                </button>
              </form>
            )}

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              Support requests are reviewed by the Fix My City team.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
