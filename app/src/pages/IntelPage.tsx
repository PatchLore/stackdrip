import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Target,
  TrendingUp,
  AlertCircle,
  FileText,
  BarChart3,
  MessageSquare,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Target,
    title: 'Trigger Events',
    description: 'Funding rounds, hiring spikes, tech stack changes—signals that indicate buying intent.',
  },
  {
    icon: AlertCircle,
    title: 'Risk Scoring',
    description: 'Each account ranked by fit, timing, and accessibility based on 20 years of pattern recognition.',
  },
  {
    icon: MessageSquare,
    title: 'Messaging Angles',
    description: 'Specific talking points tailored to each account\'s situation and pain points.',
  },
  {
    icon: BarChart3,
    title: 'Competitive Intel',
    description: 'Know who they\'re using, what they\'re paying, and where the gaps are.',
  },
];

const deliverables = [
  '50 bespoke account battlecards (PDF + spreadsheet)',
  'Trigger event tracking for each account',
  'Risk scores and prioritization matrix',
  'Messaging angles and talk tracks',
  'Competitive landscape analysis',
  '7-day support for questions',
];

const signals = [
  'Funding announcements',
  'Hiring spikes',
  'Tech stack changes',
  'Leadership changes',
  'Expansion news',
  'Partnership announcements',
];

export function IntelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Sales Intelligence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
                The Sales Intelligence{' '}
                <span className="text-gradient-amber">You Wish You Had</span>
              </h1>

              <p className="text-lg text-slate-400 mb-8">
                Stop wasting 20 hours a week on research. Get 50 bespoke account 
                battlecards with trigger events, risk scores, and messaging angles—
                based on 20 years of sales pattern recognition.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-amber-400">£1,500</span>
                <span className="text-slate-500">per research package</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"
                  asChild
                >
                  <a
                    href="https://stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Intel Package
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  asChild
                >
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Sample Report
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 border-amber-500/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-slate-300">Account Battlecard</span>
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">High Priority</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Company</p>
                    <p className="text-lg font-semibold text-slate-100">TechCorp Industries</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Risk Score</p>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-amber-400 rounded-full" />
                        </div>
                        <span className="text-amber-400 font-semibold">85/100</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Employees</p>
                      <p className="text-slate-300">250-500</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Trigger Events</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs">Series B - $12M</span>
                      <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs">Hiring +40%</span>
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">New CTO</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Messaging Angle</p>
                    <p className="text-sm text-slate-400">
                      &ldquo;With your recent funding and expansion, scaling operations 
                      without breaking existing workflows is critical...&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 border-amber-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">48-72 Hours</p>
                    <p className="text-xs text-slate-500">Research & delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              What You Get
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              50 account battlecards built from public business signals—
              not scraped personal data, not generic templates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-24 border-t border-amber-500/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-100 mb-6">
                Deliverables
              </h2>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-4">
                Signals We Track
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {signals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50"
                  >
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-slate-300">{signal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 lg:py-24 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Built For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'B2B Sales Leaders',
                description: 'Give your team the intel they need to have relevant conversations.',
              },
              {
                icon: Zap,
                title: 'SDR Teams',
                description: 'Stop researching, start selling. Every call starts with context.',
              },
              {
                icon: Target,
                title: 'Founders',
                description: 'Know exactly which accounts to pursue and why.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 lg:p-12 text-center border-amber-500/20"
          >
            <FileText className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-4">
              Ready to Feed Your Pipeline?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              50 account battlecards delivered in 48-72 hours. Your SDRs will 
              thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"
                asChild
              >
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Intel Package — £1,500
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Questions? <Link to="/" className="text-amber-400 hover:underline">Book a 15-min call</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
