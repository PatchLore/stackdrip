import { motion } from 'framer-motion';

const tools = [
  {
    name: 'Aura Studio',
    desc: 'AI creative engine for unique art styles and character blends.',
    href: '#',
  },
  {
    name: 'LeakScanner',
    desc: 'Automated scans to find leaked API keys and secrets in repos.',
    href: '#',
  },
  {
    name: 'AI Cost Explainer',
    desc: 'Visualize and explain AI tool spend with actionable insights.',
    href: '#',
  },
];

export function ProductsSection() {
  return (
    <section id="tools" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">Tools</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Small, experimental AI products for creators and builders.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <motion.div key={tool.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{tool.name}</h3>
              <p className="text-slate-400 mb-4 text-sm">{tool.desc}</p>
              <div className="flex items-center justify-between">
                <a href={tool.href} className="text-slate-300 text-sm hover:text-cyan-400">View Tool</a>
                <span className="text-xs text-slate-500">Creator friendly</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

