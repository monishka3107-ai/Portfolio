import { neoMarquee } from "@/data/neo";

/** Infinite horizontal keyword strip (duplicated track for seamless loop). */
export function NeoMarquee() {
  const items = [...neoMarquee, ...neoMarquee];
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-neo-panel/40 py-4">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-techno text-sm uppercase tracking-[0.3em] text-white/35">
              {word}
            </span>
            <span className="text-neo-pink">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
