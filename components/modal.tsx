"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ModalSiteCard({ site }: { site: BettingSite }) {
  const starRating = site.score / 2
  const getStarFill = (index: number) => Math.max(0, Math.min(1, starRating - index))

  return (
    <div className="relative flex flex-col w-full max-w-[380px] mx-auto sm:max-w-[420px] lg:max-w-[520px] overflow-hidden rounded-2xl border-2 border-yellow-400 bg-white shadow-2xl shadow-yellow-500/20">
      <div className="bg-[#eab308] text-slate-900 text-center py-2.5 px-4 text-sm font-bold lg:py-3 lg:text-base">
        #1 Pick
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex justify-center mb-4 lg:mb-6">
          <div className="flex items-center justify-center rounded-2xl bg-yellow-50 border-2 border-yellow-200 h-24 w-full max-w-[220px] px-4 lg:h-32 lg:max-w-[280px] lg:px-6">
            <img
              src={site?.logo || "/placeholder.svg"}
              alt={site?.name || "Site"}
              className="max-h-16 w-auto object-contain lg:max-h-24"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mb-5 lg:mb-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-slate-900 lg:text-4xl">{site.score.toFixed(1)}</span>
            <span className="text-base font-medium text-slate-600 lg:text-lg">/ 10</span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => {
              const fill = getStarFill(i)
              const fillClamped = Math.round(fill * 5) / 5
              return (
                <span key={i} className="relative inline-block w-6 h-6 text-yellow-500 lg:w-7 lg:h-7">
                  <Star className="absolute inset-0 w-6 h-6 fill-none stroke-yellow-500 stroke-[1.5] lg:w-7 lg:h-7" />
                  <Star
                    className="absolute inset-0 w-6 h-6 fill-yellow-500 stroke-yellow-500 stroke-0 lg:w-7 lg:h-7"
                    style={{ clipPath: `inset(0 ${(1 - fillClamped) * 100}% 0 0)` }}
                  />
                </span>
              )
            })}
          </div>
        </div>

        <p className="text-center font-bold text-slate-900 text-xl sm:text-2xl leading-tight mb-5 lg:text-3xl lg:mb-6">
          {site?.bonus ?? site?.welcomeOffer}
        </p>

        <Link
          href={site?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full font-bold text-center py-4 rounded-xl bg-[#eab308] text-slate-900 hover:bg-[#facc15] transition-colors text-base lg:py-5 lg:text-lg"
        >
          Get offer
        </Link>
      </div>
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const topSite = bettingSites[0]
  if (!topSite) return null

  return (
    <div className="flex fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 items-center justify-center p-4">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-50 transition-colors border border-slate-200"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-lg lg:max-w-[560px] pt-6">
        <div className="text-center mb-5 px-2 lg:mb-6">
          <p className="text-yellow-400 text-xs font-semibold tracking-wide mb-1 lg:text-sm">ieListBettingSites</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight lg:text-3xl">
            Top pick
          </h2>
        </div>

        <ModalSiteCard site={topSite} />

        <p className="text-center mt-5 text-slate-400 text-xs px-4">
          18+ ·{" "}
          <a href="https://www.gambleaware.org" className="text-yellow-300 hover:text-yellow-200 underline" target="_blank" rel="noreferrer">
            BeGambleAware.org
          </a>
        </p>
      </div>
    </div>
  )
}
