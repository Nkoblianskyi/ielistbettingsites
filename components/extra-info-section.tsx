"use client"

import { FileText, Shield, Zap, CheckCircle2 } from "lucide-react"

const items = [
  {
    icon: FileText,
    title: "One list, one standard",
    text: "Same criteria for every operator—welcome offers, odds and withdrawal speed so you can compare fairly.",
  },
  {
    icon: Shield,
    title: "Ireland-licensed only",
    text: "Every site we list holds a licence suitable for Irish customers. No grey-market operators.",
  },
  {
    icon: Zap,
    title: "Updated regularly",
    text: "We revise our table and notes so you see current offers and conditions, not old snapshots.",
  },
  {
    icon: CheckCircle2,
    title: "No sign-up needed",
    text: "Browse the full list and read our notes without creating an account. You choose when to visit a bookmaker.",
  },
]

export function ExtraInfoSection() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center mb-2">
        Why use our list
      </h2>
      <p className="text-slate-600 text-sm text-center mb-8">
        Simple comparisons for Irish punters
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {items.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 hover:border-slate-300 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-600 text-white mb-3">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
