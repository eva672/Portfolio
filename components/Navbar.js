'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50% 0px -50% 0px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-pink-600">Eva Manuska</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.id}
                href={`#${item.id}`}
                className={`px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-pink-600 border-b-2 border-pink-600' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
