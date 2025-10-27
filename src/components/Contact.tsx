import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <h2
        id="contact"
        className="leading-14 mt-10 text-center font-raleway text-3xl font-medium text-black md:mt-[150px]"
      >
        Contact Brian
      </h2>
      <section className="relative mx-[10px] mt-8 flex flex-col items-center justify-center gap-12 md:h-[800px]">
        <Image
          src="/images/contact-us.webp"
          alt="man playing pickleball"
          className="object-fit block w-full md:absolute md:inset-0 md:-z-10 md:h-full md:object-none md:object-[30%_45%]"
          width={6000}
          height={4000}
        />
        {/* Gradient overlay */}
        <div className="-z-1 absolute inset-0 hidden bg-[linear-gradient(to_right,white_0%,white_30%,rgba(255,255,255,0)_65%,rgba(255,255,255,0)_100%)] md:block" />
        <ContactForm />
      </section>
    </>
  );
}
