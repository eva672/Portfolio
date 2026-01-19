'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    // Initialize sections
    sections.current = document.querySelectorAll('section[id]');
    
    // Set up intersection observer for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );
    
    // Observe all sections
    sections.current.forEach(section => observer.observe(section));
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      sections.current.forEach(section => observer.unobserve(section));
    };
  }, []);

  const nav = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    // allow modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobile) {
      setIsOpen(false);
    }
    
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    
    if (el) {
      // Calculate the correct scroll position
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without causing a page reload
      if (history.pushState) {
        window.history.pushState(null, null, `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 md:hidden bg-white shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed left-0 top-0 h-screen w-64 bg-white z-40 border-r border-black/10 px-6 py-8 transition-transform duration-300 ease-in-out ${
          isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-widest">REWALL</h1>
          </div>

        <nav className="flex-1">
          <ul className="space-y-3">
            {nav.map((item, idx) => (
              <li key={item.name}>
                {/* Highlight first item to mimic screenshot */}
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2 px-4 text-sm font-semibold transition-colors ${
                    activeSection === item.id ? 'bg-yellow-300 text-black' : 'text-gray-800 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t border-black/10">
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded text-gray-700">T</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded text-gray-700">F</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded text-gray-700">I</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center border rounded text-gray-700">P</a>
          </div>

          <p className="text-xs text-gray-500 mt-6">© 2021 Rewall Template<br/>Created by Frenify</p>
        </div>
        </div>
      </aside>
    </>
  );
}
