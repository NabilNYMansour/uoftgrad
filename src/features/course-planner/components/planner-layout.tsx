import type { ReactNode } from "react"
import { ExternalLink, GraduationCap } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

type PlannerLayoutProps = {
  children: ReactNode
}

export function PlannerLayout({ children }: PlannerLayoutProps) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[linear-gradient(180deg,oklch(0.965_0.02_252)_0%,var(--background)_38%,var(--background)_100%)]",
          "dark:bg-[linear-gradient(180deg,oklch(0.22_0.035_258)_0%,var(--background)_42%,var(--background)_100%)]"
        )}
      />

      <header className="border-b border-border/80 px-4 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground"
          >
            <GraduationCap className="size-6 shrink-0 text-primary" aria-hidden />
            UofTGrad
          </a>
          <div className="flex flex-wrap items-center gap-2">
            <ThemeToggle />
            <a
              href="https://web.cs.toronto.edu/graduate/course-descriptions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/80"
            >
              Official listings
              <ExternalLink
                className="size-3.5 shrink-0 opacity-70"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 pb-10 pt-6">
        {children}
      </main>
    </div>
  )
}
