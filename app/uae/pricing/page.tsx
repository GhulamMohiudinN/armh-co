'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Zap, Shield } from 'lucide-react';

export default function UAEPricingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
              UAE Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent, Competitive Pricing
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Competitive pricing tailored to UAE businesses. We provide transparent quotes based on your 
              specific requirements, transaction volume, and free zone or mainland setup. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Comprehensive Accounting Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Essential',
                price: 'AED 2,499/mo',
                description: 'Core accounting services for small UAE businesses',
                icon: Zap,
                features: [
                  'IFRS-compliant bookkeeping (up to 50 transactions)',
                  'Monthly management accounts',
                  'VAT registration & filing',
                  'Corporate tax compliance',
                  'Annual financial statements',
                  'Free zone compliance support',
                  'Email support'
                ]
              },
              {
                tier: 'Professional',
                price: 'AED 4,999/mo',
                description: 'Complete accounting for growing UAE businesses',
                icon: Shield,
                features: [
                  'Everything in Essential',
                  'Bookkeeping (up to 200 transactions)',
                  'Payroll & WPS (up to 10 employees)',
                  'ESR & UBO compliance',
                  'Free zone audit preparation',
                  'Quarterly strategy calls',
                  'Priority support',
                  'Dedicated accountant'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'AED 8,999/mo',
                description: 'Full-service accounting for established UAE businesses',
                icon: Star,
                features: [
                  'Everything in Professional',
                  'Unlimited transactions',
                  'Payroll & WPS (unlimited employees)',
                  'Multi-entity consolidation',
                  'CFO advisory hours',
                  'FTA audit support',
                  '24/7 support access',
                  'Multi-free zone support'
                ]
              }
            ].map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-charcoal-50 p-8 rounded-xl ${tier.highlighted ? 'border-2 border-emerald-600' : 'border border-charcoal-200'}`}
                >
                  {tier.highlighted && (
                    <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <Icon className="w-12 h-12 text-emerald-600 mb-4 mt-4" />
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{tier.tier}</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</p>
                  <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/uae/contact" className="w-full bg-charcoal-900 text-white py-3 px-2 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors text-center">
                    Get Quote
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-charcoal-500 text-sm mt-6">
            *All prices exclude 5% UAE VAT
          </p>
        </div>
      </section>

      {/* Free Zone Packages */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Free Zone Specialized Packages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { zone: 'DMCC', price: 'AED 3,999/mo', features: 'DMCC audit compliance, commodity trading accounting' },
              { zone: 'DIFC', price: 'AED 4,499/mo', features: 'DFSA compliance, IFRS financial statements' },
              { zone: 'JAFZA', price: 'AED 3,499/mo', features: 'JAFZA compliance, logistics accounting' },
              { zone: 'ADGM', price: 'AED 4,499/mo', features: 'FSRA compliance, financial services accounting' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.zone}</h3>
                <p className="text-emerald-600 font-bold mb-2">{item.price}</p>
                <p className="text-charcoal-600 text-xs">{item.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'CFO Advisory (Part-Time)', price: 'AED 6,999/mo' },
              { service: 'FTA Audit Support', price: 'AED 5,999/project' },
              { service: 'Corporate Tax Planning', price: 'AED 3,999/project' },
              { service: 'ESR & UBO Compliance', price: 'AED 2,499/year' },
              { service: 'Free Zone License Renewal', price: 'AED 1,499/renewal' },
              { service: 'Business Valuation', price: 'AED 7,999/project' },
              { service: 'Due Diligence Support', price: 'AED 4,999/project' },
              { service: 'Software Implementation', price: 'Custom' }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.service}</h3>
                <p className="text-emerald-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Pricing */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Real Estate & Construction',
                description: 'Specialized for property developers and construction companies with VAT on property expertise.',
                highlight: 'Property VAT Specialists'
              },
              {
                industry: 'Technology & Startups',
                description: 'Tailored for tech companies and startups with free zone setup and corporate tax planning.',
                highlight: 'Startup Experts'
              },
              {
                industry: 'Trading & Commodities',
                description: 'Designed for DMCC companies and commodity traders with inventory valuation expertise.',
                highlight: 'DMCC Specialists'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.industry}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{item.description}</p>
                <span className="text-emerald-600 text-xs font-semibold">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-charcoal-300 mb-8">
            Tell us about your UAE business and we'll provide a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uae/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
              Request Quote
            </Link>
            <Link href="/uae/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
