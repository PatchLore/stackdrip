import { Quote, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              <span>The Operator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Indie software studio building{' '}
              <span className="text-gradient-cyan">AI tools</span> for creators
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                We're a small studio focused on experimental AI products for creators, indie hackers, and online businesses. We ship fast, iterate on feedback, and keep things simple.
              </p>
              <p>
                Our tools prioritize creator workflows: quick outputs, opinionated presets, and predictable integrations. Minimal setup, maximum creativity.
              </p>
              <p className="text-slate-300 font-medium">
                Based in the UK. Building since 2024.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: '5 Apps', label: 'For Sale', color: 'cyan' },
                { value: '£5k+', label: 'Inventory Value', color: 'amber' },
                { value: '48h', label: 'Average Build', color: 'green' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-2">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-100">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-2xl p-8">
              {/* How we build */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  How We Build
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'Supabase',
                    'OpenAI',
                    'Replicate',
                    'Vercel',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-900 text-slate-400 text-sm font-mono border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
