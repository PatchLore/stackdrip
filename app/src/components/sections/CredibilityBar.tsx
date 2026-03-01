import { Award, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const credentials = [
  {
    icon: Clock,
    title: '48h',
    subtitle: 'Sprint Cycle',
  },
  {
    icon: Award,
    title: '5 Apps',
    subtitle: 'For Sale',
  },
  {
    icon: Shield,
    title: '£10k+',
    subtitle: 'Total Value',
  },
];

export function CredibilityBar() {
  return (
    <section className="relative py-12 border-y border-cyan-500/10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <cred.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-100">{cred.title}</p>
                <p className="text-sm text-slate-500">{cred.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
