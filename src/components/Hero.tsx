import Image from 'next/image';

export default function Hero() {
  return (
    <div className="isolate flex h-[400px] min-h-[735px] flex-col justify-end overflow-hidden md:w-[100%]">
      <Image
        src="/images/header-hero-woman.webp"
        alt="woman playing pickleball"
        fill
        priority
        className="absolute inset-0 -z-10 max-h-[842px] w-full object-cover object-center"
      />
      <div className="mx-auto mb-[20%] px-6 md:mb-[7%] lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h1 className="fade-up font-raleway mb-14 text-[73px] leading-[80px] tracking-tight text-white md:mt-[120px] md:text-center md:text-8xl md:leading-[120px]">
            <span className="underline-pen">Your</span> pickleball journey starts here
          </h1>

          <a
            href="#contact-us"
            className="bg-yellow text-dark hover:bg-yellow/90 m-auto flex h-[60px] w-[150px] items-center justify-center text-center font-normal leading-6 md:h-[75px] md:w-[250]"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
