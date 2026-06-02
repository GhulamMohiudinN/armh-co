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
          question: 'What services does ARMH & Co offer in the UAE?',
          answer: 'We offer comprehensive accounting and tax services including VAT compliance, ESR filing, UBO registration, corporate tax advisory, financial reporting, WPS compliance, free zone advisory, and international tax planning. Our services are designed for UAE businesses and international companies operating in the region.'
        },
        {
          id: 2,
          question: 'What makes ARMH & Co different from other accounting firms in the UAE?',
          answer: 'We combine international accounting expertise with deep UAE regulatory knowledge. Our team is qualified with experience across all Emirates and major free zones including DIFC, ADGM, DMCC, and more. We offer fixed monthly pricing, dedicated account managers, and proactive compliance management.'
        },
        {
          id: 3,
          question: 'How do I get started with ARMH & Co in the UAE?',
          answer: 'Simply book a free consultation through our website or contact our Dubai office. We will discuss your business needs, assess your current setup, and recommend the best service package. Onboarding typically takes 1-2 weeks depending on complexity and jurisdiction requirements.'
        }
      ]
    },
    {
      category: 'VAT Compliance',
      questions: [
        {
          id: 4,
          question: 'What is the VAT registration threshold in the UAE?',
          answer: 'The VAT registration threshold in the UAE is AED 375,000 of taxable supplies in a 12-month period. Voluntary registration is available for businesses with supplies between AED 187,500 and AED 375,000. We can help determine your eligibility and handle the entire registration process.'
        },
        {
          id: 5,
          question: 'How often are VAT returns due in the UAE?',
          answer: 'VAT returns are typically due quarterly, within 28 days after the end of the tax period. Some businesses may be eligible for monthly returns. We track all deadlines and ensure timely submission to avoid penalties. We also provide VAT payment planning to optimize your cash flow.'
        },
        {
          id: 6,
          question: 'What happens if I miss a VAT deadline?',
          answer: 'Late VAT returns incur administrative penalties based on how late the filing is. Penalties start at AED 1,000 for the first late filing and increase for subsequent violations. We proactively manage deadlines to avoid penalties and can help negotiate if issues arise with the Federal Tax Authority.'
        }
      ]
    },
    {
      category: 'ESR & UBO',
      questions: [
        {
          id: 7,
          question: 'What is Economic Substance Regulation (ESR)?',
          answer: 'ESR requires UAE companies carrying out relevant activities to maintain adequate economic substance in the UAE. Relevant activities include banking, insurance, investment fund management, headquarters, shipping, and more. We handle ESR notifications, filings, and compliance reporting.'
        },
        {
          id: 8,
          question: 'What is UBO registration?',
          answer: 'Ultimate Beneficial Owner (UBO) registration requires UAE companies to maintain a register of individuals who ultimately own or control the company. This includes disclosing ownership details to relevant authorities. We assist with UBO registration and ongoing compliance.'
        },
        {
          id: 9,
          question: 'Who needs to comply with ESR and UBO regulations?',
          answer: 'Most UAE companies, including free zone entities, must comply with ESR and UBO regulations. Exemptions exist for certain categories, but most businesses operating in the UAE will need to file ESR reports and maintain UBO registers. We can assess your specific requirements.'
        }
      ]
    },
    {
      category: 'Corporate Tax & Free Zones',
      questions: [
        {
          id: 10,
          question: 'What is the UAE Corporate Tax rate?',
          answer: 'The UAE introduced a federal corporate tax of 9% on taxable income above AED 375,000. Income below AED 375,000 is taxed at 0%. Free zone persons may be eligible for 0% tax if they meet qualifying income criteria. We provide corporate tax planning and compliance services.'
        },
        {
          id: 11,
          question: 'What is the difference between free zone and mainland?',
          answer: 'Mainland companies can trade anywhere in the UAE and internationally, but require a UAE national sponsor. Free zone companies offer 100% foreign ownership and tax benefits but are restricted to trading within the free zone or internationally. We help businesses choose the right structure.'
        },
        {
          id: 12,
          question: 'Which free zones do you support?',
          answer: 'We support all major UAE free zones including DIFC, ADGM, DMCC, JAFZA, DAFZA, RAKEZ, SHAMS, and more. Our team has experience with the specific regulations and compliance requirements of each jurisdiction. We can advise on the best free zone for your business.'
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
              Find answers to common questions about our UAE services, VAT compliance, and regulatory requirements. Can not find what you are looking for? Contact us directly.
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
              href="/uae/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Contact Us
            </Link>
            <Link 
              href="/uae/blog" 
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
