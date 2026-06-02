'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, AlertCircle, FileText, Users, ArrowRight, Database } from 'lucide-react';

export default function VATReturnsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service12.png"
          alt="VAT Returns"
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
              UK VAT Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              VAT Returns (MTD-Compliant)
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Full Making Tax Digital compliance with automated VAT filing directly to HMRC. 
              Our VAT specialists ensure accurate calculations, timely submissions, and complete 
              audit trail for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uk/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
                Get a Quote
              </Link>
              <Link href="/uk/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MTD Compliance Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Making Tax Digital Ready
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Since April 2019, VAT-registered businesses with taxable turnover above the VAT threshold (£90,000 as of 2024-2025) 
                must keep digital records and submit VAT returns using MTD-compatible software. Our team 
                ensures full compliance with HMRC's MTD requirements.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We use HMRC-approved MTD software including Xero, QuickBooks, and FreeAgent, ensuring 
                seamless integration with HMRC's API for direct filing. This eliminates manual errors 
                and reduces the risk of penalties.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-charcoal-600">MTD Compliance</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">0</div>
                  <div className="text-sm text-charcoal-600">Penalties Incurred</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200 shadow-lg">
              <h3 className="font-semibold text-charcoal-900 mb-4">MTD Compliance Checklist</h3>
              <ul className="space-y-3">
                {[
                  'Digital record keeping for all VAT transactions',
                  'HMRC-approved MTD-compatible software',
                  'Direct API submission to HMRC',
                  'Real-time VAT liability calculations',
                  'Complete audit trail for all adjustments',
                  'Quarterly VAT return submissions'
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
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Comprehensive Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Our VAT Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'VAT Registration',
                description: 'Complete VAT registration service including determination of registration threshold, voluntary registration advice, and scheme selection for optimal tax position.',
                details: ['Threshold assessment', 'Voluntary registration', 'Scheme selection', 'HMRC liaison']
              },
              {
                icon: Database,
                title: 'VAT Return Preparation',
                description: 'Accurate preparation of quarterly VAT returns with box-by-box verification and reconciliation to underlying records, ensuring MTD compliance.',
                details: ['Quarterly returns', 'Box-by-box verification', 'Reconciliation', 'Direct filing']
              },
              {
                icon: Shield,
                title: 'VAT Compliance Review',
                description: 'Comprehensive review of your VAT position to identify potential risks, recoverable amounts, and optimization opportunities for tax efficiency.',
                details: ['Risk assessment', 'Recovery analysis', 'Optimization review', 'Compliance audit']
              },
              {
                icon: AlertCircle,
                title: 'VAT Investigations',
                description: 'Full support during HMRC VAT investigations including professional representation, document preparation, and negotiation for favorable outcomes.',
                details: ['HMRC representation', 'Document preparation', 'Negotiation support', 'Appeal assistance']
              },
              {
                icon: Clock,
                title: 'VAT Payment Planning',
                description: 'Strategic timing of VAT payments and claims to optimize cash flow while maintaining compliance with all regulatory requirements.',
                details: ['Cash flow optimization', 'Payment timing', 'Claim management', 'Compliance monitoring']
              },
              {
                icon: Users,
                title: 'VAT Training',
                description: 'Training for your finance team on VAT regulations, partial exemption calculations, and cross-border transactions for internal capability building.',
                details: ['Team training', 'Partial exemption', 'Cross-border rules', 'Internal procedures']
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{service.title}</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-2 text-xs text-charcoal-500">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VAT Schemes Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Tailored Solutions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              VAT Schemes We Support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Standard VAT Accounting',
                description: 'Standard cash or accrual accounting with quarterly returns. Suitable for most businesses with straightforward VAT affairs and regular compliance requirements.',
                bestFor: 'Most businesses with standard VAT operations'
              },
              {
                title: 'Flat Rate Scheme',
                description: 'Simplified scheme for small businesses with turnover under £150,000. Pay a fixed percentage of gross turnover to HMRC, reducing administration burden.',
                bestFor: 'Small businesses with limited VAT recovery'
              },
              {
                title: 'Annual Accounting Scheme',
                description: 'Submit one annual return with interim payments. Reduces administration for eligible businesses with turnover under £1.35 million, spreading VAT payments evenly.',
                bestFor: 'Businesses with predictable turnover patterns'
              },
              {
                title: 'Cash Accounting Scheme',
                description: 'Account for VAT when payments are received or made, not when invoices are issued. Helps with cash flow management by aligning VAT with actual cash movements.',
                bestFor: 'Businesses focused on cash flow optimization'
              }
            ].map((scheme, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-charcoal-900 mb-2">{scheme.title}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{scheme.description}</p>
                <div className="text-xs text-emerald-600 font-medium">Best for: {scheme.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Transparent Pricing
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Tailored to Your VAT Requirements
            </h2>
            <p className="text-charcoal-600 mt-4 max-w-2xl mx-auto">
              Custom pricing based on your VAT complexity, transaction volume, and specific compliance needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Standard',
                price: 'Custom / month',
                description: 'For businesses with standard VAT affairs',
                features: [
                  'Quarterly VAT return preparation',
                  'MTD-compliant filing',
                  'VAT reconciliation',
                  'Basic compliance review',
                  'Email support',
                  'Deadline reminders'
                ]
              },
              {
                tier: 'Complex',
                price: 'Custom / month',
                description: 'For businesses with complex VAT arrangements',
                features: [
                  'Everything in Standard',
                  'Partial exemption calculations',
                  'Cross-border VAT advice',
                  'Scheme optimization',
                  'Priority support',
                  'VAT health check',
                  'Dedicated VAT specialist'
                ],
                highlighted: true
              },
              {
                tier: 'Investigation Support',
                price: 'Custom / month',
                description: 'For businesses under HMRC investigation',
                features: [
                  'Full investigation representation',
                  'Document preparation',
                  'HMRC correspondence handling',
                  'Negotiation support',
                  'Dedicated VAT specialist',
                  '24/7 emergency support'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl ${tier.highlighted ? 'border-2 border-emerald-600 shadow-xl' : 'border border-charcoal-200'}`}
              >
                {tier.highlighted && (
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</p>
                <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/uk/contact" className="block w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors text-center">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'What is the VAT registration threshold?',
                answer: 'The current VAT registration threshold is £90,000 of taxable turnover in a 12-month period. You must register within 30 days of reaching this threshold. We can help determine if you need to register and handle the entire registration process.'
              },
              {
                question: 'How often are VAT returns due?',
                answer: 'VAT returns are typically due quarterly, one month and seven days after the end of your VAT period. We track all deadlines and ensure timely submission to avoid penalties. Some businesses may qualify for annual accounting schemes.'
              },
              {
                question: 'What happens if I miss a VAT deadline?',
                answer: 'Late submissions incur penalties based on how late the return is filed. We proactively manage deadlines to avoid penalties and can help negotiate if issues arise. Our deadline tracking system ensures you never miss a filing date.'
              },
              {
                question: 'Can you help with VAT registration?',
                answer: 'Yes. We handle the entire VAT registration process including threshold assessment, voluntary registration advice, scheme selection, and HMRC correspondence. We ensure you start on the right VAT scheme for your business.'
              },
              {
                question: 'What is partial exemption?',
                answer: 'Partial exemption applies when a business makes both VATable and exempt supplies. We calculate partial exemption using the standard method or special methods, ensuring you recover the maximum allowable VAT while maintaining compliance.'
              },
              {
                question: 'Do you support cross-border VAT?',
                answer: 'Yes. We have extensive experience with cross-border VAT including EU imports/exports, international services, and digital services. We ensure compliance with place of supply rules and help optimize your international VAT position.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ensure Your VAT Compliance
          </h2>
          <p className="font-sans text-charcoal-300 mb-8 leading-relaxed">
            Get expert VAT support and avoid costly penalties. Book a free consultation today to discuss your VAT requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
              Book Free Consultation
            </Link>
            <Link href="/uk/pricing" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
