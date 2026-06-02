'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Download, FileText, BookOpen, CheckCircle, ArrowRight, Calendar, Clock, Eye, X } from 'lucide-react';
import { customEase, containerVariants, itemVariants } from '@/lib/utils/animation';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewResource, setPreviewResource] = useState<any>(null);

  const resources = [
    // Bookkeeping
    {
      id: 1,
      title: 'IFRS Bookkeeping Guide',
      type: 'Guide',
      category: 'Bookkeeping',
      description: 'Essential bookkeeping practices for UAE businesses following IFRS standards.',
      fileSize: '2.0 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>IFRS Bookkeeping Guide</h2>
        <p>Comprehensive guide to IFRS-compliant bookkeeping for UAE businesses.</p>
        <h3>1. Chart of Accounts</h3>
        <p>Establish a chart of accounts aligned with IFRS requirements. Ensure proper classification of assets, liabilities, equity, income, and expenses.</p>
        <h3>2. Accrual Accounting</h3>
        <p>Implement accrual-based accounting to record transactions when they occur, not when cash is exchanged.</p>
        <h3>3. Monthly Reconciliation</h3>
        <p>Reconcile bank accounts, credit cards, and payment platforms monthly to maintain accurate records.</p>
        <h3>4. Documentation</h3>
        <p>Maintain proper documentation for all transactions to support audit requirements and FTA compliance.</p>`
    },
    {
      id: 2,
      title: 'Cloud Accounting for UAE',
      type: 'Whitepaper',
      category: 'Bookkeeping',
      description: 'Comparison of cloud accounting solutions for UAE businesses including Xero, QuickBooks, and Zoho.',
      fileSize: '2.4 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Cloud Accounting for UAE</h2>
        <p>Compare leading cloud accounting solutions for UAE businesses.</p>
        <h3>Xero</h3>
        <p>Best for: Growing businesses. Excellent automation and multi-currency support. Pricing from AED 150/month.</p>
        <h3>QuickBooks</h3>
        <p>Best for: Small businesses. User-friendly with strong reporting. Pricing from AED 120/month.</p>
        <h3>Zoho Books</h3>
        <p>Best for: Budget-conscious businesses. Comprehensive features at competitive pricing. From AED 90/month.</p>`
    },
    {
      id: 3,
      title: 'Cash Flow Template (AED)',
      type: 'Template',
      category: 'Bookkeeping',
      description: 'Excel template for cash flow forecasting in AED with multi-currency support.',
      fileSize: '0.6 MB',
      format: 'XLSX',
      date: 'November 2025',
      content: `<h2>Cash Flow Template (AED)</h2>
        <p>Template for cash flow forecasting in AED with multi-currency support.</p>
        <h3>Features</h3>
        <ul>
          <li>13-week rolling forecast in AED</li>
          <li>Multi-currency conversion</li>
          <li>Automated calculations</li>
          <li>Variance analysis</li>
        </ul>`
    },
    // VAT
    {
      id: 4,
      title: 'UAE VAT Guide 2026',
      type: 'Whitepaper',
      category: 'VAT',
      description: 'Comprehensive guide to UAE VAT regulations, registration thresholds, and compliance requirements.',
      fileSize: '2.8 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>UAE VAT Guide 2026</h2>
        <p>Complete guide to UAE VAT regulations and compliance.</p>
        <h3>VAT Registration Thresholds</h3>
        <ul>
          <li>Mandatory: AED 375,000+ taxable supplies</li>
          <li>Voluntary: AED 187,500+ taxable supplies</li>
        </ul>
        <h3>VAT Rate</h3>
        <p>Standard rate: 5% on most goods and services.</p>
        <h3>Filing Frequency</h3>
        <p>Quarterly returns for most businesses. Monthly for businesses with annual turnover above AED 150 million.</p>`
    },
    {
      id: 5,
      title: 'VAT Return Preparation Guide',
      type: 'Guide',
      category: 'VAT',
      description: 'Practical guide to preparing and filing VAT returns in the UAE with examples.',
      fileSize: '2.6 MB',
      format: 'PDF',
      date: 'August 2025',
      content: `<h2>VAT Return Preparation Guide</h2>
        <p>Step-by-step guide to preparing VAT returns in the UAE.</p>
        <h3>Pre-Filing Checklist</h3>
        <ul>
          <li>Reconcile VAT account balance</li>
          <li>Verify all transactions recorded</li>
          <li>Check VAT rates applied correctly</li>
          <li>Review exempt and zero-rated supplies</li>
        </ul>
        <h3>Filing Process</h3>
        <p>Log in to FTA portal, complete VAT return form, verify calculations, and submit before deadline.</p>`
    },
    {
      id: 6,
      title: 'VAT Audit Checklist',
      type: 'Checklist',
      category: 'VAT',
      description: 'Preparation checklist for VAT audits and FTA correspondence.',
      fileSize: '1.2 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>VAT Audit Checklist</h2>
        <p>Prepare for VAT audits with this comprehensive checklist.</p>
        <h3>Documentation Required</h3>
        <ul>
          <li>VAT registration certificate</li>
          <li>All VAT returns filed</li>
          <li>Tax invoices for all supplies</li>
          <li>Import and export documents</li>
          <li>Bank statements</li>
        </ul>`
    },
    // Compliance
    {
      id: 7,
      title: 'ESR Filing Checklist',
      type: 'Checklist',
      category: 'Compliance',
      description: 'Step-by-step checklist for Economic Substance Regulation filing and documentation requirements.',
      fileSize: '1.3 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>ESR Filing Checklist</h2>
        <p>Complete checklist for Economic Substance Regulation compliance.</p>
        <h3>Notification Filing</h3>
        <ul>
          <li>Identify relevant activities</li>
          <li>Submit notification within 6 months of financial year-end</li>
          <li>Report revenue, expenses, and profit</li>
        </ul>
        <h3>Annual Report</h3>
        <ul>
          <li>Prepare financial statements</li>
          <li>Conduct substance test</li>
          <li>Submit annual report within 12 months</li>
        </ul>`
    },
    {
      id: 8,
      title: 'UBO Registration Guide',
      type: 'Guide',
      category: 'Compliance',
      description: 'Complete guide to Ultimate Beneficial Owner registration requirements and procedures.',
      fileSize: '2.1 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>UBO Registration Guide</h2>
        <p>Guide to Ultimate Beneficial Owner registration in the UAE.</p>
        <h3>Who is a UBO?</h3>
        <p>Any individual who ultimately owns or controls the company, directly or indirectly, with 25% or more ownership.</p>
        <h3>Registration Process</h3>
        <ul>
          <li>Identify all beneficial owners</li>
          <li>Verify identity documents</li>
          <li>Maintain UBO register</li>
          <li>Submit to relevant authority</li>
        </ul>`
    },
    {
      id: 9,
      title: 'AML Compliance Guide',
      type: 'Whitepaper',
      category: 'Compliance',
      description: 'Anti-Money Laundering compliance requirements for UAE businesses.',
      fileSize: '2.3 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>AML Compliance Guide</h2>
        <p>Anti-Money Laundering compliance for UAE businesses.</p>
        <h3>Key Requirements</h3>
        <ul>
          <li>Customer Due Diligence (CDD)</li>
          <li>Ongoing monitoring</li>
          <li>Suspicious transaction reporting</li>
          <li>Record keeping</li>
        </ul>`
    },
    // Business Setup
    {
      id: 10,
      title: 'Free Zone vs Mainland Comparison',
      type: 'Whitepaper',
      category: 'Business Setup',
      description: 'Detailed comparison of free zone and mainland business structures in the UAE.',
      fileSize: '3.4 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>Free Zone vs Mainland Comparison</h2>
        <p>Compare business structures in the UAE.</p>
        <h3>Free Zone</h3>
        <ul>
          <li>100% foreign ownership</li>
          <li>0% corporate tax (qualifying income)</li>
          <li>Must operate within free zone</li>
          <li>No UAE mainland trading</li>
        </ul>
        <h3>Mainland</h3>
        <ul>
          <li>Requires local sponsor (51% ownership)</li>
          <li>9% corporate tax above threshold</li>
          <li>Can trade anywhere in UAE</li>
          <li>Access to government contracts</li>
        </ul>`
    },
    {
      id: 11,
      title: 'Company Formation Guide',
      type: 'Guide',
      category: 'Business Setup',
      description: 'Step-by-step guide to company formation in UAE free zones and mainland.',
      fileSize: '2.8 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>Company Formation Guide</h2>
        <p>Guide to company formation in the UAE.</p>
        <h3>Free Zone Formation</h3>
        <ul>
          <li>Choose free zone and activity</li>
          <li>Submit application and documents</li>
          <li>Obtain initial approval</li>
          <li>Sign lease agreement</li>
          <li>Receive trade license</li>
        </ul>`
    },
    {
      id: 12,
      title: 'Bank Account Opening Guide',
      type: 'Guide',
      category: 'Business Setup',
      description: 'Guide to opening corporate bank accounts in UAE banks.',
      fileSize: '1.9 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Bank Account Opening Guide</h2>
        <p>How to open a corporate bank account in the UAE.</p>
        <h3>Required Documents</h3>
        <ul>
          <li>Trade license</li>
          <li>Memorandum of Association</li>
          <li>Passport copies of shareholders</li>
          <li>Proof of address</li>
          <li>Business plan</li>
        </ul>`
    },
    // Payroll
    {
      id: 13,
      title: 'WPS Compliance Guide',
      type: 'Guide',
      category: 'Payroll',
      description: 'Essential guide to Wage Protection System compliance for UAE businesses.',
      fileSize: '1.9 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>WPS Compliance Guide</h2>
        <p>Complete guide to Wage Protection System compliance.</p>
        <h3>What is WPS?</h3>
        <p>Electronic salary transfer system ensuring timely payment of employee salaries through approved banks.</p>
        <h3>Compliance Requirements</h3>
        <ul>
          <li>Register all employees in WPS</li>
          <li>Pay salaries through approved banks</li>
          <li>Submit salary file on time</li>
          <li>Maintain proper records</li>
        </ul>`
    },
    {
      id: 14,
      title: 'UAE Labor Law Guide',
      type: 'Guide',
      category: 'Payroll',
      description: 'Guide to UAE labor law requirements for employers.',
      fileSize: '2.5 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>UAE Labor Law Guide</h2>
        <p>Essential labor law requirements for UAE employers.</p>
        <h3>Employment Contracts</h3>
        <ul>
          <li>Written contracts in Arabic and English</li>
          <li>Specify probation period (max 6 months)</li>
          <li>Include salary and benefits</li>
        </ul>
        <h3>Working Hours</h3>
        <p>Maximum 8 hours per day, 48 hours per week. Ramadan: 2 hours reduced.</p>`
    },
    {
      id: 15,
      title: 'End of Service Benefits Guide',
      type: 'Guide',
      category: 'Payroll',
      description: 'Guide to calculating end of service benefits (gratuity) in the UAE.',
      fileSize: '1.7 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>End of Service Benefits Guide</h2>
        <p>Calculate gratuity for UAE employees.</p>
        <h3>Calculation Formula</h3>
        <ul>
          <li>Less than 1 year: No gratuity</li>
          <li>1-5 years: 21 days salary per year</li>
          <li>5+ years: 30 days salary per year</li>
        </ul>`
    },
    // Accounting
    {
      id: 16,
      title: 'IFRS Implementation for SMEs',
      type: 'Whitepaper',
      category: 'Accounting',
      description: 'Guide to implementing International Financial Reporting Standards for UAE SMEs.',
      fileSize: '3.1 MB',
      format: 'PDF',
      date: 'July 2025',
      content: `<h2>IFRS Implementation for SMEs</h2>
        <p>Guide to IFRS implementation for UAE SMEs.</p>
        <h3>Who Needs IFRS?</h3>
        <ul>
          <li>Free zone companies</li>
          <li>Listed companies</li>
          <li>Large mainland entities</li>
          <li>Banks and insurance companies</li>
        </ul>
        <h3>Implementation Steps</h3>
        <ol>
          <li>Gap analysis</li>
          <li>Policy development</li>
          <li>System configuration</li>
          <li>Staff training</li>
        </ol>`
    },
    {
      id: 17,
      title: 'Financial Statements Template',
      type: 'Template',
      category: 'Accounting',
      description: 'Excel template for IFRS-compliant financial statements.',
      fileSize: '1.0 MB',
      format: 'XLSX',
      date: 'August 2025',
      content: `<h2>Financial Statements Template</h2>
        <p>IFRS-compliant financial statements template.</p>
        <h3>Components</h3>
        <ul>
          <li>Statement of Financial Position</li>
          <li>Statement of Profit or Loss</li>
          <li>Statement of Cash Flows</li>
          <li>Statement of Changes in Equity</li>
          <li>Notes to the Financial Statements</li>
        </ul>`
    },
    {
      id: 18,
      title: 'Audits Preparation Guide',
      type: 'Guide',
      category: 'Accounting',
      description: 'Guide to preparing for financial audits in the UAE.',
      fileSize: '2.2 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>Audits Preparation Guide</h2>
        <p>Prepare for financial audits in the UAE.</p>
        <h3>Who Needs Audits?</h3>
        <ul>
          <li>Free zone companies (annual)</li>
          <li>Banks and financial institutions</li>
          <li>Companies with foreign ownership</li>
        </ul>
        <h3>Preparation Checklist</h3>
        <ul>
          <li>Reconcile all accounts</li>
          <li>Prepare trial balance</li>
          <li>Organize supporting documents</li>
          <li>Review internal controls</li>
        </ul>`
    },
    // Tax
    {
      id: 19,
      title: 'Corporate Tax Guide 2026',
      type: 'Guide',
      category: 'Tax',
      description: 'Comprehensive guide to UAE corporate tax regulations, exemptions, and compliance.',
      fileSize: '2.5 MB',
      format: 'PDF',
      date: 'June 2025',
      content: `<h2>Corporate Tax Guide 2026</h2>
        <p>Complete guide to UAE corporate tax.</p>
        <h3>Tax Rates</h3>
        <ul>
          <li>Profits up to AED 375,000: 0%</li>
          <li>Profits above AED 375,000: 9%</li>
        </ul>
        <h3>Exemptions</h3>
        <ul>
          <li>Qualifying Free Zone Income: 0%</li>
          <li>Small businesses below threshold</li>
          <li>Government entities</li>
        </ul>`
    },
    {
      id: 20,
      title: 'Corporate Tax Registration Guide',
      type: 'Guide',
      category: 'Tax',
      description: 'Step-by-step guide to corporate tax registration with the FTA.',
      fileSize: '1.8 MB',
      format: 'PDF',
      date: 'July 2025',
      content: `<h2>Corporate Tax Registration Guide</h2>
        <p>Guide to corporate tax registration.</p>
        <h3>Who Must Register?</h3>
        <ul>
          <li>All UAE companies</li>
          <li>Foreign entities with UAE income</li>
          <li>Free zone companies (with exceptions)</li>
        </ul>
        <h3>Registration Process</h3>
        <ol>
          <li>Create FTA account</li>
          <li>Complete registration form</li>
          <li>Submit required documents</li>
          <li>Receive Tax Registration Number (TRN)</li>
        </ol>`
    },
    {
      id: 21,
      title: 'Transfer Pricing Guide',
      type: 'Whitepaper',
      category: 'Tax',
      description: 'Guide to transfer pricing documentation and compliance for UAE businesses.',
      fileSize: '2.7 MB',
      format: 'PDF',
      date: 'August 2025',
      content: `<h2>Transfer Pricing Guide</h2>
        <p>Transfer pricing compliance for UAE businesses.</p>
        <h3>What is Transfer Pricing?</h3>
        <p>Pricing of transactions between related parties at arm's length.</p>
        <h3>Documentation Requirements</h3>
        <ul>
          <li>Master file</li>
          <li>Local file</li>
          <li>Country-by-country report</li>
        </ul>`
    },
    {
      id: 22,
      title: 'Tax Planning Strategies',
      type: 'Guide',
      category: 'Tax',
      description: 'Legitimate tax planning strategies for UAE businesses.',
      fileSize: '2.0 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>Tax Planning Strategies</h2>
        <p>Legitimate tax planning for UAE businesses.</p>
        <h3>Free Zone Optimization</h3>
        <p>Structure operations to maximize qualifying free zone income benefits.</p>
        <h3>Small Business Relief</h3>
        <p>Ensure profits stay below AED 375,000 threshold where applicable.</p>
        <h3>Group Restructuring</h3>
        <p>Consider group structure for tax efficiency.</p>`
    },
    {
      id: 23,
      title: 'Corporate Tax Optimization Guide',
      type: 'Guide',
      category: 'Tax',
      description: 'Strategic guide to optimizing corporate tax position under the new UAE 9% regime with free zone considerations.',
      fileSize: '3.2 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>Corporate Tax Optimization Guide</h2>
        <p>Strategic guide to optimizing your corporate tax position under the new UAE regime.</p>
        <h3>Tax Structure</h3>
        <ul>
          <li>0% on taxable profits up to AED 375,000</li>
          <li>9% on taxable profits above AED 375,000</li>
          <li>Free zone qualifying income: 0%</li>
        </ul>
        <h3>Optimization Strategies</h3>
        <p>Structure your business to maximize free zone benefits and minimize tax liability legally.</p>`
    },
    {
      id: 24,
      title: 'Business Valuation in UAE',
      type: 'Guide',
      category: 'Accounting',
      description: 'Guide to business valuation methods specific to UAE market conditions and regulatory requirements.',
      fileSize: '2.5 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Business Valuation in UAE</h2>
        <p>Understanding business valuation in the UAE market context.</p>
        <h3>Valuation Methods</h3>
        <ul>
          <li>Income approach (DCF)</li>
          <li>Market approach (comparables)</li>
          <li>Asset-based approach</li>
        </ul>
        <h3>UAE-Specific Factors</h3>
        <p>Free zone status, market maturity, and regional economic conditions impact valuation.</p>`
    },
    {
      id: 25,
      title: 'ESR Compliance Toolkit',
      type: 'Toolkit',
      category: 'Compliance',
      description: 'Complete toolkit for Economic Substance Regulations compliance including reporting templates and checklists.',
      fileSize: '2.8 MB',
      format: 'ZIP',
      date: 'November 2025',
      content: `<h2>ESR Compliance Toolkit</h2>
        <p>Complete toolkit for Economic Substance Regulations compliance.</p>
        <h3>Toolkit Contents</h3>
        <ul>
          <li>Relevant activity assessment</li>
          <li>Revenue and expense analysis</li>
          <li>Employee and asset tracking</li>
          <li>Report preparation templates</li>
          <li>Filing deadline calendar</li>
        </ul>
        <h3>Compliance Requirements</h3>
        <p>Annual ESR reports must be submitted within 6 months of financial year end.</p>`
    },
    {
      id: 26,
      title: 'VAT Audit Preparation Guide',
      type: 'Guide',
      category: 'VAT',
      description: 'Guide to preparing for and managing VAT audits in the UAE including documentation requirements and best practices.',
      fileSize: '2.4 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>VAT Audit Preparation Guide</h2>
        <p>Prepare effectively for VAT audits in the UAE.</p>
        <h3>Documentation Requirements</h3>
        <ul>
          <li>Tax invoices for all transactions</li>
          <li>Import/export documentation</li>
          <li>Accounting records</li>
          <li>Reconciliation reports</li>
        </ul>
        <h3>Common Audit Issues</h3>
        <p>Incorrect tax rates, missing documentation, and timing mismatches are common findings.</p>`
    },
    {
      id: 27,
      title: 'WPS Implementation Toolkit',
      type: 'Toolkit',
      category: 'Payroll',
      description: 'Complete toolkit for implementing Wage Protection System compliance including employee data management and salary processing.',
      fileSize: '2.7 MB',
      format: 'ZIP',
      date: 'September 2025',
      content: `<h2>WPS Implementation Toolkit</h2>
        <p>Complete toolkit for Wage Protection System implementation.</p>
        <h3>Toolkit Contents</h3>
        <ul>
          <li>Employee data templates</li>
          <li>Salary file format guide</li>
          <li>Agent selection checklist</li>
          <li>Compliance calendar</li>
          <li>Error resolution guide</li>
        </ul>
        <h3>Key Requirements</h3>
        <p>Register with MOHRE, use approved agents, and file salary files by the 26th of each month.</p>`
    },
    {
      id: 28,
      title: 'Financial KPI Dashboard Template',
      type: 'Template',
      category: 'Accounting',
      description: 'Excel template for creating comprehensive financial KPI dashboards tailored for UAE businesses.',
      fileSize: '1.3 MB',
      format: 'XLSX',
      date: 'August 2025',
      content: `<h2>Financial KPI Dashboard Template</h2>
        <p>Create comprehensive financial KPI dashboards for UAE businesses.</p>
        <h3>KPIs Included</h3>
        <ul>
          <li>Revenue growth rate</li>
          <li>Profit margin analysis</li>
          <li>Liquidity ratios</li>
          <li>Efficiency metrics</li>
          <li>Return on investment</li>
        </ul>
        <h3>UAE-Specific Metrics</h3>
        <p>Includes VAT efficiency, free zone utilization, and regional performance tracking.</p>`
    }
  ];

  const categories = ['All', 'Bookkeeping', 'VAT', 'Compliance', 'Business Setup', 'Payroll', 'Accounting', 'Tax'];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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
              Resources & Downloads
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Free Resources
            </h1>
            <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              Download our comprehensive guides, whitepapers, and checklists to help you navigate UAE accounting 
              and tax requirements with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: customEase }}
                onClick={() => handleCategoryChange(category)}
                className={`font-sans px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-emerald-100 hover:text-emerald-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-100 hover:border-emerald-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-sans bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    {resource.type}
                  </span>
                  <span className="font-sans text-charcoal-500 text-xs">{resource.format}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2 tracking-tight">{resource.title}</h3>
                <p className="font-sans text-charcoal-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-4 font-sans">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {resource.fileSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {resource.date}
                  </span>
                </div>
                <button 
                  onClick={() => setPreviewResource(resource)}
                  className="font-sans w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Resource
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal-950/80 z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewResource(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: customEase }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-charcoal-200">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal-900 tracking-tight">{previewResource.title}</h2>
                  <p className="font-sans text-charcoal-500 text-sm mt-1">{previewResource.category} • {previewResource.type}</p>
                </div>
                <button
                  onClick={() => setPreviewResource(null)}
                  className="font-sans p-2 hover:bg-charcoal-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-charcoal-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div 
                  className="prose prose-lg prose-emerald max-w-none font-sans text-charcoal-700
                    prose-headings:font-serif prose-headings:text-charcoal-900 prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:leading-relaxed prose-p:text-charcoal-700 prose-p:mb-4
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-charcoal-700 prose-li:leading-relaxed
                    prose-strong:text-charcoal-900 prose-strong:font-semibold
                    prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                    prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-charcoal-900 prose-pre:text-charcoal-100
                    prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-4
                    prose-table:w-full prose-table:border-collapse prose-table:my-6
                    prose-th:bg-charcoal-900 prose-th:text-white prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left
                    prose-td:border prose-td:border-charcoal-200 prose-td:px-4 prose-td:py-3
                    prose-tr:nth-child-odd:bg-charcoal-50
                    prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6"
                  dangerouslySetInnerHTML={{ __html: previewResource.content }}
                />
              </div>
              <div className="flex items-center justify-between p-6 border-t border-charcoal-200 bg-charcoal-50">
                <div className="flex items-center gap-4 text-sm text-charcoal-500 font-sans">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {previewResource.fileSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {previewResource.date}
                  </span>
                </div>
                <button
                  onClick={() => setPreviewResource(null)}
                  className="font-sans bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="bg-white p-8 rounded-xl border border-charcoal-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 tracking-tight">
                Get New Resources Delivered
              </h2>
            </div>
            <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
              Subscribe to receive our latest guides, whitepapers, and compliance updates directly to your inbox.
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
            Need Personalized Advice?
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
            <Link 
              href="/uae/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uae/blog" 
              className="font-sans border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors text-center tracking-wide"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
