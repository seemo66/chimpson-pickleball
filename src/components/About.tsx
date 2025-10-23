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
      <Image
        src="/images/about.webp"
        alt="coach Brian playing pickleball"
        width={6000}
        height={4000}
        className="h-auto w-full object-cover md:h-[700px] md:w-[50%]"
      />
      <div className="flex flex-col gap-[35px]">
        <h2 className="leading-14 font-raleway text-5xl font-medium text-black">{headline}</h2>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-lg text-black ${index === paragraphs.length - 1 ? 'mb-[25px]' : ''}`}
          >
            {[paragraph]}
          </p>
        ))}

        <a
          href="#contact-us"
          className="hidden h-[60px] w-[150px] items-center justify-center bg-black text-center font-normal leading-6 text-white hover:bg-black/90 md:flex md:h-[75px] md:w-[250]"
          onClick={() => {
            // scroll smoothly to the waiting list section
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
