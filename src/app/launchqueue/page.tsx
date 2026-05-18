"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Ban,
  MessageSquareWarning,
  Unlink,
  Sparkles,
  Rocket,
  Users,
  Mail,
  ArrowRight,
  Check,
  Quote,
  Twitter,
  Zap,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function EmailCaptureForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early access"
        disabled={submitted}
        className="flex-1 px-4 py-3 bg-[#111118] border border-[#1e1e2e] rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={submitted || loading}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : submitted ? (
          <>
            <Check className="w-5 h-5" />
            You&apos;re on the list!
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/25 transition-colors">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Launch<span className="text-purple-400">Queue</span>
          </span>
        </a>
        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all"
        >
          <a href="#waitlist">
            Get Early Access
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111118] border border-white/[0.06] rounded-full mb-8"
        >
          <span className="text-2xl">📱</span>
          <span className="text-sm font-medium text-zinc-400">
            Finally, pre-launch marketing for mobile
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Steam Wishlists for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Mobile Games
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Stop sending Google Drive links into the void. Capture player emails,
          build a waitlist, and launch your mobile game to an actual audience on
          Day 1.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <EmailCaptureForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-zinc-500 flex items-center justify-center gap-2"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500/20 rounded-full">
            <Users className="w-3 h-3 text-green-400" />
          </span>
          Join 50+ indie devs building their launch queue
        </motion.p>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/3 w-20 h-20 bg-purple-500/10 rounded-2xl blur-xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-2/3 w-24 h-24 bg-blue-500/10 rounded-2xl blur-xl hidden lg:block"
        />
      </div>
    </section>
  );
}

function ProblemSection() {
  const painPoints = [
    {
      icon: Ban,
      title: "No Native Wishlists",
      text: "Apple and Google don't let players \"wishlist\" your game before release. You're launching to crickets.",
    },
    {
      icon: MessageSquareWarning,
      title: "Discord Chaos",
      text: "Begging for playtesters in Discord servers is exhausting. Important players get lost in the chat noise.",
    },
    {
      icon: Unlink,
      title: "The Google Drive Graveyard",
      text: "Sending download links means zero tracking. You have no idea who actually wants to play your game.",
    },
  ];

  return (
    <AnimatedSection className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The App Store doesn&apos;t care about your game{" "}
            <span className="text-zinc-500">
              until it&apos;s already launched
            </span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-[#111118] border border-white/[0.06] rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <point.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Create your page",
      description:
        "Upload your game's logo, write a hook, and pick a theme color.",
    },
    {
      number: "02",
      title: "Share the link",
      description: "Post it on Reddit, Twitter, or Discord.",
    },
    {
      number: "03",
      title: "Watch the emails roll in",
      description:
        "Export your list and email your fans the moment the game hits the App Store.",
    },
  ];

  return (
    <AnimatedSection className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From zero players to a launch queue.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              In 60 seconds.
            </span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
              )}

              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 relative">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function TestimonialSection() {
  return (
    <AnimatedSection className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-12 bg-[#111118] border border-white/[0.06] rounded-2xl"
        >
          <Quote className="w-12 h-12 text-purple-500/30 absolute top-6 left-6" />

          <blockquote className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8 pl-8">
            &ldquo;I spent 6 months making my game and had 10 downloads on
            launch day. I wish I had a way to collect the emails of the 500
            people who upvoted my Reddit post.&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 pl-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              🤕
            </div>
            <div>
              <p className="font-semibold">Frustrated Solo Dev</p>
              <p className="text-sm text-zinc-500">Indie Mobile Game Developer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function FinalCTASection() {
  return (
    <AnimatedSection className="py-24 px-6 relative overflow-hidden" id="waitlist">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stop launching to an empty room
        </h2>
        <p className="text-lg text-zinc-400 mb-10">
          Get early access to LaunchQueue and start building your mobile
          waitlist today.
        </p>

        <EmailCaptureForm className="justify-center" />
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06] bg-[#06060a]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            Stack<span className="text-purple-400">Drip</span>
          </span>
        </a>

        <p className="text-sm text-zinc-500">
          Built by an indie dev, for indie devs.
        </p>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <Twitter className="w-4 h-4" />
          Twitter/X
        </a>
      </div>
    </footer>
  );
}

export default function LaunchQueuePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
