"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/**
 * Productized media packages, made with my own pipeline (Blender, ffmpeg, Remotion).
 * DRAFT starting prices: confirm before publishing.
 */
const packages = [
  {
    name: "Animated art loops",
    price: "from £79",
    video: "/media/art-loop.mp4",
    pixelated: true,
    description:
      "Your artwork turned into a seamless living loop: flowing water, twinkling stars, drifting light, delivered as MP4 and GIF. For artists on X, Steam pages, stream overlays and wallpapers.",
  },
  {
    name: "VJ loop packs",
    price: "from £199",
    video: "/media/vj-tunnel.mp4",
    pixelated: false,
    description:
      "Tempo-locked 3D loops for DJs and venues, in your colours and with your logo, in 16:9 and 9:16. Delivered as MP4 plus HAP for Resolume and VDMX.",
  },
  {
    name: "Documentaries & explainers",
    price: "from £199",
    video: "/media/documentary-excerpt.mp4",
    pixelated: false,
    description:
      "Sourced explainers for YouTube: a researched script with every claim linked to a source, licensed archive visuals and narration. Short explainers from £199; full 8–12 minute documentaries from £399, with Shorts cut from each.",
  },
];

export function CreatorMedia() {
  return (
    <section id="media" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Creator media, made with my own tools
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-zinc-400 leading-relaxed"
          >
            Not every project needs custom software. These are fixed packages
            built on the same pipeline I use for my own channels.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c0f] transition-all duration-300 hover:border-white/15"
            >
              <video
                src={pkg.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                className={`aspect-video w-full bg-black object-cover ${pkg.pixelated ? "[image-rendering:pixelated]" : ""}`}
              />
              <div className="flex flex-1 flex-col p-8">
                <p className="text-sm font-medium text-zinc-400">{pkg.price}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {pkg.name}
                </h3>
                <p className="mt-3 flex-1 text-sm text-zinc-500 leading-relaxed">
                  {pkg.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors group-hover:text-white"
                >
                  Ask about it
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-8 text-center text-sm text-zinc-500 max-w-xl mx-auto"
        >
          Musician? Lyric videos, teasers and Spotify Canvas loops live at{" "}
          <a
            href="https://www.silverscentsongs.store/#visuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors"
          >
            Silverscent Songs
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
