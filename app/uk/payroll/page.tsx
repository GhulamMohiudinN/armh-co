'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Users, FileText, Calculator, ArrowRight, Calendar } from 'lucide-react';

export default function PayrollPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service14.png"
          alt="Payroll"
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
              UK Payroll Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Payroll & Auto-Enrolment
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Complete payroll management including payslips, RTI submissions, and pension auto-enrolment. 
              Our payroll experts ensure full HMRC compliance while saving you time and reducing administrative burden.
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

      {/* Auto-Enrolment Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Pension Auto-Enrolment Compliance
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Since 2012, all UK employers must automatically enrol eligible workers into a qualifying pension 
                scheme and contribute to their retirement savings. Our payroll service includes full auto-enrolment 
                compliance, ensuring you meet all legal requirements.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We handle the entire process including assessment of eligibility, enrolment, contribution calculations, 
                re-enrolment, and all regulatory reporting to The Pensions Regulator (TPR). We also manage opt-out 
                processing and communication with employees.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Auto-Enrolment Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Assess all workers for eligibility',
                  'Automatically enrol eligible jobholders',
                  'Pay employer minimum contributions',
                  'Deduct employee contributions',
                  'Submit declaration of compliance',
                  'Re-enrol eligible workers every 3 years',
                  'Provide statutory communications'
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
            Our Payroll Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: 'Payroll Processing',
                description: 'Weekly, fortnightly, or monthly payroll processing with accurate calculations for PAYE, NICs, and pension contributions.'
              },
              {
                icon: FileText,
                title: 'Payslip Generation',
                description: 'Electronic payslips delivered securely to employees with full breakdown of earnings, deductions, and year-to-date figures.'
              },
              {
                icon: Shield,
                title: 'RTI Submissions',
                description: 'Real-Time Information submissions to HMRC for every payroll run, ensuring full compliance with reporting requirements.'
              },
              {
                icon: Calendar,
                title: 'Payslip Generation',
                description: 'Management of all statutory payments including SSP, SMP, SPP, SAP, and ShPP with proper calculations and reporting.'
              },
              {
                icon: Users,
                title: 'Pension Administration',
                description: 'Full pension auto-enrolment management including assessment, enrolment, contributions, and regulatory reporting.'
              },
              {
                icon: Clock,
                title: 'Year-End Processing',
                description: 'Preparation of P60s for employees, P11D reporting for benefits in kind, and P35 annual returns to HMRC.'
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

      {/* Contribution Rates Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Current Auto-Enrolment Contribution Rates
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="text-left py-3 px-4 font-semibold text-charcoal-900">Category</th>
                  <th className="text-right py-3 px-4 font-semibold text-charcoal-900">Employer</th>
                  <th className="text-right py-3 px-4 font-semibold text-charcoal-900">Staff</th>
                  <th className="text-right py-3 px-4 font-semibold text-charcoal-900">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal-100">
                  <td className="py-3 px-4 text-charcoal-600">Qualifying Earnings</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">3%</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">5%</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">8%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-charcoal-600">Band (Earnings £6,240 - £50,270)</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">3%</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">5%</td>
                  <td className="text-right py-3 px-4 text-emerald-600 font-semibold">8%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-charcoal-500 text-xs mt-4">
              *Rates as of April 2023. Subject to change. Qualifying earnings are earnings between £6,240 and £50,270 per year.
            </p>
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
                tier: 'Start-up',
                price: 'Custom / month',
                description: 'For businesses with up to 5 employees',
                features: [
                  'Weekly/monthly payroll',
                  'Payslip generation',
                  'RTI submissions',
                  'Auto-enrolment compliance',
                  'Email support'
                ]
              },
              {
                tier: 'Growth',
                price: 'Custom / month',
                description: 'For businesses with up to 20 employees',
                features: [
                  'Everything in Start-up',
                  'Statutory payments processing',
                  'Pension scheme management',
                  'P11D benefits reporting',
                  'Priority support',
                  'Dedicated payroll specialist'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'Custom / month',
                description: 'For businesses with unlimited employees',
                features: [
                  'Unlimited employees',
                  'Everything in Growth',
                  'Multi-company processing',
                  'Complex payroll structures',
                  'Integration with HR systems',
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
                question: 'What information do I need to provide for payroll?',
                answer: 'We need employee details (name, address, NI number, tax code), salary information, hours worked, and any deductions or benefits. We provide a secure portal for data submission.'
              },
              {
                question: 'How often should I run payroll?',
                answer: 'Most businesses run payroll monthly, but weekly or fortnightly is also common. We can accommodate any frequency and ensure RTI submissions are made on time.'
              },
              {
                question: 'What happens if an employee leaves?',
                answer: 'We process leavers including final payslip, P45 calculation, and notify HMRC. We also handle any pension scheme requirements for departing employees.'
              },
              {
                question: 'Do you handle statutory payments?',
                answer: 'Yes. We calculate and process SSP, SMP, SPP, SAP, and ShPP. We ensure all statutory payments are correctly calculated and reported to HMRC.'
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
            Streamline Your Payroll
          </h2>
          <p className="text-charcoal-300 mb-8">
            Let us handle your payroll while you focus on growing your business. Book a free consultation.
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
