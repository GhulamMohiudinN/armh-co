'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  market: 'uk' | 'uae';
}

const MobileMenu = ({ isOpen, onClose, market }: MobileMenuProps) => {
  const [isRegionSelectorOpen, setIsRegionSelectorOpen] = useState(false);
  const router = useRouter();

  // Scroll lock mechanism
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = market === 'uk'
    ? [
        { label: 'Services', href: '/uk#services' },
        { label: 'About', href: '/uk/about' },
        { label: 'Industries', href: '/uk/industries' },
        { label: 'Pricing', href: '/uk/pricing' },
        { label: 'Blog', href: '/uk/blog' },
        { label: 'Contact', href: '/uk/contact' },
      ]
    : [
        { label: 'Services', href: '/uae#services' },
        { label: 'About', href: '/uae/about' },
        { label: 'Industries', href: '/uae/industries' },
        { label: 'Pricing', href: '/uae/pricing' },
        { label: 'Blog', href: '/uae/blog' },
        { label: 'Contact', href: '/uae/contact' },
      ];

  const handleRegionSelect = (selectedMarket: 'uk' | 'uae') => {
    localStorage.setItem('armh_market', selectedMarket);
    setIsRegionSelectorOpen(false);
    onClose();
    router.push(`/${selectedMarket}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-gradient-to-b from-charcoal-950 to-charcoal-900"
        >
          <div className="flex flex-col h-full px-5 py-6">
            {/* Header with close button */}
            <div className="flex items-center justify-between mb-12">
              <Logo market={market} variant="light" />
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="text-white p-2 hover:bg-charcoal-800 rounded-xl transition-colors"
              >
                <X size={28} />
              </motion.button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-2xl text-white hover:text-emerald-400 transition-colors block py-4 px-6 rounded-xl hover:bg-charcoal-800/50 hover:backdrop-blur-sm border border-transparent hover:border-emerald-500/30"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Region selector at bottom */}
            <div className="mt-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
                className="bg-charcoal-800/50 backdrop-blur-sm rounded-2xl p-4 border border-charcoal-700"
              >
                <button
                  onClick={() => setIsRegionSelectorOpen(!isRegionSelectorOpen)}
                  className="font-sans flex items-center justify-between gap-2 text-white hover:text-emerald-400 transition-colors py-2 text-lg w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-5 flex-shrink-0">
                      <Image
                        src={`/flags/${market}.svg`}
                        alt={market === 'uk' ? 'UK' : 'UAE'}
                        width={32}
                        height={20}
                        className="rounded-sm"
                      />
                    </div>
                    <span className="font-semibold">{market === 'uk' ? 'United Kingdom' : 'United Arab Emirates'}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isRegionSelectorOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isRegionSelectorOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="space-y-2">
                        <motion.button
                          onClick={() => handleRegionSelect('uk')}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-left font-sans text-charcoal-300 hover:text-emerald-400 hover:bg-charcoal-700/50 transition-all py-3 px-4 rounded-xl flex items-center gap-3"
                        >
                          <div className="w-8 h-5 flex-shrink-0">
                            <Image
                              src="/flags/uk.svg"
                              alt="UK"
                              width={32}
                              height={20}
                              className="rounded-sm"
                            />
                          </div>
                          <span className="font-medium">United Kingdom</span>
                        </motion.button>
                        <motion.button
                          onClick={() => handleRegionSelect('uae')}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full text-left font-sans text-charcoal-300 hover:text-emerald-400 hover:bg-charcoal-700/50 transition-all py-3 px-4 rounded-xl flex items-center gap-3"
                        >
                          <div className="w-8 h-5 flex-shrink-0">
                            <Image
                              src="/flags/uae.svg"
                              alt="UAE"
                              width={32}
                              height={20}
                              className="rounded-sm"
                            />
                          </div>
                          <span className="font-medium">United Arab Emirates</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
