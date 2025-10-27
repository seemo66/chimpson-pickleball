'use client';
import { AboutDataType } from '@/app/page';
import Image from 'next/image';

type AboutProps = {
  aboutData: AboutDataType;
};

export default function About({ aboutData }: AboutProps) {
  const { headline, paragraphs, cta } = aboutData;

  return (
    <section
      id="about"
      className="mt-18 mx-[10px] flex flex-col-reverse gap-6 md:mt-[150px] md:flex-row-reverse md:items-center md:gap-20"
    >
      <div className="relative md:w-1/2">
        <Image
          src="/images/about.webp"
          alt="coach Brian playing pickleball"
          width={6000}
          height={4000}
          className="h-auto w-full object-cover"
        />
        <Image
          src="/images/ppr-logo.png"
          alt="Professional Pickleball Registry logo"
          width={100}
          height={50}
          className="absolute left-[10px] top-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[35px] md:w-1/2">
        <h2 className="leading-14 font-raleway text-5xl font-medium text-black">{headline}</h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-lg text-black ${index === paragraphs.length - 1 ? 'mb-[25px]' : ''}`}
          >
            {[paragraph]}
          </p>
        ))}

        <button
          className="hidden h-[60px] w-[150px] items-center justify-center bg-black text-center font-normal leading-6 text-white hover:bg-black/90 md:flex md:h-[75px] md:w-[250]"
          onClick={() => {
            // scroll smoothly to the waiting list section
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {cta}
        </button>
      </div>
    </section>
  );
}
