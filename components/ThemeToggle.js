'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  // Initialize theme on mount
  useEffect(() => {
    setIsMounted(true);

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);

      // Toggle dark class for Tailwind dark mode
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div style={{ width: '56px', height: '28px', opacity: 0 }}>
        {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        /* ===== Theme CSS Variables ===== */
        :root {
          --bg-color: #ffffff;
          --text-color: #1F2937;
          --text-color-rgb: 31, 41, 55;
          --border-color: #e2e8f0;
          --toggle-bg: #e5e7eb;
          --toggle-circle: #ffffff;
        }

        html[data-theme='dark'] {
          --bg-color: #111827;
          --text-color: #F9FAFB;
          --text-color-rgb: 249, 250, 251;
          --border-color: #374151;
          --toggle-bg: #374151;
          --toggle-circle: #1f2937;
        }

        /* ===== Smooth Transitions ===== */
        body {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        * {
          transition-property: background-color, border-color, color;
          transition-duration: 0.3s;
          transition-timing-function: ease;
        }
      `}</style>

      <style jsx>{`
        .theme-toggle-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .theme-toggle-button {
          position: relative;
          width: 56px;
          height: 28px;
          background: var(--toggle-bg);
          border-radius: 9999px;
          border: 2px solid var(--border-color);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          outline: none;
        }

        .theme-toggle-button:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .theme-toggle-button:focus-visible {
          outline: 2px solid var(--text-color);
          outline-offset: 2px;
        }

        .theme-toggle-button:active {
          transform: scale(0.98);
        }

        .toggle-circle {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: var(--toggle-circle);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-circle.dark {
          transform: translateX(28px);
        }

        .icon {
          font-size: 12px;
          line-height: 1;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .icon.rotate {
          transform: rotate(180deg);
        }

        /* Light mode: sun icon */
        .theme-toggle-button[data-theme='light'] .toggle-circle {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }

        /* Dark mode: moon icon */
        .theme-toggle-button[data-theme='dark'] .toggle-circle {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }
      `}</style>

      <div className="theme-toggle-wrapper">
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          data-theme={theme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          type="button"
        >
          <div className={`toggle-circle ${theme === 'dark' ? 'dark' : ''}`}>
            <span className={`icon ${theme === 'dark' ? 'rotate' : ''}`}>
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
