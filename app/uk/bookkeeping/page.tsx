'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, TrendingUp, FileText, Users, ArrowRight } from 'lucide-react';

export default function BookkeepingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service5.png"
          alt="Bookkeeping"
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
              UK Bookkeeping Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Bookkeeping & Management Accounts
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Accurate monthly bookkeeping with real-time financial insights for informed decision-making. 
              Our ACCA professionals team ensures your books are always audit-ready and compliant with UK IFRS.
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
                Professional Bookkeeping That Drives Business Growth
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                At ARMH & Co, we go beyond basic data entry. Our bookkeeping service provides you with 
                real-time financial visibility, enabling you to make informed strategic decisions. We use 
                industry-leading software including Xero, QuickBooks, and FreeAgent, ensuring your 
                financial records are accurate, up-to-date, and fully compliant with HMRC requirements.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Our team of ACCA professionals accountants brings decades of combined experience working with 
                UK SMEs across various sectors. We understand the unique challenges faced by growing 
                businesses and tailor our services to meet your specific needs, from startups to established enterprises.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We provide more than just bookkeeping - we offer strategic financial insights that help you 
                understand your business performance, identify opportunities for growth, and make data-driven decisions. 
                Our proactive approach means we flag potential issues before they become problems and suggest 
                improvements to optimize your financial operations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">99.8%</div>
                  <div className="text-sm text-charcoal-600">Accuracy Rate</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">24h</div>
                  <div className="text-sm text-charcoal-600">Response Time</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">500+</div>
                  <div className="text-sm text-charcoal-600">UK SMEs Served</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">15+</div>
                  <div className="text-sm text-charcoal-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-charcoal-100 shadow-lg">
              <h3 className="font-semibold text-charcoal-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {[
                  'Daily transaction recording and reconciliation',
                  'Bank and credit card reconciliation',
                  'Accounts receivable and payable management',
                  'Monthly management accounts with KPI dashboards',
                  'VAT-ready reporting for MTD compliance',
                  'Unlimited support from qualified accountants',
                  'Real-time financial visibility',
                  'Custom reporting and analytics',
                  'Multi-currency support',
                  'Integration with major accounting software'
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

      {/* What We Include */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Comprehensive Service
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              What's Included
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Transaction Recording',
                description: 'Daily recording of all sales, purchases, expenses, and bank transactions with proper categorisation according to UK accounting standards and HMRC requirements.',
                details: ['Sales & purchase invoices', 'Expense categorisation', 'Bank feeds integration', 'Multi-currency support']
              },
              {
                icon: TrendingUp,
                title: 'Management Accounts',
                description: 'Monthly profit and loss statements, balance sheets, and cash flow forecasts with variance analysis against budget and KPI dashboards for real-time insights.',
                details: ['P&L statements', 'Balance sheets', 'Cash flow forecasts', 'Variance analysis', 'KPI dashboards']
              },
              {
                icon: Shield,
                title: 'Compliance Assurance',
                description: 'Full HMRC compliance including Making Tax Digital readiness, VAT return preparation, year-end audit support, and Companies House filing assistance.',
                details: ['MTD compliance', 'VAT returns', 'Year-end accounts', 'Audit support', 'Companies House']
              },
              {
                icon: Clock,
                title: 'Real-Time Access',
                description: '24/7 access to your financial data through cloud-based accounting software with mobile app support, ensuring you always have visibility into your financial position.',
                details: ['Cloud-based access', 'Mobile app support', 'Real-time dashboards', 'Secure data storage']
              },
              {
                icon: Users,
                title: 'Dedicated Accountant',
                description: 'Your own dedicated qualified accountant who understands your business, provides personalised advice, and serves as your primary point of contact for all financial matters.',
                details: ['ACCA professionals accountant', 'Personal service', 'Strategic advice', 'Direct contact']
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                description: 'Multi-level review process ensuring accuracy and consistency across all financial records and reports, with regular audits and compliance checks.',
                details: ['Multi-level review', 'Accuracy verification', 'Regular audits', 'Compliance checks']
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{feature.title}</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, dIndex) => (
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Transparent Pricing
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Tailored to Your Business
            </h2>
            <p className="text-charcoal-600 mt-4 max-w-2xl mx-auto">
              Custom pricing based on your transaction volume, complexity, and specific requirements. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Start-up',
                price: 'Custom / month',
                description: 'For newly incorporated businesses with up to 50 monthly transactions',
                features: [
                  'Up to 50 transactions/month',
                  'Bank reconciliation',
                  'Monthly management accounts',
                  'VAT return preparation',
                  'Email support',
                  'Xero/QuickBooks setup'
                ]
              },
              {
                tier: 'Growth',
                price: 'Custom / month',
                description: 'For growing businesses with up to 200 monthly transactions',
                features: [
                  'Up to 200 transactions/month',
                  'Everything in Start-up',
                  'Accounts receivable/payable',
                  'Quarterly strategy calls',
                  'Priority support',
                  'Budgeting & forecasting',
                  'Dedicated accountant'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'Custom / month',
                description: 'For established businesses with unlimited transactions',
                features: [
                  'Unlimited transactions',
                  'Everything in Growth',
                  'Multi-entity support',
                  'Senior accountant',
                  'Custom reporting',
                  '24/7 support access',
                  'CFO advisory sessions'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl ${tier.highlighted ? 'border-2 border-emerald-600 shadow-xl' : 'border border-charcoal-200'}`}
              >
                {tier.highlighted && (
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</p>
                <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/uk/contact" className="block w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors text-center">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2">
              Our Methodology
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Setup', description: 'We set up your accounting software, integrate with your bank feeds, and configure custom chart of accounts.' },
              { step: '02', title: 'Data Migration', description: 'We migrate your historical data, reconcile opening balances, and ensure continuity of financial records.' },
              { step: '03', title: 'Ongoing Bookkeeping', description: 'Daily transaction recording with monthly reconciliation, management accounts, and compliance reporting.' },
              { step: '04', title: 'Review & Strategy', description: 'Monthly review meetings to discuss performance, identify opportunities, and align with business goals.' }
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
                question: 'What accounting software do you use?',
                answer: 'We work with Xero, QuickBooks, FreeAgent, and Sage. We can also work with your existing software if you prefer. Our team is certified across all major platforms and can recommend the best solution for your business needs.'
              },
              {
                question: 'How often will I receive reports?',
                answer: 'We provide monthly management accounts by the 10th of each month, plus real-time access through your accounting software dashboard. You can also request ad-hoc reports as needed for board meetings, investor presentations, or strategic planning.'
              },
              {
                question: 'Is my data secure?',
                answer: 'Yes. We use bank-level encryption (AES-256), secure cloud storage with ISO 27001 certification, and follow strict data protection protocols compliant with GDPR. All team members undergo regular security training and background checks.'
              },
              {
                question: 'Can you handle multi-currency transactions?',
                answer: 'Yes. We have extensive experience with multi-currency bookkeeping for businesses with international operations. We handle foreign exchange gains/losses, cross-border VAT, and international tax compliance requirements.'
              },
              {
                question: 'What happens if I have complex transactions?',
                answer: 'Our senior accountants handle complex transactions including accruals, prepayments, inter-company transactions, and foreign exchange adjustments. We provide detailed explanations and ensure proper accounting treatment according to UK IFRS.'
              },
              {
                question: 'Do you provide year-end support?',
                answer: 'Absolutely. We prepare year-end accounts, corporation tax computations, and work closely with your auditors if required. We also handle Companies House filings and ensure all statutory deadlines are met.'
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Transform Your Bookkeeping?
          </h2>
          <p className="font-sans text-charcoal-300 mb-8 leading-relaxed">
            Get a free consultation and see how our professional bookkeeping can save you time and money while ensuring compliance and providing valuable financial insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center">
              Book Free Consultation
            </Link>
            <Link href="/uk/pricing" className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
