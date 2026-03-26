import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white max-w-[950px] mx-auto px-4">
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 -ml-2">
            ← Home
          </Button>
        </Link>
      </div>

      {/* Hero strip */}
      <div className="border-y border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-[950px]">
          <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">About</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight max-w-2xl">
            ieListBettingSites
          </h1>
          <p className="mt-4 text-lg text-slate-800 max-w-xl">
            We help Irish punters compare licensed bookmakers in one place—welcome offers, odds and payouts, without the hype.
          </p>
        </div>
      </div>

      {/* Sections: alternating bands, numbered, no icons */}
      <div className="divide-y divide-slate-200">
        <section className="py-12 md:py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">01</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Publisher (Impressum)</h2>
            <address className="mt-4 not-italic text-slate-700 space-y-0.5">
              <p className="font-semibold text-slate-900">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, Nicosia 2019, Cyprus</p>
            </address>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              This site is run by K.C. NTOMATA LIMITED. We publish comparison and information content about bookmakers. We do not take bets or hold player funds.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">02</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">What we do</h2>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              The market is full of flashy offers. We cut through that with one ranked list, clear scores and short notes so you can compare like for like before you sign up anywhere.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">03</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">How we rank</h2>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              We look at odds, product range, payout speed and how clearly bonuses are explained. Partners help fund the site but cannot buy a higher rank—if an operator drops the ball, the score goes down.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 max-w-2xl">
              <li><strong className="text-slate-900">Licence:</strong> Only operators suitable for Irish customers.</li>
              <li><strong className="text-slate-900">Safety:</strong> Deposit limits, reality checks, self-exclusion.</li>
              <li><strong className="text-slate-900">Product:</strong> Live betting, builders, streaming where it matters.</li>
              <li><strong className="text-slate-900">Payments:</strong> Common Irish methods and cash-out speed.</li>
              <li><strong className="text-slate-900">Support:</strong> Real help when you need it.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">04</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">How we work</h2>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              We open accounts where we can, go through KYC and time withdrawals. We also watch forums and regulator updates. When an offer or rule changes, we aim to update our list within days.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">05</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Money and transparency</h2>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              Links to bookmakers may be affiliate links. That does not change how we rank. Full details are in the “Advertiser disclosure” on the homepage.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-[950px]">
            <span className="text-5xl md:text-6xl font-bold text-slate-300 leading-none">06</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Responsible gambling</h2>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
              Betting should stay fun and within your limits. If it stops feeling that way, use the free support links in our footer—they are confidential.
            </p>
          </div>
        </section>
      </div>

      {/* Footer notice */}
      <div className="border-t border-slate-200 bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4 max-w-[950px]">
          <p className="font-semibold">18+ only</p>
          <p className="text-sm text-slate-300 mt-1">
            ieListBettingSites does not take wagers. All betting is on licensed third-party sites under their terms.
          </p>
        </div>
      </div>
    </div>
  )
}
