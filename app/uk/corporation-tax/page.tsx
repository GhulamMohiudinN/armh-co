'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, TrendingUp, FileText, Users, Calculator, ArrowRight } from 'lucide-react';

export default function CorporationTaxPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service8.png"
          alt="Corporation Tax"
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
              UK Tax Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Year-End Accounts & Corporation Tax
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Comprehensive year-end accounts preparation and corporation tax filing with strategic tax planning. 
              Our tax specialists ensure compliance while maximizing legitimate tax savings for your business.
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

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Strategic Tax Planning & Compliance
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Corporation tax is one of the most significant costs for UK businesses. Our team of tax specialists 
                combines technical expertise with commercial awareness to ensure you pay only what's legally required 
                while taking full advantage of available reliefs and allowances.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We prepare statutory accounts in full compliance with UK IFRS and Companies House requirements, 
                while simultaneously optimizing your corporation tax position through careful planning and legitimate 
                tax efficiency strategies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">£2M+</div>
                  <div className="text-sm text-charcoal-600">Tax Savings Secured</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-charcoal-600">Filing Compliance</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-charcoal-100 shadow-lg">
              <h3 className="font-semibold text-charcoal-900 mb-4">Current Corporation Tax Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Profits up to £50,000</span>
                  <span className="font-bold text-emerald-600">19%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Profits £50,000 - £250,000</span>
                  <span className="font-bold text-emerald-600">26.5% (marginal relief)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Profits over £250,000</span>
                  <span className="font-bold text-emerald-600">25%</span>
                </div>
              </div>
              <p className="text-charcoal-500 text-xs mt-4">
                *Rates as of April 2025 for 2025/26 tax year. Subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Comprehensive Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Statutory Accounts',
                description: 'Preparation of full statutory accounts in compliance with UK IFRS and Companies House filing requirements, including balance sheet, profit and loss, and notes.',
                details: ['UK IFRS compliance', 'Companies House filing', 'Director reports', 'Audit-ready accounts']
              },
              {
                icon: Calculator,
                title: 'Corporation Tax Computation',
                description: 'Detailed corporation tax calculations including all adjustments, reliefs, and allowances, with full tax computations and CT600 form preparation.',
                details: ['CT600 preparation', 'Tax adjustments', 'Relief calculations', 'Allowance optimization']
              },
              {
                icon: Shield,
                title: 'Tax Planning',
                description: 'Proactive tax planning throughout the year to optimize your position and minimize tax liabilities through legitimate tax efficiency strategies.',
                details: ['Year-round planning', 'Timing optimization', 'Structure review', 'Profit extraction']
              },
              {
                icon: TrendingUp,
                title: 'R&D Tax Credits',
                description: 'Identification and claiming of R&D tax credits for innovative businesses with qualifying activities, including technical documentation and claim preparation.',
                details: ['Eligibility assessment', 'Claim preparation', 'Technical documentation', 'HMRC correspondence']
              },
              {
                icon: Clock,
                title: 'Loss Relief Planning',
                description: 'Strategic use of trading losses against current or future profits to maximize tax efficiency, including carry-forward and carry-back relief optimization.',
                details: ['Loss utilization', 'Carry-forward relief', 'Carry-back relief', 'Surrender relief']
              },
              {
                icon: Users,
                title: 'Director Tax Planning',
                description: 'Optimization of director remuneration through salary, dividends, and pension contributions to minimize overall tax burden while maintaining compliance.',
                details: ['Salary vs dividends', 'Pension planning', 'Benefits optimization', 'NI planning']
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{service.title}</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-2 text-xs text-charcoal-500">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax Reliefs Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Tax Optimization
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Tax Reliefs & Allowances We Utilize
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Annual Investment Allowance (AIA)',
                description: '100% tax relief on qualifying plant and machinery expenditure up to £1 million per year. Ideal for businesses investing in equipment, vehicles, and technology.',
                benefit: 'Immediate tax deduction'
              },
              {
                title: 'R&D Tax Credits',
                description: 'Enhanced tax relief for qualifying research and development expenditure. Up to 33.35% creditable for SMEs. We identify eligible activities and prepare technical documentation.',
                benefit: 'Up to 33.35% creditable'
              },
              {
                title: 'Writing Down Allowances',
                description: 'Capital allowances on assets not qualifying for AIA, including integral features and special rate assets. We optimize your capital allowance claims for maximum tax efficiency.',
                benefit: '18% or 6% WDA rates'
              },
              {
                title: 'Patent Box',
                description: 'Reduced 10% corporation tax rate on profits derived from patented inventions and certain IP rights. We help qualifying companies structure their IP for Patent Box benefits.',
                benefit: '10% tax rate'
              },
              {
                title: 'Creative Industry Tax Reliefs',
                description: 'Enhanced reliefs for film, television, animation, and video game production companies. We ensure you claim all available creative industry reliefs.',
                benefit: 'Enhanced deductions'
              },
              {
                title: 'Loss Relief',
                description: 'Carry forward trading losses indefinitely, or carry back one year against current year profits. We strategically plan loss utilization to maximize tax efficiency.',
                benefit: 'Indefinite carry forward'
              }
            ].map((relief, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-charcoal-900 mb-2">{relief.title}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{relief.description}</p>
                <div className="text-xs text-emerald-600 font-medium">Benefit: {relief.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Year-End Timeline
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Collection', description: 'We request all necessary financial documents and records including bank statements, invoices, and payroll data.' },
              { step: '02', title: 'Accounts Preparation', description: 'Draft accounts prepared and reviewed with management to ensure accuracy and completeness of financial statements.' },
              { step: '03', title: 'Tax Computation', description: 'Corporation tax calculation with all reliefs applied, including detailed CT600 form preparation and review.' },
              { step: '04', title: 'Filing & Payment', description: 'Accounts filed with Companies House, CT600 filed with HMRC. We handle all correspondence and queries.' }
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
          <div className="mt-12 bg-emerald-50 p-6 rounded-xl max-w-3xl mx-auto border border-emerald-200">
            <p className="text-charcoal-600 text-center">
              <strong>Important Deadlines:</strong> Corporation tax returns are due 12 months after your accounting period end. 
              Payment is due 9 months after your accounting period end. We track all deadlines and ensure timely compliance to avoid penalties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'What is the current corporation tax rate?',
                answer: 'The main rate is 25% for profits over £250,000. A small profits rate of 19% applies to profits up to £50,000. Marginal relief applies between £50,000 and £250,000 to smooth the transition between rates.'
              },
              {
                question: 'When is corporation tax due?',
                answer: 'Corporation tax payment is due 9 months and 1 day after your accounting period end. The tax return (CT600) is due 12 months after your accounting period end. We track all deadlines and ensure timely filing and payment.'
              },
              {
                question: 'Can I reduce my corporation tax liability?',
                answer: 'Yes, through legitimate tax planning including capital allowances, R&D tax credits, loss relief, and director remuneration optimization. We ensure all strategies are fully compliant with HMRC regulations and tailored to your specific circumstances.'
              },
              {
                question: 'What records do I need to keep?',
                answer: 'You must keep records for at least 6 years including invoices, receipts, bank statements, payroll records, and documentation for all tax relief claims. We help you establish proper record-keeping systems to ensure compliance.'
              },
              {
                question: 'Do I need an audit?',
                answer: 'Not all companies require an audit. Small companies meeting certain criteria are exempt. We assess your audit requirements and work with auditors if needed, ensuring your accounts are audit-ready at all times.'
              },
              {
                question: 'How can you help with tax planning?',
                answer: 'We provide year-round tax planning including timing of expenditures, capital allowance optimization, director remuneration planning, and profit extraction strategies. Our proactive approach ensures you minimize tax liabilities while maintaining full compliance.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
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
            Optimize Your Tax Position
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get expert tax planning and ensure full compliance. Book a free consultation today.
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
