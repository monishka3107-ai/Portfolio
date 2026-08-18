"use client";

import { motion } from "framer-motion";
import { aboutCards, aboutIntro } from "@/data/about";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Learning, building, and{" "}
              <span className="text-gradient">growing</span> in public
            </>
          }
          description={aboutIntro}
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.id} variants={staggerItem}>
                <SpotlightCard className="hairline h-full">
                  <div className="flex h-full flex-col gap-4 rounded-3xl p-6 transition-transform duration-300 group-hover/spot:-translate-y-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/50">
                      <Icon className={`h-5 w-5 ${card.accent}`} />
                    </span>
                    <h3 className="text-base font-semibold">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
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
