'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Building2, Briefcase, ShoppingCart, Factory, Cpu, Truck, Heart, Film, Coffee, Store } from 'lucide-react';

export default function UKIndustriesPage() {
  const industries = [
    {
      icon: Cpu,
      title: 'Technology & SaaS',
      description: 'R&D tax credits, EIS/SEIS planning, software development accounting, and international tax for tech companies.',
      services: ['R&D Tax Credits', 'EIS/SEIS Planning', 'International Tax', 'VAT Compliance']
    },
    {
      icon: Building2,
      title: 'Real Estate & Property',
      description: 'Property development accounting, VAT on property transactions, capital allowances, and portfolio management.',
      services: ['Property Accounting', 'VAT on Property', 'Capital Allowances', 'Portfolio Management']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Production cost accounting, inventory management, capital allowances on plant and machinery, and R&D claims.',
      services: ['Cost Accounting', 'Inventory Management', 'Capital Allowances', 'R&D Tax Credits']
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Partnership accounting, LLP compliance, professional indemnity insurance, and regulatory compliance.',
      services: ['Partnership Accounting', 'LLP Compliance', 'Regulatory Compliance', 'Tax Planning']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Multi-channel accounting, VAT on online sales, inventory management, and cross-border tax.',
      services: ['E-Commerce Accounting', 'VAT Compliance', 'Inventory Management', 'Cross-Border Tax']
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Fuel duty management, fleet accounting, VAT on transport services, and international logistics tax.',
      services: ['Fleet Accounting', 'Fuel Duty', 'VAT Compliance', 'International Tax']
    },
    {
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'NHS contractor accounting, CQC compliance, medical practice accounting, and healthcare VAT.',
      services: ['NHS Contractor', 'CQC Compliance', 'Practice Accounting', 'Healthcare VAT']
    },
    {
      icon: Film,
      title: 'Creative & Media',
      description: 'Film tax credits, creative industry reliefs, production accounting, and royalty management.',
      services: ['Film Tax Credits', 'Creative Reliefs', 'Production Accounting', 'Royalty Management']
    },
    {
      icon: Coffee,
      title: 'Hospitality & Restaurants',
      description: 'Hospitality VAT, tip reporting, cash management, and restaurant specific accounting.',
      services: ['Hospitality VAT', 'Tip Reporting', 'Cash Management', 'Cost Control']
    }
  ];

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
              UK Industry Expertise
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Deep sector-specific expertise across major UK industries. Our accountants understand the unique 
              challenges, regulations, and opportunities in your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-8 rounded-xl border border-charcoal-100 hover:border-emerald-600 transition-colors"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">{industry.title}</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, sIndex) => (
                      <span key={sIndex} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Why Industry Expertise Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sector-Specific Regulations',
                description: 'Each industry has unique regulatory requirements. We stay current with industry-specific regulations and compliance requirements.'
              },
              {
                title: 'Specialized Tax Reliefs',
                description: 'Many industries offer specific tax reliefs and incentives. We ensure you claim all available reliefs for your sector.'
              },
              {
                title: 'Industry Best Practices',
                description: 'We understand industry best practices and can benchmark your performance against sector peers.'
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
            Industry-Specific Accounting Expertise
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get accounting services tailored to your industry's unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors">
              Book Free Consultation
            </button>
            <Link href="/uk/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
