'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Zap, Shield } from 'lucide-react';

export default function UKPricingPage() {
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
              UK Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent, Custom Pricing
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Custom pricing tailored to your business needs. We provide transparent quotes based on your 
              specific requirements, transaction volume, and complexity. No hidden fees, no surprises.
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
                price: 'Custom / month',
                description: 'Core accounting services for small businesses',
                icon: Zap,
                features: [
                  'Bookkeeping up to 50 transactions/month',
                  'Monthly management accounts',
                  'VAT return preparation & filing',
                  'Annual accounts preparation',
                  'Corporation tax computation',
                  'Companies House filings',
                  'Email support'
                ]
              },
              {
                tier: 'Professional',
                price: 'Custom / month',
                description: 'Complete accounting for growing businesses',
                icon: Shield,
                features: [
                  'Everything in Essential',
                  'Bookkeeping up to 200 transactions/month',
                  'Payroll processing (up to 10 employees)',
                  'Self assessment for directors',
                  'R&D tax credit assessment',
                  'Quarterly strategy calls',
                  'Priority support',
                  'Dedicated accountant'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'Custom / month',
                description: 'Full-service accounting for established businesses',
                icon: Star,
                features: [
                  'Everything in Professional',
                  'Unlimited transactions',
                  'Payroll (unlimited employees)',
                  'Multi-entity consolidation',
                  'International tax advisory',
                  'HMRC investigation support',
                  '24/7 support access',
                  'CFO advisory hours'
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
                  <Link href="/uk/contact" className="w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors text-center">
                    Get Custom Quote
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'R&D Tax Credits', price: 'Custom' },
              { service: 'HMRC Investigation Support', price: 'Custom' },
              { service: 'International Tax Advisory', price: 'Custom' },
              { service: 'CFO Advisory (Part-Time)', price: 'Custom' },
              { service: 'Business Valuation', price: 'Custom' },
              { service: 'Due Diligence Support', price: 'Custom' },
              { service: 'Grant Applications', price: 'Custom' },
              { service: 'Software Implementation', price: 'Custom' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.service}</h3>
                <p className="text-emerald-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Technology & SaaS',
                description: 'Specialized pricing for tech companies including R&D credits, EIS/SEIS planning, and investor reporting.',
                highlight: 'R&D Tax Credits Included'
              },
              {
                industry: 'Real Estate & Property',
                description: 'Tailored for property developers including capital allowances, VAT on property, and portfolio accounting.',
                highlight: 'Capital Allowances Expertise'
              },
              {
                industry: 'Professional Services',
                description: 'Designed for consulting firms, legal practices, and professional partnerships with LLP compliance.',
                highlight: 'Partnership Specialists'
              }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.industry}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{item.description}</p>
                <span className="text-emerald-600 text-xs font-semibold">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Why Custom Pricing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored to Your Needs',
                description: 'Every business is unique. We assess your specific requirements and provide pricing that reflects your actual needs.'
              },
              {
                title: 'Transparent & Fair',
                description: "No hidden fees or surprise charges. You know exactly what you're paying for and what's included."
              },
              {
                title: 'Scalable Solutions',
                description: 'Pricing scales with your business. As you grow, your accounting package can grow with you.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
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
            Tell us about your business and we'll provide a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
              Request Quote
            </Link>
            <Link href="/uk/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
