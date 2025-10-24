'use client';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controls mount/unmount
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submission started');
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data submitted: ', data);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error('Something went wrong, ', res.statusText);
      } else {
        formRef.current?.reset();
        setIsVisible(true);

        // delay slightly so transition runs (prevents instant render)
        setTimeout(() => setSubmitted(true), 50);

        // hold for 5 seconds, then fade out
        setTimeout(() => {
          setSubmitted(false);
          setTimeout(() => setIsVisible(false), 700); // after fade-out
        }, 5000);
      }
    } catch (error) {
      console.error('Something went wrong, ', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative w-full max-w-[600px] self-start">
      <form
        ref={formRef}
        className="border-1 z-9 relative flex w-full max-w-[600px] flex-col rounded-lg border-gray-300 bg-white p-6 shadow-lg md:p-10"
        onSubmit={handleSubmit}
      >
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
          name="firstname"
          disabled={isLoading}
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
          name="lastname"
          disabled={isLoading}
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
          name="email"
          disabled={isLoading}
        />

        <label htmlFor="message" className="flex items-center justify-between text-[16px]">
          <span>Message:</span>
          <span className="text-[14px] italic text-gray-400">*required</span>
        </label>
        <textarea
          required
          id="message"
          placeholder="Message"
          className="mb-[25px] rounded-lg border border-gray-300 p-3"
          name="message"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`${isLoading ? 'cursor-not-allowed bg-gray-400' : 'bg-black hover:bg-black/90'} h-[60px] w-[150px] items-center justify-center text-center font-normal leading-6 text-white md:flex md:h-[55px] md:w-[250px]`}
        >
          {isLoading ? 'Submitting...' : 'Send'}
        </button>
      </form>

      {/* Success message overlay */}
      {isVisible && (
        <div
          className={`font-untitled border-1 absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg border-black bg-black p-10 text-center text-[24px] font-medium text-white transition-opacity duration-700 ease-in-out ${
            submitted ? 'z-10 opacity-100' : 'z-10 opacity-0'
          }`}
        >
          Thank you! Your form has been submitted.
        </div>
      )}
    </div>
  );
}
