import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export type AboutDataType = {
  headline: string;
  paragraphs: Array<string>;
  cta: string;
};

const aboutData: AboutDataType = {
  headline: 'About Your Coach, Brian.',
  paragraphs: [
    'Hi, I’m Brian Simpson, a PPR-certified pickleball coach originally from Scotland and now proud to call Ventura, California home.',
    'I love helping people discover the fun, social side of pickleball while building confidence and fitness along the way. Whether you’ve never picked up a paddle or you’re getting back into movement after a break, I’ll meet you exactly where you are, no pressure, just progress.',
  ],
  cta: 'contact',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl p-4">
      <Hero />
      <About aboutData={aboutData} />
      <Services />
      <Contact />
    </main>
  );
}
