"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card that renders a soft radial highlight following the cursor.
 * Uses CSS custom properties updated on pointer move (no React re-render),
 * so it's cheap even with many cards on screen.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "hsl(var(--accent) / 0.15)",
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl",
        className,
      )}
    >
      {/* Spotlight layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--x) var(--y), ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
