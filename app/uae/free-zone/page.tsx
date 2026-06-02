'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Building2, FileText, Globe, ArrowRight, MapPin } from 'lucide-react';

export default function UAEFreeZonePage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service10.png"
          alt="Free Zone"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal-950/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4">
              UAE Free Zone Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Free Zone Accounting
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Specialized accounting for DMCC, DIFC, JAFZA, ADGM, and all major UAE free zones. 
              Our free zone specialists understand the unique requirements of each zone and ensure full compliance.
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

      {/* Free Zones Overview Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Expertise Across All Major Free Zones
              </h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                UAE free zones offer attractive benefits including 0% corporate tax on qualifying income, 
                100% foreign ownership, and simplified import/export procedures. However, each free zone has 
                specific accounting and compliance requirements.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Our team has deep expertise with all major free zones including DMCC, DIFC, JAFZA, ADGM, 
                Dubai Silicon Oasis, Sharjah Publishing City, and others. We understand their unique audit 
                requirements, reporting formats, and regulatory compliance needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Free Zones We Serve</h3>
              <ul className="space-y-3">
                {[
                  'DMCC (Dubai Multi Commodities Centre)',
                  'DIFC (Dubai International Financial Centre)',
                  'JAFZA (Jebel Ali Free Zone)',
                  'ADGM (Abu Dhabi Global Market)',
                  'Dubai Silicon Oasis',
                  'Dubai Airport Free Zone',
                  'Sharjah Publishing City',
                  'RAK ICC (Ras Al Khaimah)',
                  'All Northern Emirates free zones'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our Free Zone Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Zone-Specific Accounting',
                description: 'Accounting tailored to each free zone\'s specific requirements including audit formats and reporting standards.'
              },
              {
                icon: FileText,
                title: 'Audit Preparation',
                description: 'Complete audit preparation including financial statements, schedules, and documentation for zone auditors.'
              },
              {
                icon: Shield,
                title: 'Compliance Filings',
                description: 'All required filings to free zone authorities including annual returns and license renewals.'
              },
              {
                icon: Globe,
                title: 'Qualifying Income Assessment',
                description: 'Assessment and documentation for qualifying free zone income to benefit from 0% corporate tax.'
              },
              {
                icon: Clock,
                title: 'License Renewal Support',
                description: 'Financial documentation and compliance support for free zone license renewals and upgrades.'
              },
              {
                icon: CheckCircle,
                title: 'Multi-Zone Consolidation',
                description: 'Consolidated accounting for businesses operating across multiple free zones and mainland.'
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

      {/* Zone-Specific Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Zone-Specific Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                zone: 'DMCC',
                requirements: 'Annual audit required, specific audit format, compliance with DMCC rules and regulations, quarterly reporting for certain activities.'
              },
              {
                zone: 'DIFC',
                requirements: 'DFSA compliance, IFRS financial statements, specific audit requirements, regulatory reporting to DFSA.'
              },
              {
                zone: 'JAFZA',
                requirements: 'Annual audit for most companies, specific financial statement format, compliance with JAFZA regulations.'
              },
              {
                zone: 'ADGM',
                requirements: 'FSRA compliance, IFRS financial statements, specific audit requirements, regulatory reporting to FSRA.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.zone}</h3>
                <p className="text-charcoal-600 text-sm">{item.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Free Zone Benefits We Help You Maximize
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '0% Corporate Tax',
                description: 'On qualifying income when free zone conditions are met. We help ensure you qualify and maintain eligibility.'
              },
              {
                title: '100% Foreign Ownership',
                description: 'No UAE sponsor required. We handle all compliance requirements for foreign-owned entities.'
              },
              {
                title: 'Customs Exemptions',
                description: 'Exemption from import and export duties. We maintain proper documentation for customs compliance.'
              },
              {
                title: 'No Currency Restrictions',
                description: 'Free repatriation of capital and profits. We handle multi-currency accounting and reporting.'
              },
              {
                title: 'Simplified Setup',
                description: 'Faster company formation and licensing. We provide ongoing accounting support from day one.'
              },
              {
                title: 'Tax Treaties',
                description: 'Access to UAE\'s extensive double taxation treaty network. We help optimize cross-border tax positions.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{benefit.title}</h3>
                <p className="text-charcoal-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Do I need an audit for my free zone company?',
                answer: 'Most free zones require annual audits, though requirements vary by zone and company type. DMCC, DIFC, and ADGM typically require audits. We can advise on your specific requirements.'
              },
              {
                question: 'Can I operate in mainland UAE from a free zone?',
                answer: 'Generally, free zone companies are restricted to operating within the free zone or internationally. However, some free zones allow mainland operations through specific arrangements. We can advise on the best structure for your business.'
              },
              {
                question: 'How do I maintain qualifying income status?',
                answer: 'To maintain 0% tax on qualifying income, you must meet specific conditions including maintaining adequate assets in the free zone, deriving qualifying income, and meeting de minimis requirements. We help ensure ongoing compliance.'
              },
              {
                question: 'Can you handle accounting for multiple free zones?',
                answer: 'Yes. We have clients operating across multiple free zones and can provide consolidated accounting while ensuring zone-specific compliance for each entity.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
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
            Expert Free Zone Accounting
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get specialized accounting support for your free zone business across all Emirates.
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
