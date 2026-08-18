"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reference-style section header: an orange "NN / LABEL" eyebrow, a giant
 * display title, an optional right-aligned meta, and a hairline rule.
 */
export function NeoSectionTitle({
  index,
  eyebrow,
  title,
  meta,
}: {
  index: string;
  eyebrow: string;
  title: string;
  meta?: ReactNode;
}) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-4 font-techno text-xs uppercase tracking-[0.35em] text-neo-pink"
      >
        <span className="h-px w-10 bg-neo-pink" />
        {index} / {eyebrow}
      </motion.div>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl uppercase leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h2>
        {meta && (
          <div className="pb-2 text-right font-techno text-[10px] uppercase tracking-[0.3em] text-white/40">
            {meta}
          </div>
        )}
      </div>
    </div>
  );
}
