"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/data/site";

/**
 * Scroll-spy hook. Observes section elements and returns the id of the one
 * currently dominating the viewport. Uses IntersectionObserver for
 * performance (no scroll-event thrashing).
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0]);

  useEffect(() => {
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        // Pick the most-visible section.
        let best: SectionId = ids[0];
        let bestRatio = 0;
        for (const id of ids) {
          const ratio = visibility.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (bestRatio > 0) setActive(best);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
