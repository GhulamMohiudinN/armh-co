'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useTransform, useMotionValue } from 'framer-motion';

interface ServiceMarqueeProps {
  items: string[];
}

const ServiceMarquee = ({ items }: ServiceMarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

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
        duration: 12,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 12,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div 
      className="overflow-hidden py-4 bg-gradient-to-b from-charcoal-950/95 to-charcoal-950/50 backdrop-blur-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile & Desktop: Infinite Marquee */}
      <motion.div
        ref={containerRef}
        className="flex whitespace-nowrap"
        animate={controls}
        initial={{ x: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <button
            key={index}
            data-cursor="hover"
            className="font-sans mx-8 text-charcoal-300 inline-flex items-center gap-2 text-sm md:text-base hover:text-emerald-400 transition-colors"
          >
            {item}
            <span className="text-emerald-400">·</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceMarquee;
