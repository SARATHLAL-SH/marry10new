// app/subscription/page.js
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const plans = [
  { id: 'basic', name: 'Basic', price: 1999, description: 'Access to basic matchmaking features' },
  { id: 'premium', name: 'Premium', price: 3999, description: 'Advanced filters & priority support' },
  { id: 'elite', name: 'Elite', price: 6999, description: 'All features + profile boost & expert advice' },
];

const CHAT_PRICE = 10;

export default function SubscriptionPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (plan) => {
    setLoading(true);
    setError('');

    try {
      // Call your backend to create a Cashfree order
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          amount: plan.price,
          currency: 'INR',
          customerDetails: {
            // Replace with actual logged-in user data
            customerId: 'user_123',
            customerEmail: 'user@example.com',
            customerPhone: '9999999999',
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create order');

      // Redirect to Cashfree payment page
      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      } else if (data.paymentUrl) {
        router.push(data.paymentUrl);
      } else {
        throw new Error('No payment link received');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBuyChatCredits = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/buy-chat-credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: CHAT_PRICE,
          quantity: 1, // or let user choose multiple
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      window.location.href = data.paymentLink;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-center text-gray-600 mb-10">
          Start your journey with Marry@10. Select a subscription that fits your needs.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col transition-all hover:shadow-xl ${
                selectedPlan?.id === plan.id ? 'ring-2 ring-rose-500' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                <span className="text-gray-500"> / month</span>
              </div>
              <button
                onClick={() => {
                  setSelectedPlan(plan);
                  handleSubscribe(plan);
                }}
                disabled={loading}
                className="mt-auto w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading && selectedPlan?.id === plan.id ? 'Processing...' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Pay-per-chat section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Pay-Per-Chat</h2>
          <p className="text-gray-600 mb-4">Start a conversation instantly. Pay only for chats you initiate.</p>
          <div className="inline-flex items-center bg-rose-50 px-4 py-2 rounded-full mb-6">
            <span className="text-xl font-bold text-rose-600">₹10</span>
            <span className="text-gray-700 ml-1">per chat</span>
          </div>
          <div>
            <button
              onClick={handleBuyChatCredits}
              disabled={loading}
              className="bg-white border-2 border-rose-600 text-rose-600 hover:bg-rose-50 font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
            >
              Buy Chat Credits
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Credits are non-refundable. See our <a href="/refund-policy" className="text-rose-600 hover:underline">Refund Policy</a>.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          By subscribing, you agree to our{' '}
          <a href="/terms" className="text-rose-600 hover:underline">Terms and Conditions</a>{' '}
          and <a href="/privacy-policy" className="text-rose-600 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}