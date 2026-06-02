'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, Building2, Users } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'TechStart UK Ltd',
      industry: 'Technology',
      challenge: 'Struggling with R&D tax credit claims and missing filing deadlines',
      solution: 'Implemented comprehensive R&D tax credit process and deadline management system',
      results: [
        { metric: '£45,000', label: 'R&D Tax Credit Saved' },
        { metric: '100%', label: 'Filing Compliance' },
        { metric: 'Zero', label: 'Penalties' }
      ],
      testimonial: 'ARMH & Co transformed our financial operations. Their proactive approach to deadline management means we never miss a filing date.',
      client: 'Sarah Mitchell',
      role: 'CEO, TechStart UK Ltd'
    },
    {
      id: 2,
      title: 'Innovate Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Complex VAT arrangements and international operations',
      solution: 'VAT scheme optimization and cross-border tax planning',
      results: [
        { metric: '£120,000', label: 'Annual Tax Savings' },
        { metric: '3', label: 'VAT Schemes Optimized' },
        { metric: 'Reduced', label: 'Admin Burden' }
      ],
      testimonial: 'The R&D tax credit expertise saved us over £45,000 in our first year. Highly recommend for any UK SME.',
      client: 'James Wilson',
      role: 'CFO, Innovate Manufacturing'
    },
    {
      id: 3,
      title: 'Digital Agency Pro',
      industry: 'Digital Services',
      challenge: 'Newly incorporated business needing comprehensive accounting setup',
      solution: 'Full accounting system setup with Xero integration and ongoing bookkeeping',
      results: [
        { metric: '50%', label: 'Time Saved on Admin' },
        { metric: 'Real-time', label: 'Financial Visibility' },
        { metric: 'MTD', label: 'VAT Compliant' }
      ],
      testimonial: 'Fixed monthly pricing with no surprises. Exactly what we needed as a newly incorporated business.',
      client: 'Emma Thompson',
      role: 'Founder, Digital Agency Pro'
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
              Real results for real businesses. See how we've helped UK SMEs transform their financial operations 
              and achieve their business goals.
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
                            {result.label.includes('£') || result.label.includes('$') ? (
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
              'Technology',
              'Manufacturing',
              'Digital Services',
              'E-commerce',
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
              href="/uk/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uk/services" 
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
