"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowRight, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { scrollToSection } from "@/components/providers/smooth-scroll";
import { AnimeCharacter } from "./anime-character";

/** Corner bracket decoration. */
function Corner({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-6 w-6 border-neo-pink/60 ${className}`} />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function NeoHero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden neo-dots">
      {/* ambient pink corner glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-neo-pink/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-neo-pink/10 blur-3xl" />

      {/* framing corners */}
      <div className="pointer-events-none absolute inset-6 hidden lg:block">
        <Corner className="left-0 top-0 border-l-2 border-t-2" />
        <Corner className="right-0 top-0 border-r-2 border-t-2" />
        <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
        <Corner className="bottom-0 right-0 border-b-2 border-r-2" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        {/* LEFT — text (min-w-0 so the giant name overflows visually instead of
            stretching its grid track and stealing the character column's width) */}
        <div className="relative z-10 min-w-0">
          {/* top technical labels */}
          <div className="mb-8 flex flex-wrap gap-x-10 gap-y-2 font-techno text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
            <span>Portfolio — ©2026</span>
            <span>India · 20.6°N</span>
            <span className="text-neo-pink">● Available for work</span>
          </div>

          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 flex items-center gap-3 font-techno text-xs uppercase tracking-[0.3em] text-neo-pink sm:text-sm"
          >
            <span className="h-px w-8 bg-neo-pink" />
            AI · ML · Engineering
          </motion.p>

          {/* giant name */}
          <div className="select-none font-display uppercase leading-[0.82] tracking-tight">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[19vw] text-white sm:text-[15vw] lg:text-[8rem] xl:text-[9rem]"
            >
              Monishka
            </motion.h1>
            <motion.span
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-stroke block text-[19vw] sm:text-[15vw] lg:text-[8rem] xl:text-[9rem]"
            >
              Yadav
            </motion.span>
          </div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-techno text-2xl tracking-tight text-white/90 sm:text-3xl"
          >
            <span className="text-neo-pink">/</span> AI &amp; ML Student
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
          >
            Computer Science (AI &amp; ML) student building intelligent systems and clean
            software — learning deeply, shipping real projects, and solving problems from India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("work")}
              className="group inline-flex items-center gap-3 rounded-sm bg-neo-pink px-7 py-3.5 font-techno text-sm uppercase tracking-[0.2em] text-neo-bg transition-transform hover:-translate-y-0.5"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-sm border border-white/25 px-7 py-3.5 font-techno text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-neo-pink hover:text-neo-pink"
            >
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              Résumé
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center gap-5 text-white/50"
          >
            {[
              { href: site.socials.github, icon: Github, label: "GitHub" },
              { href: site.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: site.socials.leetcode, icon: Instagram, label: "LeetCode" },
              { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-neo-pink"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex w-full justify-center self-center lg:translate-x-12"
        >
          <AnimeCharacter />
        </motion.div>
      </div>
    </section>
  );
}
