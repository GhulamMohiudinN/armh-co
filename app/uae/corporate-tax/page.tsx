'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, FileText, Calculator, TrendingUp, ArrowRight, AlertTriangle } from 'lucide-react';

export default function UAECorporateTaxPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service4.png"
          alt="Corporate Tax"
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
              UAE Corporate Tax Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              UAE Corporate Tax (9% Regime)
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Corporate tax compliance including registration, filing, and strategic tax planning. 
              Our tax specialists ensure compliance with the new UAE corporate tax regime while optimizing your position.
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

      {/* Corporate Tax Overview Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Understanding UAE Corporate Tax
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                The UAE introduced federal corporate tax effective from financial years starting on or after 
                1 June 2023. The standard rate is 9% on taxable profits above AED 375,000. Small businesses with 
                profits below AED 375,000 pay 0% tax.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Free zone qualifying income may be taxed at 0% if certain conditions are met. Our team helps navigate 
                these complexities and ensures your business benefits from available exemptions and reliefs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Corporate Tax Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Profits up to AED 375,000</span>
                  <span className="font-bold text-emerald-600">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Profits above AED 375,000</span>
                  <span className="font-bold text-emerald-600">9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Qualifying Free Zone Income</span>
                  <span className="font-bold text-emerald-600">0%</span>
                </div>
              </div>
              <p className="text-charcoal-500 text-xs mt-4">
                *Rates as of 2023 for financial years starting on or after 1 June 2023. Subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            Our Corporate Tax Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Corporate Tax Registration',
                description: 'Complete registration process including threshold assessment, application submission, and tax ID issuance.'
              },
              {
                icon: Calculator,
                title: 'Tax Computation',
                description: 'Detailed corporate tax calculations including adjustments, reliefs, and free zone qualifying income.'
              },
              {
                icon: Shield,
                title: 'Tax Planning',
                description: 'Proactive tax planning to optimize your position including free zone structuring and group optimization.'
              },
              {
                icon: TrendingUp,
                title: 'Free Zone Qualification',
                description: 'Assessment and documentation for qualifying free zone income to benefit from 0% tax rate.'
              },
              {
                icon: Clock,
                title: 'Compliance Filing',
                description: 'Preparation and filing of corporate tax returns with complete supporting documentation.'
              },
              {
                icon: AlertTriangle,
                title: 'Audit Support',
                description: 'Full support during FTA corporate tax audits including representation and documentation.'
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

      {/* Free Zone Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Free Zone Income Qualification
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              Free zone persons may benefit from 0% corporate tax on qualifying income if they meet certain 
              conditions including maintaining adequate assets in the free zone, deriving qualifying income, and 
              meeting de minimis requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Qualifying Income Includes</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Transactions with other free zone persons</li>
                  <li>• Qualifying income from non-free zone persons</li>
                  <li>• Certain income from related parties</li>
                  <li>• Income from carrying on qualifying activities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Requirements</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Maintain adequate assets in free zone</li>
                  <li>• Derive qualifying income</li>
                  <li>• Meet de minimis requirements</li>
                  <li>• Maintain proper documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Corporate Tax Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Registration', description: 'Register for corporate tax within 3 months of exceeding threshold or financial year start.' },
              { step: '02', title: 'Record Keeping', description: 'Maintain financial records for at least 7 years from tax year end.' },
              { step: '03', title: 'Tax Calculation', description: 'Calculate taxable income and tax liability with all applicable reliefs.' },
              { step: '04', title: 'Filing & Payment', description: 'File corporate tax return and pay tax within 9 months of financial year end.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
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
                question: 'Who must register for corporate tax?',
                answer: 'All UAE businesses and individuals carrying on business in the UAE must register if they meet the registration threshold or have taxable income. Registration is required within 3 months of the financial year start or exceeding the threshold.'
              },
              {
                question: 'When is corporate tax due?',
                answer: 'Corporate tax returns must be filed within 9 months of the financial year end. Tax payment is due by the same date. We track all deadlines and ensure timely filing.'
              },
              {
                question: 'What is the difference between mainland and free zone tax?',
                answer: 'Mainland businesses pay 9% on profits above AED 375,000. Free zone businesses may pay 0% on qualifying income if they meet specific conditions. Non-qualifying income is taxed at 9% regardless of location.'
              },
              {
                question: 'Can foreign tax be credited against UAE tax?',
                answer: 'Yes. UAE has a foreign tax credit system allowing credit for foreign tax paid on income that is also taxable in the UAE. This prevents double taxation on foreign-sourced income.'
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
            Navigate UAE Corporate Tax with Confidence
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get expert corporate tax advice and ensure full compliance with the new regime.
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
