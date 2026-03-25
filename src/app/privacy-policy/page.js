// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, UserX, Mail, Phone, Calendar, FileCheck, Fingerprint } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-rose-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm sm:text-base">Last Updated: 25-03-2026</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span className="text-sm sm:text-base">Launchly Software Private Limited</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-start mb-6">
              <div className="bg-rose-50 p-3 rounded-lg mr-4">
                <Shield className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At <strong>Launchly Software Private Limited</strong> (hereinafter referred to as "Company", "we", "us", or "our"), operating under the brand <strong>Marry@10</strong>, we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, disclose, and manage your personal information when you use our mobile application Marry@10 (the "App") and our website (the "Website").
                </p>
              </div>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Information We Collect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Registration Info */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <UserX className="w-5 h-5 mr-2" />
                  Registration Information
                </h3>
                <ul className="space-y-3">
                  {[
                    'Full Name',
                    'Email Address',
                    'Phone Number',
                    'Date of Birth',
                    'Gender',
                    'Marital Status',
                    'Religion & Caste',
                    'Educational Qualifications'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Profile Info */}
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Profile Information
                </h3>
                <ul className="space-y-3">
                  {[
                    'Partner Preferences',
                    'Career Details',
                    'Family Information',
                    'Hobbies & Interests',
                    'Photographs & Videos',
                    'Horoscope Details',
                    'Location Preferences',
                    'Expectations from Partner'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage & Device Info */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Usage & Device Information
                </h3>
                <ul className="space-y-3">
                  <li className="text-gray-700">Search History & Preferences</li>
                  <li className="text-gray-700">Profile Views & Interactions</li>
                  <li className="text-gray-700">Messages & Communications</li>
                  <li className="text-gray-700">IP Address & Device ID</li>
                  <li className="text-gray-700">Browser Type & Version</li>
                  <li className="text-gray-700">Operating System Details</li>
                  <li className="text-gray-700">App Usage Statistics</li>
                  <li className="text-gray-700">Location Data (with consent)</li>
                </ul>
              </div>

              {/* Additional Collection */}
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Additional Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We may also collect information during:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Customer Support Interactions</li>
                  <li className="text-gray-700">• Feedback & Survey Responses</li>
                  <li className="text-gray-700">• Payment Processing (for premium services)</li>
                  <li className="text-gray-700">• Verification Processes</li>
                  <li className="text-gray-700">• Matrimonial Events Participation</li>
                </ul>
              </div>
            </div>

            {/* Verification Documents (Optional) */}
            <div className="mt-8 bg-gradient-to-r from-cyan-50 to-sky-50 p-6 rounded-xl border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3 flex items-center">
                <FileCheck className="w-5 h-5 mr-2" />
                Verification Documents (Optional)
              </h3>
              <p className="text-gray-700 mb-3">
                To help build trust among members, you may voluntarily choose to verify your identity 
                by uploading images of your:
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">PAN Card</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Voter ID</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Driving License</span>
              </div>
              <p className="text-gray-700 text-sm">
                These documents are collected only if you opt to undergo verification. They are used solely to 
                confirm your identity and award a “Verified” badge on your profile. You may skip verification 
                and still use the platform.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              How We Use Your Information
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Profile Management",
                  desc: "Create and display your matrimonial profile",
                  color: "bg-blue-100 text-blue-800"
                },
                {
                  title: "Matchmaking",
                  desc: "Suggest compatible matches based on preferences",
                  color: "bg-purple-100 text-purple-800"
                },
                {
                  title: "Communication",
                  desc: "Facilitate secure communication between members",
                  color: "bg-green-100 text-green-800"
                },
                {
                  title: "Service Improvement",
                  desc: "Enhance and personalize your experience",
                  color: "bg-amber-100 text-amber-800"
                },
                {
                  title: "Security & Verification",
                  desc: "Ensure platform safety and user authenticity",
                  color: "bg-red-100 text-red-800"
                },
                {
                  title: "Legal Compliance",
                  desc: "Meet regulatory and legal requirements",
                  color: "bg-indigo-100 text-indigo-800"
                },
                {
                  title: "Identity Verification",
                  desc: "If you choose to upload government‑issued identification documents, we use them to verify your identity and display a verification status to other members.",
                  color: "bg-cyan-100 text-cyan-800"
                }
              ].map((item, index) => (
                <div key={index} className="p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclosure of Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Disclosure of Your Information
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-5 py-3 bg-blue-50">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Third-Party Service Providers
                </h3>
                <p className="text-gray-700">
                  We may share your information with trusted third-party service providers who 
                  help us operate our App and Website, including:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  {[
                    'Payment Processors',
                    'Cloud Hosting Services',
                    'Email Service Providers',
                    'SMS Gateway Providers',
                    'Customer Support Platforms',
                    'Analytics Services'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <p className="text-gray-700 text-sm">
                    <strong>Document Verification Partners:</strong> We may share uploaded identity documents 
                    with third‑party service providers that specialize in document verification (e.g., OCR and 
                    fraud detection). These providers are bound by confidentiality and security obligations and 
                    are not permitted to use your data for any other purpose.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-5 py-3 bg-red-50">
                <h3 className="font-semibold text-red-800 mb-2">
                  Law Enforcement & Legal Requirements
                </h3>
                <p className="text-gray-700">
                  We may disclose your information to law enforcement agencies or other 
                  government agencies if required by law, court order, or legal process.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-5 py-3 bg-green-50">
                <h3 className="font-semibold text-green-800 mb-2">
                  Profile Sharing with Other Members
                </h3>
                <p className="text-gray-700">
                  Your profile information (excluding sensitive contact details) is shared 
                  with other registered members for matrimonial matchmaking purposes only.
                </p>
              </div>
            </div>
          </section>

          {/* Premium Services */}
          <section className="mb-12 bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Premium Membership & Pay-Per-Chat
            </h2>
            <p className="text-gray-700 mb-4">
              We offer premium membership plans and a pay-per-chat plan. By using these 
              services, you agree to the terms and conditions outlined in our 
              <Link href="/premium-plans" className="text-rose-600 hover:text-rose-800 font-medium mx-1">
                Premium Membership Plans
              </Link>
              document.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Secure Payments</h4>
                <p className="text-sm text-gray-600">256-bit SSL encrypted transactions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Payment Partners</h4>
                <p className="text-sm text-gray-600">PCI-DSS compliant payment gateways</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Refund Policy</h4>
                <p className="text-sm text-gray-600">As per terms in premium plans document</p>
              </div>
            </div>
          </section>

          {/* Your Choices & Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Choices & Rights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Update Your Profile</h3>
                <p className="text-gray-600 text-sm">
                  You can update your profile information at any time through your account settings.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Opt-Out of Communications</h3>
                <p className="text-gray-600 text-sm">
                  You can opt-out of receiving promotional emails and messages from us via your preferences.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <UserX className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Delete Your Account</h3>
                <p className="text-gray-600 text-sm">
                  You can delete your account at any time. Data deletion follows our retention policy.
                </p>
              </div>
            </div>

            {/* Consent for Verification Documents */}
            <div className="mt-8 p-5 bg-cyan-50 rounded-xl border border-cyan-200">
              <h3 className="font-semibold text-cyan-800 mb-3 flex items-center">
                <Fingerprint className="w-5 h-5 mr-2" />
                Consent for Verification Documents
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Before you upload any government‑issued ID, we will ask for your explicit consent. 
                You may withdraw your consent at any time by deleting the uploaded documents or closing your account. 
                Withdrawal of consent will remove the “Verified” badge but does not affect your ability to use other features.
              </p>
              <p className="text-gray-700 text-sm">
                You can delete your uploaded identity documents at any time through your account settings. 
                If you close your account, all such documents will be permanently deleted within a reasonable timeframe, 
                unless we are required to retain them by law.
              </p>
            </div>

            {/* Additional Rights */}
            <div className="mt-8 p-5 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-3">Additional Rights:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Right to access your personal data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Right to data portability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Right to restrict processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Right to object to processing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12">
            <div className="flex items-start mb-6">
              <div className="bg-emerald-50 p-3 rounded-lg mr-4">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Security Measures
                </h2>
                <p className="text-gray-700 mb-4">
                  We take reasonable technical and organizational measures to protect your 
                  information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="text-gray-700 mb-4">
                  Uploaded identity documents are encrypted at rest and accessible only to authorised personnel 
                  on a need‑to‑know basis.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: 'Data Encryption', value: 'AES-256' },
                    { label: 'Secure Servers', value: 'ISO 27001' },
                    { label: 'Regular Audits', value: 'Quarterly' },
                    { label: 'Access Control', value: 'Role-Based' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <div className="text-lg font-bold text-emerald-600">{item.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-10 p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h2 className="text-xl font-semibold text-amber-800 mb-3">
              Changes to This Privacy Policy
            </h2>
            <p className="text-amber-700">
              We may update this policy from time to time. We will notify you of any significant 
              changes by posting the new Privacy Policy on this page and updating the 
              "Last Updated" date. Continued use of our services after changes constitutes 
              acceptance of the updated policy.
            </p>
          </section>

          {/* Additional App-Specific Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Additional App-Specific Information
            </h2>
            
            <div className="space-y-6">
              {/* Children's Privacy */}
              <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Children's Privacy</h3>
                <p className="text-gray-700">
                  Our services are intended for users who are at least 18 years old (or the age of majority in your jurisdiction). 
                  We do not knowingly collect personal information from children under 18. If you believe we have collected 
                  information from a child, please contact us immediately.
                </p>
              </div>

              {/* Data Retention */}
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Data Retention</h3>
                <p className="text-gray-700">
                  We retain your personal information for as long as your account is active or as needed to provide services. 
                  After account deletion, we may retain certain information as required by law or for legitimate business purposes.
                </p>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded">
                    <span className="font-medium text-gray-800">Active Accounts:</span>
                    <span className="text-gray-600 ml-2">Until deletion request</span>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <span className="font-medium text-gray-800">Inactive Accounts:</span>
                    <span className="text-gray-600 ml-2">2 years of inactivity</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-gray-700 text-sm">
                    <strong>Verification Documents:</strong> If you upload identity documents (PAN, Voter ID, Driving License) 
                    for verification, these documents will be deleted when you delete your account or withdraw your consent. 
                    In no event will we retain copies of such documents beyond the period necessary for verification, 
                    unless required by applicable law.
                  </p>
                </div>
              </div>

              {/* International Data Transfers */}
              <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">International Data Transfers</h3>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Third-Party Services & Links</h3>
                <p className="text-gray-700">
                  Our app may contain links to third-party websites or services. This Privacy Policy does not apply to those 
                  third-party services. We encourage you to review their privacy policies.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this Privacy Policy, 
                  please contact our Privacy Team at:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3" />
                    <a 
                      href="mailto:marry10care@gmail.com" 
                      className="text-rose-600 hover:text-rose-800 font-medium"
                    >
                      marry10care@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Contact number available in app</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                    <div className="text-gray-700 text-sm">
                      <strong>Registered Office:</strong><br />
                      Launchly Software Private Limited<br />
                      Trivandrum, Kerala
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Response Time</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to privacy-related inquiries within 48 hours during business days.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <div className="mt-10 p-5 bg-gray-900 text-white rounded-xl text-center">
            <p className="font-medium">
              By using our App and Website, you acknowledge that you have read, 
              understood, and accept this Privacy Policy.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Last updated: March 25, 2026
            </p>
            <p className="text-xs text-gray-400 mt-3">
              © {new Date().getFullYear()} Launchly Software Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;