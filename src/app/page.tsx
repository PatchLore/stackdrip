"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Gamepad2,
  Bot,
  Code2,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ───── Navbar ───── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Stack<span className="text-zinc-400">Drip</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#products" className="hover:text-white transition-colors">
              Products
            </a>
            <a
              href="https://twitter.com/stackdrip"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg transition-all"
          >
            <a
              href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 text-xs font-medium mb-6">
                  <Code2 className="w-3 h-3" />
                  Solo-built micro-SaaS
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
              >
                Micro-SaaS built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  the trenches.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto"
              >
                We build lean, mean tools for creators, indie devs, and crypto
                communities. No bloat, just results.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ───── Products Section ───── */}
        <section id="products" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 text-xs font-medium mb-4"
              >
                <Zap className="w-3 h-3" />
                Our Arsenal
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Tools that ship.
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {/* eBay Profit Guardian Card */}
              <motion.a
                href="#"
                variants={fadeUp}
                custom={0}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-cyan-500/20 hover:bg-cyan-500/[0.02] transition-all duration-300 block"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors shrink-0">
                    <Search className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      eBay Profit Guardian
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium">
                      True Profit Calculator for eBay Sellers
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  Stop guessing if you&apos;re making money. Auto-scrapes fees,
                  shipping, and processing costs to calculate your exact profit
                  on any UK or US listing. Pay once, protect your margins
                  forever.
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              {/* SpotBid Card */}
              <motion.a
                href="/spotbid"
                variants={fadeUp}
                custom={1}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-300 block"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors shrink-0">
                    <Bot className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      SpotBid
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium">
                      Pin-to-Earn for Telegram
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  Turn your pinned message into autopilot revenue. Advertisers
                  bid, you keep 95%. Zero upfront cost.
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              {/* LaunchQueue Card */}
              <motion.a
                href="/launchqueue"
                variants={fadeUp}
                custom={2}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-purple-500/20 hover:bg-purple-500/[0.02] transition-all duration-300 block"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center group-hover:bg-purple-500/15 transition-colors shrink-0">
                    <Gamepad2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      LaunchQueue
                    </h3>
                    <p className="text-sm text-purple-400 font-medium">
                      Steam Wishlists for Mobile Games
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  Capture player emails before you launch. Build a waitlist and
                  hit the App Store with an audience on Day 1.
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-purple-400 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ───── CTA Section ───── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10 md:p-16 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

              <motion.h2
                variants={fadeUp}
                custom={0}
                className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Have an idea? Let&apos;s build it.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="relative mt-4 text-zinc-400 max-w-xl mx-auto"
              >
                StackDrip is a one-person studio. If you have a problem worth
                solving, DM us. We move fast.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="relative mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl px-8 h-12 transition-all"
                >
                  <a
                    href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DM Us on Twitter
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#06060a]">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-zinc-500">
            &copy; 2026 StackDrip. All rights reserved.
          </p>
          <a
            href="/privacy"
            className="inline-block mt-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
