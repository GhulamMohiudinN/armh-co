import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'ARMH & Co | UAE Accounting, VAT & Corporate Tax | FTA Registered',
  description: 'Expert VAT compliance, UAE corporate tax, bookkeeping, and CFO advisory built specifically for the UAE regulatory environment. FTA Registered Tax Agents.',
}

export default function UAELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navbar market="uae" />
      {children}
      <Footer market="uae" />
    </div>
  )
}
