"use client";

/**
 * Aurora / mesh gradient backdrop. Pure CSS (no canvas) so it costs
 * essentially nothing at runtime and never blocks the main thread.
 * Layered blurred blobs + a faint grid create depth without particles.
 */
export function AuroraBackground({ withGrid = true }: { withGrid?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/30 via-fuchsia-500/20 to-transparent blur-3xl animate-aurora-drift" />
      <div className="absolute right-[-8%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-sky-500/20 to-transparent blur-3xl animate-aurora-drift [animation-delay:-6s]" />
      <div className="absolute bottom-[-12%] left-[-6%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-emerald-500/15 to-transparent blur-3xl animate-aurora-drift [animation-delay:-12s]" />

      {/* Faint grid for structure */}
      {withGrid && (
        <div className="absolute inset-0 bg-grid opacity-[0.35] mask-fade-b dark:opacity-[0.25]" />
      )}

      {/* Vignette to seat content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(var(--background)/0.85)_100%)]" />
    </div>
  );
}
