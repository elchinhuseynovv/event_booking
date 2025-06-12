import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <h1 className="mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-invert">
          <div className="mb-8">
            <p className="text-lg font-semibold text-primary mb-4">Effective Date: 12.06.2025</p>
            <p className="text-neutral-300 mb-6">
              Welcome to raw-media.co, the official website of BridgeFound. Established in 2025, BridgeFound is a multidisciplinary artist management and creative direction agency based in Warsaw, Poland. Our journey began in 2022, and over the years, we've evolved into a nexus where artistry meets strategy, fostering authentic connections between artists and audiences.
            </p>
            <div className="border-t border-neutral-700 my-8"></div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Use of Website</h2>
            <p className="text-neutral-300 mb-4">
              By accessing and using raw-media.co, you agree to comply with and be bound by the following terms and conditions:
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Purpose:</h3>
              <p className="text-neutral-300 mb-4">
                This website serves as a platform to showcase our services, represent our artists, and facilitate inquiries regarding bookings and collaborations.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Prohibited Actions:</h3>
              <p className="text-neutral-300 mb-2">Users are prohibited from:</p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>Using the website for unlawful purposes.</li>
                <li>Attempting unauthorized access to our systems or data.</li>
                <li>Engaging in any activity that disrupts or interferes with the website's functionality.</li>
              </ul>
            </div>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p className="text-neutral-300 mb-4">
              All content on raw-media.co, including but not limited to text, graphics, logos, images, and software, is the property of BridgeFound or its content suppliers and is protected by international copyright laws.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Usage Restrictions:</h3>
              <p className="text-neutral-300 mb-4">
                Unauthorized use, reproduction, or distribution of any content is strictly prohibited.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Artist Representation:</h3>
              <p className="text-neutral-300 mb-4">
                Artists featured on this site are under exclusive management agreements with BridgeFound. Direct outreach to these artists outside of our official channels is not permitted and may result in legal action.
              </p>
            </div>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Artist Representation & Bookings</h2>
            <p className="text-neutral-300 mb-4">
              BridgeFound operates as an intermediary between artists and clients, ensuring seamless collaboration and mutual benefit.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Booking Process:</h3>
              <p className="text-neutral-300 mb-4">
                All booking requests should be submitted through our official contact channels. Each engagement is subject to a formal agreement outlining terms, responsibilities, and compensation.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Exclusivity:</h3>
              <p className="text-neutral-300 mb-4">
                Our artists are represented exclusively by BridgeFound. Any attempts to bypass our agency for direct engagements violate our terms and may lead to legal consequences.
              </p>
            </div>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. External Links</h2>
            <p className="text-neutral-300 mb-4">
              raw-media.co may contain links to external websites. We are not responsible for the content or privacy practices of these sites. We encourage users to read the privacy policies of any external sites they visit.
            </p>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimers</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Accuracy:</h3>
              <p className="text-neutral-300 mb-4">
                While we strive for accuracy, we do not warrant that all content on the website is complete or current.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Liability:</h3>
              <p className="text-neutral-300 mb-4">
                BridgeFound is not liable for any damages arising from the use or inability to use the website or its content.
              </p>
            </div>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
            <p className="text-neutral-300 mb-4">
              We may update our Terms of Use and Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
            <div className="border-t border-neutral-700 my-8"></div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-neutral-300 mb-4">
              For any questions or concerns regarding these terms or our services, please contact:
            </p>
            <div className="bg-background-light p-6 rounded-lg">
              <p className="text-neutral-300 mb-2"><strong>BridgeFound</strong></p>
              <p className="text-neutral-300 mb-2">Email: raw.mediagency@gmail.com</p>
              <p className="text-neutral-300 mb-2">Instagram: @raw_visualstudio</p>
              <p className="text-neutral-300">Warsaw, Poland</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;