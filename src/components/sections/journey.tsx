"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { milestones, type Milestone } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Progress line grows as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });

  return (
    <section id="journey" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Learning Journey"
          title={
            <>
              From first line of code to{" "}
              <span className="text-gradient">what&apos;s next</span>
            </>
          }
          description="An honest look at how I got here — each step built on the last, and the road ahead is what I'm most excited about."
        />

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* Rail */}
          <div className="absolute left-5 top-2 h-full w-px bg-border sm:left-1/2" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-5 top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-fuchsia-500 to-sky-400 sm:left-1/2"
          />

          <ul className="space-y-10">
            {milestones.map((m, i) => (
              <TimelineItem key={m.id} milestone={m} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ milestone, index }: { milestone: Milestone; index: number }) {
  const Icon = milestone.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative pl-14 sm:w-1/2 sm:pl-0",
        isLeft ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12",
      )}
    >
      {/* Node */}
      <span
        className={cn(
          "absolute left-5 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-background sm:left-auto",
          isLeft ? "sm:-right-4 sm:translate-x-1/2" : "sm:-left-4 sm:-translate-x-1/2",
          milestone.status === "upcoming"
            ? "border-dashed border-border text-muted-foreground"
            : milestone.status === "current"
              ? "border-accent/50 text-accent shadow-glow"
              : "border-border text-foreground",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>

      <div
        className={cn(
          "glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1",
          milestone.status === "upcoming" && "opacity-90",
        )}
      >
        <div
          className={cn(
            "mb-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground",
            isLeft && "sm:justify-end",
          )}
        >
          {milestone.status === "current" && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          )}
          {milestone.period}
        </div>
        <h3 className="text-base font-semibold">{milestone.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {milestone.description}
        </p>
      </div>
    </motion.li>
  );
}
