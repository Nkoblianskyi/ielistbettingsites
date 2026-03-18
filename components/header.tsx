import Link from "next/link"
import Image from "next/image"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-[950px] border-b border-slate-200 bg-white shadow-sm">
        <div className="px-4 py-3 md:py-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 transition-opacity hover:opacity-85 md:gap-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-700 shadow-md md:h-11 md:w-11">
            <Image src="/favicon.ico" alt="" width={32} height={32} className="h-6 w-6 object-contain md:h-7 md:w-7 opacity-95" />
          </div>
          <SiteWordmark variant="header-compact" className="md:hidden" />
          <SiteWordmark variant="header-hero" className="hidden md:inline" />
        </Link>
        </div>
      </div>
    </header>
  )
}
