import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Raleway, Roboto } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Chimpson Pickleball',
  description: 'Pickleball coaching, lessons, and tips for all levels.',
  openGraph: {
    title: 'Chimpson Pickleball',
    description: 'Pickleball coaching, lessons, and tips for all levels.',
    url: 'https://www.chimpsonpickleball.com',
    siteName: 'Chimpson Pickleball',
    images: [
      {
        url: 'https://www.chimpsonpickleball.com/images/header-hero-woman.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chimpson Pickleball',
    description: 'Pickleball coaching, lessons, and tips for all levels.',
    images: ['https://www.chimpsonpickleball.com/images/header-hero-woman.webp'],
    site: '@chimpsonpickleball', // your Twitter handle
    creator: '@chimpsonpickleball',
  },
  alternates: {
    canonical: 'https://www.chimpsonpickleball.com',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Chimpson Pickleball',
    description: 'Pickleball coaching, lessons, and tips for all levels.',
    url: 'https://www.chimpsonpickleball.com',
    image: 'https://www.chimpsonpickleball.com/images/header-hero-woman.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harry A Lyon Park',
      addressLocality: 'Ventura',
      addressRegion: 'CA',
      postalCode: '93001',
      addressCountry: 'US',
    },
  };

  return (
    <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className="bg-white font-roboto text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
