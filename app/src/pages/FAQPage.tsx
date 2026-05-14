export default function FAQPage() {
  const faqs = [
    {
      q: "How is this different from buying a template?",
      a: "Templates are static. These are production apps, working auth, working Stripe, working databases. You get the repo, the deployment config, and 7 days of support to get it live."
    },
    {
      q: "What's included in the sale?",
      a: "GitHub repo transfer, Vercel deployment docs, database schemas with seed data, and 48h of email support post-transfer. You own 100% of the codebase."
    },
    {
      q: "Do these apps have revenue?",
      a: "Pre-revenue, zero ad spend. I validate fast and sell the infrastructure. You bring the marketing and customer acquisition."
    },
    {
      q: "What if it breaks after transfer?",
      a: "7-day bug fix guarantee. If something breaks during your initial deployment, I'll fix it. After that, you own the codebase."
    },
    {
      q: "Can I hire you for custom changes?",
      a: "These are sold as-is to keep prices low. Custom dev is a separate conversation, but the apps are built to be forked easily."
    },
    {
      q: "How does the transfer work?",
      a: "GitHub repo transfer + Vercel deployment keys + database dumps. Usually completed within 24 hours of payment."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Questions? Answers.</h1>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t">
        <p>Still have questions? Email <a href="mailto:support@stackdrip.dev" className="text-blue-600">support@stackdrip.dev</a></p>
      </div>
    </div>
  );
}

