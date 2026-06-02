'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { customEase } from '@/lib/utils/animation';
import ThreeBackground from '@/components/shared/ThreeBackground';

export default function RootPage() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const handleMarketSelect = (market: 'uk' | 'uae') => {
  //   localStorage.setItem('armh_market', market);
  // };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4 py-12 md:py-20 relative">
      <ThreeBackground />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEase }}
        className="max-w-5xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.15]">
            ARMH & Co
          </h1>
          <p className="font-sans tracking-[0.25em] text-xs font-semibold uppercase text-emerald-400 mb-6">
            Chartered Accountants & Tax Advisors
          </p>
          <p className="font-sans text-charcoal-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            International accounting expertise. Local regulatory precision. Built for businesses that demand <span className="text-[#c5a854]">both</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12"
        >
          <Link
            href="/uk"
            // onClick={() => handleMarketSelect('uk')}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="bg-charcoal-800 border-l-4 border-emerald-600 rounded-xl p-8 md:p-10 hover:border-emerald-400 transition-all"
            >
              <div className="w-16 h-12 mx-auto mb-6">
                <Image
                  src="/flags/uk.svg"
                  alt="United Kingdom"
                  width={64}
                  height={48}
                  className="rounded"
                  priority
                />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">United Kingdom</h2>
              <p className="font-sans text-charcoal-300 text-sm md:text-base">
                HMRC · Companies House · ACCA Regulated
              </p>
            </motion.div>
          </Link>

          <Link
            href="/uae"
            // onClick={() => handleMarketSelect('uae')}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="bg-charcoal-800 border-l-4 border-emerald-600 rounded-xl p-8 md:p-10 hover:border-emerald-400 transition-all"
            >
              <div className="w-16 h-12 mx-auto mb-6">
                <Image
                  src="/flags/uae.svg"
                  alt="United Arab Emirates"
                  width={64}
                  height={48}
                  className="rounded"
                  priority
                />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">United Arab Emirates</h2>
              <p className="font-sans text-charcoal-300 text-sm md:text-base">
                FTA Registered · ACCA · ICAEW · All 7 Emirates
              </p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 text-charcoal-500 text-xs md:text-sm font-sans"
        >
          <span>ACCA</span>
          <span className="text-emerald-600">·</span>
          <span>ICAEW</span>
          <span className="text-emerald-600">·</span>
          <span>HMRC Registered</span>
          <span className="text-emerald-600">·</span>
          <span>Xero Partner</span>
          <span className="text-emerald-600">·</span>
          <span>QuickBooks Certified</span>
          <span className="text-emerald-600">·</span>
          <span>SECP Recognized</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
