'use client';
import Link from 'next/link';

export default function Sidebar() {
  const nav = [
    { name: 'HOME', href: '#home' },
    { name: 'BIOGRAPHY', href: '#about' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CUSTOMERS', href: '#customers' },
    { name: 'NEWS & TIPS', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    // allow modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white z-40 border-r border-black/10 px-6 py-8">
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
                  className={`block py-2 px-4 text-sm font-semibold ${idx === 0 ? 'bg-purple-400 text-black' : 'text-gray-800 hover:text-black'}`}
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
  );
}
