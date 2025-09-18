import Image from 'next/image';

export default function Hero() {
  return (
    <div className="isolate overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/jon-matthews-FVhXFRkLcpA-unsplash.jpg"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 w-full object-cover object-center md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to Our Community
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join us in exploring the latest trends and insights in technology, innovation, and
            creativity. Connect with like-minded individuals and grow together.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#get-started"
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="text-sm font-semibold leading-6 text-white hover:underline"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
