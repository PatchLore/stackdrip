export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-2xl font-bold mb-8">Terms of Sale</h1>

      <div className="space-y-6">
        <section>
          <h2 className="font-bold mb-2">Digital Products</h2>
          <p>
            StackDrip sells digital software products and tools designed for creators, founders, and internet businesses. Products may include web applications, creator utilities, and AI-powered tools.
          </p>
          <p className="mt-2">
            Unless otherwise stated, purchases grant access to use the software product but do <strong>not transfer ownership of the source code or intellectual property</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Access & Delivery</h2>
          <p>
            Most products are delivered through third-party platforms such as Whop or other digital distribution services. Access instructions are provided immediately after purchase.
          </p>
          <p className="mt-2">Customers are responsible for maintaining access to the platform through which the product is delivered.</p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Pricing</h2>
          <p>
            Some products may be offered as <strong>early access pricing</strong> or <strong>limited launch pricing</strong>. Prices may increase after the initial release period.
          </p>
          <p className="mt-2">Where specified, certain purchases may include <strong>lifetime access to future updates</strong> for that product.</p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Support</h2>
          <p>
            A limited support period may be provided depending on the product. Support typically covers:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Access issues</li>
            <li>Critical bugs preventing the tool from functioning</li>
          </ul>
          <p className="mt-2">Support does <strong>not</strong> include:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Custom feature requests</li>
            <li>Personal setup or integrations</li>
            <li>Custom development work</li>
          </ul>
          <p className="mt-2">Support is provided via email.</p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Refunds</h2>
          <p>
            Due to the digital nature of the products, <strong>all sales are final unless required by law</strong>.
          </p>
          <p className="mt-2">
            If a product is completely non-functional and the issue cannot be resolved within a reasonable time, a refund may be considered at our discretion.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Third-Party Services</h2>
          <p>
            Some tools may rely on third-party APIs or services (for example AI APIs, hosting platforms, or payment providers). StackDrip is not responsible for outages, pricing changes, or policy changes from these third-party providers.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Liability</h2>
          <p>
            StackDrip provides software tools for informational and productivity purposes only. We are not liable for business losses, loss of data, platform downtime, or decisions made using the software. Use of the tools is at your own risk.
          </p>
        </section>
      </div>
    </div>
  );
}

