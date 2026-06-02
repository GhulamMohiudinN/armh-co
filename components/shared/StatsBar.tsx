'use client';

import { motion } from 'framer-motion';

interface StatItem {
  number: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
}

const StatsBar = ({ stats }: StatsBarProps) => {
  return (
    <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 tracking-tight relative">
                {stat.number}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="font-sans text-charcoal-300 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBar;
