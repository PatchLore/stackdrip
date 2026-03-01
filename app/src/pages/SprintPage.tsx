import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Code2,
  Database,
  Webhook,
  RefreshCw,
  Layers,
  ShoppingCart,
  Truck,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Webhook,
    title: 'Webhook Automation',
    description: 'Real-time data flow between your tools. No more polling or manual triggers.',
  },
  {
    icon: Database,
    title: 'Inventory Sync',
    description: 'Keep stock levels accurate across Shopify, warehouses, and suppliers.',
  },
  {
    icon: RefreshCw,
    title: 'API Bridges',
    description: 'Connect systems that don\'t natively talk to each other.',
  },
  {
    icon: Layers,
    title: 'Error Handling',
    description: 'Robust retry logic and alerting when things go wrong.',
  },
];

const deliverables = [
  'Working API integration deployed to your environment',
  'Webhook endpoints configured and tested',
  'Error handling and retry logic',
  'Loom walkthrough of the solution',
  'Technical documentation',
  '7-day bug fix guarantee',
];

const integrations = [
  { name: 'Shopify', icon: ShoppingCart },
  { name: 'WooCommerce', icon: ShoppingCart },
  { name: '3PLs', icon: Truck },
  { name: 'ERP Systems', icon: Database },
  { name: 'Inventory Mgmt', icon: Package },
  { name: 'Custom APIs', icon: Code2 },
];

export function SprintPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>48-Hour Delivery</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
                Connect Your Tools in{' '}
                <span className="text-gradient-cyan">48 Hours</span>
              </h1>

              <p className="text-lg text-slate-400 mb-8">
                Stop manually uploading CSVs between Shopify and your suppliers. 
                Get a custom API bridge that syncs inventory, orders, and data 
                automatically—in 48 hours flat.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-cyan-400">£1,200</span>
                <span className="text-slate-500">flat fee</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold"
                  asChild
                >
                  <a
                    href="https://stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book API Sprint
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
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-sm text-slate-500">api-bridge.js</span>
                </div>
                <div className="font-mono text-sm text-slate-300 space-y-1">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">bridge</span> = {'{'}</div>
                  <div className="text-slate-500 pl-2">{'//'} Sync inventory in real-time</div>
                  <div className="pl-2"><span className="text-amber-400">sync</span>: <span className="text-purple-400">async</span> () =&gt; {'{'}</div>
                  <div className="pl-4"><span className="text-purple-400">const</span> stock = <span className="text-purple-400">await</span> <span className="text-cyan-400">shopify</span>.getInventory();</div>
                  <div className="pl-4"><span className="text-purple-400">const</span> suppliers = <span className="text-purple-400">await</span> <span className="text-cyan-400">erp</span>.getSuppliers();</div>
                  <div className="pl-4"></div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-cyan-400">matcher</span>.reconcile(stock, suppliers);</div>
                  <div className="pl-2">{'}'},</div>
                  <div className="pl-2"></div>
                  <div className="text-slate-500 pl-2">{'//'} Webhook handler</div>
                  <div className="pl-2"><span className="text-amber-400">webhook</span>: (event) =&gt; {'{'}</div>
                  <div className="pl-4"><span className="text-purple-400">if</span> (event.type === <span className="text-green-400">&apos;order.created&apos;</span>) {'{'}</div>
                  <div className="pl-6"><span className="text-purple-400">await</span> <span className="text-cyan-400">3pl</span>.fulfill(event.data);</div>
                  <div className="pl-4">{'}'}</div>
                  <div className="pl-2">{'}'}</div>
                  <div>{'}'};</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">48 Hours</p>
                    <p className="text-xs text-slate-500">From payment to delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 border-t border-cyan-500/10">
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
              A working integration that solves your specific pain point—no 
              generic solutions, no bloated platforms.
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
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
      <section className="py-16 lg:py-24 border-t border-cyan-500/10 bg-slate-900/50">
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
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
                Common Integrations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50"
                  >
                    <integration.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-slate-300">{integration.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
            className="glass-card rounded-2xl p-8 lg:p-12 text-center border-cyan-500/20"
          >
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-4">
              Ready to Stop the Manual Work?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Book your API Sprint today. 48 hours from payment to working solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold"
                asChild
              >
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book API Sprint — £1,200
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Questions? <Link to="/" className="text-cyan-400 hover:underline">Book a 15-min call</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
