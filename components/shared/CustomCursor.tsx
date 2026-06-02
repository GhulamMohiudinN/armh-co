'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface CustomCursorProps {
  isMobileMenuOpen?: boolean;
}

const CustomCursor = ({ isMobileMenuOpen = false }: CustomCursorProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor movement
  const springConfig = { damping: 30, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for data-cursor='hover' attribute or interactive elements
      if (
        target.dataset.cursor === 'hover' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice || isMobileMenuOpen) return null;

  return (
    <div className="hidden md:block">
      {/* Main cursor dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 400,
          }}
          className="w-2 h-2 bg-emerald-500 rounded-full"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 1 : 0.5,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 400,
          }}
          className="w-8 h-8 border-2 border-emerald-500 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
