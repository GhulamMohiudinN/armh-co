'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Building2, Globe, CheckCircle } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function UKContactPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <p className="font-sans text-emerald-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Let's Start a <span className="text-[#c5a854]">Conversation</span>
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Ready to transform your financial operations? Our UK team of expert accountants is here to provide 
              tailored solutions that drive your business forward.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            >
              <Link href="#contact-form">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: customEase }}
                  className="font-sans bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide flex items-center gap-2"
                >
                  Schedule a Call <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <p className="font-sans text-emerald-600 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
                Get In Touch
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-950 mb-6 tracking-tight leading-[1.15]">
                Send Us a Message
              </h2>
              <p className="font-sans text-charcoal-600 text-lg mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. 
                We're committed to providing exceptional service and expert guidance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal-900 mb-1">Expert Response</h4>
                    <p className="font-sans text-charcoal-600 text-sm">Qualified accountants respond to your enquiry</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal-900 mb-1">Tailored Solutions</h4>
                    <p className="font-sans text-charcoal-600 text-sm">Customized advice for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-charcoal-900 mb-1">No Obligation</h4>
                    <p className="font-sans text-charcoal-600 text-sm">Free initial consultation, no commitment required</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="bg-white p-8 md:p-10 rounded-xl border border-charcoal-200 shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Company</label>
                  <input
                    type="text"
                    className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Service Interest</label>
                  <select className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all bg-white">
                    <option value="">Select a service</option>
                    <option value="bookkeeping">Bookkeeping & Management Accounts</option>
                    <option value="vat">VAT Returns (MTD-Compliant)</option>
                    <option value="corporation-tax">Year-End Accounts & Corporation Tax</option>
                    <option value="payroll">Payroll & Auto-Enrolment</option>
                    <option value="self-assessment">Self Assessment</option>
                    <option value="rd-tax-credits">R&D Tax Credits</option>
                    <option value="companies-house">Companies House Compliance</option>
                    <option value="hmrc-claims">HMRC Claims</option>
                    <option value="international-tax">International Tax Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans block text-sm font-semibold text-charcoal-900 mb-2">Tell us about your financial needs, we provide solutions *</label>
                  <textarea
                    required
                    rows={5}
                    className="font-sans w-full px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: customEase }}
                  className="font-sans w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 tracking-wide"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Ready to Get Started?
            </h2>
            <p className="font-sans text-charcoal-300 text-lg mb-8 leading-relaxed">
              Book a free consultation with our expert team and discover how we can help your business thrive.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: customEase }}
              className="font-sans bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide inline-flex items-center gap-2"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
