'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, TrendingUp, FileText, Users, ArrowRight, Globe } from 'lucide-react';

export default function UAEBookkeepingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service7.png"
          alt="Bookkeeping"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal-950/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-sans text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              UAE Bookkeeping Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Bookkeeping & Management Accounts (IFRS)
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              IFRS-compliant bookkeeping with management accounts tailored for UAE business requirements. 
              Our qualified accountants ensure your financial records meet international standards and local regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uae/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
                Get a Quote
              </Link>
              <Link href="/uae/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IFRS Compliance Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                IFRS-Compliant Financial Records
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                International Financial Reporting Standards (IFRS) are the global standard for financial reporting. 
                In the UAE, many businesses including free zone companies and large mainland entities are required 
                to prepare financial statements in compliance with IFRS.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Our team of IFRS-qualified accountants ensures your bookkeeping meets these international standards 
                while also complying with UAE-specific requirements including VAT, corporate tax, and free zone regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">IFRS Compliance Features</h3>
              <ul className="space-y-3">
                {[
                  'IFRS-compliant chart of accounts',
                  'Accrual-based accounting methodology',
                  'Proper revenue recognition per IFRS 15',
                  'Lease accounting per IFRS 16',
                  'Financial instrument accounting per IFRS 9',
                  'Consolidated financial statements for groups'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            Our UAE Bookkeeping Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Transaction Recording',
                description: 'Daily recording of all business transactions in AED with proper categorization according to IFRS standards.'
              },
              {
                icon: TrendingUp,
                title: 'Management Accounts',
                description: 'Monthly management accounts including P&L, balance sheet, and cash flow statements with variance analysis.'
              },
              {
                icon: Shield,
                title: 'VAT-Ready Reporting',
                description: 'VAT-compliant reporting ensuring accurate VAT return preparation and FTA audit readiness.'
              },
              {
                icon: Clock,
                title: 'Bank Reconciliation',
                description: 'Regular reconciliation of all UAE bank accounts including multi-currency accounts for international businesses.'
              },
              {
                icon: Users,
                title: 'Dedicated Accountant',
                description: 'Your own dedicated qualified accountant who understands UAE business requirements and free zone regulations.'
              },
              {
                icon: Globe,
                title: 'Multi-Entity Support',
                description: 'Consolidated bookkeeping for businesses with multiple entities across different Emirates and free zones.'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-6 rounded-xl"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{service.title}</h3>
                  <p className="text-charcoal-600 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Start-up',
                price: 'AED 999/mo',
                description: 'For newly established businesses with up to 50 monthly transactions',
                features: [
                  'Up to 50 transactions/month',
                  'IFRS-compliant bookkeeping',
                  'Bank reconciliation',
                  'Monthly management accounts',
                  'VAT-ready reporting',
                  'Email support'
                ]
              },
              {
                tier: 'Growth',
                price: 'AED 1,999/mo',
                description: 'For growing businesses with up to 200 monthly transactions',
                features: [
                  'Up to 200 transactions/month',
                  'Everything in Start-up',
                  'Accounts receivable/payable',
                  'Quarterly strategy calls',
                  'Priority support',
                  'Budgeting & forecasting',
                  'Multi-currency support'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'AED 3,999/mo',
                description: 'For established businesses with unlimited transactions',
                features: [
                  'Unlimited transactions',
                  'Everything in Growth',
                  'Multi-entity consolidation',
                  'Dedicated accountant',
                  'Custom reporting',
                  '24/7 support access',
                  'Group financial statements'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl ${tier.highlighted ? 'border-2 border-emerald-600' : 'border border-charcoal-200'}`}
              >
                {tier.highlighted && (
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-charcoal-900 mt-4 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</p>
                <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal-500 text-sm mt-6">
            *All prices exclude 5% UAE VAT
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Do I need IFRS-compliant accounting?',
                answer: 'If you are a free zone company, large mainland business, or have international investors, you likely need IFRS-compliant financial statements. We can assess your requirements during our initial consultation.'
              },
              {
                question: 'What accounting software do you use?',
                answer: 'We work with Xero, QuickBooks, Zoho Books, Tally ERP, and Sage. We can also work with your existing software if it meets UAE requirements.'
              },
              {
                question: 'How do you handle multi-currency transactions?',
                answer: 'We have extensive experience with multi-currency accounting for UAE businesses with international operations. We properly record foreign currency transactions and calculate exchange gains/losses per IFRS.'
              },
              {
                question: 'Can you handle free zone specific requirements?',
                answer: 'Yes. We are experienced with all major UAE free zones including DMCC, DIFC, JAFZA, ADGM, and others. We understand their specific reporting and audit requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{faq.question}</h3>
                <p className="text-charcoal-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            IFRS-Compliant Bookkeeping for UAE Businesses
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get professional bookkeeping that meets international standards and UAE regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors">
              Book Free Consultation
            </button>
            <Link href="/uae/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
