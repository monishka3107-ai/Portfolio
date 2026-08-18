"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Target,
  Wrench,
  Mountain,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I&apos;ve <span className="text-gradient">designed & built</span>
            </>
          }
          description="Each project starts with a real problem. Expand a card to read the full case study — the problem, stack, challenges, and what I took away."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function statusStyles(status: Project["status"]) {
  switch (status) {
    case "Live":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
    case "In Progress":
      return "border-amber-500/30 bg-amber-500/10 text-amber-400";
    default:
      return "border-sky-500/30 bg-sky-500/10 text-sky-400";
  }
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const detailId = `project-details-${project.id}`;

  return (
    <SpotlightCard className="hairline">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
          project.gradient,
        )}
        aria-hidden
      />
      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                  statusStyles(project.status),
                )}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">{project.tagline}</p>
          </div>
          <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
        </div>

        {/* Overview */}
        <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.overview}
        </p>

        {/* Stack chips */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailId}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40"
          >
            {open ? "Hide case study" : "Read case study"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
            />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Expandable case study */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={detailId}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <CaseBlock icon={Target} title="Problem" tone="text-sky-400">
                  <p>{project.problem}</p>
                </CaseBlock>
                <CaseBlock icon={Wrench} title="Tech stack" tone="text-violet-400">
                  <p>{project.stack.join(" · ")}</p>
                </CaseBlock>
                <CaseBlock icon={Mountain} title="Challenges" tone="text-amber-400">
                  <ul className="space-y-2">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-60" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
                <CaseBlock icon={Lightbulb} title="Key learnings" tone="text-emerald-400">
                  <ul className="space-y-2">
                    {project.learnings.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-60" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SpotlightCard>
  );
}

function CaseBlock({
  icon: Icon,
  title,
  tone,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-4">
      <div className={cn("mb-2 flex items-center gap-2 text-sm font-semibold", tone)}>
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
