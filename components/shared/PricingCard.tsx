'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { customEase } from '@/lib/utils/animation';

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  note?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
}

const PricingCard = ({ tier, price, features, highlighted = false, ctaText, note, onCtaClick, ctaHref }: PricingCardProps) => {
  const baseClasses = highlighted
    ? 'bg-gradient-to-br from-charcoal-800 to-charcoal-900 border-emerald-500/50 relative shadow-2xl shadow-emerald-500/10'
    : 'bg-gradient-to-br from-charcoal-800 to-charcoal-900 border-charcoal-700 hover:border-emerald-500/30 transition-colors';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: customEase }}
      className={`rounded-2xl border p-8 md:p-10 ${baseClasses}`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="font-sans bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide shadow-lg shadow-emerald-500/30">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="font-serif text-2xl font-semibold text-white mb-3 tracking-tight">{tier}</h3>
      <div className="mb-6">
        <span className="font-serif text-4xl font-bold text-emerald-400">{price}</span>
        {note && <p className="font-sans text-charcoal-300 text-sm mt-2">{note}</p>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-charcoal-300 text-sm font-sans">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      {ctaHref ? (
        <Link href={ctaHref} className={`font-sans w-full py-3 rounded-xl font-semibold transition-all text-center ${
          highlighted
            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/20 px-2'
            : 'bg-transparent border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 px-2'
        }`}>
          {ctaText}
        </Link>
      ) : (
        <button onClick={onCtaClick} className={`font-sans w-full py-3 rounded-xl font-semibold transition-all ${
          highlighted
            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/20'
            : 'bg-transparent border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500'
        }`}>
          {ctaText}
        </button>
      )}
    </motion.div>
  );
};

export default PricingCard;
