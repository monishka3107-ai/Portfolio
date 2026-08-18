"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { milestones, type Milestone } from "@/data/timeline";
import { NeoSectionTitle } from "./section-title";
import { cn } from "@/lib/utils";

export function NeoJourney() {
  const railRef = useRef<HTMLDivElement>(null);
  // Progress line fills as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 55%"],
  });
  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section id="journey" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <NeoSectionTitle index="04" eyebrow="The Path" title="Journey" meta="Learn · Build · Grow" />

      {/* perspective wrapper gives the cards real depth as they tilt */}
      <div
        ref={railRef}
        className="relative border-l border-white/12 pl-8 [perspective:1200px] sm:pl-12"
      >
        {/* animated progress line */}
        <motion.div
          aria-hidden
          style={{ scaleY: lineScaleY }}
          className="absolute -left-px top-0 h-full w-[2px] origin-top bg-gradient-to-b from-neo-pink via-neo-pink/60 to-transparent"
        />
        {milestones.map((m, i) => (
          <JourneyItem key={m.id} milestone={m} index={i} />
        ))}
      </div>
    </section>
  );
}

function JourneyItem({ milestone, index }: { milestone: Milestone; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Track this card's travel through the viewport (0 = entering bottom, 1 = leaving top).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Symmetric, gentle depth: cards tilt the same way on a single (X) axis —
  // leaning up as they enter, flat at center, easing back as they leave.
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [9, 0, -6]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-55, 0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.85, 1], [0.4, 1, 1, 1, 0.6]);

  // Spring-smooth for a fluid, weighty feel.
  const sRotateX = useSpring(rotateX, { stiffness: 120, damping: 26, mass: 0.4 });
  const sZ = useSpring(z, { stiffness: 120, damping: 26, mass: 0.4 });

  const Icon = milestone.icon;

  const motionStyle = reduce
    ? undefined
    : {
        rotateX: sRotateX,
        z: sZ,
        scale,
        opacity,
        transformPerspective: 1000,
      };

  return (
    <div ref={ref} className="relative pb-12 last:pb-0 [transform-style:preserve-3d]">
      {/* node on the rail */}
      <span
        className={cn(
          "absolute -left-[41px] z-10 flex h-5 w-5 items-center justify-center rounded-full border bg-neo-bg sm:-left-[57px]",
          milestone.status === "upcoming"
            ? "border-dashed border-white/30"
            : milestone.status === "current"
              ? "border-neo-pink bg-neo-pink/20"
              : "border-white/40",
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            milestone.status === "current" ? "animate-pulse bg-neo-pink" : "bg-white/50",
          )}
        />
      </span>

      {/* scroll-driven depth wrapper */}
      <motion.div style={motionStyle} className="[transform-style:preserve-3d]">
        {/* pink-framed card with a perpetual gentle float */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -7, 0], rotate: [-0.4, 0.4, -0.4] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: 5.5 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }
          }
          initial={reduce ? { opacity: 0, y: 16 } : undefined}
          whileInView={reduce ? { opacity: 1, y: 0 } : undefined}
          viewport={reduce ? { once: true, margin: "-60px" } : undefined}
          className="group origin-left rounded-xl border border-neo-pink/30 bg-neo-panel/50 p-5 shadow-[0_0_0_1px_rgba(244,143,177,0.1),0_24px_60px_-28px_rgba(244,143,177,0.4)] backdrop-blur-sm transition-colors hover:border-neo-pink/60"
        >
          <div className="flex items-center gap-3">
          <Icon
            className={cn(
              "h-4 w-4",
              milestone.status === "current" ? "text-neo-pink" : "text-white/50",
            )}
          />
          <span className="font-techno text-[10px] uppercase tracking-[0.3em] text-white/40">
            {milestone.period}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-white/85 transition-colors group-hover:text-white sm:text-3xl">
          {milestone.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
          {milestone.description}
        </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
