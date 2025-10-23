'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
  ];

  return (
    <header className="flex h-[90px] w-full flex-row px-6 pr-8 md:items-center md:justify-between md:px-10">
      <div className="z-41 flex flex-row items-center gap-2">
        <Logo mobileOpen={mobileOpen} />
        <h2
          className={`font-raleway text-lg font-bold leading-tight tracking-[3px] transition-all duration-300 ${mobileOpen ? 'text-black' : 'text-white'}`}
        >
          CHIMPSON
          <br className="block md:hidden" />
          <span className="hidden md:inline">&nbsp;</span>
          PICKLEBALL
        </h2>
      </div>

      <div className="flex flex-row items-center justify-end gap-6">
        {/* Desktop menu */}
        <ul className="z-41 hidden flex-1 items-center justify-center space-x-8 text-lg font-medium text-white md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                className="hover:cursor-pointer"
                onClick={() => {
                  // scroll smoothly to the waiting list section
                  document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-yellow hover:bg-yellow/90 z-[41] my-auto hidden h-[52px] w-[125px] items-center justify-center text-center text-sm font-normal leading-6 text-dark md:flex"
          onClick={(e) => {
            e.preventDefault();
            // scroll smoothly to the waiting list section
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          contact us
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="ml-auto flex items-center md:hidden">
        <button
          className="z-41 relative flex h-6 w-9 flex-col justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* Top bar */}
          <span
            className={`absolute h-0.5 w-9 transition duration-300 ease-in-out ${
              mobileOpen ? 'rotate-135 bg-black' : '-translate-y-1.5 bg-white'
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`absolute h-0.5 w-9 transition duration-300 ease-in-out ${
              mobileOpen ? '-rotate-135 bg-black' : 'translate-y-1.5 bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {links.map((link, index) => (
          <button
            key={index}
            className="text-2xl"
            onClick={() => {
              setMobileOpen(false);
              // scroll smoothly to the waiting list section
              document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          className={`mt-[20px] flex h-[60px] w-[190px] items-center justify-center bg-black text-center font-normal leading-6 text-white hover:bg-black/90 ${mobileOpen ? 'fade-up' : ''}`}
          onClick={() => {
            setMobileOpen(false);

            // scroll smoothly to the waiting list section
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          contact us
        </button>
      </div>
    </header>
  );
}
