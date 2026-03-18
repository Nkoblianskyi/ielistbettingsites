import Link from "next/link"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "what", title: "What are cookies?", body: "Cookies are small text files stored on your device when you visit a site. They can remember your choices, keep you signed in or help us understand how the site is used—always in a transparent way." },
  { id: "use", title: "How we use them", body: "Strictly necessary: your cookie preference and basic security. Analytics (if you allow): anonymous page views to improve the site. Functional: e.g. remembering when you closed a popup. Third-party: when you go to a bookmaker, they may set their own cookies; we do not control those." },
  { id: "session", title: "Session vs persistent", body: "Session cookies disappear when you close the browser. Persistent cookies stay until they expire or you delete them. We keep lifetimes as short as needed." },
  { id: "third", title: "Third parties", body: "Some tools we use (e.g. analytics) may set cookies under their own policies. Check their sites if you want full details." },
  { id: "choices", title: "Your choices", body: "You can block or delete cookies in your browser or use private mode. Blocking all cookies may break some features (e.g. the cookie banner may show every time)." },
  { id: "updates", title: "Updates", body: "We may update this page when our setup changes. The date at the top is the last change. Big changes may be mentioned on the homepage." },
  { id: "contact", title: "Contact", body: "For questions about cookies, see our Privacy policy.", link: "/privacy-policy" },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white max-w-[950px] mx-auto px-4">
      <div className="container mx-auto px-4 py-6 max-w-[950px]">
        <Link href="/">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 -ml-2">
            ← Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 max-w-[950px] pb-16 bg-white">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Sticky TOC */}
          <aside className="lg:w-56 shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">On this page</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-1 lg:flex-col">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-sm text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline">
                  {s.title}
                </a>
              ))}
            </nav>
            <p className="text-xs text-slate-600 mt-4">
              Updated {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </aside>

          {/* Content: legal doc style, numbered, no cards */}
          <main className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Cookie policy
            </h1>
            <p className="text-slate-600 mt-2">ielistbettingsites.com</p>

            <div className="mt-10 space-y-10">
              {sections.map(({ id, title, body, link }, i) => (
                <section key={id} id={id} className="scroll-mt-24">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-slate-400 tabular-nums">{i + 1}.</span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                      <p className="mt-2 text-slate-800 leading-relaxed">
                        {link ? (
                          <>
                            See our{" "}
                            <Link href={link} className="text-slate-900 font-medium underline hover:text-slate-700">
                              Privacy policy
                            </Link>
                            .
                          </>
                        ) : (
                          body
                        )}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
