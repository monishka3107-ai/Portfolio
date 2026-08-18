"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, ArrowUpRight } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Learning that&apos;s{" "}
              <span className="text-gradient">on the record</span>
            </>
          }
          description="Certificates mark checkpoints in my learning — proof of curiosity followed through, with more on the way."
        />

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={staggerItem}>
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: Certification }) {
  const inProgress = cert.status === "in-progress";
  return (
    <SpotlightCard className={cn("hairline h-full", inProgress && "border-dashed")}>
      <div className="flex h-full flex-col gap-4 rounded-3xl p-6 transition-transform duration-300 group-hover/spot:-translate-y-1">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border",
              inProgress
                ? "border-border bg-muted/40 text-muted-foreground"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
            )}
          >
            {inProgress ? <Clock className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-snug">{cert.title}</h3>
          <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-foreground"
          >
            View credential <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </SpotlightCard>
  );
}
