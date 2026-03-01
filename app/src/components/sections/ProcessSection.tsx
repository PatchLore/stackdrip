import { Eye, MessageCircle, Rocket, Slack, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: Eye,
    title: 'Browse Inventory',
    description: 'Review live demos, tech stacks, and pricing. Everything is pre-revenue, production-tested, and documented.',
    duration: '5 minutes',
  },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Make Offer',
      description: 'DM via Microns.io or email acquisitions@stackdrip.dev. Fast responses—no brokers, no middlemen.',
      duration: 'Same day',
    },
  {
    number: '03',
    icon: Rocket,
    title: 'Secure Transfer',
    description: 'GitHub repo transfer + Vercel deployment keys + database dumps. Stripe Connect for payment protection.',
    duration: '24 hours',
  },
  {
    number: '04',
    icon: Slack,
    title: 'Launch Support',
    description: '48h of technical Q&A via Slack. Optional: 30-day maintenance retainer for non-technical buyers.',
    duration: 'Ongoing',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            How <span className="text-gradient-cyan">Acquisition</span> Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No equity negotiations. No due diligence delays. Just working codebases with clean handoffs.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-amber-500/20 to-cyan-500/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                <div className="relative glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-500/30">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div className="flex items-center gap-2 text-xs text-amber-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Arrow connector (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-cyan-500/20">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-slate-300">
              <span className="font-semibold text-slate-100">7-day bug fix guarantee</span>
              {' '}on all deliveries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
