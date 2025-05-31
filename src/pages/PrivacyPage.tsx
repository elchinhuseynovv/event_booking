import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-neutral-300 mb-4">
              Raw Media is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Event details and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Automatically Collected Information:</h3>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral-300 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>Process bookings and payments</li>
              <li>Communicate about your bookings</li>
              <li>Improve our services</li>
              <li>Send relevant marketing communications (with consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p className="text-neutral-300 mb-4">
              We share your information only with:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>Artists you book through our platform</li>
              <li>Payment processors for transactions</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-neutral-300 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-neutral-300 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p className="text-neutral-300 mb-4">
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Privacy Policy</h2>
            <p className="text-neutral-300 mb-4">
              We may update this Privacy Policy periodically. We will notify you of any significant changes through our website or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-neutral-300">
              For privacy-related inquiries, please contact us at:
              <br />
              Email: privacy@rawmedia.com
              <br />
              Address: 123 Music Street, Los Angeles, CA 90001
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;