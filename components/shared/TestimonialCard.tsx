'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  client: string;
  company: string;
  location: string;
}

const TestimonialCard = ({ quote, client, company, location }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-charcoal-700 hover:border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
        ))}
      </div>
      <p className="text-white mb-6 leading-relaxed text-sm md:text-base">"{quote}"</p>
      <div className="border-t border-charcoal-700 pt-4">
        <div className="font-semibold text-white text-base">{client}</div>
        <div className="text-charcoal-300 text-sm mt-1">{company}</div>
        <div className="text-emerald-400 text-xs mt-1 font-medium">{location}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
