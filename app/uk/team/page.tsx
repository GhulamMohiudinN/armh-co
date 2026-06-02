'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Linkedin, Award, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: 'Jonathan Mitchell',
      role: 'Managing Director',
      qualifications: ['ACCA', 'ICAEW', 'FCCA'],
      experience: '15+ years',
      expertise: ['Corporate Tax', 'International Tax', 'Strategic Planning'],
      bio: 'Jonathan leads ARMH & Co with over 15 years of experience in UK and international taxation. He specializes in complex cross-border tax planning and strategic financial advisory for growing businesses.',
      education: 'University of Cambridge - Economics'
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      role: 'Senior Tax Manager',
      qualifications: ['ACCA', 'CTA'],
      experience: '12 years',
      expertise: ['R&D Tax Credits', 'VAT', 'Corporation Tax'],
      bio: 'Sarah is our R&D tax credit specialist with extensive experience helping UK SMEs maximize their claims. She has successfully secured over £2 million in tax credits for clients.',
      education: 'University of Manchester - Accounting'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Head of Bookkeeping',
      qualifications: ['ACCA', 'AAT'],
      experience: '10 years',
      expertise: ['Bookkeeping', 'Management Accounts', 'Xero Specialist'],
      bio: 'David leads our bookkeeping team with expertise in cloud accounting systems. He ensures our clients have real-time financial visibility and audit-ready records.',
      education: 'University of Leeds - Finance'
    },
    {
      id: 4,
      name: 'Emily Roberts',
      role: 'VAT Specialist',
      qualifications: ['ACCA', 'MTD Certified'],
      experience: '8 years',
      expertise: ['VAT Compliance', 'MTD', 'VAT Investigations'],
      bio: 'Emily specializes in VAT compliance and Making Tax Digital implementation. She has helped numerous businesses transition to MTD and avoid costly penalties.',
      education: 'University of Bristol - Accounting'
    },
    {
      id: 5,
      name: 'Michael Foster',
      role: 'Payroll Manager',
      qualifications: ['CIPP', 'ACCA'],
      experience: '9 years',
      expertise: ['Payroll', 'Auto-Enrolment', 'RTI'],
      bio: 'Michael manages our payroll services with expertise in RTI submissions, auto-enrolment, and complex payroll structures for businesses of all sizes.',
      education: 'University of Sheffield - Business'
    },
    {
      id: 6,
      name: 'Amanda Wilson',
      role: 'Client Services Manager',
      qualifications: ['ACCA'],
      experience: '7 years',
      expertise: ['Client Relations', 'Account Management', 'Process Improvement'],
      bio: 'Amanda ensures our clients receive exceptional service and support. She acts as the primary point of contact for client inquiries and coordinates service delivery.',
      education: 'University of Edinburgh - Business Management'
    }
  ];

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
              Our Team
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Meet Our Experts
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Our team of qualified accountants brings decades of combined experience across UK and international markets. 
              We are committed to delivering exceptional service and strategic insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:border-emerald-600 transition-colors"
              >
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-serif text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-1 tracking-tight text-center">
                  {member.name}
                </h3>
                <p className="font-sans text-emerald-600 font-semibold text-sm mb-3 text-center">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.qualifications.map((qual, qIndex) => (
                    <span key={qIndex} className="font-sans bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded">
                      {qual}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-charcoal-600 text-sm mb-4 leading-relaxed text-center">
                  {member.bio}
                </p>
                <div className="border-t border-charcoal-200 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span className="font-sans text-charcoal-700 text-xs">{member.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span className="font-sans text-charcoal-700 text-xs">{member.education}</span>
                  </div>
                  <div className="flex gap-2 mt-3 justify-center">
                    <button className="w-8 h-8 bg-charcoal-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors">
                      <Mail className="w-4 h-4 text-charcoal-600" />
                    </button>
                    <button className="w-8 h-8 bg-charcoal-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors">
                      <Linkedin className="w-4 h-4 text-charcoal-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight"
          >
            Our Expertise
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              'Corporate Tax Planning',
              'R&D Tax Credits',
              'VAT Compliance',
              'International Tax',
              'Bookkeeping & Accounts',
              'Payroll Services',
              'Financial Reporting',
              'Business Advisory'
            ].map((expertise, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-4 rounded-xl border border-charcoal-200 text-center">
                <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <span className="font-sans text-charcoal-900 font-semibold text-sm">{expertise}</span>
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
            Work With Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase, delay: 0.1 }}
            className="font-sans text-charcoal-300 mb-8 leading-relaxed"
          >
            Schedule a free consultation to discuss how our team can help your business thrive.
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
              href="/uk/about" 
              className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
