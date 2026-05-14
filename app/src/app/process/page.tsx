export default function ProcessPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-3xl font-bold mb-6">How StackDrip Builds AI Tools</h1>

      <p className="text-slate-400 mb-8">
        StackDrip is a small independent software studio focused on building experimental AI tools for creators and internet businesses. Most tools start as rapid experiments and evolve based on feedback from real users.
      </p>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">1. Idea Discovery</h2>
        <p className="text-slate-400">
          Products originate from creator workflows, founder problems, and opportunities created by new AI capabilities. We look for obvious friction and simple wins where automation and models can add immediate value.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">2. Rapid Prototyping</h2>
        <p className="text-slate-400">
          Tools are quickly prototyped using modern frameworks and AI-assisted development. The goal is to ship functional versions fast, enough to validate the idea with real users and iterate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">3. Early Access Launch</h2>
        <p className="text-slate-400">
          We use an early access model: limited pricing at launch, direct user feedback, and rapid improvements. Some products are distributed through platforms such as Whop to handle access and payments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">4. Iteration</h2>
        <p className="text-slate-400">
          Tools evolve continuously, new features, UX improvements, and integrations are added based on usage and user requests. We prefer small, frequent releases over large infrequent updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">5. Tool Categories</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-medium">Creator Tools</h3>
            <p className="text-slate-400 mt-2">Tools focused on content, art, and creator workflows, quick outputs, presets, and creative controls.</p>
          </div>
          <div>
            <h3 className="font-medium">Builder / B2B Tools</h3>
            <p className="text-slate-400 mt-2">Utilities and integrations aimed at founders and operators: monitoring, cost tools, and developer-friendly utilities.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-4">6. Current Projects</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Aura Studio, AI Creative Engine for unique art styles and character blends</li>
          <li>LeakScanner, Automated scans for leaked API keys and secrets</li>
          <li>AI Cost Explainer, Visualize and explain AI tool spending with actionable insights</li>
        </ul>
      </section>
    </div>
  );
}