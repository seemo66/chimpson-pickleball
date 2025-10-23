import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <h2
        id="contact"
        className="leading-14 mt-10 text-center font-raleway text-3xl font-medium text-black md:mt-[150px]"
      >
        Contact us
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
        <form className="border-1 flex w-full max-w-[600px] flex-col self-start rounded-lg border-gray-300 bg-white p-6 shadow-lg md:p-10">
          <label htmlFor="firstname" className="flex items-center justify-between text-[16px]">
            <span>First Name:</span>
            <span className="text-[14px] italic text-gray-400">*required</span>
          </label>
          <input
            required
            type="text"
            id="firstname"
            placeholder="Enter your first name"
            className="mb-[25px] rounded-lg border border-gray-300 p-3"
          />
          <label htmlFor="lastname" className="flex items-center justify-between text-[16px]">
            <span>Last Name:</span>
            <span className="text-[14px] italic text-gray-400">*required</span>
          </label>
          <input
            required
            type="text"
            id="lastname"
            placeholder="Enter your last name"
            className="mb-[25px] rounded-lg border border-gray-300 p-3"
          />
          <label htmlFor="email" className="flex items-center justify-between text-[16px]">
            <span>Email:</span>
            <span className="text-[14px] italic text-gray-400">*required</span>
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="your@email.com"
            className="mb-[25px] rounded-lg border border-gray-300 p-3"
          />
          <label htmlFor="message" className="flex items-center justify-between text-[16px]">
            <span>Message:</span>
            <span className="text-[14px] italic text-gray-400">*required</span>
          </label>{' '}
          <textarea
            required
            id="message"
            placeholder="Message"
            className="mb-[25px] rounded-lg border border-gray-300 p-3"
          />
          <button
            type="submit"
            className="h-[60px] w-[150px] items-center justify-center bg-black text-center font-normal leading-6 text-white hover:bg-black/90 md:flex md:h-[55px] md:w-[250]"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
