// app/refund-policy/page.js
import React from 'react';
import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: March 25, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Subscription Plans</h2>
            <p className="text-gray-700 leading-relaxed">
              We offer monthly subscription plans priced between ₹1,999 and ₹6,999. All subscription fees are payable in advance.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time from your account settings. Cancellation will take effect at the end of the current billing cycle.</li>
              <li><strong>No refund for partial months:</strong> If you cancel mid‑cycle, you will not receive a refund for the remaining days of the month.</li>
              <li><strong>Auto‑renewal:</strong> Subscriptions renew automatically unless cancelled at least 24 hours before the renewal date. We do not issue refunds for charges incurred due to failure to cancel on time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Pay-Per-Chat</h2>
            <p className="text-gray-700 leading-relaxed">
              Chat credits are purchased at ₹10 per chat. These credits are non‑refundable once used. Unused chat credits will not be refunded upon account closure, unless the closure is due to a breach of our <Link href="/terms" className="text-rose-600 hover:underline">Terms and Conditions</Link> caused by the Company.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Technical Issues / Service Unavailability</h2>
            <p className="text-gray-700 leading-relaxed">
              In the rare event that the Platform is unavailable for an extended period due to our fault, we may, at our discretion, offer a prorated refund or extend your subscription. Refunds for minor interruptions are not provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. How to Request a Refund</h2>
            <p className="text-gray-700 leading-relaxed">
              To request a refund, contact us at <a href="mailto:marry10care@gmail.com" className="text-rose-600">marry10care@gmail.com</a> with your registered email and payment details. Refunds, if eligible, will be processed within 7‑10 business days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Launchly Software Private Limited<br />
              Email: marry10care@gmail.com<br />
              Trivandrum, Kerala, 695605
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

export default RefundPolicy;