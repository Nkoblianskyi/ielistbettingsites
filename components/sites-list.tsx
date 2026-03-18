"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <div id="sites" className="space-y-2 w-full">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <Card site={site} rank={index + 1} />
        </div>
      ))}
    </div>
  )
}
