'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex h-[700px] flex-col items-center justify-end overflow-hidden pb-[55px] md:w-[100%]">
      <Image
        src="/images/header-hero-woman.webp"
        alt="woman playing pickleball"
        fill
        priority
        className="absolute inset-0 -z-10 !h-[800px] w-full object-cover object-center"
      />
      <div className="mx-auto px-6 md:mb-[7%] lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h1 className="fade-up mb-10 font-raleway text-[73px] leading-[80px] tracking-tight text-white md:mt-[120px] md:text-center md:text-8xl md:leading-[120px]">
            <span className="underline-pen">Your</span> pickleball journey starts here
          </h1>

          <a
            href="#contact-us"
            className="bg-yellow hover:bg-yellow/90 m-auto flex h-[60px] w-[150px] items-center justify-center text-center font-normal leading-6 text-dark md:h-[75px] md:w-[250]"
            onClick={() => {
              // scroll smoothly to the waiting list section
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            contact us
          </a>
        </div>
      </div>
    </div>
  );
}
