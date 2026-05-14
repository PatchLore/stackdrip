import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
  { name: 'SpotBid', href: '/spotbid' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.slice(1);
    }
    return location.pathname === href;
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <ExternalLink className="relative w-5 h-5 text-slate-950" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Stack<span className="text-cyan-400">Drip</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold"
            >
              <a
                href="https://whop.com/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Tools
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/10">
          <div className="px-4 py-6 space-y-4">
            <div className="border-t border-slate-800 pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold mt-4"
            >
              <a
                href="https://whop.com/stackdrip"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Tools
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
