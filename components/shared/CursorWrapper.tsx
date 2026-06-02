'use client';

import { useState, createContext, useContext } from 'react';
import CustomCursor from './CustomCursor';

interface CursorContextType {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursorContext must be used within CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CursorContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
      <CustomCursor isMobileMenuOpen={isMobileMenuOpen} />
      {children}
    </CursorContext.Provider>
  );
};

const CursorWrapper = () => {
  return <CustomCursor isMobileMenuOpen={false} />;
};

export default CursorWrapper;
