import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'ARMH & Co | UK Accounting & Tax Compliance Specialists | ACCA Regulated',
  description: 'Expert bookkeeping, VAT, corporation tax, and payroll for UK SMEs and newly incorporated businesses. ACCA & ICAEW qualified.',
}

export default function UKLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navbar market="uk" />
      {children}
      <Footer market="uk" />
    </div>
  )
}
