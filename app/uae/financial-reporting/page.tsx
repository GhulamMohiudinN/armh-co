'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, BarChart3, FileText, TrendingUp, ArrowRight, Calculator } from 'lucide-react';

export default function UAEFinancialReportingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service6.png"
          alt="Financial Reporting"
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
              UAE Financial Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Financial Reporting & Forecasting
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Comprehensive financial statements, cash flow forecasting, and budget planning. 
              Our financial experts provide the insights you need to make informed business decisions.
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

      {/* Overview Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Strategic Financial Insights
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Beyond basic bookkeeping, we provide comprehensive financial reporting and forecasting services 
                that give you the insights needed to drive business growth. Our team prepares financial statements 
                in compliance with IFRS and UAE regulatory requirements.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Whether you need monthly management accounts, annual financial statements, or complex financial 
                modeling, our experts deliver accurate, timely, and actionable financial information.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Our Reporting Capabilities</h3>
              <ul className="space-y-3">
                {[
                  'IFRS-compliant financial statements',
                  'Monthly management accounts',
                  'Cash flow forecasting',
                  'Budgeting and variance analysis',
                  'KPI dashboards and reporting',
                  'Multi-entity consolidation'
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            Our Financial Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Financial Statements',
                description: 'Preparation of complete financial statements including balance sheet, income statement, and cash flow statement per IFRS.'
              },
              {
                icon: BarChart3,
                title: 'Management Accounts',
                description: 'Monthly or quarterly management accounts with variance analysis against budget and prior periods.'
              },
              {
                icon: TrendingUp,
                title: 'Cash Flow Forecasting',
                description: 'Detailed cash flow forecasting to manage working capital and plan for future investments and expenses.'
              },
              {
                icon: Calculator,
                title: 'Budgeting & Planning',
                description: 'Annual budget preparation and ongoing variance analysis to track performance against targets.'
              },
              {
                icon: Shield,
                title: 'KPI Dashboards',
                description: 'Custom KPI dashboards providing real-time visibility into key performance metrics and business health.'
              },
              {
                icon: Clock,
                title: 'Financial Modeling',
                description: 'Complex financial modeling for business planning, investment analysis, and scenario planning.'
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

      {/* Reporting Standards Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Reporting Standards & Compliance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'IFRS Compliance',
                description: 'We prepare financial statements in full compliance with International Financial Reporting Standards, required for free zone companies, large businesses, and entities with international stakeholders.'
              },
              {
                title: 'UAE Regulatory Compliance',
                description: 'Our reports comply with UAE regulatory requirements including FTA tax compliance, free zone audit requirements, and MOHRE reporting.'
              },
              {
                title: 'Audit-Ready Documentation',
                description: 'We maintain complete audit trails and supporting documentation to ensure smooth audit processes with minimal disruption.'
              },
              {
                title: 'Multi-Currency Reporting',
                description: 'Expert handling of multi-currency transactions with proper foreign exchange accounting and consolidated reporting.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Essential',
                price: 'AED 1,799/mo',
                description: 'For businesses requiring basic financial reporting',
                features: [
                  'Monthly management accounts',
                  'Cash flow forecasting',
                  'Budget preparation',
                  'Basic KPI reporting',
                  'Email support'
                ]
              },
              {
                tier: 'Comprehensive',
                price: 'AED 3,499/mo',
                description: 'For businesses requiring advanced financial insights',
                features: [
                  'Everything in Essential',
                  'IFRS financial statements',
                  'Advanced KPI dashboards',
                  'Financial modeling',
                  'Priority support',
                  'Quarterly strategy calls'
                ],
                highlighted: true
              },
              {
                tier: 'Strategic',
                price: 'AED 6,999/mo',
                description: 'For businesses requiring strategic financial guidance',
                features: [
                  'Everything in Comprehensive',
                  'Multi-entity consolidation',
                  'Scenario planning',
                  'Investment analysis',
                  'Dedicated financial analyst',
                  '24/7 support access'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl ${tier.highlighted ? 'border-2 border-emerald-600' : 'border border-charcoal-200'}`}
              >
                {tier.highlighted && (
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-charcoal-900 mt-4 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</p>
                <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal-500 text-sm mt-6">
            *All prices exclude 5% UAE VAT
          </p>
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
                question: 'Do I need IFRS financial statements?',
                answer: 'If you are a free zone company, large mainland business, or have international investors, you likely need IFRS-compliant financial statements. We can assess your requirements during our initial consultation.'
              },
              {
                question: 'How often should I receive management accounts?',
                answer: 'We recommend monthly management accounts for most businesses to maintain visibility into performance. However, we can provide quarterly reporting if that better suits your needs.'
              },
              {
                question: 'Can you help with cash flow forecasting?',
                answer: 'Yes. We provide detailed cash flow forecasting covering 13-week rolling forecasts and annual projections. This helps with working capital management and strategic planning.'
              },
              {
                question: 'Do you handle multi-entity consolidation?',
                answer: 'Yes. We have extensive experience consolidating financial statements for groups with multiple entities across different Emirates and free zones.'
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
            Strategic Financial Insights
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get the financial reporting and forecasting you need to make informed business decisions.
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
