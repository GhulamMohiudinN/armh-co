'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, CheckCircle as CheckCircleIcon, FileText, AlertCircle, ArrowRight, Gavel } from 'lucide-react';

export default function HMRCClaimsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service16.png"
          alt="HMRC Claims"
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
              UK Tax Resolution Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HMRC Claims & Correspondence
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Expert handling of all HMRC correspondence, investigations, and tax refund claims. 
              Our tax specialists provide professional representation and ensure your rights are protected.
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
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Professional HMRC Representation
              </h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Dealing with HMRC can be stressful and time-consuming. Our team of experienced tax specialists 
                handles all HMRC correspondence on your behalf, ensuring accurate responses and protecting your 
                interests throughout any enquiry or investigation.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                We have extensive experience with all types of HMRC interactions, from routine correspondence 
                to complex tax investigations. Our technical expertise and understanding of HMRC procedures 
                ensures the best possible outcomes for our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Our HMRC Services</h3>
              <ul className="space-y-3">
                {[
                  'All HMRC correspondence handling',
                  'Tax investigation support',
                  'Tax refund claims',
                  'Penalty negotiations',
                  'Compliance checks',
                  'VAT and PAYE enquiries'
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
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our HMRC Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Correspondence Management',
                description: 'We handle all routine HMRC correspondence including information requests, clarification letters, and compliance checks.'
              },
              {
                icon: AlertCircle,
                title: 'Tax Investigations',
                description: 'Full support during HMRC investigations including aspect enquiries, full enquiries, and COP8/9 investigations.'
              },
              {
                icon: Shield,
                title: 'Penalty Negotiations',
                description: 'We negotiate with HMRC to reduce or eliminate penalties, including reasonable excuse arguments and special circumstances.'
              },
              {
                icon: CheckCircleIcon,
                title: 'Tax Refund Claims',
                description: 'Identification and claiming of overpaid tax including historical refunds and amended returns.'
              },
              {
                icon: Clock,
                title: 'Time to Pay Arrangements',
                description: 'Negotiation of affordable payment plans with HMRC for businesses facing cash flow difficulties.'
              },
              {
                icon: Gavel,
                title: 'Appeals & Tribunals',
                description: 'Representation at tax tribunals and preparation of appeal documents for disputed tax decisions.'
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

      {/* Investigation Types Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Types of HMRC Enquiries
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Aspect Enquiries',
                description: 'Focused enquiries into specific aspects of your tax return, typically one or two risk areas identified by HMRC.',
                duration: '3-6 months',
                complexity: 'Low to Medium'
              },
              {
                title: 'Full Enquiries',
                description: 'Comprehensive review of your entire tax return, all supporting documentation, and business records.',
                duration: '12-24 months',
                complexity: 'High'
              },
              {
                title: 'Random Enquiries',
                description: 'Selected at random regardless of risk profile. These are rare but can be comprehensive.',
                duration: '12-18 months',
                complexity: 'Medium to High'
              },
              {
                title: 'Compliance Checks',
                description: 'Routine checks to verify specific information or ensure compliance with particular tax rules.',
                duration: '1-3 months',
                complexity: 'Low'
              }
            ].map((enquiry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{enquiry.title}</h3>
                <p className="text-charcoal-600 text-sm mb-4">{enquiry.description}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-emerald-600"><strong>Duration:</strong> {enquiry.duration}</span>
                  <span className="text-emerald-600"><strong>Complexity:</strong> {enquiry.complexity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our Investigation Support Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Initial Assessment', description: 'We assess the scope of the enquiry and develop a response strategy.' },
              { step: '02', title: 'Document Gathering', description: 'We collect and organize all relevant documentation and records.' },
              { step: '03', title: 'Response Preparation', description: 'We prepare comprehensive responses to HMRC enquiries.' },
              { step: '04', title: 'Negotiation', description: 'We negotiate with HMRC officers to achieve the best outcome.' },
              { step: '05', title: 'Resolution', description: 'We ensure proper settlement and closure of the enquiry.' }
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
                question: 'What should I do if I receive an HMRC enquiry letter?',
                answer: 'Contact us immediately. Do not respond to HMRC without professional advice. Early intervention can significantly improve outcomes. We can review the letter and advise on the best course of action.'
              },
              {
                question: 'How long do HMRC investigations take?',
                answer: 'Duration varies significantly. Aspect enquiries typically take 3-6 months, while full enquiries can take 12-24 months. We work to expedite the process while ensuring thorough preparation.'
              },
              {
                question: 'Can you help with tax refunds?',
                answer: 'Yes. We identify overpaid tax and prepare refund claims. This includes historical refunds going back up to 4 years, amended returns, and claims for overlooked reliefs.'
              },
              {
                question: 'What if I cannot pay my tax bill?',
                answer: 'We can negotiate Time to Pay arrangements with HMRC. This allows you to spread payments over an extended period. We prepare cash flow forecasts and negotiate affordable payment terms.'
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
            Expert HMRC Support
          </h2>
          <p className="text-charcoal-300 mb-8">
            Don't face HMRC alone. Get professional representation and protect your interests.
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
