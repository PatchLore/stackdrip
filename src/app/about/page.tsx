import { Zap } from "lucide-react";
import { ContactCTA } from "@/components/site/ContactCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Stack<span className="text-zinc-400">Drip</span>
            </span>
          </a>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-10">
            I build the tools bigger studios won&apos;t bother with.
          </h1>

          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
            <p>
              I&apos;m a solo developer and former sales professional, which
              means I build fast and I know how to talk to the person the tool
              is actually for.
            </p>

            <p>
              Most software studios need a project to be big enough to justify a
              team. I don&apos;t. If your community has a real, specific
              problem, that&apos;s often plenty.
            </p>

            <p>
              I&apos;ve built and shipped real products across different niches,
              from e-commerce tooling to community monetization bots to indie
              game marketing tools. Some are live products people pay for.
              Others are proof of what I can build quickly when the brief is
              clear.
            </p>

            <p>
              If you&apos;ve got an audience and an idea they&apos;d actually
              use, I&apos;d like to hear about it.
            </p>
          </div>

          <p className="mt-10 pt-8 border-t border-white/[0.06] text-sm text-zinc-500">
            Based in the UK. Building since 2024.
          </p>
        </div>

        <ContactCTA />
      </main>

      <footer className="mt-auto border-t border-white/[0.06] bg-[#06060a]">
        <div className="max-w-3xl mx-auto px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 mb-4">
            <a href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </a>
            <a href="/faq" className="hover:text-zinc-300 transition-colors">
              FAQ
            </a>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
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
