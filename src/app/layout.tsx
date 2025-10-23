import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Raleway, Roboto } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Chimpson Pickleball',
  description: 'Pickleball coaching and resources',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
      <body className="bg-white font-roboto text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
