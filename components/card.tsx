"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  const termsText = site.terms ?? ""
  const welcomeOffer = site.welcomeOffer ?? site.bonus
  useEffect(() => {
    const limit = isMobile ? 72 : 350
    setShowReadMore(termsText.length > limit)
  }, [termsText, site.name, isMobile])

  const formatVotes = (votes: number) => votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const starRating = site.score / 2
  const getStarFill = (index: number) => {
    const raw = Math.max(0, Math.min(1, starRating - index))
    return Math.round(raw * 5) / 5
  }
  const starOutlineClass = "fill-none stroke-yellow-500 stroke-[1.5]"
  const starFillClass = "fill-yellow-500 stroke-yellow-500 stroke-0"

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const shouldShowSpecialBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getSpecialBadgeText = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE OFFER"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "TOP GROWTH"
    return ""
  }
  const getSpecialBadgeTextShort = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "GROWTH"
    return ""
  }

  const TermsBlock = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <div
      className={`border-t border-slate-200 bg-slate-50 ${mobile ? "px-2 py-1" : "px-3 py-2"} ${className}`}
      ref={termsContainerRef}
    >
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Terms</p>
        <div
          className={`text-slate-600 leading-tight ${mobile ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs"} ${
            !isTermsExpanded ? (mobile ? "line-clamp-1" : "line-clamp-2") : ""
          }`}
        >
          {termsText}
        </div>
        {showReadMore && (
          <button
            type="button"
            onClick={handleTermsClick}
            className="text-slate-700 hover:text-slate-900 underline mt-0.5 text-[10px] sm:text-xs font-semibold"
          >
            {isTermsExpanded ? "Less" : "Full terms"}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="block">
      {/* ——— Desktop: top bar (rank + badge, score), then bigger logo, centered bonus column, CTA ——— */}
      <div className="hidden lg:block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-lg hover:border-slate-300 transition-all duration-300">
        <div className="flex justify-between items-center px-4 py-2.5 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-700 text-white text-xs font-bold px-3 py-1">
              #{rank}
            </span>
            {shouldShowSpecialBadge && (
              <span className="text-[9px] font-bold uppercase bg-slate-600 text-white px-2 py-0.5 rounded">
                {getSpecialBadgeTextShort()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-700">{site.score.toFixed(1)}</span>
            <span className="text-slate-400 text-xs">/10</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                const fill = getStarFill(i)
                return (
                  <span key={i} className="relative inline-block w-3.5 h-3.5 shrink-0 text-yellow-500">
                    <Star className={`absolute inset-0 w-3.5 h-3.5 ${starOutlineClass}`} />
                    <Star
                      className={`absolute inset-0 w-3.5 h-3.5 ${starFillClass}`}
                      style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
                    />
                  </span>
                )
              })}
            </div>
            <span className="text-[10px] text-slate-500">{formatVotes(site.reviews)}</span>
          </div>
        </div>

        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-stretch gap-6 p-5 group/cell"
        >
          <div className="w-32 xl:w-40 shrink-0 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 p-4 group-hover/cell:border-slate-300 transition-colors">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="max-h-20 xl:max-h-24 w-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Bonus</p>
            <p className="text-xl xl:text-2xl font-bold text-slate-900 leading-tight mt-1">{site.bonus}</p>
            <p className="text-base text-slate-600 leading-tight mt-1">{welcomeOffer}</p>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center gap-2 min-w-[120px]">
            <span className="w-full rounded-xl bg-slate-700 text-white font-bold text-sm py-3.5 text-center group-hover/cell:bg-slate-800 transition-colors">
              GET BONUS
            </span>
          </div>
        </Link>
        <TermsBlock />
      </div>

      {/* ——— Tablet: compact row — rank badge, logo, offer + score, button ——— */}
      <div className="hidden md:block lg:hidden rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-lg hover:border-slate-300 transition-all">
        <div className="flex items-stretch gap-0 min-h-[120px]">
          <div className="w-12 shrink-0 flex flex-col items-center justify-center bg-slate-700 text-white py-3">
            <span className="text-[9px] font-bold uppercase">Rank</span>
            <span className="text-xl font-black leading-none">{rank}</span>
          </div>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-4 p-3 min-w-0 group/tab"
          >
            <div className="w-16 shrink-0 flex flex-col items-center justify-center rounded-lg bg-slate-50 border border-slate-200 p-1.5">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-10 w-full object-contain" />
              <p className="text-[9px] text-slate-500 mt-0.5 truncate w-full text-center">{site.name}</p>
            </div>
            <div className="flex-1 min-w-0">
              {shouldShowSpecialBadge && (
                <span className="inline-block text-[8px] font-bold uppercase bg-slate-600 text-white px-1.5 py-0.5 rounded mb-1">
                  {getSpecialBadgeTextShort()}
                </span>
              )}
              <p className="text-[9px] uppercase text-slate-500 font-semibold">Bonus</p>
              <p className="text-xs font-bold text-slate-900 leading-tight">{site.bonus}</p>
              <p className="text-[11px] text-slate-600">{welcomeOffer}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold text-slate-700">{site.score.toFixed(1)}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => {
                    const fill = getStarFill(i)
                    return (
                      <span key={i} className="relative inline-block w-3 h-3 shrink-0 text-yellow-500">
                        <Star className={`absolute inset-0 w-3 h-3 ${starOutlineClass}`} />
                        <Star
                          className={`absolute inset-0 w-3 h-3 ${starFillClass}`}
                          style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
                        />
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <span className="shrink-0 rounded-lg bg-slate-700 text-white text-xs font-bold px-4 py-2.5 group-hover/tab:bg-slate-800 transition-colors">
              BONUS
            </span>
          </Link>
        </div>
        <TermsBlock />
      </div>

      {/* ——— Mobile: badge above card border, bonus centered in column ——— */}
      <div
        className={`md:hidden relative ${shouldShowSpecialBadge ? "pt-4 mt-2" : "mt-2"}`}
      >
        {shouldShowSpecialBadge && (
          <div className="flex justify-center absolute left-0 right-0 top-0 z-10 px-2">
            <span className="rounded-full bg-slate-700 px-3 py-1 text-[9px] font-bold uppercase text-white shadow-md ring-2 ring-white">
              {getSpecialBadgeText()}
            </span>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden">
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="grid grid-cols-[1fr_1fr] gap-0 min-h-[140px]">
              <div className="p-2 flex flex-col items-center justify-center border-r border-slate-200 bg-slate-50/50">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="h-14 w-full max-w-[100px] object-contain"
                />
                <p className="text-[9px] text-slate-500 mt-0.5 truncate w-full text-center">{site.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm font-bold text-slate-800">{site.score.toFixed(1)}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => {
                      const fill = getStarFill(i)
                      return (
                        <span key={i} className="relative inline-block w-3 h-3 shrink-0 text-yellow-500">
                          <Star className={`absolute inset-0 w-3 h-3 ${starOutlineClass}`} />
                          <Star
                            className={`absolute inset-0 w-3 h-3 ${starFillClass}`}
                            style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
                          />
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="p-2 flex flex-col justify-between items-center text-center">
                <div className="flex-1 flex flex-col items-center justify-center min-h-0 w-full">
                  <p className="text-[9px] uppercase text-slate-500 font-semibold mb-0.5">Bonus</p>
                  <p className="text-sm font-bold text-slate-900 leading-tight">{site.bonus}</p>
                  <p className="text-xs text-slate-700 leading-tight mt-0.5">{welcomeOffer}</p>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg text-sm mt-2">
                  GET BONUS
                </Button>
              </div>
            </div>
          </Link>
          <TermsBlock mobile className="rounded-b-xl" />
        </div>
      </div>
    </div>
  )
}
