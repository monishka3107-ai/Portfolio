"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero character — Monishka's own chibi illustration (public/character.png).
 * The background was removed (rembg) so the figure floats freely with no box,
 * over the pink glow halo, with a gentle float animation and the </> chip.
 *
 * To swap the character, drop a transparent PNG at public/character.png and
 * update the width/height below to its pixel dimensions.
 */
export function AnimeCharacter() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-fit">
      {/* Pink glow halo (behind the figure) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#f48fb144,transparent_68%)] blur-2xl"
      />
      {/* Subtle scanline accents */}
      <div aria-hidden className="absolute -right-6 top-[26%] h-px w-20 bg-[#f48fb1]/50" />
      <div aria-hidden className="absolute -left-6 top-[52%] h-px w-14 bg-[#f48fb1]/40" />

      {/* Floating code-tag chip — reinforces the "in tech" theme */}
      <motion.div
        aria-hidden
        className="absolute right-2 top-[8%] z-20 rounded-md border border-[#f48fb1]/60 bg-neo-panel/80 px-2.5 py-1 font-mono text-sm text-[#f48fb1] backdrop-blur-sm"
        initial={reduce ? undefined : { y: 0 }}
        animate={reduce ? undefined : { y: [-8, 4, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        &lt;/&gt;
      </motion.div>

      {/* Character image (background removed → floats freely) */}
      <motion.div
        className="relative z-10 h-[50vh] sm:h-[56vh] lg:h-[64vh]"
        initial={reduce ? undefined : { y: 8 }}
        animate={reduce ? undefined : { y: [-7, 7, -7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/character.png"
          alt="Chibi illustration of Monishka Yadav"
          width={455}
          height={1369}
          priority
          className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </div>
  );
}
