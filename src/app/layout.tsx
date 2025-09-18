import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Chimpson Pickleball',
  description: 'Pickleball coaching and resources',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-roboto text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
