'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed w-full top-0 z-50 bg-white flex justify-between p-8 butovo border">
      <div className="flex items-center hover:translate-x-2 transition duration-200">
        <span
        className={`w-2 h-2 mr-2 transition-opacity ${
          isActive('/') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
        }`}
        />
        <Link href="/">Home</Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-16">
      <div className="flex items-center hover:translate-x-2 transition duration-200">
        <span
        className={`w-2 h-2 mr-2 transition-opacity ${
          isActive('/works') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
        }`}
        />
        <Link href="/works">Works</Link>
      </div>
      <div className="flex items-center hover:translate-x-2 transition duration-200">
        <span
        className={`w-2 h-2 mr-2 transition-opacity ${
          isActive('/about') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
        }`}
        />
        <Link href="/about">About</Link>
      </div>
      <div className="flex items-center hover:translate-x-2 transition duration-200">
        <span
        className={`w-2 h-2 mr-2 transition-opacity ${
          isActive('/contact') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
        }`}
        />
        <Link href="/contact">Contacts</Link>
      </div>
      </div>
    </div>
  );
}
