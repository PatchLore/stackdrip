import { Link } from 'react-router-dom';
import { Zap, Mail, Linkedin, Github } from 'lucide-react';

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

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-slate-100">StackDrip</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/process" className="text-slate-400 hover:text-cyan-400">Process</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-400 hover:text-cyan-400">About</Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-slate-400 hover:text-cyan-400">FAQ</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/terms" className="text-slate-400 hover:text-cyan-400">Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-slate-400 hover:text-cyan-400">Privacy</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="mailto:support@stackdrip.dev" className="text-slate-400 hover:text-cyan-400">support@stackdrip.dev</a>
                  </li>
                  <li>
                    <a href="https://whop.com/stackdrip" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">Whop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} StackDrip — Indie AI Studio. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with senior-level execution. No corporate red tape.
          </p>
        </div>
      </div>
    </footer>
  );
}
