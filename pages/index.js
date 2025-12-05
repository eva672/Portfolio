'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const mainRef = useRef(null);

  // Handle scroll and touch events
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;
    
    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down
        scrollToSection('next');
      } else {
        // Scrolling up
        scrollToSection('prev');
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isScrolling || !touchStartY) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      if (Math.abs(diff) > 50) { // Threshold to prevent accidental scrolls
        if (diff > 0) {
          // Swiping up
          scrollToSection('next');
        } else {
          // Swiping down
          scrollToSection('prev');
        }
        touchStartY = 0; // Reset to prevent multiple triggers
      }
    };

    const scrollToSection = (direction) => {
      if (isScrolling) return;
      
      const currentSection = document.elementFromPoint(
        window.innerWidth / 2, 
        window.innerHeight / 2
      );
      
      if (!currentSection) return;
      
      const targetSection = direction === 'next' 
        ? currentSection.nextElementSibling
        : currentSection.previousElementSibling;
      
      if (targetSection?.tagName === 'SECTION') {
        isScrolling = true;
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Prevent multiple scrolls until current one is complete
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Add event listeners
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('wheel', handleWheel, { passive: false });
      mainElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      mainElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    // Cleanup
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('wheel', handleWheel);
        mainElement.removeEventListener('touchstart', handleTouchStart);
        mainElement.removeEventListener('touchmove', handleTouchMove);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>Eva Manuska - Portfolio</title>
        <meta name="description" content="Eva Manuska's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />

      <main 
        ref={mainRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory pt-16"
      >
        <section id="home" className="snap-start min-h-screen flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="snap-start min-h-screen flex items-center bg-gray-50">
          <About />
        </section>
        
        <section id="projects" className="snap-start min-h-screen flex items-center">
          <Projects />
        </section>
        
        <section id="contact" className="snap-start min-h-screen flex items-center bg-gray-50">
          <Contact />
        </section>
      </main>
    </div>
  );
}