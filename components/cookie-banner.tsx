"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Cookie className="h-5 w-5" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600">
                  We use essential cookies to run the site and, if you allow, analytics to improve it.{" "}
                  <Link
                    href="/cookie-policy"
                    className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
                  >
                    Cookie policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0 justify-end">
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Essential only
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-slate-700 text-white font-semibold hover:bg-slate-800"
              >
                Accept all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
