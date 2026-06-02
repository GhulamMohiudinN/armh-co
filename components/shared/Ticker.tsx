'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TickerProps {
  items: string[];
}

const Ticker = ({ items }: TickerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  };

  return (
    <div 
      className="overflow-hidden py-4 bg-charcoal-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile: Static 2-column grid */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4 px-5">
          {items.map((item, index) => (
            <span key={index} className="font-sans text-charcoal-300 text-sm text-center">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: Infinite marquee */}
      <motion.div
        className="hidden md:flex whitespace-nowrap"
        animate={controls}
        initial={{ x: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="font-sans mx-12 text-charcoal-300 inline-flex items-center gap-2 text-sm md:text-base">
            {item}
            <span className="text-emerald-400">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
