'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon | string;
  title: string;
  description: string;
  link: string;
  variant?: 'light' | 'dark';
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link, variant = 'light', image }: ServiceCardProps) => {
  const baseClasses = variant === 'dark'
    ? 'bg-charcoal-800 border-charcoal-700 text-white hover:border-emerald-600'
    : 'bg-stone-50 border-charcoal-100 text-charcoal-900 hover:border-emerald-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3, ease: 'easeInOut' } }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl border p-6 md:p-8 ${baseClasses} relative overflow-hidden`}
    >
      {image && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/70 via-charcoal-800/60 to-charcoal-700/50 backdrop-blur-sm"></div>
        </>
      )}
      <Link href={link} className="group block h-full relative z-10">
        <div className="flex items-start justify-between mb-6">
          {typeof Icon === 'string' ? (
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl tracking-tight">{Icon}</span>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
          )}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-3 tracking-tight text-white">{title}</h3>
        <p className="font-sans text-sm md:text-base mb-6 text-white leading-relaxed">{description}</p>
        <span className="font-sans text-emerald-400 font-medium text-sm md:text-base flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
