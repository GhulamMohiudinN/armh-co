'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import { getBlogPostsByMarket } from '@/lib/data/blog-posts';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function UAEBlogPage() {
  const articles = getBlogPostsByMarket('uae');

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
              Insights & Resources
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              UAE Accounting Insights
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Expert insights, practical guides, and industry news to help you navigate the UAE 
              accounting landscape and make informed business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:border-emerald-600 transition-colors"
              >
                <span className="font-sans bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal-900 mt-4 mb-2 tracking-tight">{article.title}</h3>
                <p className="font-sans text-charcoal-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-4 font-sans">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <Link 
                  href={`/uae/blog/${article.slug}`} 
                  className="font-sans text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight"
          >
            Browse by Category
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'Corporate Tax',
              'VAT Compliance',
              'Free Zones',
              'ESR & UBO',
              'Payroll & WPS',
              'IFRS Reporting',
              'Industry Insights',
              'Regulatory Updates'
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: customEase }}
                className="bg-white p-4 rounded-xl border border-charcoal-200 hover:border-emerald-600 transition-colors text-center"
              >
                <span className="font-sans text-charcoal-900 font-semibold">{category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="bg-emerald-50 p-8 rounded-xl border border-emerald-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-emerald-600" />
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 tracking-tight">
                Subscribe to Our Newsletter
              </h2>
            </div>
            <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
              Get the latest UAE accounting insights, regulatory updates, and practical tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-charcoal-300 focus:outline-none focus:border-emerald-600 font-sans"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: customEase }}
                className="font-sans bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide"
              >
                Subscribe
              </motion.button>
            </div>
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
            Need Expert Advice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-8 leading-relaxed"
          >
            Our team of qualified accountants is here to help with your specific accounting needs.
          </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: customEase }}
              >
                <Link
                  href="/uae/contact"
                  className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors tracking-wide text-center"
                >
                  Book Consultation
                </Link>
              </motion.div>
              <Link
                href="/uae/contact"
                className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
              >
                Contact Us
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
