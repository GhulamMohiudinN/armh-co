'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CredentialBadgeProps {
  variant?: 'dark' | 'light';
}

const CredentialBadge = ({ variant = 'dark' }: CredentialBadgeProps) => {
  const credentials = [
    'ACCA',
    'ICAEW',
    'HMRC Registered',
    'Xero Partner',
    'QuickBooks Certified',
    'SECP Recognized',
    'MTD Ready',
    'GDPR Compliant'
  ];

  const baseClasses = variant === 'dark'
    ? 'text-charcoal-300'
    : 'text-charcoal-500';

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden">
      {/* Mobile: Infinite Marquee */}
      <div className="md:hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
          initial={{ x: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
        >
          {[...credentials, ...credentials].map((cred, index) => (
            <span key={index} className={`font-medium ${baseClasses} text-xs mx-4 inline-flex items-center gap-2`}>
              {cred}
              <span className="text-emerald-400">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Desktop: Static Grid */}
      <div className="hidden md:block">
        <div className={`flex flex-wrap items-center justify-center gap-4 ${baseClasses} text-sm`}>
          {credentials.map((cred, index) => (
            <span key={index} className="font-medium">
              {cred}
              {index < credentials.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredentialBadge;
