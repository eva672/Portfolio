'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const sections = useRef([]);

  // Handle scroll and touch events
  useEffect(() => {
    // Handle mouse wheel for desktop
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Scrolling down
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        const nextSection = currentSection?.nextElementSibling;
        if (nextSection?.tagName === 'SECTION') {
          e.preventDefault();
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scrolling up
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        const prevSection = currentSection?.previousElementSibling;
        if (prevSection?.tagName === 'SECTION') {
          e.preventDefault();
          prevSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      if (Math.abs(diff) > 50) { // Threshold to prevent accidental scrolls
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        
        if (diff > 0) {
          // Swiping up
          const nextSection = currentSection?.nextElementSibling;
          if (nextSection?.tagName === 'SECTION') {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            touchStartY = 0; // Reset to prevent multiple triggers
          }
        } else {
          // Swiping down
          const prevSection = currentSection?.previousElementSibling;
          if (prevSection?.tagName === 'SECTION') {
            prevSection.scrollIntoView({ behavior: 'smooth' });
            touchStartY = 0; // Reset to prevent multiple triggers
          }
        }
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
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

      <main className="h-screen overflow-y-auto snap-y snap-mandatory pt-16">
        <section id="home" className="snap-start">
          <Hero />
        </section>
        
        <section id="about" className="snap-start">
          <About />
        </section>
        
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
    </div>
  );
}