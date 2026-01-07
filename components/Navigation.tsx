'use client';

import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const navLinks = [
    { href: '#accueil', label: 'ACCUEIL' },
    { href: '#projets', label: 'PROJETS' },
    { href: '#expertise', label: 'EXPERTISE' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-12 py-8 bg-[#0083C0] shadow-[0_5px_30px_rgba(0,131,192,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-['Archivo_Black'] text-4xl text-white tracking-tight">
          JAXA
        </div>
        <ul className="hidden md:flex gap-12 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white no-underline font-bold text-lg relative px-6 py-2 transition-all duration-300 border-3 border-transparent hover:border-[#FF9671] hover:bg-[#FF9671] hover:rotate-[-2deg]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;