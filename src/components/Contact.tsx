import Image from 'next/image';

export default function Contact() {
  return (
    <section className="mt-18 relative mx-[10px] flex h-[800px] flex-col items-center justify-center gap-12 md:mt-[150px]">
      <Image
        src="/images/jon-matthews-FVhXFRkLcpA-unsplash.jpg"
        alt="woman playing pickleball"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-none object-[0%_50%]"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/100 via-white/0 via-[100%] to-white/0" />
      <h2 className="leading-14 text-center font-raleway text-3xl font-medium text-black">
        Contact Me
      </h2>
      <form className="flex w-full max-w-[600px] flex-col self-start rounded-lg bg-white p-6 shadow-lg md:p-10">
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          placeholder="FirstName"
          className="mb-[25px] rounded-lg border border-gray-300 p-3"
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          placeholder="LastName"
          className="mb-[25px] rounded-lg border border-gray-300 p-3"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="mb-[25px] rounded-lg border border-gray-300 p-3"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Message"
          className="mb-[25px] rounded-lg border border-gray-300 p-3"
        />
        <button
          type="submit"
          className="h-[60px] w-[150px] items-center justify-center bg-black text-center font-normal leading-6 text-white hover:bg-black/90 md:flex md:h-[75px] md:w-[250]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
