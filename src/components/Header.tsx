'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="] flex h-[90px] w-full flex-row px-6 pr-8 md:px-10">
      <Link href="/" className="z-41 flex flex-row items-center gap-2">
        <Image
          src="/images/logo-white_on_trans.png"
          alt="chimpson pickleball log"
          width={1378}
          height={1137}
          className="h-auto w-16 object-cover"
        />

        <h2 className="font-raleway text-lg font-bold leading-tight tracking-[3px] text-white">
          CHIMPSON
          <br className="block md:hidden" />
          <span className="hidden md:inline">&nbsp;</span>
          PICKLEBALL
        </h2>
      </Link>

      {/* Desktop menu */}
      <ul className="z-41 ml-auto hidden items-center space-x-8 text-lg font-medium text-white md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

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
    </header>
  );
}
