'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`fixed w-full top-0 z-50 bg-white flex justify-between p-8 butovo border-b border-black transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center hover:translate-x-2 transition duration-200">
        <span
          className={`w-2 h-2 mr-2 mb-1 transition-opacity ${
            isActive('/') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
          }`}
        />
        <Link href="/">Home</Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-16">
        <div className="flex items-center hover:translate-x-2 transition duration-200">
          <span
            className={`w-2 h-2 mr-2 mb-1 transition-opacity ${
              isActive('/works') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/works">Works</Link>
        </div>
        <div className="flex items-center hover:translate-x-2 transition duration-200">
          <span
            className={`w-2 h-2 mr-2 mb-1 transition-opacity ${
              isActive('/about') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/about">About</Link>
        </div>
        <div className="flex items-center hover:translate-x-2 transition duration-200">
          <span
            className={`w-2 h-2 mr-2 mb-1 transition-opacity ${
              isActive('/contact') ? 'bg-[#AE2D29] opacity-100' : 'opacity-0'
            }`}
          />
          <Link href="/contact">Contacts</Link>
        </div>
      </div>
    </div>
  );
}
