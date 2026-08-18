"use client";

import { motion } from "framer-motion";
import { neoSkills } from "@/data/neo";
import { NeoSectionTitle } from "./section-title";

export function NeoSkills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <NeoSectionTitle index="02" eyebrow="Toolkit" title="Skills" meta="Build · Analyze · Learn" />

      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {neoSkills.map((block, i) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative bg-neo-bg p-7 transition-colors hover:bg-neo-panel"
          >
            <span className="font-techno text-xs uppercase tracking-[0.3em] text-neo-pink">
              {block.label}
            </span>
            <ul className="mt-5 flex flex-wrap gap-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-white/12 px-3 py-1.5 font-techno text-xs uppercase tracking-[0.1em] text-white/70 transition-colors group-hover:border-white/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        {/* filler cell keeps the grid tidy on lg */}
        <div className="hidden bg-neo-bg lg:block" />
      </div>
    </section>
  );
}
