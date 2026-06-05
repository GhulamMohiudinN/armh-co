'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BookOpen, Receipt, FileText, Users, User, FlaskConical, Building2, Globe, BarChart3, TrendingUp, Star, ChevronRight } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';
import PricingCard from '@/components/shared/PricingCard';
import FAQAccordion from '@/components/shared/FAQAccordion';
import StatsBar from '@/components/shared/StatsBar';
import CredentialBadge from '@/components/shared/CredentialBadge';
import TestimonialCard from '@/components/shared/TestimonialCard';
import ServiceMarquee from '@/components/shared/ServiceMarquee';
import ThreeBackground from '@/components/shared/ThreeBackground';
import { ukServices } from '@/lib/data/uk-services';
import { ukFAQ } from '@/lib/data/uk-faq';

const iconMap: Record<string, any> = {
  BookOpen,
  Receipt,
  FileText,
  Users,
  User,
  FlaskConical,
  Building2,
  CheckCircle,
  Globe,
  BarChart3,
  TrendingUp,
};

export default function UKHomepage() {
  const tickerItems = [
    'Bookkeeping',
    'VAT Returns',
    'Corporation Tax',
    'Payroll',
    'Self Assessment',
    'R&D Tax Credits',
    'Year-End Accounts',
    'Companies House',
    'HMRC Compliance',
    'MTD Ready',
  ];

  const stats = [
    { number: '50+', label: 'UK SME Clients' },
    { number: '100%', label: 'Filing Accuracy' },
    { number: '24h', label: 'Response Time' },
    { number: '8+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      quote: "ARMH & Co transformed our financial operations. Their proactive approach to deadline management means we never miss a filing date.",
      client: "Sarah Mitchell",
      company: "TechStart UK Ltd",
      location: "London, UK"
    },
    {
      quote: "The R&D tax credit expertise saved us over £45,000 in our first year. Highly recommend for any UK SME.",
      client: "James Wilson",
      company: "Innovate Manufacturing",
      location: "Manchester, UK"
    },
    {
      quote: "Fixed monthly pricing with no surprises. Exactly what we needed as a newly incorporated business.",
      client: "Emma Thompson",
      company: "Digital Agency Pro",
      location: "Bristol, UK"
    }
  ];

  const pricingTiers = [
    {
      tier: 'Starter',
      price: 'Custom / month',
      features: [
        'Monthly bookkeeping',
        'VAT returns (MTD-compliant)',
        'Year-end accounts',
        'Corporation tax filing',
        'Basic payroll (up to 5 employees)',
        'Companies House compliance',
        'Email support',
      ],
      highlighted: false,
      ctaText: 'Get a Quote →',
      note: 'Tailored to your transaction volume and service requirements.',
      ctaHref: '/uk/contact'
    },
    {
      tier: 'Growth',
      price: 'Custom / month',
      features: [
        'Everything in Starter',
        'Management accounts',
        'Self Assessment for directors',
        'R&D tax credit claims',
        'Payroll (up to 20 employees)',
        'HMRC correspondence handling',
        'Priority support',
        'Quarterly strategy calls',
      ],
      highlighted: true,
      ctaText: 'Get a Quote →',
      note: 'Tailored to your transaction volume and service requirements.',
      ctaHref: '/uk/contact'
    },
    {
      tier: 'Complete',
      price: 'Custom / month',
      features: [
        'Everything in Growth',
        'CFO advisory (monthly)',
        'International tax planning',
        'Unlimited payroll',
        'Audit preparation',
        'Dedicated account manager',
        '24/7 support access',
        'Custom reporting',
      ],
      highlighted: false,
      ctaText: 'Get a Quote →',
      note: 'Tailored to your transaction volume and service requirements.',
      ctaHref: '/uk/contact'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24 px-5 md:px-4 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/ukvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal-950/70"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7 }}
            className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.5]"
          >
            Accounting & Compliance <span className="text-[#c5a854]">Done Right</span> — From Day One
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.7, delay: 0.15 }}
            className="font-sans text-charcoal-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed"
          >
            Expert bookkeeping, VAT, corporation tax, and payroll for UK SMEs and newly incorporated businesses.
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
              <Link href="/uk/contact" className="font-sans bg-emerald-600 text-white px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide text-center flex items-center justify-center w-full sm:w-auto">
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
            Built for UK SMEs
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
                title: 'ACCA & ICAEW Qualified',
                description: 'Your accounts handled by chartered professionals with real UK SME experience — not automated tools or offshore junior staff.'
              },
              {
                number: '02',
                title: 'Proactive Deadline Management',
                description: 'We track every HMRC and Companies House deadline and notify you well in advance. Never miss a filing date again.'
              },
              {
                number: '03',
                title: 'Fixed Monthly Pricing',
                description: 'Transparent packages with no hidden fees. You know exactly what you pay from incorporation day — no year-end surprises.'
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

      {/* Services Grid */}
      <section id="services" className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-off-white">
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
            {ukServices.map((service, index) => {
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
            Simple 4-Step Process
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              'Free Consultation',
              'System Setup & Onboarding',
              'We Handle All Filings',
              'Monthly Reporting'
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
                <h3 className="font-serif text-sm md:text-base lg:text-lg font-semibold text-charcoal-900 tracking-tight">{step}</h3>
              </motion.div>
            ))}
          </motion.div>
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
            <span>FreeAgent</span>
            <span>Sage</span>
            <span>HMRC MTD Portal</span>
            <span>Dext</span>
            <span>Hubdoc</span>
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
          <FAQAccordion items={ukFAQ} />
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
            Just incorporated? Let's talk before your first deadline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-6 md:mb-8 leading-relaxed"
          >
            Free 30-minute consultation — no commitment, no jargon.
          </motion.p>
          <Link href="/uk/contact">
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
