import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

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
      <body className="font-roboto bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
