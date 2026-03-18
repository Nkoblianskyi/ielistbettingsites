import Link from "next/link"
import { Button } from "@/components/ui/button"

const orgs = [
  { name: "GambleAware", desc: "Information and support", url: "https://gambleaware.org/", contact: "gambleaware.org · 0808 8020 133" },
  { name: "GamCare", desc: "Support and advice", url: "https://gamcare.org/", contact: "gamcare.org.uk · 0808 8020 133" },
  { name: "Gamblers Anonymous", desc: "Peer support and meetings", url: "https://gamblersanonymous.org/", contact: "gamblersanonymous.org.uk" },
  { name: "Gordon Moody", desc: "Treatment and support", url: "https://gordonmoody.org.uk/", contact: "gordonmoody.org.uk · 01384 241292" },
]

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen bg-white max-w-[950px] mx-auto px-4">
      <div className="mx-auto w-full max-w-[950px] px-4">
        <div className="pt-6">
          <Link href="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 -ml-2">
            ← Home
          </Button>
          </Link>
        </div>

        {/* Hero — 950px, no top radius */}
        <div className="rounded-t-none bg-slate-800 text-white py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Safer play
          </h1>
          <p className="mt-3 text-slate-200 text-lg max-w-xl mx-auto">
            Betting should stay fun and under your control. Here’s where to get help if you need it.
          </p>
        </div>

        {/* Helpline bar — 950px wide */}
        <div className="bg-amber-500 text-amber-950 py-6 border-b-4 border-amber-600 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider">Need help now?</p>
          <p className="text-2xl md:text-3xl font-bold mt-1">0808 8020 133</p>
          <p className="text-sm mt-1 opacity-95">National Gambling Helpline · Free, confidential, 24/7</p>
        </div>
      </div>

      <div className="py-12 md:py-16 bg-white">
        {/* Org cards: simple list, no icon grid */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Get support</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {orgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl border-2 border-slate-200 bg-slate-50/80 hover:border-slate-400 hover:bg-slate-100 transition-colors"
              >
                <p className="font-bold text-slate-900">{org.name}</p>
                <p className="text-sm text-slate-700 mt-0.5">{org.desc}</p>
                <p className="text-sm text-slate-600 mt-2">{org.contact}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Warning strip */}
        <section className="mb-14 py-6 px-5 rounded-xl bg-red-50 border border-red-200">
          <h2 className="text-lg font-bold text-red-900">If it’s not fun anymore</h2>
          <p className="text-red-800 text-sm mt-2 leading-relaxed">
            Gambling should be entertainment. If it’s causing stress, debt or harm, it’s time to stop and get support. Help is free and confidential.
          </p>
        </section>

        {/* Plain text blocks — no cards, no icons */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Staying in control</h2>
          <p className="text-slate-800 leading-relaxed max-w-2xl">
            Set limits on time and money before you start. Take breaks. Never chase losses or borrow to gamble.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Warning signs</h2>
          <p className="text-slate-800 leading-relaxed max-w-2xl">
            Watch out for: spending more than you planned, lying about gambling, borrowing to play, neglecting work or family, or feeling you can’t stop. These can be signs to seek help.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Tools on sites</h2>
          <p className="text-slate-800 leading-relaxed max-w-2xl">
            Most licensed sites offer deposit limits, session limits, reality checks and self-exclusion. Use them to stay in control.
          </p>
        </section>

        {/* Repeat helpline at bottom */}
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-700 text-sm">Free, confidential support 24/7</p>
          <p className="text-xl font-bold text-slate-900 mt-1">0808 8020 133</p>
        </div>
      </div>
    </div>
  )
}
