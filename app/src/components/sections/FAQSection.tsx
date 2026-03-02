import { HelpCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How is this different from buying a template?',
    answer: `Templates are static. These are production apps—working auth, working Stripe, working databases. You get the repo, the deployment config, and email support during the 7-day handoff to get it live.`,
  },
  {
    question: 'What if it breaks?',
    answer: `7-day bug fix guarantee on all deliveries. After that, you own the codebase.`,
  },
  {
    question: 'GDPR/Compliance concerns?',
    answer: `Apps are built with standard Next.js/Supabase stacks. You handle your own legal compliance post-transfer—I provide the technical foundation, not legal advice.`,
  },
  {
    question: 'What if I need changes after delivery?',
    answer: `You get email support during the 7-day handoff. Bug fixes guaranteed. Want custom dev? That's a separate conversation, but these apps are built to be forked easily.`,
  },
  {
    question: 'Do the apps have revenue?',
    answer: `Pre-revenue, zero ad spend. I validate fast and sell the infrastructure. You bring the marketing.`,
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Trust & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Questions? <span className="text-gradient-cyan">Answers.</span>
          </h2>
          <p className="text-lg text-slate-400">
            No corporate bullshit. Just straight answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-0 px-6 data-[state=open]:border-cyan-500/30"
              >
                <AccordionTrigger className="text-left text-slate-100 hover:text-cyan-400 py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-2xl p-8">
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-400 mb-6">
              Email support@stackdrip.dev and I'll get back to you within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
