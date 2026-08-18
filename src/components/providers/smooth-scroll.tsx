"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

/**
 * Global Lenis smooth-scroll wrapper.
 * - Respects prefers-reduced-motion (disables inertia).
 * - Exposes a `lenis:scrollto` custom event so any component (nav, palette)
 *   can request a smooth scroll to a section without prop drilling.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <ReactLenis
      root
      options={{
        duration: prefersReduced ? 0 : 1.1,
        smoothWheel: !prefersReduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        lerp: 0.1,
      }}
    >
      <ScrollBridge />
      {children}
    </ReactLenis>
  );
}

/** Listens for `lenis:scrollto` events and drives Lenis accordingly. */
function ScrollBridge() {
  const lenis = useLenis();

  useEffect(() => {
    function handleScrollTo(e: Event) {
      const target = (e as CustomEvent<string>).detail;
      if (!target) return;
      const el = document.querySelector(target);
      if (el && lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -8, duration: 1.2 });
      }
    }
    window.addEventListener("lenis:scrollto", handleScrollTo as EventListener);
    return () => window.removeEventListener("lenis:scrollto", handleScrollTo as EventListener);
  }, [lenis]);

  return null;
}

/** Helper to trigger a smooth scroll from anywhere. */
export function scrollToSection(id: string) {
  const selector = id.startsWith("#") ? id : `#${id}`;
  window.dispatchEvent(new CustomEvent("lenis:scrollto", { detail: selector }));
}
