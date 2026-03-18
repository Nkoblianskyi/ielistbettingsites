"use client"

import { Check, List, FileText, Shield, ThumbsUp } from "lucide-react"

const points = [
  {
    icon: List,
    title: "One clear list",
    text: "We rank Irish-licensed bookmakers in a single table. No endless scrolling—see offers, scores and key info at a glance.",
  },
  {
    icon: FileText,
    title: "Honest comparisons",
    text: "We test welcome bonuses, odds and payouts. Our scores reflect real use. Affiliate links do not change the order.",
  },
  {
    icon: Shield,
    title: "Safe to use",
    text: "Every site we list is licensed for Ireland. We only include operators that meet regulatory standards.",
  },
  {
    icon: ThumbsUp,
    title: "Updated for you",
    text: "Ranks and offers are reviewed regularly. Always check the operator’s own site for the latest terms.",
  },
]

export function InfoSections() {
  return (
    <div className="mt-16">
      <section className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center tracking-tight">
            How we help you choose
          </h2>
          <p className="text-slate-600 text-center mt-2 max-w-xl mx-auto">
            Straightforward comparisons so you can pick a bookmaker that fits how you bet.
          </p>
        </div>

        <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
          {points.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <Check className="h-4 w-4 text-slate-400" />
          <span>18+ · Ireland · Licensed operators only</span>
        </div>
      </section>
    </div>
  )
}
