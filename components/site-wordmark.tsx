import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  return (
    <span
      className={cn(
        "font-hero-display font-bold tracking-tight text-slate-800",
        variant === "header-compact" && "text-base sm:text-lg",
        variant === "header-hero" && "text-xl sm:text-2xl",
        variant === "footer" && "text-xl sm:text-2xl text-slate-800",
        className,
      )}
    >
      <span className="font-extrabold text-slate-600">ie</span>
      <span>List</span>
      <span>Betting</span>
      <span>Sites</span>
    </span>
  )
}
