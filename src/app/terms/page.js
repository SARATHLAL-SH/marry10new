// app/terms/page.js
import React from 'react';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Last Updated: March 25, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Marry@10 mobile application or website (collectively, the "Platform") operated by <strong>Launchly Software Private Limited</strong> ("Company", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old to create an account. By registering, you confirm that you are legally eligible to marry under applicable laws. You also confirm that the information provided is accurate, complete, and not misleading.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Account Registration and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li>Post false, misleading, or fraudulent profile information.</li>
              <li>Harass, abuse, or threaten other members.</li>
              <li>Use the Platform for any illegal purpose.</li>
              <li>Impersonate any person or entity.</li>
              <li>Upload malicious code or interfere with the Platform’s operation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Subscriptions and Payments</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer monthly subscription plans ranging from ₹1,999 to ₹6,999, as well as a pay-per-chat option at ₹10 per chat. All fees are in Indian Rupees (INR) and are non-refundable except as outlined in our <Link href="/refund-policy" className="text-rose-600 hover:underline">Refund Policy</Link>. By subscribing, you authorize us to charge your selected payment method. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Please refer to our <Link href="/refund-policy" className="text-rose-600 hover:underline">Refund Policy</Link> for details on cancellation and refund timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on the Platform, including logos, text, graphics, and software, is the property of Launchly Software Private Limited or its licensors. You may not copy, modify, or distribute any content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Platform. Our total liability shall not exceed the amount paid by you, if any, during the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Dispute Resolution and Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms, contact us at: <a href="mailto:marry10care@gmail.com" className="text-rose-600">marry10care@gmail.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Launchly Software Private Limited. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;