"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Lightbulb, Hammer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientGlow } from "@/components/site/AmbientGlow";
import { ContactCTA } from "@/components/site/ContactCTA";
import { products, STATUS_LABEL } from "@/lib/products";
import { TWITTER_URL } from "@/lib/site";

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

const steps = [
  {
    icon: Lightbulb,
    title: "You bring the idea",
    description:
      "A tool your audience keeps asking for. A workflow you're doing manually that should be automated. A product your community would pay for if it existed.",
  },
  {
    icon: Hammer,
    title: "I build it",
    description:
      "Working software, not a mockup. I move fast because I'm not managing a team or a bloated process, just building the thing.",
  },
  {
    icon: Users,
    title: "It's funded by your audience",
    description:
      "Pricing is flexible depending on the project: a flat build fee, or a lower fee plus a small ongoing share once it's live and earning. We figure out what fits before anything starts.",
  },
];

const pricingOptions = [
  {
    name: "Flat fee",
    description:
      "You pay once, you own it outright. Best if you want full control from day one, or the tool isn't directly monetized (a community tool, an internal workflow, a free perk for subscribers).",
  },
  {
    name: "Flat fee + revenue share",
    description:
      "A lower upfront fee, plus a small ongoing share of what the tool earns once it's live, capped to a fixed period. Best if you're funding the build through the tool itself, or want to keep upfront cost low while testing an idea.",
  },
];

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
            <a href="#how" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a
              href={TWITTER_URL}
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
            <a href="#contact">
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <AmbientGlow />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 text-xs font-medium mb-6">
                  <Code2 className="w-3 h-3" />
                  Solo-built, creator-funded tools
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
              >
                I build custom tools for creators,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  funded by the audience that will use them.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto"
              >
                You know exactly what your community needs. I turn that into a
                real, working product, fast, without you needing to hire a dev
                team or learn to code.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-col sm:flex-row items-center gap-3 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl px-8 h-12 transition-all"
                >
                  <a href="#contact">
                    Tell me what you&apos;re building
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-transparent hover:bg-white/[0.06] text-zinc-300 hover:text-white font-medium rounded-xl px-8 h-12 transition-all"
                >
                  <a href="#work">See what I&apos;ve built</a>
                </Button>
              </motion.div>
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
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                How it works
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    custom={i}
                    className="relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f]"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-zinc-300" />
                      </div>
                      <span className="text-xs font-mono text-zinc-600">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── Pricing ───── */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Two ways to work together
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {pricingOptions.map((option, i) => (
                <motion.div
                  key={option.name}
                  variants={fadeUp}
                  custom={i}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f]"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {option.name}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {option.description}
                  </p>
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
              Every project&apos;s different. We&apos;ll figure out what makes
              sense on a quick call, not a fixed price sheet.
            </motion.p>
          </div>
        </section>

        {/* ───── Work / Portfolio strip ───── */}
        <section id="work" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Things I&apos;ve built
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {products.map((product, i) => {
                const Icon = product.icon;
                const isActive = product.status === "active";

                const inner = (
                  <>
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${product.accent.iconWrap}`}
                      >
                        <Icon className={`w-6 h-6 ${product.accent.icon}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-semibold text-white">
                            {product.name}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                              isActive
                                ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-400"
                                : "border-white/10 bg-white/[0.04] text-zinc-500"
                            }`}
                          >
                            {STATUS_LABEL[product.status]}
                          </span>
                        </div>
                        {product.tagline && (
                          <p
                            className={`text-sm font-medium mt-1 ${product.accent.tagline}`}
                          >
                            {product.tagline}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                      {product.blurb}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        product.cta.href
                          ? `text-zinc-400 transition-colors ${product.accent.linkHover}`
                          : "text-zinc-600"
                      }`}
                    >
                      {product.cta.label}
                      {product.cta.href && (
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </>
                );

                const cardClass = `group relative p-8 rounded-2xl border border-white/[0.06] bg-[#0c0c0f] transition-all duration-300 block ${product.accent.card}`;

                return product.href ? (
                  <motion.a
                    key={product.slug}
                    href={product.href}
                    variants={fadeUp}
                    custom={i}
                    className={cardClass}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={product.slug}
                    variants={fadeUp}
                    custom={i}
                    className={cardClass}
                  >
                    {inner}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── Contact ───── */}
        <ContactCTA />
      </main>

      {/* ───── Footer ───── */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#06060a]">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 mb-4">
            <a href="/about" className="hover:text-zinc-300 transition-colors">
              About
            </a>
            <a href="/faq" className="hover:text-zinc-300 transition-colors">
              FAQ
            </a>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Twitter
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; 2026 StackDrip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
