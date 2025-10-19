import Image from 'next/image';

type LogoType = {
  mobileOpen: boolean;
};

export default function Logo({ mobileOpen }: LogoType) {
  return (
    <div className="relative h-[64px] w-[64px]">
      {/* Black logo */}
      <Image
        src="/images/logo-black.png"
        alt="logo black"
        width={1800}
        height={1800}
        className={`absolute left-0 top-0 h-auto w-16 object-cover transition-opacity duration-500 ${
          mobileOpen ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
        }`}
      />
      {/* White logo */}
      <Image
        src="/images/logo-white.png"
        alt="logo white"
        width={1800}
        height={1800}
        className={`absolute left-0 top-0 h-auto w-16 object-cover transition-opacity duration-500 ${
          mobileOpen ? 'pointer-events-none z-0 opacity-0' : 'z-10 opacity-100'
        }`}
      />
    </div>
  );
}
