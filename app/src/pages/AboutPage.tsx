export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">The Operator</h1>
      
      <p className="text-lg mb-6">
        I'm a solo backend engineer shipping production-ready MVPs in 48-hour sprints. 
        Six months ago I started validating multiple verticals simultaneously—now I'm 
        doubling down on AI Cost Explainer (agency) and offloading the rest to operators 
        who can actually market them.
      </p>
      
      <p className="text-lg mb-6">
        <strong>What I build:</strong> Next.js 14 apps with working Stripe checkouts, 
        Supabase schemas, and Docker configs. No placeholders. No "coming soon" pages. 
        These are production repos that need distribution, not coding.
      </p>
      
      <p className="text-lg mb-6">
        <strong>Why I'm selling:</strong> I validate fast. You scale faster. I'd rather 
        take a clean exit and fund the next build than let these sit while I focus on 
        service revenue.
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-12 text-sm">
        <div>
          <h3 className="font-bold">Tech Stack</h3>
          <p>Next.js 14, Tailwind, PostgreSQL, Supabase, Stripe, OpenAI, Vercel</p>
        </div>
        <div>
          <h3 className="font-bold">Location</h3>
          <p>Based in UK. Shipping since 2024.</p>
        </div>
      </div>
    </div>
  );
}

