"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { neoNav } from "@/data/neo";
import { scrollToSection } from "@/components/providers/smooth-scroll";
import { cn } from "@/lib/utils";

/** Centered techno nav with an outlined "Contact Me" button. */
export function NeoNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  function go(id: string) {
    scrollToSection(id);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-neo-bg/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:justify-center sm:gap-8">
        {/* Mobile brand */}
        <span className="font-techno text-sm uppercase tracking-[0.3em] text-white sm:hidden">MY</span>

        <ul className="hidden items-center gap-7 sm:flex">
          {neoNav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className="font-techno text-sm uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-neo-pink"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go("contact")}
              className="rounded-sm border border-neo-pink px-5 py-2 font-techno text-sm uppercase tracking-[0.15em] text-neo-pink transition-colors hover:bg-neo-pink hover:text-neo-bg"
            >
              Contact&nbsp;Me
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-neo-bg/95 px-5 py-4 sm:hidden"
        >
          {[...neoNav, { id: "contact", label: "Contact Me" }].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className="block w-full py-3 text-left font-techno text-sm uppercase tracking-[0.15em] text-white/80"
              >
                {item.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
