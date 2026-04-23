"use client"

import { Suspense } from "react"
import { SuccessPage } from "@/components/report/success-page"

function SuccessPageContent() {
  return <SuccessPage />
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
