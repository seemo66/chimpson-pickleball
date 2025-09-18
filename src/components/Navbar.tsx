'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex flex-col items-center justify-center md:hidden">
          <button
            className="relative flex h-5 w-6 flex-col justify-between"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-0.5 w-full transform bg-black transition duration-300 ease-in-out ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full transform bg-black transition duration-300 ease-in-out ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
