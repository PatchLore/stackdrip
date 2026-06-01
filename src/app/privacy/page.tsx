export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">
        eBay Profit Guardian - Privacy Policy
      </h1>

      <p className="text-sm text-zinc-400 mb-10">
        <strong className="text-zinc-300">Effective Date:</strong> May 27, 2026
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Overview</h2>
        <p className="text-zinc-300 leading-relaxed">
          eBay Profit Guardian is a Chrome Extension that calculates seller
          profit margins on eBay listings. We are committed to protecting your
          privacy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Data Collection</h2>
        <p className="text-zinc-300 leading-relaxed mb-3">
          <strong className="text-zinc-100">eBay Page Data:</strong> When you
          click the extension on an eBay product page, the extension reads the
          item title, price, and shipping cost directly from the page&apos;s
          DOM. This data is used solely to calculate your profit margin and is
          not transmitted anywhere else.
        </p>
        <p className="text-zinc-300 leading-relaxed mb-3">
          <strong className="text-zinc-100">License Data:</strong> If you
          upgrade to Pro, your license key is sent securely to our verification
          server to validate your purchase. We do not store your payment
          information.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          <strong className="text-zinc-100">No Personal Data:</strong> We do not
          collect personally identifiable information, browsing history outside
          of eBay product pages, or sensitive user data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Data Storage</h2>
        <p className="text-zinc-300 leading-relaxed">
          All user data (custom fee rates, sales history records, and Pro
          activation status) is stored 100% locally on your device using
          chrome.storage.local. We do not have access to this data, and it is
          never transmitted to our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Third-Party Services</h2>
        <p className="text-zinc-300 leading-relaxed">
          We use Gumroad and Stripe for payment processing. These services have
          their own privacy policies governing the data they collect during
          checkout.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Contact</h2>
        <p className="text-zinc-300 leading-relaxed">
          If you have questions about this privacy policy, please contact us via{" "}
          <a
            href="https://stackdrip.dev"
            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
          >
            our website
          </a>
          .
        </p>
      </section>
    </div>
  );
}