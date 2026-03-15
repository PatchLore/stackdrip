export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-2xl font-bold mb-8">Terms of Sale</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="font-bold mb-2">Asset Transfer</h2>
          <p>Sale includes transfer of GitHub repository, deployment documentation, and database schemas. Buyer receives full ownership rights to the codebase. Third-party API keys (Stripe, Supabase, etc.) must be replaced with buyer's own credentials post-transfer.</p>
        </section>
        
        <section>
          <h2 className="font-bold mb-2">As-Is Sale</h2>
          <p>Applications are sold as-is, where-is. While I guarantee the code works at time of transfer (7-day bug fix period), I do not guarantee future compatibility with third-party APIs, frameworks, or platforms.</p>
        </section>
        
        <section>
          <h2 className="font-bold mb-2">Support</h2>
          <p>7-day bug fix guarantee covers critical errors preventing deployment. Does not cover feature requests, custom development, or compatibility updates. Support provided via email only.</p>
        </section>
        
        <section>
          <h2 className="font-bold mb-2">Payment</h2>
          <p>Payments are processed via third-party payment providers. Transfer or access begins after payment confirmation. No refunds once access is granted.</p>
        </section>
        
        <section>
          <h2 className="font-bold mb-2">Liability</h2>
          <p>Seller not liable for business losses, data loss, or operational issues post-transfer. Buyer assumes all responsibility for deployment, security, and compliance.</p>
        </section>
      </div>
    </div>
  );
}

