'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSection } from '../context/SectionContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { activeSection } = useSection();
  const router = useRouter();
  const { t } = useTranslation('common');

  const navigation = [
    { name: t('navHome'), href: '#home' },
    { name: t('navAbout'), href: '#about' },
    { name: t('navProjects'), href: '#projects' },
    { name: t('navContact'), href: '#contact' }
  ];

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const handleNavClick = (e, href) => {
    // allow modifier keys to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      // update the URL hash without jumping
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-700">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Eva Manuska</span>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${activeSection === item.name.toLowerCase()
                  ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <div className="ml-4">
              <select
                onChange={handleLocaleChange}
                value={router.locale}
                className="bg-transparent text-gray-600 dark:text-gray-300 focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
