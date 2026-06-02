'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Building2, FileText, AlertCircle, ArrowRight, Calendar } from 'lucide-react';

export default function CompaniesHousePage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service9.png"
          alt="Companies House"
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
              UK Corporate Compliance
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Companies House Compliance
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              All statutory filings including confirmation statements, annual returns, and changes. 
              Our compliance specialists ensure your company remains in good standing with Companies House.
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
                Complete Companies House Management
              </h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Companies House compliance is essential for maintaining your company's legal status and avoiding 
                penalties. Our team manages all statutory filings, ensuring you never miss a deadline and your 
                company remains in good standing.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                We handle everything from incorporation to ongoing compliance, including confirmation statements, 
                changes to directors and shareholders, share capital changes, and voluntary strike-off applications. 
                We also provide guidance on director responsibilities and corporate governance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Key Filing Deadlines</h3>
              <ul className="space-y-3">
                {[
                  'Confirmation Statement: Within 14 days of anniversary',
                  'Annual Accounts: 9 months after year-end (private)',
                  'Director Changes: Within 14 days of change',
                  'Shareholder Changes: Within 14 days of change',
                  'Registered Office Change: Within 14 days of change',
                  'PSC Register Updates: Within 14 days of change'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            Our Companies House Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Company Formation',
                description: 'Complete company incorporation service including name availability check, memorandum and articles, and registration with Companies House.'
              },
              {
                icon: FileText,
                title: 'Confirmation Statements',
                description: 'Preparation and filing of annual confirmation statements with accurate company information and PSC register updates.'
              },
              {
                icon: Shield,
                title: 'Annual Accounts',
                description: 'Preparation and filing of statutory accounts in full compliance with UK GAAP and Companies House requirements.'
              },
              {
                icon: AlertCircle,
                title: 'Change Filings',
                description: 'All change notifications including director appointments/resignations, shareholder changes, and registered office updates.'
              },
              {
                icon: Calendar,
                title: 'Share Capital Management',
                description: 'Allotment and transfer of shares, share class changes, and capital reduction applications with proper documentation.'
              },
              {
                icon: CheckCircle,
                title: 'Strike-off & Restoration',
                description: 'Voluntary strike-off applications and company restoration services for dissolved companies.'
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

      {/* PSC Register Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            People with Significant Control (PSC)
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              Since 2016, UK companies must maintain a register of People with Significant Control and file this 
              information with Companies House. A PSC is anyone who owns more than 25% of shares, voting rights, 
              or has significant influence over the company.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Who is a PSC?</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Owns more than 25% of shares</li>
                  <li>• Holds more than 25% of voting rights</li>
                  <li>• Can appoint or remove majority of directors</li>
                  <li>• Has significant influence or control</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Our PSC Services</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• PSC register maintenance</li>
                  <li>• PSC identification and verification</li>
                  <li>• PSC statement filings</li>
                  <li>• RLE (Relevant Legal Entity) registrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Late Filing Penalties
          </h2>
          <div className="bg-red-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              Companies House imposes automatic penalties for late filings. These penalties increase with the 
              length of delay and can be substantial. We track all deadlines and ensure timely filing to avoid 
              these penalties.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Late Confirmation Statement</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Up to 1 month late: £150</li>
                  <li>• Up to 3 months late: £375</li>
                  <li>• Up to 6 months late: £750</li>
                  <li>• Over 6 months late: £1,500</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Late Accounts (Private Company)</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Up to 1 month late: £150</li>
                  <li>• Up to 3 months late: £375</li>
                  <li>• Up to 6 months late: £750</li>
                  <li>• Over 6 months late: £1,500</li>
                </ul>
              </div>
            </div>
            <p className="text-red-600 text-sm mt-6 font-semibold">
              *Penalties double for companies that are late for two consecutive years.
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
                question: 'What is the difference between confirmation statement and annual return?',
                answer: 'The confirmation statement replaced the annual return in 2016. It confirms that Companies House has the correct information about your company. It must be filed annually within 14 days of your incorporation anniversary.'
              },
              {
                question: 'What happens if I miss a filing deadline?',
                answer: 'Companies House automatically imposes penalties for late filings. These increase with the length of delay. We track all deadlines and file on time to avoid penalties. If you have missed a deadline, we can help mitigate the situation.'
              },
              {
                question: 'Can you help with company restoration?',
                answer: 'Yes. If your company has been struck off the register, we can assist with restoration applications. This involves court proceedings and administrative restoration, depending on the circumstances and time elapsed.'
              },
              {
                question: 'Do I need a company secretary?',
                answer: 'Since April 2008, private companies are not required to have a company secretary. However, many companies choose to appoint one for administrative support. We can provide company secretary services if required.'
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
            Ensure Your Company Compliance
          </h2>
          <p className="text-charcoal-300 mb-8">
            Let us handle your Companies House filings while you focus on running your business.
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
