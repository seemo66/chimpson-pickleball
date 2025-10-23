'use client';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <footer
      className="relative m-auto mt-[50px] flex w-full flex-col items-center justify-center bg-cover bg-center px-6 pb-4 pt-16 text-center text-white md:pt-14"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Optional dark overlay */}
      <div className="flex max-w-[700px] flex-col-reverse justify-between">
        <Link href="/" className="mt-[55px] flex flex-row items-center justify-center gap-2">
          <Logo mobileOpen={false} />
          <h2 className="z-10 font-raleway text-lg font-bold leading-tight tracking-[3px] text-white">
            CHIMPSON
            <br className="block md:hidden" />
            <span className="hidden md:inline">&nbsp;</span>
            PICKLEBALL
          </h2>
        </Link>
        <div className="z-10 flex justify-around">
          {links.map((link) => (
            <li key={link.href} className="flex flex-col text-2xl">
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
        </div>
      </div>
      <div className="relative z-10 mb-[35px] text-center">
        <p>© 2025 Chimpson Pickleball</p>
      </div>
    </footer>
  );
}
