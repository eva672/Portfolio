'use client';
import { createContext, useContext, useState, useEffect, useRef } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Initialize observer with updated options
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      if (section.id) {
        observerRef.current?.observe(section);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};

export default SectionContext;
