"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calculator,
  Eye,
  ScrollText,
  Sliders,
  ArrowRight,
  Zap,
  Star,
  Shield,
  CheckCircle2,
  ChevronRight,
  Twitter,
  Send,
  BookOpen,
  Crown,
  Clock,
  DollarSign,
  Package,
  Truck,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GUMROAD_EBAY_URL } from "@/lib/site";

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

function EbayMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl" />
      <div className="relative bg-[#0e0e12] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#141418] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-zinc-500 font-mono ml-2">
            ebay.com/itm/265843...
          </span>
        </div>

        <div className="px-4 py-4 space-y-3 min-h-[260px]">
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-lg bg-zinc-800 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-300 font-medium leading-relaxed line-clamp-2">
                Sony WH-1000XM5 Wireless Noise Cancelling Headphones
              </p>
              <p className="text-sm text-emerald-400 font-bold mt-1">
                £219.99
              </p>
              <p className="text-[10px] text-zinc-500 mt-0.5">
                + £3.99 shipping
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-cyan-500/[0.08] border border-cyan-500/20 p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <Search className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider">
                Profit Guardian
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">eBay Fees (13.25%)</span>
                <span className="text-zinc-300">-£29.15</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">Payment Processing</span>
                <span className="text-zinc-300">-£6.72</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">Packaging & Postage</span>
                <span className="text-zinc-300">-£4.50</span>
              </div>
              <div className="border-t border-cyan-500/20 pt-1.5 flex justify-between text-[11px] font-semibold">
                <span className="text-cyan-400">Estimated Profit</span>
                <span className="text-emerald-400">£78.63</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EbayProfitGuardianPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ───── Navbar ───── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/25 transition-colors">
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Stack<span className="text-cyan-400">Drip</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>
            <a href="#how" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all px-4 py-2 text-sm"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div className="text-center lg:text-left">
                <motion.div variants={fadeUp} custom={0}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-xs font-medium mb-6">
                    <Star className="w-3 h-3" />
                    Chrome Extension for eBay Sellers
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                >
                  Know Your Exact Profit on{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                    Every eBay Sale.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  eBay Profit Guardian calculates your true margin by
                  auto-scraping fees, shipping, and processing costs from any UK
                  or US listing — right in your browser.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl px-8 h-12 text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <a
                      href={GUMROAD_EBAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Lifetime Access
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <span className="text-sm text-zinc-500">
                    &pound;14.99 lifetime — no subs
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-xs text-zinc-500"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    Pay once
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    No subscription
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    Lifetime updates
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex justify-center"
              >
                <EbayMockup />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ───── Features Section ───── */}
        <section
          id="features"
          className="py-20 md:py-28 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />

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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-xs font-medium mb-4"
              >
                <Shield className="w-3 h-3" />
                Features
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Built for Serious{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  eBay Sellers.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-4 text-zinc-400 max-w-2xl mx-auto"
              >
                Everything you need to know your true profit margin before you
                buy or list.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: Search,
                  title: "Instant Auto-Scrape",
                  description:
                    "Pulls price and shipping directly from the eBay page DOM. One click and your profit is calculated — no manual data entry required.",
                },
                {
                  icon: Calculator,
                  title: "Accurate Fee Math",
                  description:
                    "Factors in eBay Final Value Fees, payment processing charges, and packaging costs. Every deduction accounted for with precision.",
                },
                {
                  icon: Eye,
                  title: "Floating Widget",
                  description:
                    "See a profit summary right on the eBay page without opening the popup. Your margin at a glance, always visible as you browse.",
                },
                {
                  icon: ScrollText,
                  title: "Unlimited History (Pro)",
                  description:
                    "Track all your calculated flips with full history. Free tier caps at 5 records — Pro unlocks unlimited storage of every calculation.",
                },
                {
                  icon: Sliders,
                  title: "Custom Fee Rates (Pro)",
                  description:
                    "Adjust percentages to match your specific eBay store tier. If you have a Top Rated or Anchor store, your real fees differ — now your calculator does too.",
                },
                {
                  icon: Shield,
                  title: "No Data Collected",
                  description:
                    "All calculations happen locally in your browser. Your eBay data never leaves your machine — nothing is tracked, stored, or shared.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-6 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-cyan-500/20 hover:bg-cyan-500/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-400" />
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-xs font-medium mb-4"
              >
                <Zap className="w-3 h-3" />
                How It Works
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Install. Browse.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  Know Your Profit.
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
              <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

              {[
                {
                  step: "01",
                  icon: Search,
                  title: "Browse eBay",
                  description:
                    "Visit any UK or US eBay listing page as you normally would. The extension detects product pages automatically — no setup required.",
                  detail: "Works on any listing",
                },
                {
                  step: "02",
                  icon: Eye,
                  title: "See Your Profit",
                  description:
                    "A floating widget shows your estimated profit margin in real time. All fees, shipping, and processing costs are calculated instantly from the page data.",
                  detail: "Instant calculation",
                },
                {
                  step: "03",
                  icon: Crown,
                  title: "Flip with Confidence",
                  description:
                    "Know exactly what you'll walk away with before you buy. Track your flips, adjust fee rates for your store tier, and protect your margins forever.",
                  detail: "&pound;14.99 lifetime",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                    {item.detail}
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── Pricing Section ───── */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent pointer-events-none" />

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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-xs font-medium mb-4"
              >
                <DollarSign className="w-3 h-3" />
                Simple Pricing
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Pay Once.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  Protect Your Margins Forever.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="max-w-lg mx-auto"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.06] to-[#0c0c0f] p-8 md:p-12 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-400 text-xs font-medium mb-6">
                    <Crown className="w-3 h-3" />
                    Lifetime Access
                  </div>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      &pound;14.99
                    </span>
                    <span className="text-zinc-500 ml-2">one-time</span>
                  </div>

                  <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
                    Pay once, protect your margins forever. No subscriptions, no
                    upsells, no hidden fees.
                  </p>

                  <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                    {[
                      "Instant auto-scrape on any eBay listing",
                      "Accurate fee math for UK & US listings",
                      "Floating profit widget on eBay pages",
                      "Free tier: 5 history records",
                      "Pro: Unlimited flip tracking",
                      "Pro: Custom fee rates for your store tier",
                      "Lifetime updates & support",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl px-10 h-13 text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                  >
                    <a
                      href={GUMROAD_EBAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Lifetime Access
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ───── Final CTA Section ───── */}
        <section id="cta" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="relative rounded-3xl border border-cyan-500/15 bg-gradient-to-b from-cyan-500/[0.06] to-transparent p-10 md:p-16 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

              <motion.h2
                variants={fadeUp}
                custom={0}
                className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Stop Guessing. Start Profiting.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="relative mt-4 text-zinc-400 max-w-xl mx-auto"
              >
                Install eBay Profit Guardian today. Know your exact margin on
                every listing — &pound;14.99 lifetime, no subscriptions.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="relative mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl px-8 h-12 text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a
                    href={GUMROAD_EBAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Lifetime Access
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
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Stack<span className="text-cyan-400">Drip</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a
                href="https://t.me/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Telegram</span>
              </a>
              <a
                href="/privacy"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Privacy</span>
              </a>
            </div>

            <p className="text-xs text-zinc-600">
              &copy; 2026 StackDrip. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
