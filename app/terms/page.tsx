'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { customEase } from '@/lib/utils/animation';

export default function TermsPage() {
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
              Terms and Conditions
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
              Welcome to ARMH & Co. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. 
              Please read them carefully before using our services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">2. Services</h2>
            <p className="mb-4">
              ARMH & Co provides accounting, tax advisory, and financial consulting services to businesses in the UK and UAE. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Bookkeeping and financial record-keeping</li>
              <li>VAT compliance and returns</li>
              <li>Corporate tax planning and filing</li>
              <li>Payroll services</li>
              <li>R&D tax credit claims</li>
              <li>Financial reporting and management accounts</li>
              <li>Business advisory and consulting</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">
              As a client of ARMH & Co, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate and complete information for our services</li>
              <li>Submit required documents and records in a timely manner</li>
              <li>Respond to our requests for information promptly</li>
              <li>Pay all fees as agreed in our engagement letters</li>
              <li>Inform us of any changes to your business that may affect our services</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">4. Fees and Payment</h2>
            <p className="mb-4">
              Our fees are outlined in our engagement letters and are subject to change with prior notice. 
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Fees are payable monthly or as agreed in the engagement letter</li>
              <li>Late payments may incur interest charges</li>
              <li>Additional services outside the scope of engagement will be charged separately</li>
              <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">5. Confidentiality</h2>
            <p className="mb-6">
              We maintain strict confidentiality of all client information and financial data. 
              We will not disclose your information to third parties except as required by law or with your explicit consent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">6. Data Protection</h2>
            <p className="mb-6">
              We comply with applicable data protection laws including GDPR in the UK and relevant regulations in the UAE. 
              For more information, please refer to our Privacy Policy.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              While we strive to provide accurate and professional services, we are not liable for any losses, 
              damages, or expenses arising from the use of our services, except where such liability is required by law.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">8. Termination</h2>
            <p className="mb-4">
              Either party may terminate our engagement with written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All outstanding fees must be paid</li>
              <li>We will return your documents and records</li>
              <li>We will assist with transition to another provider if requested</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">9. Professional Standards</h2>
            <p className="mb-6">
              We adhere to professional standards and ethical guidelines set by ACCA, ICAEW, and other relevant professional bodies. 
              Our services are provided in accordance with applicable laws and regulations in the UK and UAE.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">10. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with the updated date. 
              Continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">11. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li><strong>UK:</strong> uk@armhco.com | +44 123 456 7890</li>
              <li><strong>UAE:</strong> uae@armhco.com | +971 4 123 4567</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
