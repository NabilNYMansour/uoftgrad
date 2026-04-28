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
              href="https://github.com/NabilNYMansour/uoftgrad"
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
              className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted/80"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-3.5 shrink-0 opacity-70"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.3 3.2 1.7.1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://nabilmansour.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Developer"
              className="inline-flex size-8 items-center justify-center gap-1.5 rounded-md border border-border bg-card text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/80 sm:size-auto sm:px-3 sm:py-1.5"
            >
              <img
                src="/fractal.png"
                alt=""
                className="size-4 shrink-0 object-cover rounded-full"
                aria-hidden
              />
              <span className="hidden sm:inline">Developer</span>
            </a>
            <a
              href="https://web.cs.toronto.edu/graduate/course-descriptions"
              target="_blank"
              rel="noreferrer"
              aria-label="Official listings"
              className="inline-flex size-8 items-center justify-center gap-1.5 rounded-md border border-border bg-card text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/80 sm:size-auto sm:px-3 sm:py-1.5"
            >
              <span className="hidden sm:inline">Official listings</span>
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
