"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections, site } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToSection } from "@/components/providers/smooth-scroll";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CommandPalette } from "./command-palette";
import { cn } from "@/lib/utils";

const sectionIds = sections.map((s) => s.id);

/**
 * Sticky floating navigation. Shrinks + gains glass after scroll,
 * highlights the active section with a shared-layout pill, and collapses
 * to a sheet on mobile.
 */
export function FloatingNav() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  function handleNav(id: string) {
    scrollToSection(id);
    setMobileOpen(false);
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-full px-2 py-2 transition-all duration-300",
            scrolled
              ? "glass shadow-soft-lg"
              : "border border-transparent bg-transparent",
          )}
        >
          {/* Brand */}
          <button
            onClick={() => handleNav("home")}
            className="ml-2 flex items-center gap-2 rounded-full pr-2 text-sm font-semibold tracking-tight"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 font-mono text-accent">
              MY
            </span>
            <span className="hidden sm:inline">Monishka</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            <CommandPalette />
            <ThemeToggle />
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Follow
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass absolute inset-x-4 top-24 space-y-1 rounded-2xl p-3 shadow-soft-lg"
          >
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    "block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    active === s.id ? "bg-accent/15 text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}
