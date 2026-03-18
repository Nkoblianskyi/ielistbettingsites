import Link from "next/link"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "who", title: "Who we are", body: "ielistbettingsites.com is a comparison site for online bookmakers aimed at users in Ireland. This policy explains what data we may collect and how we use it." },
  { id: "data", title: "Data we may collect", body: "We may process: technical data (IP, browser, approximate location, timestamps); how you use the site (e.g. pages viewed), if you have agreed to analytics; and any messages you send us. We do not run a bookmaker and do not hold your betting or payment details." },
  { id: "legal", title: "Legal basis (GDPR)", body: "Where EU/UK law applies, we use legitimate interest to run and secure the site, and your consent where we ask for it (e.g. non-essential cookies). You can withdraw consent at any time via your browser or our cookie options." },
  { id: "sharing", title: "Sharing data", body: "We may use hosting, analytics and affiliate partners who process data on our behalf under contracts. We do not sell your data. We may respond to lawful requests from authorities when required." },
  { id: "retention", title: "How long we keep it", body: "Server logs are rotated regularly. Analytics data is kept in anonymised form. Emails are deleted once the matter is closed, unless we must keep them by law." },
  { id: "security", title: "Security", body: "We use HTTPS and work with providers that follow good security practice. No system is 100% secure; if you spot an issue, please tell us." },
  { id: "rights", title: "Your rights", body: "You can ask for access, correction, deletion, restriction or portability of your data where the law allows. In Ireland you can contact the Data Protection Commission (dataprotection.ie)." },
  { id: "minors", title: "Under 18s", body: "Our site is for adults 18+. We do not knowingly collect data from minors. If you think a child has given us data, contact us and we will delete it." },
  { id: "transfers", title: "International transfers", body: "Some of our providers may be outside the EEA. Where that happens we use approved safeguards (e.g. EU standard contractual clauses) as required by GDPR." },
  { id: "changes", title: "Changes", body: "We may update this policy. The “last reviewed” date at the top will change. Continued use after an update means you accept the new version unless we need fresh consent." },
  { id: "cookies", title: "Cookies", body: "For details see our Cookie policy.", link: "/cookie-policy" },
]

export default function PrivacyPolicyPage() {
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
              Last reviewed {new Date().toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </aside>

          <main className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Privacy policy
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
                              Cookie policy
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
