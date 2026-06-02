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
      title: 'Bookkeeping Best Practices Guide',
      type: 'Guide',
      category: 'Bookkeeping',
      description: 'Essential bookkeeping practices for UK SMEs including record-keeping, reconciliation, and reporting.',
      fileSize: '1.8 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>Bookkeeping Best Practices Guide for UK SMEs</h2>
        <p>This comprehensive guide outlines essential bookkeeping practices that UK small and medium-sized enterprises should implement to maintain accurate financial records, ensure compliance, and make informed business decisions.</p>
        
        <h3>1. Daily Record Keeping</h3>
        <p>Recording transactions daily is the foundation of effective bookkeeping. This practice ensures:</p>
        <ul>
          <li><strong>Real-time financial visibility</strong> - Know your cash position at any moment</li>
          <li><strong>Reduced year-end workload</strong> - No last-minute rush to reconcile accounts</li>
          <li><strong>Early error detection</strong> - Identify discrepancies when they occur</li>
          <li><strong>Improved cash flow management</strong> - Track income and expenses accurately</li>
        </ul>
        <p><strong>Pro Tip:</strong> Use cloud accounting software like Xero, QuickBooks, or FreeAgent to automate daily recording through bank feeds and integrations.</p>

        <h3>2. Monthly Reconciliation</h3>
        <p>Monthly reconciliation is critical for maintaining accurate financial records. Reconcile the following accounts:</p>
        <ul>
          <li><strong>Bank accounts</strong> - Match bank statements to accounting records</li>
          <li><strong>Credit cards</strong> - Verify all charges and payments</li>
          <li><strong>Payment platforms</strong> - PayPal, Stripe, Square, etc.</li>
          <li><strong>Loan accounts</strong> - Verify interest and principal payments</li>
        </ul>
        <p><strong>Important:</strong> Unreconciled accounts can lead to inaccurate financial statements and tax returns.</p>

        <h3>3. Expense Tracking and Categorization</h3>
        <p>Proper expense categorization is essential for:</p>
        <ul>
          <li><strong>Tax compliance</strong> - Separate deductible from non-deductible expenses</li>
          <li><strong>Financial analysis</strong> - Track spending by category</li>
          <li><strong>Budgeting</strong> - Compare actual vs. budgeted expenses</li>
          <li><strong>Audit readiness</strong> - Maintain organized records for HMRC</li>
        </ul>
        <p>Use a consistent chart of accounts and maintain receipts for all business expenses for at least 6 years.</p>

        <h3>4. VAT Compliance</h3>
        <p>For VAT-registered businesses, ensure:</p>
        <ul>
          <li><strong>Correct VAT rates</strong> - Apply standard (20%), reduced (5%), or zero (0%) rates appropriately</li>
          <li><strong>VAT invoices</strong> - Issue compliant VAT invoices for all taxable supplies</li>
          <li><strong>Separate VAT accounts</strong> - Track input and output VAT separately</li>
          <li><strong>Quarterly returns</strong> - Submit VAT returns on time (usually quarterly)</li>
          <li><strong>MTD compliance</strong> - Use Making Tax Digital-compatible software</li>
        </ul>

        <h3>5. Documentation and Record Retention</h3>
        <p>HMRC requires businesses to keep records for at least 6 years. Maintain:</p>
        <ul>
          <li>All invoices and receipts</li>
          <li>Bank statements and credit card statements</li>
          <li>Payroll records</li>
          <li>VAT records and returns</li>
          <li>Correspondence with HMRC</li>
        </ul>
        <p>Store records securely, either physically or digitally, with proper backup systems in place.</p>`
    },
    {
      id: 2,
      title: 'Cloud Accounting Software Comparison',
      type: 'Whitepaper',
      category: 'Bookkeeping',
      description: 'Comparison of Xero, QuickBooks, FreeAgent, and Sage for UK businesses.',
      fileSize: '2.2 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Cloud Accounting Software Comparison for UK Businesses</h2>
        <p>This whitepaper provides an in-depth comparison of the leading cloud accounting solutions available to UK businesses, helping you make an informed decision based on your specific needs, budget, and growth plans.</p>
        
        <h3>Executive Summary</h3>
        <p>Cloud accounting has transformed how UK businesses manage their finances. The market leaders—Xero, QuickBooks, FreeAgent, and Sage—each offer distinct advantages depending on business size, complexity, and industry requirements.</p>
        <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Xero</th>
                <th>QuickBooks</th>
                <th>FreeAgent</th>
                <th>Sage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starting Price</td>
                <td>£25/month</td>
                <td>£10/month</td>
                <td>£29/month</td>
                <td>£30/month</td>
              </tr>
              <tr>
                <td>Bank Feeds</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>MTD for VAT</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Multi-currency</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Payroll</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>✓</td>
                <td>Add-on</td>
              </tr>
            </tbody>
          </table>

        <h3>Xero</h3>
          <p><strong>Best for:</strong> Growing businesses with complex accounting needs, multi-entity operations, or extensive third-party integrations.</p>
          <p><strong>Key Strengths:</strong></p>
          <ul>
            <li>Extensive app marketplace with 1,000+ integrations</li>
            <li>Excellent automation features and workflow capabilities</li>
            <li>Strong multi-currency and multi-entity support</li>
            <li>Robust reporting and analytics</li>
            <li>Large user community and extensive support resources</li>
          </ul>
          <p><strong>Pricing:</strong> Starter (£25), Standard (£35), Premium (£65). Additional costs for payroll and advanced features.</p>
          <p><strong>Ideal for:</strong> Businesses scaling rapidly, those with international operations, or companies requiring extensive customization.</p>

        <h3>QuickBooks</h3>
          <p><strong>Best for:</strong> Small businesses, freelancers, and startups seeking an intuitive, user-friendly interface with solid core features.</p>
          <p><strong>Key Strengths:</strong></p>
          <ul>
            <li>Intuitive, easy-to-learn interface</li>
            <li>Strong mobile app for on-the-go management</li>
            <li>Excellent reporting capabilities</li>
            <li>Good value for money with competitive pricing</li>
            <li>Strong customer support</li>
          </ul>
          <p><strong>Pricing:</strong> Simple Start (£10), Essentials (£25), Plus (£35). Additional costs for payroll and advanced features.</p>
          <p><strong>Ideal for:</strong> Small businesses prioritizing ease of use, freelancers, and companies new to cloud accounting.</p>

        <h3>FreeAgent</h3>
          <p><strong>Best for:</strong> Freelancers, contractors, and micro-businesses needing an all-in-one solution at a predictable flat rate.</p>
          <p><strong>Key Strengths:</strong></p>
          <ul>
            <li>All-in-one solution: accounting, invoicing, expenses, time tracking</li>
            <li>Simple, transparent flat-rate pricing (£29/month)</li>
            <li>Excellent for sole traders and small partnerships</li>
            <li>Built-in tax estimates and HMRC filing</li>
            <li>No hidden costs or tiered pricing</li>
          </ul>
          <p><strong>Pricing:</strong> Single tier at £29/month (no additional costs for core features).</p>
          <p><strong>Ideal for:</strong> Freelancers, contractors, and micro-businesses wanting simplicity and predictable costs.</p>

        <h3>Sage</h3>
          <p><strong>Best for:</strong> Established UK businesses requiring comprehensive features, strong local support, and industry-specific solutions.</p>
          <p><strong>Key Strengths:</strong></p>
          <ul>
            <li>Deep UK market knowledge and compliance expertise</li>
            <li>Industry-specific solutions (construction, retail, manufacturing)</li>
            <li>Strong UK-based customer support</li>
            <li>Comprehensive feature set for complex businesses</li>
            <li>Long-standing reputation and reliability</li>
          </ul>
          <p><strong>Pricing:</strong> Accounting Start (£30), Standard (£45), Plus (£65). Additional costs for payroll and advanced features.</p>
          <p><strong>Ideal for:</strong> Established businesses, those in regulated industries, or companies requiring specialized accounting features.</p>

        <h3>Recommendation Framework</h3>
          <p>When choosing cloud accounting software, consider:</p>
          <ul>
            <li><strong>Business size and complexity</strong> - Match features to your needs</li>
            <li><strong>Growth plans</strong> - Choose software that can scale with you</li>
            <li><strong>Industry requirements</strong> - Some industries have specialized needs</li>
            <li><strong>Budget</strong> - Consider total cost including add-ons</li>
            <li><strong>User experience</strong> - Ensure your team can use it effectively</li>
            <li><strong>Integration needs</strong> - Check compatibility with existing systems</li>
          </ul>`
    },
    {
      id: 3,
      title: 'Cash Flow Management Template',
      type: 'Template',
      category: 'Bookkeeping',
      description: 'Excel template for cash flow forecasting and management.',
      fileSize: '0.5 MB',
      format: 'XLSX',
      date: 'November 2025',
      content: `<h2>Cash Flow Management Template</h2>
        <p>This template helps you forecast and manage cash flow effectively.</p>
        <h3>Features</h3>
        <ul>
          <li>13-week rolling forecast</li>
          <li>Automated calculations</li>
          <li>Variance analysis</li>
          <li>Scenario planning</li>
        </ul>
        <h3>How to Use</h3>
        <p>Enter your opening cash balance, projected income, and expenses. The template automatically calculates net cash flow and ending balances.</p>`
    },
    // VAT
    {
      id: 4,
      title: 'UK VAT Guide 2026',
      type: 'Whitepaper',
      category: 'VAT',
      description: 'Comprehensive guide to UK VAT regulations, MTD compliance, and best practices for businesses.',
      fileSize: '2.4 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>UK VAT Guide 2026</h2>
        <p>Complete guide to UK VAT regulations and compliance requirements.</p>
        <h3>VAT Registration Threshold</h3>
        <p>Current threshold: £90,000 taxable turnover. Must register within 30 days of reaching this threshold.</p>
        <h3>VAT Rates</h3>
        <ul>
          <li>Standard rate: 20%</li>
          <li>Reduced rate: 5%</li>
          <li>Zero rate: 0%</li>
        </ul>
        <h3>MTD Compliance</h3>
        <p>All VAT-registered businesses above the threshold must use MTD-compatible software for VAT returns.</p>`
    },
    {
      id: 5,
      title: 'VAT Scheme Selection Guide',
      type: 'Guide',
      category: 'VAT',
      description: 'Guide to choosing the right VAT scheme for your business: Flat Rate, Cash, or Standard.',
      fileSize: '1.6 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>VAT Scheme Selection Guide</h2>
        <p>Choose the right VAT scheme for your business to optimize tax efficiency.</p>
        <h3>Standard VAT Scheme</h3>
        <p>Best for: Businesses with significant VAT expenses. You reclaim VAT on purchases and pay VAT on sales.</p>
        <h3>Flat Rate Scheme</h3>
        <p>Best for: Low VAT expense businesses. Pay a fixed percentage of turnover. Simplifies record-keeping.</p>
        <h3>Cash Accounting Scheme</h3>
        <p>Best for: Cash flow management. Pay VAT when you receive payment, not when you invoice.</p>`
    },
    {
      id: 6,
      title: 'VAT Return Checklist',
      type: 'Checklist',
      category: 'VAT',
      description: 'Pre-submission checklist to ensure accurate VAT returns and avoid penalties.',
      fileSize: '0.8 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>VAT Return Checklist</h2>
        <p>Use this checklist before submitting your VAT return to HMRC.</p>
        <h3>Pre-Submission Checks</h3>
        <ul>
          <li>Reconcile VAT account balance</li>
          <li>Verify all transactions are recorded</li>
          <li>Check VAT rates applied correctly</li>
          <li>Review partial exemption calculations</li>
          <li>Confirm filing deadline</li>
        </ul>
        <h3>Common Errors to Avoid</h3>
        <ul>
          <li>Incorrect VAT rate application</li>
          <li>Missing input tax claims</li>
          <li>Late submissions</li>
          <li>Incomplete documentation</li>
        </ul>`
    },
    // Compliance
    {
      id: 7,
      title: 'Making Tax Digital Implementation',
      type: 'Whitepaper',
      category: 'Compliance',
      description: 'Practical guide to implementing MTD for VAT with software recommendations and best practices.',
      fileSize: '2.8 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>Making Tax Digital Implementation</h2>
        <p>Complete guide to MTD compliance for VAT.</p>
        <h3>What is MTD?</h3>
        <p>Making Tax Digital requires businesses to keep digital records and submit VAT returns using MTD-compatible software.</p>
        <h3>MTD-Compliant Software</h3>
        <ul>
          <li>Xero - Full MTD integration</li>
          <li>QuickBooks - HMRC-approved</li>
          <li>FreeAgent - Built-in MTD</li>
          <li>Sage - MTD compliant</li>
        </ul>
        <h3>Implementation Steps</h3>
        <ol>
          <li>Choose MTD-compatible software</li>
          <li>Migrate historical data</li>
          <li>Set up HMRC API connection</li>
          <li>Test submission process</li>
        </ol>`
    },
    {
      id: 8,
      title: 'Companies House Filing Guide',
      type: 'Guide',
      category: 'Compliance',
      description: 'Complete guide to Companies House filings including confirmation statements and changes.',
      fileSize: '1.8 MB',
      format: 'PDF',
      date: 'June 2025',
      content: `<h2>Companies House Filing Guide</h2>
        <p>Essential guide to Companies House compliance for UK limited companies.</p>
        <h3>Required Filings</h3>
        <ul>
          <li>Confirmation Statement - Annual</li>
          <li>Annual Accounts - 9 months after year-end</li>
          <li>Changes to directors - Within 14 days</li>
          <li>Changes to shareholders - Within 14 days</li>
          <li>Change of registered office - Within 14 days</li>
        </ul>
        <h3>Penalties</h3>
        <p>Late filing penalties start at £150 and increase based on how late the filing is.</p>`
    },
    {
      id: 9,
      title: 'GDPR Compliance for Accountants',
      type: 'Whitepaper',
      category: 'Compliance',
      description: 'Guide to GDPR compliance for accounting firms handling client financial data.',
      fileSize: '2.1 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>GDPR Compliance for Accountants</h2>
        <p>Ensure your accounting practice complies with GDPR requirements.</p>
        <h3>Data Protection Principles</h3>
        <ul>
          <li>Lawful, fair, and transparent processing</li>
          <li>Collected for specified purposes</li>
          <li>Adequate and relevant data</li>
          <li>Accurate and up-to-date</li>
          <li>Kept no longer than necessary</li>
        </ul>
        <h3>Client Data Security</h3>
        <p>Implement secure storage, access controls, and encryption for client financial data.</p>`
    },
    // Business Setup
    {
      id: 10,
      title: 'Company Formation Checklist',
      type: 'Checklist',
      category: 'Business Setup',
      description: 'Complete checklist for incorporating a UK limited company.',
      fileSize: '1.2 MB',
      format: 'PDF',
      date: 'January 2026',
      content: `<h2>Company Formation Checklist</h2>
        <p>Step-by-step guide to incorporating a UK limited company.</p>
        <h3>Pre-Incorporation</h3>
        <ul>
          <li>Choose company name</li>
          <li>Decide company structure</li>
          <li>Appoint directors</li>
          <li>Allocate shares</li>
          <li>Prepare articles of association</li>
        </ul>
        <h3>Registration Process</h3>
        <ul>
          <li>Register with Companies House</li>
          <li>Register for Corporation Tax</li>
          <li>Register for VAT (if applicable)</li>
          <li>Set up business bank account</li>
          <li>Register for PAYE (if employing staff)</li>
        </ul>`
    },
    {
      id: 11,
      title: 'Business Bank Account Guide',
      type: 'Guide',
      category: 'Business Setup',
      description: 'Guide to choosing and setting up a business bank account for your UK company.',
      fileSize: '1.5 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Business Bank Account Guide</h2>
        <p>How to choose and set up the right business bank account.</p>
        <h3>Types of Business Accounts</h3>
        <ul>
          <li>Business current account</li>
          <li>Business savings account</li>
          <li>Merchant account for card payments</li>
        </ul>
        <h3>What to Look For</h3>
        <ul>
          <li>Monthly fees and charges</li>
          <li>Transaction limits</li>
          <li>Online banking features</li>
          <li>Integration with accounting software</li>
        </ul>`
    },
    {
      id: 12,
      title: 'Business Insurance Checklist',
      type: 'Checklist',
      category: 'Business Setup',
      description: 'Essential insurance coverage for UK businesses.',
      fileSize: '1.0 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>Business Insurance Checklist</h2>
        <p>Essential insurance coverage for your UK business.</p>
        <h3>Required Insurance</h3>
        <ul>
          <li>Employers' Liability Insurance (if employing staff)</li>
        </ul>
        <h3>Recommended Insurance</h3>
        <ul>
          <li>Public Liability Insurance</li>
          <li>Professional Indemnity Insurance</li>
          <li>Business Contents Insurance</li>
          <li>Cyber Insurance</li>
        </ul>`
    },
    // Payroll
    {
      id: 13,
      title: 'Payroll Compliance Checklist',
      type: 'Checklist',
      category: 'Payroll',
      description: 'Essential checklist for payroll compliance including RTI, auto-enrolment, and reporting.',
      fileSize: '1.5 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>Payroll Compliance Checklist</h2>
        <p>Ensure your payroll meets all UK compliance requirements.</p>
        <h3>RTI (Real Time Information)</h3>
        <ul>
          <li>Submit FPS (Full Payment Summary) on or before payday</li>
          <li>Submit EPS (Employer Payment Summary) monthly</li>
          <li>Use HMRC-approved payroll software</li>
        </ul>
        <h3>Auto-Enrolment</h3>
        <ul>
          <li>Assess employee eligibility</li>
          <li>Enrol eligible employees</li>
          <li>Pay minimum contributions</li>
          <li>Submit declaration of compliance</li>
        </ul>`
    },
    {
      id: 14,
      title: 'Auto-Enrolment Guide for Employers',
      type: 'Guide',
      category: 'Payroll',
      description: 'Complete guide to pension auto-enrolment compliance for UK employers.',
      fileSize: '2.0 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>Auto-Enrolment Guide for Employers</h2>
        <p>Complete guide to pension auto-enrolment compliance.</p>
        <h3>Staging Dates</h3>
        <p>Each employer has a staging date based on when they started their PAYE scheme.</p>
        <h3>Contribution Rates</h3>
        <ul>
          <li>Minimum employer contribution: 3%</li>
          <li>Minimum employee contribution: 5%</li>
          <li>Total minimum: 8%</li>
        </ul>
        <h3>Re-Enrolment</h3>
        <p>Re-enrol eligible employees every 3 years who have opted out.</p>`
    },
    {
      id: 15,
      title: 'Employee Benefits Guide',
      type: 'Guide',
      category: 'Payroll',
      description: 'Guide to tax-efficient employee benefits and salary sacrifice schemes.',
      fileSize: '1.8 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>Employee Benefits Guide</h2>
        <p>Tax-efficient employee benefits and salary sacrifice schemes.</p>
        <h3>Tax-Free Benefits</h3>
        <ul>
          <li>Pension contributions</li>
          <li>Childcare vouchers (up to certain limits)</li>
          <li>Bicycle scheme</li>
        </ul>
        <h3>Salary Sacrifice</h3>
        <p>Exchange part of salary for non-cash benefits. Can save tax and National Insurance for both employer and employee.</p>`
    },
    // Accounting
    {
      id: 16,
      title: 'Year-End Accounts Preparation Guide',
      type: 'Guide',
      category: 'Accounting',
      description: 'Complete guide to preparing year-end accounts, including deadlines and required documentation.',
      fileSize: '3.2 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>Year-End Accounts Preparation Guide</h2>
        <p>Complete guide to preparing year-end accounts for UK companies.</p>
        <h3>Components of Year-End Accounts</h3>
        <ul>
          <li>Balance Sheet</li>
          <li>Profit and Loss Statement</li>
          <li>Notes to the accounts</li>
          <li>Directors' Report</li>
        </ul>
        <h3>Deadlines</h3>
        <p>Private companies: 9 months after year-end. Public companies: 6 months after year-end.</p>`
    },
    {
      id: 17,
      title: 'Management Accounts Template',
      type: 'Template',
      category: 'Accounting',
      description: 'Excel template for monthly management accounts with variance analysis.',
      fileSize: '0.8 MB',
      format: 'XLSX',
      date: 'December 2025',
      content: `<h2>Management Accounts Template</h2>
        <p>Template for monthly management accounts with variance analysis.</p>
        <h3>What's Included</h3>
        <ul>
          <li>P&L Statement</li>
          <li>Balance Sheet</li>
          <li>Cash Flow Statement</li>
          <li>Variance Analysis</li>
          <li>KPI Dashboard</li>
        </ul>`
    },
    {
      id: 18,
      title: 'IFRS vs UK IFRS Guide',
      type: 'Whitepaper',
      category: 'Accounting',
      description: 'Comparison of IFRS and UK IFRS accounting standards for UK businesses.',
      fileSize: '2.5 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>IFRS vs UK IFRS Guide</h2>
        <p>Understanding the differences between IFRS and UK IFRS.</p>
        <h3>UK IFRS</h3>
        <p>UK Generally Accepted Accounting Practice. Used by most UK private companies.</p>
        <h3>IFRS</h3>
        <p>International Financial Reporting Standards. Required for listed companies and some AIM companies.</p>
        <h3>Key Differences</h3>
        <ul>
          <li>Revenue recognition</li>
          <li>Lease accounting</li>
          <li>Financial instrument reporting</li>
        </ul>`
    },
    // Tax
    {
      id: 19,
      title: 'Corporation Tax Planning Guide',
      type: 'Guide',
      category: 'Tax',
      description: 'Strategic guide to corporation tax planning, allowances, and optimization opportunities.',
      fileSize: '2.1 MB',
      format: 'PDF',
      date: 'August 2025',
      content: `<h2>Corporation Tax Planning Guide</h2>
        <p>Strategic guide to corporation tax planning and optimization.</p>
        <h3>Current Rates (2025/26)</h3>
        <ul>
          <li>Profits up to £50,000: 19%</li>
          <li>Profits £50,000 - £250,000: 26.5% (marginal relief)</li>
          <li>Profits over £250,000: 25%</li>
        </ul>
        <h3>Planning Opportunities</h3>
        <ul>
          <li>Capital allowances</li>
          <li>R&D tax credits</li>
          <li>Pension contributions</li>
          <li>Timing of expenditures</li>
        </ul>`
    },
    {
      id: 20,
      title: 'R&D Tax Credit Checklist',
      type: 'Checklist',
      category: 'Tax',
      description: 'Step-by-step checklist to determine eligibility and prepare successful R&D tax credit claims.',
      fileSize: '1.1 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>R&D Tax Credit Checklist</h2>
        <p>Determine eligibility and prepare successful R&D tax credit claims.</p>
        <h3>Eligibility Criteria</h3>
        <ul>
          <li>UK-based company</li>
          <li>Subject to UK corporation tax</li>
          <li>Project seeks advance in science or technology</li>
          <li>Resolves scientific or technological uncertainty</li>
        </ul>
        <h3>Qualifying Activities</h3>
        <ul>
          <li>Research and development</li>
          <li>Software development</li>
          <li>Engineering projects</li>
          <li>Process improvements</li>
        </ul>`
    },
    {
      id: 21,
      title: 'Dividend Tax Planning Guide',
      type: 'Guide',
      category: 'Tax',
      description: 'Guide to dividend taxation and planning strategies for company directors.',
      fileSize: '1.4 MB',
      format: 'PDF',
      date: 'September 2025',
      content: `<h2>Dividend Tax Planning Guide</h2>
        <p>Guide to dividend taxation for UK company directors.</p>
        <h3>Current Dividend Tax Rates (2025/26)</h3>
        <ul>
          <li>Basic rate (up to £37,700): 8.75%</li>
          <li>Higher rate (up to £125,140): 33.75%</li>
          <li>Additional rate (over £125,140): 39.35%</li>
        </ul>
        <h3>Dividend Allowance</h3>
        <p>£500 tax-free dividend allowance for 2024/25 and 2025/26.</p>`
    },
    {
      id: 22,
      title: 'Capital Allowances Guide',
      type: 'Guide',
      category: 'Tax',
      description: 'Guide to capital allowances for plant, machinery, and equipment.',
      fileSize: '1.7 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>Capital Allowances Guide</h2>
        <p>Maximize tax relief on business assets through capital allowances.</p>
        <h3>Annual Investment Allowance (AIA)</h3>
        <p>100% tax relief on qualifying expenditure up to £1 million per year.</p>
        <h3>Writing Down Allowance</h3>
        <ul>
          <li>Main rate assets: 18%</li>
          <li>Special rate assets: 6%</li>
        </ul>
        <h3>First Year Allowances</h3>
        <p>100% relief on energy-efficient equipment and zero-emission vehicles.</p>`
    },
    {
      id: 23,
      title: 'Strategic Tax Planning Toolkit',
      type: 'Toolkit',
      category: 'Tax',
      description: 'Comprehensive toolkit for strategic tax planning including worksheets, checklists, and optimization strategies.',
      fileSize: '3.5 MB',
      format: 'ZIP',
      date: 'January 2026',
      content: `<h2>Strategic Tax Planning Toolkit</h2>
        <p>Complete toolkit for strategic tax planning with practical worksheets and optimization strategies.</p>
        <h3>Toolkit Contents</h3>
        <ul>
          <li>Corporation tax planning worksheet</li>
          <li>R&D tax eligibility assessment form</li>
          <li>Capital allowances calculator</li>
          <li>Dividend planning matrix</li>
          <li>Loss relief optimization guide</li>
        </ul>
        <h3>How to Use</h3>
        <p>Download the toolkit and follow the step-by-step guides to optimize your tax position legally and efficiently.</p>`
    },
    {
      id: 24,
      title: 'Business Valuation Guide',
      type: 'Guide',
      category: 'Accounting',
      description: 'Guide to business valuation methods and techniques for UK SMEs considering sale, investment, or succession planning.',
      fileSize: '2.8 MB',
      format: 'PDF',
      date: 'December 2025',
      content: `<h2>Business Valuation Guide</h2>
        <p>Understanding business valuation is crucial for sale, investment, or succession planning.</p>
        <h3>Valuation Methods</h3>
        <ul>
          <li>Discounted Cash Flow (DCF) method</li>
          <li>Multiple of Earnings method</li>
          <li>Net Asset Value method</li>
          <li>Industry-specific multipliers</li>
        </ul>
        <h3>Key Factors</h3>
        <p>Revenue growth, profit margins, market position, and future prospects all impact valuation.</p>`
    },
    {
      id: 25,
      title: 'Cybersecurity for Accountants',
      type: 'Whitepaper',
      category: 'Compliance',
      description: 'Essential cybersecurity measures for accounting practices handling sensitive client financial data.',
      fileSize: '2.3 MB',
      format: 'PDF',
      date: 'November 2025',
      content: `<h2>Cybersecurity for Accountants</h2>
        <p>Protecting client financial data is paramount for accounting practices.</p>
        <h3>Security Measures</h3>
        <ul>
          <li>Multi-factor authentication</li>
          <li>Endpoint protection</li>
          <li>Secure file transfer protocols</li>
          <li>Regular security audits</li>
          <li>Staff training programs</li>
        </ul>
        <h3>Incident Response</h3>
        <p>Have a documented incident response plan ready for potential security breaches.</p>`
    },
    {
      id: 26,
      title: 'International Expansion Guide',
      type: 'Guide',
      category: 'Business Setup',
      description: 'Guide for UK SMEs considering international expansion including market entry strategies and tax considerations.',
      fileSize: '3.0 MB',
      format: 'PDF',
      date: 'October 2025',
      content: `<h2>International Expansion Guide</h2>
        <p>Strategic guide for UK SMEs expanding into international markets.</p>
        <h3>Market Entry Strategies</h3>
        <ul>
          <li>Direct export</li>
          <li>Licensing and franchising</li>
          <li>Joint ventures</li>
          <li>Foreign subsidiaries</li>
        </ul>
        <h3>Tax Considerations</h3>
        <p>Understand transfer pricing, double taxation treaties, and local tax obligations.</p>`
    },
    {
      id: 27,
      title: 'Pension Auto-Enrolment Toolkit',
      type: 'Toolkit',
      category: 'Payroll',
      description: 'Complete toolkit for employers managing pension auto-enrolment compliance and employee communications.',
      fileSize: '2.6 MB',
      format: 'ZIP',
      date: 'September 2025',
      content: `<h2>Pension Auto-Enrolment Toolkit</h2>
        <p>Complete toolkit for managing pension auto-enrolment compliance.</p>
        <h3>Toolkit Contents</h3>
        <ul>
          <li>Employee assessment worksheet</li>
          <li>Contribution calculator</li>
          <li>Employee communication templates</li>
          <li>Compliance checklist</li>
          <li>Re-enrolment tracker</li>
        </ul>
        <h3>Key Dates</h3>
        <p>Track your staging date, assessment deadlines, and re-enrolment dates.</p>`
    },
    {
      id: 28,
      title: 'Financial KPI Dashboard Template',
      type: 'Template',
      category: 'Accounting',
      description: 'Excel template for creating comprehensive financial KPI dashboards with automated calculations and visualizations.',
      fileSize: '1.2 MB',
      format: 'XLSX',
      date: 'August 2025',
      content: `<h2>Financial KPI Dashboard Template</h2>
        <p>Create comprehensive financial KPI dashboards with this Excel template.</p>
        <h3>KPIs Included</h3>
        <ul>
          <li>Gross profit margin</li>
          <li>Operating profit margin</li>
          <li>Current ratio</li>
          <li>Debt-to-equity ratio</li>
          <li>Return on investment</li>
        </ul>
        <h3>Features</h3>
        <p>Automated calculations, trend analysis, and visual charts.</p>`
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
              Download our comprehensive guides, whitepapers, and checklists to help you navigate UK accounting 
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
              href="/uk/contact" 
              className="font-sans bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors text-center tracking-wide"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/uk/blog" 
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
