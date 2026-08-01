'use client';

import { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('$whoami');

  const navLinks = [
    { name: '$whoami', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-md pt-8 pb-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-end">
        {/* Right-aligned Navbar matching ayushworks.com screenshot */}
        <nav className="flex items-center gap-7 font-sans text-base font-semibold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative transition-all pb-1 ${
                activeTab === link.name
                  ? 'text-white font-semibold'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              {activeTab === link.name && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-t-full" />
              )}
            </a>
          ))}
          {/* Resume link opening PDF directly in new tab */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors pb-1"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
