"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ambient drifting glow, using the three product accent colours.
 *
 * Three blurred radial blobs drift on independent loops and overlap, so the
 * blend shifts through cyan → emerald → purple over time rather than sitting on
 * one static colour.
 *
 * Only `transform` (x/y) and `opacity` are animated — both GPU-composited, so
 * no layout or paint work per frame. The blur is a static filter set once.
 *
 * Honours prefers-reduced-motion: the drift stops entirely and the blobs render
 * as a still gradient wash.
 */

type Blob = {
  /** Position, size and colour. Full literal classes — Tailwind needs them. */
  className: string;
  x: number[];
  y: number[];
  opacity: number[];
  duration: number;
};

const BLOBS: Blob[] = [
  {
    className: "left-[6%] top-[2%] w-[420px] h-[420px] bg-cyan-500/15",
    x: [-40, 60, 10, -40],
    y: [-20, 30, 70, -20],
    opacity: [0.55, 1, 0.7, 0.55],
    duration: 11,
  },
  {
    className:
      "left-1/2 top-[-6%] -translate-x-1/2 w-[520px] h-[520px] bg-emerald-500/15",
    x: [30, -50, 20, 30],
    y: [10, 60, -20, 10],
    opacity: [0.9, 0.55, 1, 0.9],
    duration: 13,
  },
  {
    className: "right-[6%] top-[6%] w-[440px] h-[440px] bg-purple-500/15",
    x: [-20, 45, -60, -20],
    y: [40, -30, 25, 40],
    opacity: [0.7, 1, 0.6, 0.7],
    duration: 9.5,
  },
];

export function AmbientGlow({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
          style={{ willChange: shouldReduceMotion ? undefined : "transform, opacity" }}
          animate={
            shouldReduceMotion
              ? undefined
              : { x: blob.x, y: blob.y, opacity: blob.opacity }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

export default AmbientGlow;
