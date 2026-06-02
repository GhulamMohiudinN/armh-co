'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, Globe, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="font-sans text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              About ARMH & Co
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              International Accounting Expertise. Local Regulatory Precision.
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Founded on the principle that businesses deserve accounting partners who understand both global standards and local nuances. 
              We bridge the gap between international best practices and UK-specific regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customEase }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Our Story
              </h2>
              <p className="font-sans text-charcoal-600 mb-4 leading-relaxed">
                ARMH & Co was established with a clear vision: to provide UK SMEs and international businesses with accounting 
                services that combine global expertise with local regulatory knowledge.
              </p>
              <p className="font-sans text-charcoal-600 mb-4 leading-relaxed">
                Our founders, qualified chartered accountants with experience across both UK and international markets, recognized 
                a gap in the market. Many firms offered either local expertise or international capability—but rarely both with 
                the depth required for complex cross-border operations.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Today, we serve clients across the UK and UAE, helping businesses navigate complex tax landscapes, ensure 
                compliance, and make informed financial decisions. Our team combines technical excellence with practical business 
                understanding to deliver results that matter.
              </p>
              <Link 
                href="/uk/contact" 
                className="font-sans inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-500"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customEase }}
              className="bg-charcoal-50 p-8 rounded-xl border border-charcoal-100"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '8+', label: 'Years Experience' },
                  { number: '50+', label: 'UK SME Clients' },
                  { number: '100%', label: 'Filing Accuracy' },
                  { number: '24h', label: 'Response Time' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-serif text-3xl md:text-4xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                    <div className="font-sans text-charcoal-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-charcoal-200">
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                To provide exceptional accounting and tax services that empower businesses to thrive. We combine technical 
                expertise with proactive advice, ensuring our clients not only stay compliant but also make strategic decisions 
                that drive growth and profitability.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-charcoal-200">
              <Globe className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                To be the trusted accounting partner for businesses operating across borders. We aim to simplify complex 
                regulatory landscapes, provide clarity in financial matters, and help our clients achieve their business 
                objectives with confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight"
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards of technical accuracy and professional service in everything we do.'
              },
              {
                icon: Users,
                title: 'Client-Centric',
                description: 'Your success is our priority. We build long-term relationships based on trust, transparency, and results.'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'We bring international best practices to local contexts, giving you a competitive advantage.'
              },
              {
                icon: Target,
                title: 'Proactive',
                description: "We don't just react to problems—we anticipate them and help you avoid them before they arise."
              },
              {
                icon: CheckCircle,
                title: 'Integrity',
                description: "Honest, ethical, and transparent. We do what's right for our clients, always."
              },
              {
                icon: Globe,
                title: 'Innovation',
                description: 'We embrace technology and modern practices to deliver efficient, forward-thinking solutions.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="bg-charcoal-50 p-6 rounded-xl">
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2 tracking-tight">{value.title}</h3>
                  <p className="font-sans text-charcoal-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight"
          >
            Why Choose ARMH & Co
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'ACCA professionals & ICAEW Qualified Professionals',
              'Proactive Deadline Management',
              'Fixed Monthly Pricing',
              'Dedicated Account Manager',
              '24/7 Secure Client Portal',
              'Multi-Software Expertise',
              'Cross-Border Tax Knowledge',
              'Audit-Ready Financial Records'
            ].map((reason, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-4 rounded-xl border border-charcoal-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-charcoal-700 text-sm">{reason}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-8 leading-relaxed"
          >
            Schedule a free consultation to discuss how we can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/uk/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uk/team" 
              className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
            >
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
