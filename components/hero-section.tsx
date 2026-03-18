"use client"

import { ShieldCheck, Calendar, Lock, FileCheck, RefreshCw } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getCurrentDateLabel() {
  const d = new Date()
  return d.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function getCurrentDateISO() {
  return new Date().toISOString().slice(0, 10)
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const dateLabel = getCurrentDateLabel()
  const dateISO = getCurrentDateISO()

  return (
    <section className="mb-6 md:mb-8 -mx-2 sm:-mx-4">
      <div className="rounded-b-2xl border border-slate-200 border-t-0 bg-white shadow-lg overflow-hidden">
        <div className="max-w-2xl mx-auto p-6 md:p-8 text-center">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Irish bookmakers
          </p>
          <h1 className="font-hero-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight tracking-tight">
            One list. <span className="text-slate-600">Ranked for you.</span>
          </h1>
          <p className="mt-3 text-sm text-slate-500 flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
            <time dateTime={dateISO}>{dateLabel}</time>
          </p>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            Licensed operators for Ireland. Compare welcome offers, odds and payouts in one place.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 min-w-0">
                <ShieldCheck className="h-4 w-4 text-slate-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Licensed for Ireland</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 min-w-0">
                <FileCheck className="h-4 w-4 text-slate-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Independent comparison</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 min-w-0">
                <Lock className="h-4 w-4 text-slate-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Secure & safe</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 min-w-0">
                <RefreshCw className="h-4 w-4 text-slate-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Updated regularly</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs">
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                className="text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2"
              >
                Advertiser disclosure
              </button>
              <span className="text-slate-300">·</span>
              <button
                type="button"
                onClick={onTermsModalOpen}
                className="text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2"
              >
                18+ site rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
