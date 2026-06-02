'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, CheckCircle as CheckCircleIcon, FileText, AlertCircle, ArrowRight, Users } from 'lucide-react';

export default function UAEESRUBOPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4 relative overflow-hidden">
        <img
          src="/service17.png"
          alt="ESR UBO"
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
              UAE Compliance Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              ESR Reporting & UBO Register
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Economic Substance Regulations compliance including notifications and annual reports. 
              Ultimate Beneficial Ownership register maintenance and timely FTA submissions.
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

      {/* ESR Overview Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Economic Substance Regulations (ESR)
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                The UAE introduced Economic Substance Regulations in 2019 to ensure that businesses conducting 
                relevant activities have adequate substance in the UAE. ESR applies to licensees in all Emirates and 
                free zones conducting relevant activities.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Our team handles all aspects of ESR compliance including notification filing, annual report preparation, 
                and maintaining adequate substance. We ensure your business meets all regulatory requirements and avoids 
                penalties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">Relevant Activities</h3>
              <ul className="space-y-3">
                {[
                  'Banking, insurance, fund management',
                  'Leasing, finance, headquarters',
                  'Shipping, transport, distribution',
                  'Intellectual property holding',
                  'Holding companies in free zones'
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

      {/* UBO Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Ultimate Beneficial Ownership (UBO)
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Since 2020, all UAE businesses must maintain a register of Ultimate Beneficial Owners and submit this 
                information to the relevant authorities. A UBO is any individual who ultimately owns or controls the 
                company, directly or indirectly.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We handle UBO register maintenance including identification of beneficial owners, verification of identity, 
                and timely submission to the Ministry of Economy or free zone authorities. We ensure ongoing compliance 
                with all UBO requirements.
              </p>
            </div>
            <div className="bg-charcoal-50 p-8 rounded-xl border border-charcoal-200">
              <h3 className="font-semibold text-charcoal-900 mb-4">UBO Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Identify all beneficial owners',
                  'Verify identity and ownership',
                  'Maintain up-to-date register',
                  'Submit to relevant authority',
                  'Update within 15 days of changes',
                  'Keep records for 5 years'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            Our ESR & UBO Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'ESR Notification Filing',
                description: 'Preparation and submission of ESR notifications within the required timeframe for all relevant activities.'
              },
              {
                icon: CheckCircleIcon,
                title: 'ESR Annual Reports',
                description: 'Complete annual report preparation including financial statements, income, expenses, and substance tests.'
              },
              {
                icon: Shield,
                title: 'UBO Register Maintenance',
                description: 'Ongoing maintenance of UBO register including identification, verification, and updates.'
              },
              {
                icon: AlertCircle,
                title: 'Substance Assessment',
                description: 'Assessment of adequate substance including physical presence, employees, and operating expenditure.'
              },
              {
                icon: Clock,
                title: 'Compliance Monitoring',
                description: 'Ongoing monitoring of regulatory changes and ensuring continued compliance with ESR and UBO requirements.'
              },
              {
                icon: Users,
                title: 'Authority Correspondence',
                description: 'Handling all correspondence with Ministry of Economy, free zone authorities, and FTA regarding ESR and UBO.'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl"
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

      {/* Penalties Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Non-Compliance Penalties
          </h2>
          <div className="bg-red-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              Failure to comply with ESR and UBO requirements can result in significant penalties including fines, 
              license suspension, and administrative penalties. We track all deadlines and ensure timely compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">ESR Penalties</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• AED 50,000 for late notification</li>
                  <li>• AED 50,000 for late annual report</li>
                  <li>• AED 20,000 for incomplete information</li>
                  <li>• Additional penalties for continued non-compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">UBO Penalties</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• AED 100,000 for non-compliance</li>
                  <li>• AED 50,000 for late submission</li>
                  <li>• License suspension possible</li>
                  <li>• Administrative penalties apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Compliance Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Assessment', description: 'We assess whether your business conducts relevant activities and identify UBOs.' },
              { step: '02', title: 'Notification Filing', description: 'We file ESR notification within 6 months of financial year end.' },
              { step: '03', title: 'Annual Report', description: 'We prepare and submit annual ESR report by deadline.' },
              { step: '04', title: 'Ongoing Maintenance', description: 'We maintain UBO register and update within 15 days of changes.' }
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Does my business need to comply with ESR?',
                answer: 'If your business conducts relevant activities including banking, insurance, leasing, finance, headquarters, shipping, or IP holding, you likely need to comply. We can assess your requirements during our initial consultation.'
              },
              {
                question: 'What is considered adequate substance?',
                answer: 'Adequate substance includes having physical premises in the UAE, employing adequate qualified employees, incurring operating expenditure in the UAE, and conducting core income-generating activities in the UAE.'
              },
              {
                question: 'Who is a beneficial owner?',
                answer: 'A beneficial owner is any individual who ultimately owns or controls the company, directly or indirectly, including those owning 25% or more of shares, voting rights, or having significant influence over the company.'
              },
              {
                question: 'What are the filing deadlines?',
                answer: 'ESR notifications must be filed within 6 months of financial year end. Annual reports are due within 12 months. UBO updates must be submitted within 15 days of any change. We track all deadlines.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
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
            Ensure ESR & UBO Compliance
          </h2>
          <p className="text-charcoal-300 mb-8">
            Avoid penalties and ensure full compliance with UAE ESR and UBO regulations.
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
