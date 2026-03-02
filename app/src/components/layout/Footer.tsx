import { Link } from 'react-router-dom';
import { Zap, Mail, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg opacity-80" />
                <Zap className="relative w-5 h-5 text-slate-950" />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Stack<span className="text-cyan-400">Drip</span>
              </span>
            </Link>
            {/* Tagline removed as requested */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@stackdrip.dev"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} StackDrip — Micro-SaaS Foundry. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with senior-level execution. No corporate red tape.
          </p>
        </div>
      </div>
    </footer>
  );
}
