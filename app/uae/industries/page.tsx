'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Building2, Briefcase, ShoppingCart, Factory, Cpu, Truck, Heart, Plane, Store, Gem } from 'lucide-react';

export default function UAEIndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate & Construction',
      description: 'Property development accounting, VAT on property, free zone real estate, and construction project accounting.',
      services: ['Property Accounting', 'VAT on Property', 'Free Zone Real Estate', 'Project Accounting']
    },
    {
      icon: Cpu,
      title: 'Technology & Startups',
      description: 'Startup accounting, free zone tech companies, corporate tax planning, and investor reporting.',
      services: ['Startup Accounting', 'Free Zone Setup', 'Corporate Tax', 'Investor Reporting']
    },
    {
      icon: Gem,
      title: 'Trading & Commodities',
      description: 'DMCC accounting, commodity trading, inventory valuation, and international trade finance.',
      services: ['DMCC Compliance', 'Commodity Trading', 'Inventory Management', 'Trade Finance']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Production accounting, IFRS for manufacturing, inventory management, and industrial free zone compliance.',
      services: ['Production Accounting', 'IFRS Compliance', 'Inventory Management', 'Free Zone Compliance']
    },
    {
      icon: Plane,
      title: 'Aviation & Logistics',
      description: 'Aviation accounting, logistics companies, free zone logistics operations, and international trade.',
      services: ['Aviation Accounting', 'Logistics Operations', 'Free Zone Compliance', 'International Trade']
    },
    {
      icon: Store,
      title: 'Retail & E-Commerce',
      description: 'Retail accounting, VAT on retail, e-commerce in UAE, and multi-channel retail management.',
      services: ['Retail Accounting', 'VAT Compliance', 'E-Commerce', 'Multi-Channel']
    },
    {
      icon: Heart,
      title: 'Healthcare & Medical',
      description: 'Healthcare accounting, DHA compliance, medical free zone companies, and healthcare VAT.',
      services: ['Healthcare Accounting', 'DHA Compliance', 'Free Zone Healthcare', 'Healthcare VAT']
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Consulting firms, legal practices, DIFC/ADGM professional services, and partnership accounting.',
      services: ['Consulting Accounting', 'DIFC/ADGM Compliance', 'Partnership Accounting', 'Corporate Tax']
    },
    {
      icon: Truck,
      title: 'Transport & Distribution',
      description: 'Transport companies, distribution centers, logistics free zones, and fleet management.',
      services: ['Transport Accounting', 'Distribution Centers', 'Free Zone Logistics', 'Fleet Management']
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
              UAE Industry Expertise
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Deep sector-specific expertise across major UAE industries. Our accountants understand the unique 
              challenges, regulations, and opportunities in your industry across all Emirates and free zones.
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

      {/* Free Zone Industries Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Free Zone Industry Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                zone: 'DMCC',
                industries: 'Commodities, trading, mining, energy, and related services. We understand DMCC\'s specific audit and compliance requirements.'
              },
              {
                zone: 'DIFC',
                industries: 'Financial services, professional services, and fintech. We have expertise with DFSA compliance and IFRS reporting.'
              },
              {
                zone: 'JAFZA',
                industries: 'Logistics, manufacturing, automotive, and industrial companies. We understand JAFZA\'s reporting requirements.'
              },
              {
                zone: 'ADGM',
                industries: 'Financial services, professional services, and technology. We have expertise with FSRA compliance and ADGM regulations.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.zone}</h3>
                <p className="text-charcoal-600 text-sm">{item.industries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Why Industry Expertise Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Zone Specifics',
                description: 'Each free zone has unique requirements. We understand DMCC, DIFC, JAFZA, ADGM, and other zone-specific regulations.'
              },
              {
                title: 'UAE Tax Compliance',
                description: 'We understand VAT, corporate tax, ESR, and UBO requirements specific to different industries and business models.'
              },
              {
                title: 'Sector Best Practices',
                description: 'We understand industry best practices in the UAE and can benchmark your performance against sector peers.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
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
            Industry-Specific UAE Accounting
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get accounting services tailored to your industry and free zone requirements.
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
