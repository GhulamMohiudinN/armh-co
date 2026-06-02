'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Receipt, FileText, Users, Building2, BarChart3, TrendingUp, CheckCircle, User, Star } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';
import PricingCard from '@/components/shared/PricingCard';
import FAQAccordion from '@/components/shared/FAQAccordion';
import StatsBar from '@/components/shared/StatsBar';
import CredentialBadge from '@/components/shared/CredentialBadge';
import TestimonialCard from '@/components/shared/TestimonialCard';
import ServiceMarquee from '@/components/shared/ServiceMarquee';
import ThreeBackground from '@/components/shared/ThreeBackground';
import { uaeServices } from '@/lib/data/uae-services';
import { uaeFAQ } from '@/lib/data/uae-faq';

const iconMap: Record<string, any> = {
  BookOpen,
  Receipt,
  FileText,
  Users,
  Building2,
  BarChart3,
  TrendingUp,
  CheckCircle,
  User,
};

export default function UAEHomepage() {
  const tickerItems = [
    'Bookkeeping',
    'VAT Registration & Filing',
    'Corporate Tax 9%',
    'Payroll & WPS',
    'Free Zone Accounting',
    'ESR Reporting',
    'UBO Registration',
    'CFO Advisory',
    'FTA Compliance',
  ];

  const stats = [
    { number: '250+', label: 'UAE SME Clients' },
    { number: 'AED 2B+', label: 'Revenue Managed' },
    { number: '0', label: 'FTA Penalties' },
    { number: '18+', label: 'Industries Served' },
  ];

  const testimonials = [
    {
      quote: "ARMH & Co's FTA registration expertise saved us from significant penalties. Their knowledge of UAE tax regulations is unmatched.",
      client: "Ahmed Al-Rashid",
      company: "Dubai Trading Co",
      location: "Dubai, UAE"
    },
    {
      quote: "The free zone accounting guidance was invaluable. They understand DMCC requirements inside and out.",
      client: "Sarah Johnson",
      company: "TechHub DMCC",
      location: "Dubai, UAE"
    },
    {
      quote: "Zero penalties across all our entities. That's the kind of compliance partner every UAE business needs.",
      client: "Mohammed Hassan",
      company: "Gulf Logistics",
      location: "Abu Dhabi, UAE"
    }
  ];

  const pricingTiers = [
    {
      tier: 'Starter',
      price: 'AED 999/mo',
      features: [
        'Monthly bookkeeping (IFRS)',
        'VAT registration & filing',
        'Corporate tax compliance',
        'Basic payroll (up to 5 employees)',
        'ESR notification',
        'UBO register maintenance',
        'Email support',
      ],
      highlighted: false,
      ctaText: 'Get Started →',
      note: 'All prices exclude 5% UAE VAT',
      ctaHref: '/uae/contact'
    },
    {
      tier: 'Growth',
      price: 'AED 1,999/mo',
      features: [
        'Everything in Starter',
        'Management accounts',
        'Financial forecasting',
        'Payroll (up to 20 employees)',
        'ESR annual report',
        'FTA correspondence handling',
        'Priority support',
        'Quarterly strategy calls',
      ],
      highlighted: true,
      ctaText: 'Get Started →',
      note: 'All prices exclude 5% UAE VAT',
      ctaHref: '/uae/contact'
    },
    {
      tier: 'Enterprise',
      price: 'AED 3,999/mo',
      features: [
        'Everything in Growth',
        'CFO advisory (monthly)',
        'Free zone optimization',
        'International tax planning',
        'Unlimited payroll',
        'Audit preparation',
        'Dedicated account manager',
        '24/7 support access',
      ],
      highlighted: false,
      ctaText: 'Get Started →',
      note: 'All prices exclude 5% UAE VAT',
      ctaHref: '/uae/contact'
    }
  ];

  const freeZones = [
    'DMCC',
    'DIFC',
    'JAFZA',
    'ADGM',
    'SAIF Zone',
    'RAK ICC',
    'KIZAD',
    'Dubai Silicon Oasis',
    'Abu Dhabi Mainland',
    'Dubai Mainland',
    'Sharjah',
    'Northern Emirates',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24 px-5 md:px-4 relative overflow-hidden">
        <img
          src="/service8.png"
          alt="UAE Accounting"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal-950/70"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.5]"
          >
            Financial Clarity for UAE SMEs — <span className="text-[#c5a854]">Across All 7 Emirates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7, delay: 0.15 }}
            className="font-sans text-charcoal-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed"
          >
            Expert VAT compliance, UAE corporate tax, bookkeeping, and CFO advisory built specifically for the UAE regulatory environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/uae/contact" className="font-sans bg-emerald-600 text-white px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide text-center flex items-center justify-center w-full sm:w-auto">
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.div>
          <ServiceMarquee items={tickerItems} />
        </div>
      </section>

      {/* Credential Strip */}
      <section className="bg-charcoal-100 py-8 md:py-12 px-5 md:px-4 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-4 text-center">
            Regulated & Certified
          </p>
          <CredentialBadge variant="light" />
        </div>
      </section>

      {/* Why ARMH & Co */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            Why ARMH & Co
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            Built for UAE Businesses
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                number: '01',
                title: 'FTA Registered Tax Agents',
                description: 'We are registered with the Federal Tax Authority — meaning we can represent your business directly in all FTA correspondence and audits.'
              },
              {
                number: '02',
                title: 'Deep UAE Regulatory Expertise',
                description: 'From Dubai Mainland to DMCC, DIFC, ADGM, JAFZA and all major free zones — we know every zone\'s specific requirements.'
              },
              {
                number: '03',
                title: 'Zero Penalty Track Record',
                description: 'Three consecutive years with zero FTA penalties across all clients. That\'s the standard we hold ourselves — and your business — to.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-charcoal-100"
              >
                <div className="font-serif text-emerald-500 text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">{feature.number}</div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-charcoal-900 mb-2 md:mb-3 tracking-tight">{feature.title}</h3>
                <p className="font-sans text-charcoal-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UAE Compliance Coverage */}
      <section id="services" className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            Staying Ahead of Compliance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            UAE Compliance Coverage
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                title: 'VAT — 5% Standard Rate',
                description: 'Active since Jan 2018. Mandatory above AED 375,000 taxable supplies.'
              },
              {
                title: 'Corporate Tax — 9%',
                description: 'Active from June 2023 FY. First AED 375,000 at 0%. Free zone qualifying income at 0%.'
              },
              {
                title: 'Economic Substance Regulations (ESR)',
                description: 'Annual notifications and reports for regulated sector entities.'
              },
              {
                title: 'Ultimate Beneficial Ownership (UBO)',
                description: 'Mandatory register submissions for all UAE-incorporated entities.'
              }
            ].map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-800 border-l-4 border-emerald-600 rounded-xl p-4 md:p-6 lg:p-8"
              >
                <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-2 tracking-tight">{compliance.title}</h3>
                <p className="font-sans text-charcoal-300 text-sm md:text-base">{compliance.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {uaeServices.map((service, index) => {
              const Icon = iconMap[service.icon] || BookOpen;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                    variant="light"
                    image={service.image}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Free Zone Coverage */}
      <section className="py-16 md:py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center">
            Free Zone Coverage
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal-900 mb-8 text-center tracking-tight">
            We Serve Every Major UAE Free Zone
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {freeZones.map((zone, index) => (
              <span
                key={index}
                className="font-sans bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm md:text-base font-medium"
              >
                {zone}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-stone-50 border border-charcoal-100 rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-2 tracking-tight">Dubai Mainland & Free Zones</h3>
              <p className="font-sans text-charcoal-500 text-sm md:text-base">
                Complete accounting and compliance for Dubai Mainland businesses and all Dubai free zones including DMCC, DIFC, JAFZA, and Dubai Silicon Oasis.
              </p>
            </div>
            <div className="bg-stone-50 border border-charcoal-100 rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-2 tracking-tight">Abu Dhabi & Northern Emirates</h3>
              <p className="font-sans text-charcoal-500 text-sm md:text-base">
                Full-service accounting for Abu Dhabi Mainland, ADGM, and all Northern Emirates including Sharjah, RAK, and Fujairah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* How It Works */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            5-Step Onboarding Process
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              'Free Consultation',
              'Tailored Proposal (24hr)',
              'Document Handover',
              'System Setup',
              'Go Live'
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xs sm:text-sm md:text-base font-semibold text-charcoal-900 tracking-tight">{step}</h3>
              </motion.div>
            ))}
          </motion.div>
          <p className="font-sans text-center text-charcoal-500 mt-6 md:mt-8 text-sm md:text-base">
            Up and running in as little as 5 business days
          </p>
        </div>
      </section>

      {/* Software */}
      <section className="py-12 md:py-16 px-5 md:px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-8 text-center">
            Software We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-charcoal-500 font-sans font-medium text-sm md:text-base">
            <span>Xero</span>
            <span>QuickBooks</span>
            <span>Zoho Books</span>
            <span>Tally ERP</span>
            <span>Sage</span>
            <span>Dext</span>
            <span>A2X</span>
            <span>Hubdoc</span>
            <span>ADP</span>
            <span>Gusto</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 md:mb-12 text-center tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            Transparent Pricing
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard {...tier} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-emerald-600 tracking-[0.25em] text-xs font-semibold uppercase mb-2 text-center"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-charcoal-900 mb-8 md:mb-12 text-center tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <FAQAccordion items={uaeFAQ} />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-[1.5]"
          >
            Ready to take control of your UAE financial compliance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-6 md:mb-8 leading-relaxed"
          >
            Book a free 30-minute consultation — no obligation, no sales pressure.
          </motion.p>
          <Link href="/uae/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="font-sans bg-emerald-600 text-white px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide"
            >
              Book Free Call →
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
