'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { customEase } from '@/lib/utils/animation';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          whileHover={{ scale: 1.01 }}
          className="border border-charcoal-100 rounded-2xl overflow-hidden bg-stone-50 shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-charcoal-50 transition-colors"
          >
            <span className="font-serif text-lg font-semibold text-charcoal-900 tracking-tight">{item.question}</span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3, ease: customEase }}
              className="bg-emerald-100 rounded-full p-1"
            >
              <ChevronDown className="w-5 h-5 text-emerald-600" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: customEase }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-5 font-sans text-charcoal-600 leading-relaxed border-t border-charcoal-100 pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
