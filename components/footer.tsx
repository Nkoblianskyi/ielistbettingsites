import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Safer play" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4 py-8 xl:max-w-6xl">
        {/* Top row: logo + wordmark left, nav right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-700">
              <Image src="/favicon.ico" alt="" width={26} height={26} className="h-6 w-6 object-contain opacity-95" />
            </div>
            <SiteWordmark variant="footer" />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company info */}
        <div className="py-6 border-b border-slate-200">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Publisher</p>
          <p className="font-semibold text-slate-800">Sigmastart04 GmbH</p>
          <p className="text-sm text-slate-500">Zehmeplatz 14, 15230 Frankfurt, Deutschland</p>
          <p className="mt-1 text-xs text-slate-400">Editorial comparisons. Licensed operators only.</p>
        </div>

        {/* Support organizations — one row under company info */}
        <div className="py-6 border-b border-slate-200">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Support</p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

              <Link href="https://gamcare.org/" className="inline-block">
                <img src="/gamecare.svg" alt="GamCare" className="h-8 rounded bg-white px-2 py-1" />
              </Link>
              <Link href="https://problemgambling.ie/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100">
                <img src="/ProblemGambling-w.png" alt="ProblemGambling" className="h-8 rounded bg-white px-2 py-1" />
              </Link>
              <Link href="https://gamblingtherapy.org/" className="inline-block">
                <img src="/gordon.png" alt="Gordon Moody" className="h-8 rounded bg-white px-2 py-1" />
              </Link>
              <Link href="https://gamblersanonymous.org/" className="inline-block">
                <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 rounded bg-white px-2 py-1" />
              </Link>
              <Link href="https://gamblingcare.ie/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-white px-2 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100">
                <img src="/GamblingCare-w.png" alt="GamblingCare" className="h-8 rounded bg-black px-2 py-1" />
              </Link>
              <Link href="https://gambleaware.org/" className="inline-block">
                <img src="/gamble.webp" alt="GambleAware" className="h-8 rounded bg-white px-2 py-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: copyright full width */}
        <div className="pt-4 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ielistbettingsites.com · 18+ · Ireland</p>
        </div>
      </div>
    </footer>
  )
}
