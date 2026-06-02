'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { customEase } from '@/lib/utils/animation';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="font-sans text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Privacy Policy
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl leading-relaxed">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            className="prose prose-lg max-w-none font-sans text-charcoal-700"
          >
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">1. Introduction</h2>
            <p className="mb-6">
              ARMH & Co ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our accounting and tax advisory services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
              <li><strong>Business Information:</strong> Company name, registration details, financial records, tax information</li>
              <li><strong>Financial Data:</strong> Bank statements, invoices, payroll records, tax returns</li>
              <li><strong>Communication Data:</strong> Emails, phone calls, meeting notes, correspondence</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information (when using our online services)</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing accounting and tax advisory services</li>
              <li>Preparing and filing tax returns and compliance documents</li>
              <li>Managing payroll and bookkeeping services</li>
              <li>Communicating with you about your account and services</li>
              <li>Improving our services and customer experience</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="mb-4">We process your information based on the following legal grounds:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> To provide services you've requested</li>
              <li><strong>Legal Obligation:</strong> To comply with tax and accounting regulations</li>
              <li><strong>Legitimate Interests:</strong> For business operations and fraud prevention</li>
              <li><strong>Consent:</strong> When you explicitly consent to specific processing activities</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Tax Authorities:</strong> HMRC (UK), FTA (UAE), and other regulatory bodies as required by law</li>
              <li><strong>Professional Advisors:</strong> With your consent, to other professional advisors (lawyers, auditors)</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist our operations</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
            </ul>
            <p className="mb-6">We never sell your personal information to third parties for marketing purposes.</p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">6. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure access controls and authentication</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Secure data storage and backup systems</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your information for the following periods:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Financial Records:</strong> Minimum 7 years (UK) / 5 years (UAE) as required by law</li>
              <li><strong>Tax Documents:</strong> As required by tax authorities (typically 6-7 years)</li>
              <li><strong>Client Files:</strong> For the duration of our engagement plus 7 years</li>
              <li><strong>General Communications:</strong> 3 years after relationship ends</li>
            </ul>
            <p className="mb-6">
              After retention periods expire, we securely dispose of your information in accordance with data protection regulations.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">8. Your Rights</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your information to another provider</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
            <p className="mb-6">
              To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">9. International Data Transfers</h2>
            <p className="mb-6">
              As we operate in both the UK and UAE, your information may be transferred between these jurisdictions. 
              We ensure appropriate safeguards are in place for international data transfers in compliance with GDPR and other applicable regulations.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">10. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to improve your experience on our website:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand how you use our website</li>
              <li><strong>Preference Cookies:</strong> To remember your settings (e.g., theme preference)</li>
            </ul>
            <p className="mb-6">
              You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">11. Children's Privacy</h2>
            <p className="mb-6">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">12. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website 
              and updating the "Last updated" date.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or your personal information, please contact us:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li><strong>UK:</strong> uk@armhco.com | +44 123 456 7890</li>
              <li><strong>UAE:</strong> uae@armhco.com | +971 4 123 4567</li>
              <li><strong>Data Protection Officer:</strong> dpo@armhco.com</li>
            </ul>
            <p className="mb-6">
              For UK residents, you also have the right to lodge a complaint with the Information Commissioner's Office (ICO).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
