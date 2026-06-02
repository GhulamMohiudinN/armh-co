'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          id: 1,
          question: 'What services does ARMH & Co offer?',
          answer: 'We offer comprehensive accounting and tax services including bookkeeping, VAT returns, year-end accounts, corporation tax, payroll, R&D tax credits, Companies House compliance, HMRC claims, and international tax advisory. Our services are designed for UK SMEs and businesses with international operations.'
        },
        {
          id: 2,
          question: 'What makes ARMH & Co different from other accounting firms?',
          answer: 'We combine international accounting expertise with local regulatory knowledge. Our team is ACCA and ICAEW qualified with experience across UK and international markets. We offer fixed monthly pricing, dedicated account managers, and proactive deadline management to ensure you never miss a filing date.'
        },
        {
          id: 3,
          question: 'How do I get started with ARMH & Co?',
          answer: 'Simply book a free consultation through our website or contact us directly. We will discuss your business needs, assess your current accounting setup, and recommend the best service package for your requirements. Onboarding typically takes 1-2 weeks depending on complexity.'
        }
      ]
    },
    {
      category: 'VAT & MTD',
      questions: [
        {
          id: 4,
          question: 'What is the VAT registration threshold?',
          answer: 'The current VAT registration threshold is £90,000 of taxable turnover in a 12-month period. You must register within 30 days of reaching this threshold. We can help determine if you need to register and handle the entire registration process.'
        },
        {
          id: 5,
          question: 'What is Making Tax Digital (MTD)?',
          answer: 'Making Tax Digital is HMRC initiative requiring businesses to keep digital records and submit VAT returns using MTD-compatible software. Since April 2019, VAT-registered businesses above the threshold must comply. We use HMRC-approved software including Xero, QuickBooks, and FreeAgent.'
        },
        {
          id: 6,
          question: 'How often are VAT returns due?',
          answer: 'VAT returns are typically due quarterly, one month and seven days after the end of your VAT period. We track all deadlines and ensure timely submission to avoid penalties. We also provide VAT payment planning to optimize your cash flow.'
        }
      ]
    },
    {
      category: 'Tax & Compliance',
      questions: [
        {
          id: 7,
          question: 'What are R&D tax credits?',
          answer: 'R&D tax credits are a government incentive designed to encourage innovation. UK companies can claim relief on qualifying R&D expenditure. For SMEs, this can result in a cash refund of up to 33% of qualifying costs. Our specialists have secured millions in R&D credits for clients.'
        },
        {
          id: 8,
          question: 'When are year-end accounts due?',
          answer: 'For private companies, year-end accounts must be filed with Companies House within 9 months of the accounting year-end. Corporation tax returns are due 12 months after the year-end. We manage all deadlines and ensure timely filing to avoid penalties.'
        },
        {
          id: 9,
          question: 'What is included in payroll services?',
          answer: 'Our payroll services include payslip generation, RTI submissions to HMRC, pension auto-enrolment management, PAYE calculations, end-of-year forms (P60, P11D), and compliance with all payroll regulations. We also handle new starter and leaver processes.'
        }
      ]
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          id: 10,
          question: 'How is pricing structured?',
          answer: 'We offer fixed monthly pricing based on your business size and transaction volume. This provides predictable costs with no surprises. Our packages start from custom pricing for start-ups and scale with your business. We provide transparent quotes with no hidden fees.'
        },
        {
          id: 11,
          question: 'What support do I get?',
          answer: 'All clients receive a dedicated account manager, unlimited email support, and access to our client portal. Higher-tier packages include priority support, quarterly strategy calls, and 24/7 emergency access. We are committed to responsive, personalized service.'
        },
        {
          id: 12,
          question: 'Can I change my service package?',
          answer: 'Yes, we offer flexible service packages that can be adjusted as your business grows or changes. We review your needs regularly and can upgrade or downgrade your package as required. We believe in long-term partnerships that adapt to your evolving requirements.'
        }
      ]
    }
  ];

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedQuestion(null);
  };

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

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
              Help & Support
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Find answers to common questions about our services, pricing, and processes. Can not find what you are looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white border-b border-charcoal-200">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-charcoal-300 focus:outline-none focus:border-emerald-600 font-sans text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-charcoal-300 mx-auto mb-4" />
              <p className="font-sans text-charcoal-600 text-lg">No results found for your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="font-sans text-emerald-600 font-semibold mt-2 hover:text-emerald-500"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredData.map((category, cIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: cIndex * 0.1 }}
                  className="bg-charcoal-50 rounded-xl border border-charcoal-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-charcoal-100 transition-colors"
                  >
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 tracking-tight">
                      {category.category}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-charcoal-600 transition-transform ${
                        expandedCategory === category.category ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedCategory === category.category && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: customEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 space-y-3">
                          {category.questions.map((faq) => (
                            <div key={faq.id} className="border-t border-charcoal-200 pt-3">
                              <button
                                onClick={() => toggleQuestion(faq.id)}
                                className="w-full text-left flex items-center justify-between"
                              >
                                <span className="font-sans font-semibold text-charcoal-900">
                                  {faq.question}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-emerald-600 transition-transform flex-shrink-0 ml-2 ${
                                    expandedQuestion === faq.id ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              <AnimatePresence>
                                {expandedQuestion === faq.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: customEase }}
                                    className="overflow-hidden"
                                  >
                                    <p className="font-sans text-charcoal-600 text-sm mt-2 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight"
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="font-sans text-charcoal-600 mb-8 leading-relaxed"
          >
            Our team is here to help. Get in touch for personalized answers to your questions.
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
              Contact Us
            </Link>
            <Link 
              href="/uk/blog" 
              className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
