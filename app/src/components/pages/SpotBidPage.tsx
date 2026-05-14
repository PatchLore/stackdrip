"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Wallet,
  Star,
  Crown,
  Clock,
  ArrowRight,
  Zap,
  TrendingUp,
  MessageCircle,
  Pin,
  DollarSign,
  ChevronRight,
  Twitter,
  BookOpen,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ──────────────── Animation helpers ──────────────── */
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

/* ──────────────── Telegram Mockup Component ──────────────── */
function TelegramMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow effect behind the mockup */}
      <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl" />
      <div className="relative bg-[#0e0e12] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#141418] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-zinc-500 font-mono ml-2">
            CryptoAlpha Group
          </span>
          <span className="ml-auto text-xs text-zinc-600">3.2k members</span>
        </div>

        {/* Chat area */}
        <div className="px-4 py-4 space-y-3 min-h-[260px]">
          {/* Pinned message */}
          <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-xl p-3 relative">
            <div className="flex items-center gap-2 mb-1.5">
              <Pin className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                SpotBid Sponsored Ad
              </span>
              <span className="ml-auto text-[10px] text-emerald-500/60">
                Pinned
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              🚀 <span className="text-emerald-300 font-medium">DeXTrade</span>, 
              The fastest cross-chain DEX. Trade any token in seconds. Low
              fees, high liquidity.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] text-zinc-500">
                Current bid: <span className="text-emerald-400 font-medium">850 XTR</span>
              </span>
              <span className="text-[10px] text-zinc-600">|</span>
              <span className="text-[10px] text-zinc-500">
                Expires in 14h 22m
              </span>
            </div>
          </div>

          {/* Bid messages */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-blue-400">A</span>
              </div>
              <div>
                <span className="text-[10px] text-blue-400 font-medium">
                  Alex_Crypto
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Bid placed: <span className="text-emerald-400">780 XTR</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-purple-400">M</span>
              </div>
              <div>
                <span className="text-[10px] text-purple-400 font-medium">
                  Max_Trader
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Bid placed: <span className="text-emerald-400">850 XTR</span>
                  <span className="text-[10px] text-zinc-600 ml-1">
                    (highest)
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-orange-400">S</span>
              </div>
              <div>
                <span className="text-[10px] text-orange-400 font-medium">
                  Sara_Dev
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Going higher... <span className="text-emerald-400">900 XTR</span>
                  <span className="text-[10px] text-zinc-600 ml-1">
                    🔥 new high!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="px-4 py-3 bg-[#141418] border-t border-white/[0.06] flex items-center gap-2">
          <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 text-[11px] text-zinc-600">
            Message...
          </div>
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <Send className="w-3 h-3 text-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────── SpotBid Landing Page ──────────────── */
export default function SpotBidPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ───── Navbar ───── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Stack<span className="text-emerald-400">Drip</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a
              href="#security"
              className="hover:text-white transition-colors"
            >
              Security
            </a>
            <a href="#how" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#revenue" className="hover:text-white transition-colors">
              Revenue
            </a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all"
          >
            <a
              href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-emerald-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Left - Copy */}
              <div className="text-center lg:text-left">
                <motion.div variants={fadeUp} custom={0}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400 text-xs font-medium mb-6">
                    <Star className="w-3 h-3" />
                    Pin-to-Earn for Telegram
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                >
                  Turn Your Telegram Pinned Message Into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                    Autopilot Revenue.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  SpotBid by StackDrip runs 24/7 auctions for your group's
                  top slot. Advertisers bid, you keep 95% of the revenue. Zero
                  upfront cost.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-8 h-12 text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <a
                      href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Free 48-Hour Test
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <span className="text-sm text-zinc-500">
                    No strings attached
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-xs text-zinc-500"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Zero upfront cost
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    48h free trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    You keep 95%
                  </span>
                </motion.div>
              </div>

              {/* Right - Telegram Mockup */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex justify-center"
              >
                <TelegramMockup />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ───── Trust & Security Section ───── */}
        <section
          id="security"
          className="py-20 md:py-28 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400 text-xs font-medium mb-4"
              >
                <Shield className="w-3 h-3" />
                Trust & Security
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Built for Security.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Zero Risk.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              >
                We know crypto admins have seen every scam in the book. That's
                why SpotBid was designed from the ground up with your security as
                the top priority.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                {
                  icon: Wallet,
                  title: "No Wallet Connects",
                  description:
                    "We never ask for your private keys or wallet access. Your funds stay in your control at all times, no connect buttons, no approvals, no risk.",
                },
                {
                  icon: Star,
                  title: "Native Telegram Stars",
                  description:
                    "Payments use Telegram's official XTR currency, processed entirely by Telegram's secure infrastructure. No third-party payment processors involved.",
                },
                {
                  icon: Crown,
                  title: "You Keep Control",
                  description:
                    "You remain the supreme admin. We don't take over your group, modify your settings, or gain any admin privileges beyond pinning sponsored messages.",
                },
                {
                  icon: Clock,
                  title: "Risk-Free Trial",
                  description:
                    "Try it for 48 hours. If it doesn't print money, we remove it instantly. No strings attached, no commitments, no questions asked.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-6 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-4 group-hover:bg-emerald-500/15 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── How It Works ───── */}
        <section id="how" className="py-20 md:py-28">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400 text-xs font-medium mb-4"
              >
                <Zap className="w-3 h-3" />
                Simple Setup
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Live in 30 Seconds.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Earning Forever.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6 relative"
            >
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />

              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "Add & Admin",
                  description:
                    "Add the SpotBid bot to your Telegram group and grant it pin permissions. The entire process takes less than 30 seconds, no complex configuration needed.",
                  detail: "Takes 30 seconds",
                },
                {
                  step: "02",
                  icon: TrendingUp,
                  title: "Set the Floor",
                  description:
                    "Define your minimum bid amount in Telegram Stars (XTR). This ensures you never accept lowball offers. You set the rules, the bot handles the rest automatically.",
                  detail: "e.g., 100 Stars minimum",
                },
                {
                  step: "03",
                  icon: DollarSign,
                  title: "Earn on Autopilot",
                  description:
                    "Members bid for the pinned slot. The highest bid auto-pins for 24 hours, then the next auction starts. You just watch the 95% revenue roll in, 24/7.",
                  detail: "95% revenue to you",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-emerald-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    {item.detail}
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── Revenue Split Section ───── */}
        <section id="revenue" className="py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.015] to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400 text-xs font-medium mb-4"
              >
                <DollarSign className="w-3 h-3" />
                Transparent Split
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                You Own the Community,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  You Keep the Lion's Share.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="rounded-2xl border border-white/[0.06] bg-[#0c0c0f] p-8 md:p-12"
              >
                {/* Visual split bar */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-zinc-400 w-20">Your share</span>
                    <div className="flex-1 h-12 rounded-xl overflow-hidden bg-[#141418] flex">
                      <div className="w-[95%] bg-gradient-to-r from-emerald-600 to-emerald-400 flex items-center justify-center rounded-l-xl">
                        <span className="text-lg font-bold text-black">
                          95%
                        </span>
                      </div>
                      <div className="w-[5%] bg-zinc-700 flex items-center justify-center rounded-r-xl min-w-[36px]">
                        <span className="text-[10px] font-bold text-zinc-300">
                          5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/15">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-emerald-400">
                          95%
                        </p>
                        <p className="text-xs text-zinc-500">To You</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      You keep the vast majority of all auction revenue. Every
                      bid, every cycle, 95 cents of every Star goes directly to
                      your wallet.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-zinc-300">5%</p>
                        <p className="text-xs text-zinc-500">To StackDrip</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Our 5% covers server infrastructure, 24/7 uptime
                      monitoring, automatic auction management, and priority
                      support. You never pay out of pocket.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-center text-sm text-zinc-500">
                  No hidden fees. No monthly charges. You only earn when we
                  earn.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ───── Final CTA Section ───── */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="relative rounded-3xl border border-emerald-500/15 bg-gradient-to-b from-emerald-500/[0.06] to-transparent p-10 md:p-16 text-center overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

              <motion.h2
                variants={fadeUp}
                custom={0}
                className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Ready to Monetize Your Community?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="relative mt-4 text-zinc-400 max-w-xl mx-auto"
              >
                Start your free 48-hour test today. No credit card, no
                commitment, no risk. Just revenue.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="relative mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-8 h-12 text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a
                    href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Free 48-Hour Test
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] text-zinc-300 rounded-xl px-8 h-12 transition-all"
                >
                  <a
                    href="https://twitter.com/messages/compose?recipient_id=1589435889230512128"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    DM Us on Twitter
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#06060a]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Stack<span className="text-emerald-400">Drip</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a
                href="https://t.me/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Telegram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Documentation</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} StackDrip. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}