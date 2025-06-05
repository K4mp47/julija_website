interface FooterProps {
  className?: string;
}

import React, { useEffect, useRef, useState } from 'react';

export default function Footer({ className = "" }: FooterProps) {

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

    return (
      <footer className={`fixed bottom-0 left-0 w-full bg-white p-8 z-50 ${className} border-t border-black transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col space-y-2 justify-between sm:flex-row sm:space-y-0">
          <div className="uppercase butovo">julija matic</div>
          <div className="font-mono text-sm">instagram@username</div>
        </div>
      </footer>
    );
}

