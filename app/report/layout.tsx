import type React from "react"
import { ReportProvider } from "@/lib/report-context"

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ReportProvider>{children}</ReportProvider>
}
