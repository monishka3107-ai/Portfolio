"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { neoProjects, type NeoProject } from "@/data/neo";
import { NeoSectionTitle } from "./section-title";

/** On-brand gradients for the hover-preview mockups. */
const previewGradients = [
  "from-[#f48fb1]/30 via-[#b25b7a]/15 to-transparent",
  "from-sky-400/25 via-[#f48fb1]/15 to-transparent",
  "from-emerald-400/25 via-[#f48fb1]/15 to-transparent",
];

export function NeoProjects() {
  const [hovered, setHovered] = useState<NeoProject | null>(null);

  // Cursor tracking for the floating preview (spring-smoothed).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 380, damping: 32, mass: 0.6 });
  const py = useSpring(my, { stiffness: 380, damping: 32, mass: 0.6 });

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <NeoSectionTitle
        index="01"
        eyebrow="Selected Work"
        title="Projects"
        meta={`(0${neoProjects.length})`}
      />

      <ul onMouseLeave={() => setHovered(null)}>
        {neoProjects.map((project, i) => (
          <ProjectRow key={project.title} project={project} i={i} onHover={setHovered} />
        ))}
      </ul>

      {/* Floating preview that trails the cursor (desktop only) */}
      <motion.div
        aria-hidden
        style={{ x: px, y: py }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.title}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="translate-x-8 -translate-y-1/2"
            >
              <ProjectPreview
                project={hovered}
                gradient={previewGradients[neoProjects.indexOf(hovered) % previewGradients.length]}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectRow({
  project,
  i,
  onHover,
}: {
  project: NeoProject;
  i: number;
  onHover: (p: NeoProject | null) => void;
}) {
  const primaryHref = project.demo ?? project.github ?? "#";
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      onMouseEnter={() => onHover(project)}
      className="group relative border-b border-white/10"
    >
      {/* pink wipe on hover */}
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-neo-pink/[0.06] transition-transform duration-500 group-hover:scale-x-100"
      />
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-6 py-8 sm:py-10"
      >
        <span className="font-techno text-sm text-neo-pink/70 transition-colors duration-300 group-hover:text-neo-pink sm:text-base">
          {project.index}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-3xl uppercase leading-none tracking-tight text-white/70 transition-all duration-300 group-hover:text-white sm:text-5xl group-hover:sm:translate-x-2">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-techno text-[10px] uppercase tracking-[0.25em] text-white/40 sm:text-xs">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {/* Details bar that opens up on hover */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-4 max-w-2xl border-l-2 border-neo-pink/60 pl-4 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/40">
          {project.github && (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(project.github, "_blank", "noopener");
              }}
              className="transition-colors hover:text-neo-pink"
              aria-label={`${project.title} on GitHub`}
              role="button"
            >
              <Github className="h-5 w-5" />
            </span>
          )}
          <ArrowUpRight className="h-6 w-6 transition-all duration-300 group-hover:text-neo-pink group-hover:sm:-translate-y-1 group-hover:sm:translate-x-1" />
        </div>
      </a>
    </motion.li>
  );
}

/** Little "app window" mockup shown in the floating hover preview. */
function ProjectPreview({ project, gradient }: { project: NeoProject; gradient: string }) {
  const domain = project.demo
    ? new URL(project.demo).host
    : project.github
      ? new URL(project.github).host
      : "preview";
  return (
    <div className="w-[320px] overflow-hidden rounded-xl border border-neo-pink/40 bg-neo-panel shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)]">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-neo-bg px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neo-pink/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-2 truncate font-mono text-[10px] text-white/40">{domain}</span>
      </div>
      {/* preview body */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradient}`}>
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} screenshot`}
            fill
            sizes="320px"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 bg-grid opacity-20" />
        )}
        {/* readability scrim */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
          <h4 className="font-display text-2xl uppercase leading-none tracking-tight text-white">
            {project.title}
          </h4>
          <div className="flex flex-wrap gap-x-2 font-techno text-[9px] uppercase tracking-[0.2em] text-white/70">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded bg-black/40 px-1.5 py-0.5 font-techno text-[9px] uppercase tracking-[0.2em] text-neo-pink backdrop-blur-sm">
          {project.demo ? "Live demo" : "View code"} <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
