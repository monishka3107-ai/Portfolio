"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * ASCII cursor for the techno homepage: a monospace "+" crosshair (slowly
 * spinning) tracks the pointer, a short trail of "·" dots lags behind it for a
 * sense of movement, and a bracket reticle "[ ]" closes in on interactive
 * elements. Falls back to the native cursor on touch / reduced-motion.
 */
export function NeoCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Reticle + trail follow with progressively more lag → a moving tail.
  const rx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });
  const t1x = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const t1y = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });
  const t2x = useSpring(x, { stiffness: 140, damping: 22, mass: 0.8 });
  const t2y = useSpring(y, { stiffness: 140, damping: 22, mass: 0.8 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("neo-cursor-none");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, input, textarea, select, [role='button'], [data-cursor]"));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      document.documentElement.classList.remove("neo-cursor-none");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  const dotCls =
    "pointer-events-none fixed left-0 top-0 z-[9998] -ml-1 -mt-2 select-none font-mono text-sm font-bold leading-none text-neo-pink";

  return (
    <>
      {/* trailing ascii dots (motion tail) */}
      <motion.div aria-hidden style={{ x: t2x, y: t2y, opacity: 0.25 }} className={dotCls}>
        ·
      </motion.div>
      <motion.div aria-hidden style={{ x: t1x, y: t1y, opacity: 0.45 }} className={dotCls}>
        ·
      </motion.div>

      {/* exact spinning crosshair */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-2 -mt-2 flex h-4 w-4 select-none items-center justify-center text-neo-pink"
        animate={{ scale: pressed ? 0.6 : 1, opacity: hovering ? 0.7 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.span
          className="font-mono text-base font-bold leading-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          +
        </motion.span>
      </motion.div>

      {/* bracket reticle — closes in on hover */}
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -mt-3 flex select-none items-center font-mono text-lg font-bold leading-none text-neo-pink"
        animate={{
          opacity: hovering ? 1 : 0,
          marginLeft: hovering ? -22 : -30,
          letterSpacing: hovering ? "0.55rem" : "0.95rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        [&nbsp;]
      </motion.div>
    </>
  );
}
