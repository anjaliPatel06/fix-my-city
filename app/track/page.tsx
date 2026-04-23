"use client"

import { Suspense } from "react"
import { TrackingPage } from "@/components/track/tracking-page"

function TrackingPageContent() {
  return <TrackingPage />
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
      <TrackingPageContent />
    </Suspense>
  )
}
