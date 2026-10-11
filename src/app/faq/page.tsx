import { Zap } from "lucide-react";
import { ContactCTA } from "@/components/site/ContactCTA";

const faqs = [
  {
    q: "Who is this for?",
    a: "Creators, community owners, and small teams with an audience who have a specific tool idea, but no dev team to build it.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope. Some projects work best as a flat fee, others as a lower fee plus a small revenue share once the tool is live. We'll figure out what fits on a quick call before anything's agreed.",
  },
  {
    q: "How fast can you build something?",
    a: "Depends entirely on scope, but working solo with no approval chain means most projects move faster than an agency or in-house dev team could manage.",
  },
  {
    q: "Do I own what you build?",
    a: "Yes. Ownership terms are agreed upfront as part of the project, whichever pricing model we use.",
  },
  {
    q: "What if I'm not sure exactly what I want yet?",
    a: "That's fine, most projects start that way. Send me the rough idea and we'll shape it into something buildable together.",
  },
  {
    q: "How do I get started?",
    a: "Use the contact form or WhatsApp button, tell me roughly what you're thinking, and I'll get back to you.",
  },
];

export default function FAQPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12">
            Questions
          </h1>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-8 border-b border-white/[0.06] last:border-0"
              >
                <h2 className="text-lg font-semibold text-white mb-3">
                  {faq.q}
                </h2>
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactCTA />
      </main>

      <footer className="mt-auto border-t border-white/[0.06] bg-[#06060a]">
        <div className="max-w-3xl mx-auto px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 mb-4">
            <a href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-zinc-300 transition-colors">
              About
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
