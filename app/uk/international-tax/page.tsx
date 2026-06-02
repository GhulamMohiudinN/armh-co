'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Globe, FileText, Calculator, ArrowRight, Plane } from 'lucide-react';

export default function InternationalTaxPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service2.png"
          alt="International Tax"
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
              International Tax Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              International Tax Advisory
            </h1>
            <p className="text-charcoal-300 text-lg max-w-3xl mb-8">
              Cross-border tax planning for UK businesses with international operations or subsidiaries. 
              Our international tax specialists ensure compliance while optimizing your global tax position.
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
                Global Tax Expertise
              </h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                International tax matters are complex and require specialist knowledge. Our team has extensive 
                experience helping UK businesses navigate cross-border tax issues, including transfer pricing, 
                permanent establishment, double taxation treaties, and international structuring.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                We work with a network of international tax partners to provide comprehensive support for 
                businesses operating across multiple jurisdictions. Whether you're expanding overseas, repatriating 
                profits, or restructuring international operations, we provide strategic advice to optimize your 
                global tax position.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Key Considerations</h3>
              <ul className="space-y-3">
                {[
                  'Double taxation treaty benefits',
                  'Transfer pricing compliance',
                  'Permanent establishment risks',
                  'Controlled Foreign Company rules',
                  'Withholding tax optimization',
                  'Cross-border financing structures'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            Our International Tax Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Cross-Border Structuring',
                description: 'Advisory on optimal corporate structures for international operations, including holding companies and financing arrangements.'
              },
              {
                icon: FileText,
                title: 'Transfer Pricing',
                description: 'Transfer pricing documentation, policy development, and compliance with UK and international requirements.'
              },
              {
                icon: Shield,
                title: 'Double Taxation Relief',
                description: 'Maximizing benefits from double taxation treaties and foreign tax credit calculations.'
              },
              {
                icon: Calculator,
                title: 'Controlled Foreign Companies',
                description: 'CFC rules compliance and structuring to avoid unintended UK tax charges on foreign subsidiaries.'
              },
              {
                icon: Plane,
                title: 'Expatriate Tax',
                description: 'Tax planning for employees working internationally, including secondments and permanent relocations.'
              },
              {
                icon: Clock,
                title: 'International Compliance',
                description: 'Coordination of tax filings across multiple jurisdictions and management of international deadlines.'
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

      {/* Treaty Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Double Taxation Treaties
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              The UK has an extensive network of double taxation treaties with over 130 countries. These treaties 
              prevent the same income from being taxed in both jurisdictions and provide reduced withholding tax rates 
              on cross-border payments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Treaty Benefits</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Reduced withholding tax on dividends</li>
                  <li>• Reduced withholding tax on interest</li>
                  <li>• Reduced withholding tax on royalties</li>
                  <li>• Permanent establishment protection</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Key Treaty Partners</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• United States</li>
                  <li>• European Union members</li>
                  <li>• Commonwealth countries</li>
                  <li>• Major Asian economies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Transfer Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'What is Transfer Pricing?',
                description: 'Transfer pricing refers to the pricing of transactions between related entities in different tax jurisdictions. Transactions must be priced at arm\'s length to ensure fair tax allocation.'
              },
              {
                title: 'Documentation Requirements',
                description: 'UK businesses with cross-border related party transactions must maintain transfer pricing documentation. Large businesses must file master file and local file documentation.'
              },
              {
                title: 'Arm\'s Length Principle',
                description: 'The arm\'s length principle requires related party transactions to be priced as if between independent parties. We use recognized methods including CUP, CUPM, TNMM, and profit split.'
              },
              {
                title: 'Penalties for Non-Compliance',
                description: 'HMRC can impose significant penalties for transfer pricing non-compliance, including adjustments to taxable profits and interest on underpaid tax. Proper documentation is essential.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
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
                question: 'What is permanent establishment?',
                answer: 'Permanent establishment is a fixed place of business through which a company carries out business in another country. Creating a PE can subject foreign profits to local tax. We help structure operations to avoid unintended PE risks.'
              },
              {
                question: 'How do double taxation treaties work?',
                answer: 'Treaties allocate taxing rights between countries and provide relief from double taxation. They typically allow tax credits for foreign tax paid and reduce withholding tax rates on cross-border payments.'
              },
              {
                question: 'Do I need transfer pricing documentation?',
                description: 'If you have cross-border related party transactions, you likely need transfer pricing documentation. UK businesses with turnover over certain thresholds must file master file and local file documentation with HMRC.'
              },
              {
                question: 'Can you help with international expansion?',
                answer: 'Yes. We advise on optimal corporate structures for international expansion, including choice of jurisdiction, subsidiary setup, and ongoing tax compliance across multiple countries.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{faq.question}</h3>
                <p className="text-charcoal-600">{faq.answer || faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Navigate International Tax with Confidence
          </h2>
          <p className="text-charcoal-300 mb-8">
            Get expert advice on cross-border tax matters and optimize your global position.
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
