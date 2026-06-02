'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';
import { customEase } from '@/lib/utils/animation';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

interface NavbarProps {
  market: 'uk' | 'uae';
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

const Navbar = ({ market, onMobileMenuToggle }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionSelectorOpen, setIsRegionSelectorOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuToggle = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
    if (onMobileMenuToggle) {
      onMobileMenuToggle(isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    router.push(`/${selectedMarket}`);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950 shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="md:ml-8">
            <Logo market={market} variant="dark" />
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="font-sans text-white hover:text-emerald-400 transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.div>
            ))}
            <div className="relative">
              <motion.button
                onClick={() => setIsRegionSelectorOpen(!isRegionSelectorOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: customEase }}
                className="flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-6 h-4 flex-shrink-0"
                >
                  <Image
                    src={`/flags/${market}.svg`}
                    alt={market === 'uk' ? 'UK' : 'UAE'}
                    width={24}
                    height={16}
                    className="rounded-sm"
                  />
                </motion.div>
                <ChevronDown className={`w-4 h-4 transition-transform text-emerald-400 ${isRegionSelectorOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {isRegionSelectorOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: customEase }}
                    className="absolute right-0 mt-2 w-48 bg-charcoal-900 border border-emerald-500/30 rounded-lg shadow-2xl shadow-emerald-500/10 overflow-hidden"
                  >
                    <motion.button
                      onClick={() => handleRegionSelect('uk')}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: customEase }}
                      className="w-full px-4 py-3 text-left font-sans text-white hover:bg-charcoal-800 hover:text-emerald-400 transition-colors flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-6 h-4 flex-shrink-0"
                      >
                        <Image
                          src="/flags/uk.svg"
                          alt="UK"
                          width={24}
                          height={16}
                          className="rounded-sm"
                        />
                      </motion.div>
                      United Kingdom
                    </motion.button>
                    <motion.button
                      onClick={() => handleRegionSelect('uae')}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: customEase }}
                      className="w-full px-4 py-3 text-left font-sans text-white hover:bg-charcoal-800 hover:text-emerald-400 transition-colors flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-6 h-4 flex-shrink-0"
                      >
                        <Image
                          src="/flags/uae.svg"
                          alt="UAE"
                          width={24}
                          height={16}
                          className="rounded-sm"
                        />
                      </motion.div>
                      United Arab Emirates
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            onClick={() => handleMobileMenuToggle(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: customEase }}
            className="md:hidden text-white p-2"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => handleMobileMenuToggle(false)} market={market} />
    </nav>
  );
};

export default Navbar;
