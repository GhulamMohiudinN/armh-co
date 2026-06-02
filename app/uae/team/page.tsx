'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Linkedin, Award, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: 'Hassan Al-Rashid',
      role: 'Managing Director',
      qualifications: ['ACCA', 'ICAEW', 'CPA'],
      experience: '18+ years',
      expertise: ['UAE Tax', 'International Tax', 'Free Zone Advisory'],
      bio: 'Hassan leads ARMH & Co UAE with over 18 years of experience in Middle East taxation and business advisory. He specializes in UAE corporate tax, VAT, and free zone regulations.',
      education: 'American University of Sharjah - Finance'
    },
    {
      id: 2,
      name: 'Fatima Hassan',
      role: 'Senior Tax Manager',
      qualifications: ['ACCA', 'CTA', 'VAT Certified'],
      experience: '14 years',
      expertise: ['VAT Compliance', 'ESR', 'UBO Registration'],
      bio: 'Fatima is our VAT and compliance specialist with extensive experience helping UAE businesses navigate complex regulatory requirements. She has advised clients across all major Emirates.',
      education: 'University of Dubai - Accounting'
    },
    {
      id: 3,
      name: 'Omar Khalifa',
      role: 'Head of Accounting',
      qualifications: ['ACCA', 'CMA', 'IFRS Expert'],
      experience: '12 years',
      expertise: ['Financial Reporting', 'IFRS', 'Management Accounts'],
      bio: 'Omar leads our accounting team with expertise in IFRS implementation and financial reporting. He ensures our clients maintain compliant financial records across jurisdictions.',
      education: 'Abu Dhabi University - Accounting'
    },
    {
      id: 4,
      name: 'Aisha Al-Mansouri',
      role: 'VAT Specialist',
      qualifications: ['ACCA', 'MTD Certified'],
      experience: '10 years',
      expertise: ['VAT Returns', 'VAT Audits', 'Cross-Border VAT'],
      bio: 'Aisha specializes in VAT compliance and audit support. She has helped numerous businesses achieve 100% VAT compliance and avoid costly penalties.',
      education: 'University of Sharjah - Finance'
    },
    {
      id: 5,
      name: 'Mohammed Ali',
      role: 'Payroll & WPS Manager',
      qualifications: ['CIPP', 'HR Certified'],
      experience: '9 years',
      expertise: ['WPS Compliance', 'Payroll', 'Labor Law'],
      bio: 'Mohammed manages our payroll services with expertise in WPS compliance and UAE labor regulations. He ensures seamless payroll operations for businesses of all sizes.',
      education: 'University of Al Ain - Business'
    },
    {
      id: 6,
      name: 'Layla Abdullah',
      role: 'Client Services Manager',
      qualifications: ['ACCA', 'MBA'],
      experience: '8 years',
      expertise: ['Client Relations', 'Account Management', 'Free Zone Support'],
      bio: 'Layla ensures our UAE clients receive exceptional service and support. She acts as the primary point of contact and coordinates service delivery across Emirates.',
      education: 'University of Dubai - Business Administration'
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
              Our team of qualified accountants brings decades of combined experience across UAE and international markets. 
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
              'UAE Corporate Tax',
              'VAT Compliance',
              'ESR & UBO',
              'Free Zone Advisory',
              'Financial Reporting',
              'WPS Compliance',
              'International Tax',
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
              href="/uae/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uae/about" 
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
