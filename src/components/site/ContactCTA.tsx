"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CONTACT_ANCHOR,
  CONTACT_EMAIL,
  FORMSPREE_INTAKE_ID,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";

/**
 * Shared contact surface. Replaces the hardcoded Twitter DM links that were
 * duplicated across pages.
 *
 * Contact methods, in priority order:
 *   1. Project intake form  — requires FORMSPREE_INTAKE_ID in src/lib/site.ts
 *   2. WhatsApp click-to-chat — requires WHATSAPP_NUMBER in src/lib/site.ts
 *   3. Email — always available, and the fallback while 1 and 2 are unset
 *
 * Both 1 and 2 are unset right now, so this renders the email fallback. Setting
 * either constant is a one-line change and turns the method on; no edits here.
 */

const WHATSAPP_PREFILL = "Hi — I saw StackDrip and I have a project in mind.";

function IntakeForm({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-2 text-emerald-400 font-medium text-sm sm:text-base"
      >
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        Got it — I&apos;ll come back to you shortly.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto text-left">
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-name" className="text-xs text-zinc-500">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-xs text-red-400 pl-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="text-xs text-zinc-500">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-xs text-red-400 pl-1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="contact-project" className="text-xs text-zinc-500">
          What do you need built?
        </label>
        <textarea
          id="contact-project"
          name="project"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all resize-y"
        />
        <ValidationError
          prefix="Project"
          field="project"
          errors={state.errors}
          className="text-xs text-red-400 pl-1"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={state.submitting}
        className="mt-4 w-full bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl h-12 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send it over
            <ArrowRight className="w-4 h-4 ml-1" />
          </>
        )}
      </Button>
    </form>
  );
}

function EmailFallbackButton() {
  return (
    <Button
      asChild
      size="lg"
      className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl px-8 h-12 transition-all"
    >
      <a href={mailtoUrl}>
        <Mail className="w-4 h-4 mr-1" />
        Email {CONTACT_EMAIL}
      </a>
    </Button>
  );
}

function WhatsAppButton({ href, muted = false }: { href: string; muted?: boolean }) {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={
        muted
          ? "border-white/15 bg-transparent hover:bg-white/[0.06] text-zinc-300 hover:text-white font-medium rounded-xl px-8 h-12 transition-all"
          : "border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold rounded-xl px-8 h-12 transition-all"
      }
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-4 h-4 mr-1" />
        WhatsApp
      </a>
    </Button>
  );
}

export interface ContactCTAProps {
  /**
   * `banner` — full bordered section with heading, for the homepage and /about.
   * `inline` — compact action row, for dropping into an existing section.
   */
  variant?: "banner" | "inline";
  heading?: string;
  subheading?: string;
  className?: string;
}

export function ContactCTA({
  variant = "banner",
  heading = "Tell me what you're building",
  subheading = "If you've got an audience and an idea they'd actually use, I'd like to hear about it.",
  className = "",
}: ContactCTAProps) {
  const whatsapp = whatsappUrl(WHATSAPP_PREFILL);
  const hasForm = Boolean(FORMSPREE_INTAKE_ID);

  if (variant === "inline") {
    return (
      <div
        className={`flex flex-col sm:flex-row items-center gap-3 justify-center ${className}`}
      >
        {hasForm ? (
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl px-8 h-12 transition-all"
          >
            <a href={CONTACT_ANCHOR}>
              Start a project
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        ) : (
          <EmailFallbackButton />
        )}
        {whatsapp && <WhatsAppButton href={whatsapp} muted />}
      </div>
    );
  }

  return (
    <section id="contact" className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <h2 className="relative text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {heading}
          </h2>
          <p className="relative mt-4 text-zinc-400 max-w-xl mx-auto">
            {subheading}
          </p>

          <div className="relative mt-8 flex flex-col items-center gap-4">
            {FORMSPREE_INTAKE_ID ? (
              <IntakeForm formId={FORMSPREE_INTAKE_ID} />
            ) : (
              <EmailFallbackButton />
            )}

            {whatsapp && (
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs text-zinc-600 uppercase tracking-wider">
                  or
                </span>
                <WhatsAppButton href={whatsapp} muted />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
