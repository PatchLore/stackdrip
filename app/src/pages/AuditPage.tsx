import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  DollarSign,
  BarChart3,
  Zap,
  Shield,
  Eye,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Eye,
    title: 'Full Visibility',
    description: 'See exactly where your AI spend is going—by tool, by team, by use case.',
  },
  {
    icon: AlertTriangle,
    title: 'Waste Detection',
    description: 'Identify duplicate subscriptions, unused seats, and over-provisioned plans.',
  },
  {
    icon: TrendingUp,
    title: 'ROI Analysis',
    description: 'Understand which tools are delivering value and which are burning cash.',
  },
  {
    icon: DollarSign,
    title: 'Savings Roadmap',
    description: 'Specific recommendations with projected savings and implementation steps.',
  },
];

const deliverables = [
  'Complete CSV analysis of all AI tool spending',
  'Professional PDF report with visualizations',
  'Waste identification and duplicate detection',
  'ROI assessment by tool and use case',
  'Specific savings recommendations',
  'Implementation roadmap',
];

const commonTools = [
  'OpenAI / ChatGPT',
  'Claude',
  'Midjourney',
  'Copy.ai',
  'Jasper',
  'Grammarly',
  'Notion AI',
  'GitHub Copilot',
];

export function AuditPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors mb-8"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <TrendingDown className="w-4 h-4" />
                <span>Emergency Audit</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
                Stop the AI Cost{' '}
                <span className="text-red-400">Bleeding</span>
              </h1>

              <p className="text-lg text-slate-400 mb-8">
                AI spend out of control? No visibility on ROI? Get an emergency 
                cost audit with CSV analysis + PDF report showing exactly where 
                you&apos;re overpaying—delivered in 24 hours.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-red-400">£299</span>
                <span className="text-slate-500">24-hour delivery</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold"
                  asChild
                >
                  <a
                    href="https://stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Cost Audit
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
                    Ask a Question
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
              <div className="glass-card rounded-2xl p-6 border-red-500/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-slate-300">AI Spend Analysis</span>
                  <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs">+47% vs last month</span>
                </div>

                {/* Chart visualization */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">ChatGPT Enterprise</span>
                      <span className="text-slate-300">$2,400/mo</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-red-500/60 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Claude API</span>
                      <span className="text-slate-300">$1,850/mo</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[62%] bg-amber-500/60 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Midjourney (12 seats)</span>
                      <span className="text-slate-300">$960/mo</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[32%] bg-yellow-500/60 rounded-full" />
                    </div>
                    <p className="text-xs text-red-400 mt-1">⚠️ 8 seats unused</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Copy.ai</span>
                      <span className="text-slate-300">$432/mo</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[14%] bg-green-500/60 rounded-full" />
                    </div>
                    <p className="text-xs text-amber-400 mt-1">⚠️ Duplicate of Jasper</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Potential Monthly Savings</span>
                    <span className="text-2xl font-bold text-green-400">$1,247</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 border-red-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">24 Hours</p>
                    <p className="text-xs text-slate-500">From payment to report</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 border-t border-red-500/10">
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
              A complete analysis of your AI tool spending with specific 
              recommendations to cut waste and optimize ROI.
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
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
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
      <section className="py-16 lg:py-24 border-t border-red-500/10 bg-slate-900/50">
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
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
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
                Tools We Analyze
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {commonTools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50"
                  >
                    <Zap className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-slate-300">{tool}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                + any other AI tools in your stack
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 lg:py-24 border-t border-red-500/10">
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
                icon: BarChart3,
                title: 'Agencies',
                description: 'Multiple clients, dozens of tools, no visibility on what\'s actually being used.',
              },
              {
                icon: Zap,
                title: 'Startups',
                description: 'AI tools proliferated fast. Now you need to clean up before the next funding round.',
              },
              {
                icon: Shield,
                title: 'Finance Teams',
                description: 'CFO asking why AI spend doubled? Get answers in 24 hours.',
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
                <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-red-400" />
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
            className="glass-card rounded-2xl p-8 lg:p-12 text-center border-red-500/20"
          >
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-4">
              Ready to Stop the Bleeding?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Get your AI cost audit delivered in 24 hours. Know exactly where 
              your money is going—and how to save it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold"
                asChild
              >
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Cost Audit — £299
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Questions? <Link to="/" className="text-red-400 hover:underline">Book a 15-min call</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
