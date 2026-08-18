"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";
import { certifications } from "@/data/certifications";
import { NeoSectionTitle } from "./section-title";

export function NeoCerts() {
  return (
    <section id="certs" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <NeoSectionTitle
        index="03"
        eyebrow="Recognition"
        title="Certs"
        meta="Certifications · Learning"
      />

      <ul>
        {certifications.map((cert, i) => {
          const inProgress = cert.status === "in-progress";
          const Icon = inProgress ? Clock : BadgeCheck;
          return (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-white/10 py-7"
            >
              <Icon
                className={`h-5 w-5 shrink-0 ${inProgress ? "text-white/40" : "text-neo-pink"}`}
              />
              <span className="font-display text-2xl uppercase tracking-tight text-white/80 transition-colors group-hover:text-white sm:text-3xl">
                {cert.title}
              </span>
              <span className="font-techno text-xs uppercase tracking-[0.25em] text-white/40">
                {cert.issuer}
              </span>
              <span className="ml-auto font-techno text-sm text-neo-pink">{cert.year}</span>
              <p className="w-full pl-11 text-sm text-white/45">{cert.description}</p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
