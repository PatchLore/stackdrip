export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-2xl font-bold mb-8">Privacy Policy</h1>

      <h2 className="font-bold mt-4 mb-2">Overview</h2>
      <p className="mb-4">
        StackDrip is a small independent software studio that builds and distributes digital tools and AI-powered applications. This privacy policy applies to the StackDrip website and any data collected through it.
      </p>

      <h2 className="font-bold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We collect minimal information, which may include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email address when you contact us</li>
        <li>Basic purchase information when buying a product through a third-party platform</li>
        <li>Information voluntarily provided in support requests</li>
      </ul>
      <p className="mb-4">We do <strong>not</strong> sell or share personal data with advertisers.</p>

      <h2 className="font-bold mt-6 mb-2">Payments</h2>
      <p className="mb-4">Payments are processed by third-party platforms such as Whop and their payment providers. StackDrip does <strong>not</strong> handle or store credit card information directly.</p>

      <h2 className="font-bold mt-6 mb-2">Product Access</h2>
      <p className="mb-4">If a product requires account access or login credentials, this data is used solely to provide the service and is not shared with third parties except where required for the functionality of the product.</p>

      <h2 className="font-bold mt-6 mb-2">Cookies & Analytics</h2>
      <p className="mb-4">The StackDrip website may use basic cookies or lightweight analytics to improve the website experience. These do not track personal identities.</p>

      <h2 className="font-bold mt-6 mb-2">Data Retention</h2>
      <p className="mb-4">We only retain personal data for as long as necessary to provide services, respond to support requests, or comply with legal obligations.</p>

      <h2 className="font-bold mt-6 mb-2">Contact</h2>
      <p>If you have any questions about this privacy policy, you can contact: <a href="mailto:support@stackdrip.dev" className="text-blue-600">support@stackdrip.dev</a></p>
    </div>
  );
}

