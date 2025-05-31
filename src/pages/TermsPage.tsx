import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-neutral-300 mb-4">
              Welcome to Raw Media. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>"Service" refers to the Raw Media platform and website</li>
              <li>"User" refers to anyone who uses our service</li>
              <li>"Artist" refers to performers listed on our platform</li>
              <li>"Client" refers to those booking artists through our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-neutral-300 mb-4">
              Users must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Booking Terms</h2>
            <p className="text-neutral-300 mb-4">
              All bookings made through Raw Media are subject to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              <li>Availability of the artist</li>
              <li>Payment of the agreed fee</li>
              <li>Acceptance of the artist's specific terms</li>
              <li>Our booking policies and procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Payments and Fees</h2>
            <p className="text-neutral-300 mb-4">
              All payments must be made through our secure payment system. We charge a service fee for facilitating bookings. Cancellation fees may apply as per our cancellation policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-neutral-300 mb-4">
              All content on Raw Media, including but not limited to text, graphics, logos, and software, is our property and is protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-neutral-300 mb-4">
              Raw Media is not liable for any indirect, incidental, special, or consequential damages arising from the use of our services or any disputes between users and artists.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-neutral-300 mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of our service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p className="text-neutral-300">
              For questions about these Terms and Conditions, please contact us at:
              <br />
              Email: legal@rawmedia.com
              <br />
              Address: 123 Music Street, Los Angeles, CA 90001
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;