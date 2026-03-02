export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-sm">
      <h1 className="text-2xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="mb-4">StackDrip operates as a code marketplace. This policy covers the website only—individual apps sold on the platform have their own privacy policies.</p>
      
      <h2 className="font-bold mt-6 mb-2">Data Collection</h2>
      <p className="mb-4">We collect email addresses only when you contact us. No tracking cookies, no analytics, no third-party data sharing. We don't store customer data beyond email correspondence.</p>
      
      <h2 className="font-bold mt-6 mb-2">App Purchases</h2>
      <p className="mb-4">Transactions processed via Microns.io marketplace (their Stripe integration). We do not handle credit card data directly. GitHub usernames collected solely for repository transfer purposes.</p>
      
      <h2 className="font-bold mt-6 mb-2">Contact</h2>
      <p>Questions? Email <a href="mailto:support@stackdrip.dev" className="text-blue-600">support@stackdrip.dev</a></p>
    </div>
  );
}

