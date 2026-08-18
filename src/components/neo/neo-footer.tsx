"use client";

import { site } from "@/data/site";
import { scrollToSection } from "@/components/providers/smooth-scroll";

export function NeoFooter() {
  return (
    <footer className="border-t border-white/10 bg-neo-bg py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-techno text-xs uppercase tracking-[0.25em] text-white/40">
          © {new Date().getFullYear()} {site.name}
        </p>
        <button
          onClick={() => scrollToSection("home")}
          className="font-techno text-xs uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-neo-pink"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
