"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, MousePointer2 } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { scrollToSection } from "@/components/providers/smooth-scroll";

/** Cycles the rotating role titles. */
function useRotatingTitle(titles: readonly string[], interval = 2400) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % titles.length), interval);
    return () => clearInterval(id);
  }, [titles.length, interval, reduce]);
  return titles[index];
}

export function Hero() {
  const title = useRotatingTitle(site.titles);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Cursor spotlight — write CSS vars directly, no re-render.
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <AuroraBackground />

      {/* Cursor spotlight (desktop) */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5] hidden md:block"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), hsl(var(--accent) / 0.10), transparent 45%)",
        }}
      />

      {/* Floating shapes */}
      {!reduce && (
        <>
          <FloatingShape className="left-[8%] top-[22%] h-16 w-16 from-sky-400/30" delay={0} />
          <FloatingShape className="right-[12%] top-[28%] h-24 w-24 from-fuchsia-400/25" delay={1.2} />
          <FloatingShape className="left-[18%] bottom-[18%] h-12 w-12 from-emerald-400/30" delay={0.6} />
          <FloatingShape className="right-[20%] bottom-[24%] h-20 w-20 from-accent/25" delay={1.8} />
        </>
      )}

      <div className="container relative z-10 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships & collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Monishka Yadav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            {site.role}
          </motion.p>

          {/* Rotating title */}
          <div className="mt-6 flex h-10 items-center justify-center text-xl font-medium sm:text-2xl">
            <span className="text-muted-foreground">I&apos;m a&nbsp;</span>
            <span className="relative inline-flex min-w-[11ch] justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={title}
                  initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient animate-gradient-x font-semibold"
                >
                  {title}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            A Computer Science (AI &amp; ML) student who loves turning ideas into working
            products — learning deeply, building often, and solving real problems along the way.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button as="a" href={site.resumeUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <FileText className="h-4 w-4" />
              Résumé
            </Button>
            <Button as="a" href="#projects" variant="secondary" size="lg"
              onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            {[
              { href: site.socials.github, label: "GitHub", icon: Github },
              { href: site.socials.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: `mailto:${site.email}`, label: "Email", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!reduce && (
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to About"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
        >
          <span className="flex items-center gap-1.5 text-xs">
            <MousePointer2 className="h-3.5 w-3.5" /> Scroll to explore
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-muted-foreground"
              animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.button>
      )}
    </section>
  );
}

/** A soft, slowly-drifting glass orb. */
function FloatingShape({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute -z-[4] rounded-2xl bg-gradient-to-br to-transparent backdrop-blur-sm ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
