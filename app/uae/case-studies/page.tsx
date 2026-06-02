'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, Building2, Users } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Gulf Trading LLC',
      industry: 'Trading',
      challenge: 'Complex VAT compliance and free zone mainland operations',
      solution: 'VAT implementation and cross-border tax planning for multi-jurisdiction operations',
      results: [
        { metric: 'AED 85,000', label: 'Annual Tax Savings' },
        { metric: '100%', label: 'VAT Compliant' },
        { metric: 'Zero', label: 'Penalties' }
      ],
      testimonial: 'ARMH & Co helped us navigate complex VAT regulations across multiple Emirates. Their expertise is unmatched.',
      client: 'Ahmed Al-Rashid',
      role: 'Managing Director, Gulf Trading LLC'
    },
    {
      id: 2,
      title: 'Tech Solutions DMCC',
      industry: 'Technology',
      challenge: 'ESR compliance and UBO registration requirements',
      solution: 'Complete ESR filing and UBO registration with ongoing compliance management',
      results: [
        { metric: '100%', label: 'ESR Compliant' },
        { metric: 'On-time', label: 'All Filings' },
        { metric: 'Reduced', label: 'Compliance Risk' }
      ],
      testimonial: 'Their understanding of DMCC regulations saved us significant time and ensured full compliance.',
      client: 'Fatima Hassan',
      role: 'CFO, Tech Solutions DMCC'
    },
    {
      id: 3,
      title: 'Regional Logistics FZ',
      industry: 'Logistics',
      challenge: 'International operations requiring cross-border tax planning',
      solution: 'International tax advisory and transfer pricing documentation',
      results: [
        { metric: 'AED 150,000', label: 'Tax Optimization' },
        { metric: 'Compliant', label: 'Transfer Pricing' },
        { metric: 'Reduced', label: 'Audit Risk' }
      ],
      testimonial: 'Professional, responsive, and knowledgeable. They understand international business operations.',
      client: 'Omar Khalifa',
      role: 'CEO, Regional Logistics FZ'
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="font-sans text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Success Stories
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Case Studies
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Real results for real businesses. See how we've helped UAE businesses navigate complex regulations 
              and achieve their financial goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {caseStudies.map((study, index) => (
              <motion.div key={study.id} variants={itemVariants} className="bg-charcoal-50 rounded-xl border border-charcoal-100 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <span className="font-sans bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                      {study.industry}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 mt-4 mb-4 tracking-tight">
                      {study.title}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-sans font-semibold text-charcoal-900 mb-1 flex items-center gap-2">
                          <Users className="w-4 h-4 text-emerald-600" />
                          Challenge
                        </h3>
                        <p className="font-sans text-charcoal-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-charcoal-900 mb-1 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          Solution
                        </h3>
                        <p className="font-sans text-charcoal-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-charcoal-200">
                      <p className="font-sans text-charcoal-700 text-sm italic mb-2">
                        "{study.testimonial}"
                      </p>
                      <p className="font-sans text-charcoal-900 text-sm font-semibold">
                        {study.client}
                      </p>
                      <p className="font-sans text-charcoal-600 text-xs">{study.role}</p>
                    </div>
                  </div>

                  <div className="bg-charcoal-900 p-8 flex flex-col justify-center">
                    <h3 className="font-serif text-xl font-bold text-white mb-6 tracking-tight">Results</h3>
                    <div className="space-y-4">
                      {study.results.map((result, rIndex) => (
                        <div key={rIndex} className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                            {result.label.includes('AED') || result.label.includes('$') ? (
                              <DollarSign className="w-6 h-6 text-white" />
                            ) : result.label.includes('%') ? (
                              <TrendingUp className="w-6 h-6 text-white" />
                            ) : (
                              <CheckCircle className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-serif text-2xl font-bold text-emerald-400">{result.metric}</div>
                            <div className="font-sans text-charcoal-300 text-sm">{result.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'Trading',
              'Technology',
              'Logistics',
              'Real Estate',
              'Professional Services',
              'Healthcare',
              'Construction',
              'Hospitality'
            ].map((industry, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-4 rounded-xl border border-charcoal-200 text-center">
                <Building2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <span className="font-sans text-charcoal-900 font-semibold text-sm">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Want Similar Results?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-8 leading-relaxed"
          >
            Schedule a free consultation to discuss how we can help transform your financial operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/uae/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uae/services" 
              className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
