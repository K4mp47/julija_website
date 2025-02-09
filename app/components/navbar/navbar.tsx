'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex justify-between p-8 lg:p-20">
      <div className="uppercase">
        <Link href="/">Julija Matic</Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-16">
        <div className="flex items-center">
          <span
            className={`w-2 h-2 rounded-full mr-2 transition-opacity ${
              isActive('/works') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/works">Works</Link>
        </div>
        <div className="flex items-center">
          <span
            className={`w-2 h-2 rounded-full mr-2 transition-opacity ${
              isActive('/about') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/about">About</Link>
        </div>
        <div className="flex items-center">
          <span
            className={`w-2 h-2 rounded-full mr-2 transition-opacity ${
              isActive('/contact') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/contact">Contacts</Link>
        </div>
      </div>
    </div>
  );
}
