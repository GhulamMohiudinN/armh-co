'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, User, FileText, Calculator, ArrowRight, AlertTriangle } from 'lucide-react';

export default function SelfAssessmentPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service3.png"
          alt="Self Assessment"
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
              UK Personal Tax Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Self Assessment Tax Returns
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Personal tax returns for directors, freelancers, and high-net-worth individuals. 
              Our tax specialists ensure accurate calculations, timely submissions, and legitimate tax planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uk/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
                Get a Quote
              </Link>
              <Link href="/uk/contact" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Who Needs to File Self Assessment?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Company Directors',
                description: 'All directors of UK companies must file personal tax returns regardless of whether they draw a salary.'
              },
              {
                icon: FileText,
                title: 'Self-Employed & Freelancers',
                description: 'Individuals with self-employment income over £1,000 must file annual self assessment returns.'
              },
              {
                icon: Calculator,
                title: 'High Income Individuals',
                description: 'Those with income over £100,000, capital gains, or foreign income must file self assessment.'
              },
              {
                icon: AlertTriangle,
                title: 'Property Income',
                description: 'Landlords receiving rental income must file returns, even if the property makes a loss.'
              },
              {
                icon: Shield,
                title: 'Trustees & Executors',
                description: 'Those responsible for trust estates or deceased estates must file tax returns on behalf of beneficiaries.'
              },
              {
                icon: Clock,
                title: 'Foreign Income Earners',
                description: 'UK residents with foreign income or gains must declare these on their self assessment return.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our Self Assessment Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Tax Return Preparation',
                description: 'Complete preparation of your self assessment tax return with accurate calculations of all income sources and deductions.'
              },
              {
                icon: Calculator,
                title: 'Tax Planning',
                description: 'Proactive tax planning throughout the year to optimize your position and minimize tax liabilities legally.'
              },
              {
                icon: Shield,
                title: 'Capital Gains Tax',
                description: 'Calculation and reporting of capital gains on property sales, investments, and business disposals.'
              },
              {
                icon: Clock,
                title: 'Payment on Account',
                description: 'Management of HMRC payment on account requirements and cash flow planning for tax payments.'
              },
              {
                icon: AlertTriangle,
                title: 'Tax Investigation Support',
                description: 'Full support during HMRC enquiries and investigations including representation and documentation.'
              },
              {
                icon: User,
                title: 'Non-Resident Tax',
                description: 'Specialist advice for non-residents with UK income or UK residents with foreign income.'
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

      {/* Tax Rates Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Current Income Tax Rates (2024/25)
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="text-left py-3 px-4 font-semibold text-charcoal-900">Tax Band</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal-900">Income Range</th>
                  <th className="text-right py-3 px-4 font-semibold text-charcoal-900">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal-100">
                  <td className="py-3 px-4 text-charcoal-600">Personal Allowance</td>
                  <td className="py-3 px-4 text-charcoal-600">Up to £12,570</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">0%</td>
                </tr>
                <tr className="border-b border-charcoal-100">
                  <td className="py-3 px-4 text-charcoal-600">Basic Rate</td>
                  <td className="py-3 px-4 text-charcoal-600">£12,571 - £50,270</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">20%</td>
                </tr>
                <tr className="border-b border-charcoal-100">
                  <td className="py-3 px-4 text-charcoal-600">Higher Rate</td>
                  <td className="py-3 px-4 text-charcoal-600">£50,271 - £125,140</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">40%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-charcoal-600">Additional Rate</td>
                  <td className="py-3 px-4 text-charcoal-600">Over £125,140</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">45%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-charcoal-500 text-xs mt-4">
              *Personal allowance reduces by £1 for every £2 earned above £100,000. Rates subject to change.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Self Assessment Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Information Gathering', description: 'We request all necessary tax documents and income information.' },
              { step: '02', title: 'Tax Calculation', description: 'We calculate your tax position including all reliefs and allowances.' },
              { step: '03', title: 'Review & Approval', description: 'We review the return with you and obtain your approval.' },
              { step: '04', title: 'Filing & Payment', description: 'We file with HMRC and manage payment on account requirements.' }
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
          <div className="mt-12 bg-emerald-50 p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-charcoal-600 text-center">
              <strong>Important Deadlines:</strong> Paper returns due 31 October. Online returns due 31 January. 
              Tax payment due 31 January. We track all deadlines and ensure timely submission.
            </p>
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
                question: 'What is the deadline for self assessment?',
                answer: 'The deadline for online submission is 31 January following the end of the tax year (5 April). Paper returns must be submitted by 31 October. Tax payments are due by 31 January.'
              },
              {
                question: 'What are payment on account?',
                answer: 'If your tax bill is over £1,000, you must make advance payments towards your next year\'s tax. These are due by 31 January and 31 July, each representing 50% of your previous year\'s liability.'
              },
              {
                question: 'What records do I need to keep?',
                answer: 'You must keep records for at least 22 months from the filing deadline (5 years and 10 months for self-employed). This includes income records, expense receipts, bank statements, and investment documentation.'
              },
              {
                question: 'Can you help with late returns?',
                answer: 'Yes. We can prepare and file late returns and help negotiate with HMRC regarding penalties. We also provide support during tax investigations.'
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
            Simplify Your Tax Return
          </h2>
          <p className="text-charcoal-300 mb-8">
            Let our experts handle your self assessment while you focus on what matters. Book a free consultation.
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
