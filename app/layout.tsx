import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const bodyFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-hero-display",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ielistbettingsites.com"),
  title: "ielistbettingsites — Irish bookmaker picks & offers",
  description:
    "ielistbettingsites.com compares licensed Irish-facing bookmakers: welcome deals, odds quality, and platform notes in one place.",
  openGraph: {
    siteName: "ielistbettingsites",
    url: "https://ielistbettingsites.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={displayFont.variable}>
      <body className={bodyFont.className}>
        <div
          className="min-h-screen relative bg-slate-100"
          style={{
            backgroundImage: "url(/bg-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10 mx-auto">
            {/* Header in layout - will show on all pages */}
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
