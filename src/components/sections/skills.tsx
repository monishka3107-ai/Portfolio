"use client";

import { motion } from "framer-motion";
import { skillGroups, type SkillGroup } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Bento column-span per group size. */
const spanClass: Record<SkillGroup["span"], string> = {
  sm: "lg:col-span-2",
  md: "lg:col-span-3",
  lg: "lg:col-span-4",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              A growing toolkit for{" "}
              <span className="text-gradient">building & learning</span>
            </>
          }
          description="The languages, frameworks, and tools I use to turn ideas into working software — plus what I'm actively sharpening next."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                variants={staggerItem}
                className={cn("min-h-[15rem]", spanClass[group.span])}
              >
                <SpotlightCard className="hairline h-full">
                  <div className="relative flex h-full flex-col gap-5 rounded-3xl p-6">
                    {/* Group accent glow */}
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br blur-2xl",
                        group.gradient,
                      )}
                    />
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40">
                        <Icon className="h-5 w-5 text-foreground" />
                      </span>
                      <h3 className="text-base font-semibold">{group.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
