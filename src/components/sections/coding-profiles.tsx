"use client";

import { motion } from "framer-motion";
import { Github, Code2, Flame, ArrowUpRight, GitBranch } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";

/**
 * Coding profiles. GitHub stats + contribution graph are rendered from
 * public, keyless image services (github-readme-stats, ghchart) so the
 * numbers stay live without a server or API token. Theme params keep them
 * on-brand. If a service is down, the alt text degrades gracefully.
 */
export function CodingProfiles() {
  const gh = site.githubUsername;
  const statsBase = `https://github-readme-stats.vercel.app/api`;
  const theme = "transparent";

  return (
    <section id="profiles" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Coding Profiles"
          title={
            <>
              Consistency over{" "}
              <span className="text-gradient">raw numbers</span>
            </>
          }
          description="I care more about showing up regularly than chasing streak counts. Here's where I build, practice, and keep the momentum going."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {/* Highlight cards */}
          <Reveal className="lg:col-span-1">
            <div className="grid h-full grid-rows-3 gap-4">
              <HighlightCard
                icon={GitBranch}
                label="Build in public"
                value="Open source"
                note="Projects & experiments on GitHub"
                tone="text-sky-400"
              />
              <HighlightCard
                icon={Flame}
                label="Practice rhythm"
                value="DSA daily"
                note="Steady problem-solving on LeetCode"
                tone="text-amber-400"
              />
              <HighlightCard
                icon={Code2}
                label="Mindset"
                value="Ship & learn"
                note="Every commit is a small lesson"
                tone="text-emerald-400"
              />
            </div>
          </Reveal>

          {/* GitHub stats */}
          <Reveal delay={0.05} className="lg:col-span-2">
            <SpotlightCard className="hairline h-full">
              <div className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40">
                      <Github className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">GitHub Activity</h3>
                      <p className="text-xs text-muted-foreground">@{gh}</p>
                    </div>
                  </div>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Profile <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    alt={`${gh}'s GitHub statistics`}
                    className="w-full rounded-xl border border-border bg-card/40 p-2"
                    src={`${statsBase}?username=${gh}&show_icons=true&hide_border=true&theme=${theme}&title_color=8b5cf6&icon_color=8b5cf6&text_color=888888&hide_title=true`}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    alt={`${gh}'s most used languages`}
                    className="w-full rounded-xl border border-border bg-card/40 p-2"
                    src={`${statsBase}/top-langs/?username=${gh}&layout=compact&hide_border=true&theme=${theme}&title_color=8b5cf6&text_color=888888`}
                  />
                </div>

                {/* Contribution graph */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  alt={`${gh}'s contribution graph`}
                  className="w-full rounded-xl border border-border bg-card/40 p-3"
                  src={`https://ghchart.rshah.org/8b5cf6/${gh}`}
                />

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={site.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm transition-colors hover:border-accent/40"
                  >
                    <Code2 className="h-4 w-4" /> LeetCode Profile
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <p className="text-xs text-muted-foreground">
                    Stats update automatically from live data.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  icon: Icon,
  label,
  value,
  note,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  note: string;
  tone: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="hairline flex flex-col justify-center gap-1 rounded-3xl p-5"
    >
      <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-widest ${tone}`}>
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{note}</p>
    </motion.div>
  );
}
