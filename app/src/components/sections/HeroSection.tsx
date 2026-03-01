import { useEffect, useRef } from 'react';
import { ArrowRight, Code2, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for pipeline flow
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const createParticle = () => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const colors = ['#22d3ee', '#06b6d4', '#f59e0b', '#fbbf24'];
      
      if (side === 'left') {
        // Code side particles
        particles.push({
          x: Math.random() * canvas.offsetWidth * 0.45,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * 2)],
        });
      } else {
        // Sales side particles
        particles.push({
          x: canvas.offsetWidth * 0.55 + Math.random() * canvas.offsetWidth * 0.45,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * 2) + 2],
        });
      }
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connecting flow lines in the middle
      const centerX = canvas.offsetWidth / 2;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const y = (canvas.offsetHeight / 6) * (i + 1);
        const offset = Math.sin(time + i) * 20;
        
        ctx.beginPath();
        ctx.moveTo(centerX - 60, y);
        ctx.quadraticCurveTo(centerX + offset, y + offset * 0.5, centerX + 60, y);
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Code/Dev Vibe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Code Window Decoration */}
            <div className="absolute -top-8 -left-4 w-64 h-40 opacity-30 pointer-events-none">
              <div className="code-block rounded-lg p-4 h-full">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-cyan-400/60">const <span className="text-amber-400/60">revenue</span> =</div>
                  <div className="text-slate-500 pl-4">await pipeline.<span className="text-cyan-400/60">optimize</span>()</div>
                  <div className="text-slate-500 pl-4">.<span className="text-cyan-400/60">connect</span>(tools)</div>
                  <div className="text-slate-500 pl-4">.<span className="text-cyan-400/60">accelerate</span>()</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                <span>StackDrip</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-slate-100">Micro-SaaS</span>
                <br />
                <span className="text-gradient-cyan">Foundry</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-lg mb-8">
                Production-ready apps. Modern stacks. Zero marketing fluff.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold group"
                  asChild
                >
                  <a
                    href="mailto:acquisitions@stackdrip.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact: acquisitions@stackdrip.dev
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  asChild
                >
                  <a href="#inventory">View Inventory</a>
                </Button>
              </div>

              {/* The Model Section */}
              <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-4">THE MODEL</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-mono">01 / Build</span>
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">48-hour sprints. Next.js 14, Supabase, Stripe. Working auth, working payments, working DB.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-mono">02 / Validate</span>
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">Test against real market. If traction emerges, double down. If not, package for sale.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-mono">03 / Offload</span>
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">Clean handoff: GitHub repo, Vercel deploy, database dumps. You own everything.</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  No equity. No due diligence delays. Just working code.
                </p>
              </div>

              {/* Description */}
              <div className="mt-8 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <p className="text-slate-300 leading-relaxed">
                  I'm a solo backend engineer shipping production-ready MVPs in 48-hour sprints. Six months ago I started validating multiple verticals simultaneously—now I'm doubling down on AI Cost Explainer (agency) and offloading the rest to operators who can actually market them.
                </p>
              </div>

              {/* The Stack */}
              <div className="mt-8 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-4">THE STACK</h3>
                <div className="flex flex-wrap gap-2 text-slate-300">
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">Next.js 14</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">Tailwind</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">PostgreSQL</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">Supabase</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">Stripe</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">OpenAI</span>
                  <span className="px-2 py-1 bg-slate-800 rounded text-sm">Vercel</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sales/Growth Vibe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Sales Chart Decoration */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-slate-100">Revenue Growth</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>+147%</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-48 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={30 * i}
                        x2="400"
                        y2={30 * i}
                        stroke="rgba(148, 163, 184, 0.1)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Area fill */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,120 Q50,110 100,90 T200,60 T300,40 T400,20 L400,150 L0,150 Z"
                      fill="url(#chartGradient)"
                    />
                    
                    {/* Line */}
                    <path
                      d="M0,120 Q50,110 100,90 T200,60 T300,40 T400,20"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    {/* Data points */}
                    {[
                      [0, 120],
                      [100, 90],
                      [200, 60],
                      [300, 40],
                      [400, 20],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#0f172a"
                        stroke="#22d3ee"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Pipeline', value: '2.4x', color: 'cyan' },
                    { label: 'Conversion', value: '+38%', color: 'amber' },
                    { label: 'Time Saved', value: '20h/wk', color: 'green' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className={`text-2xl font-bold text-${stat.color}-400`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">48h</p>
                    <p className="text-xs text-slate-500">Sprint Cycle</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
