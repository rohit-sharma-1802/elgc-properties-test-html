"use client";

import Link from "next/link";
import { useState } from "react";

function HotelIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm112-16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg">
            <HotelIcon className="text-gold text-xl" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-navy">
            <span className="text-gold">ELGC</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 font-medium text-sm uppercase tracking-widest">
          <Link href="/property-list" className="hover:text-gold transition-colors">
            Portfolio
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-gold transition-colors flex items-center gap-1">
              Services <ChevronDownIcon className="text-[10px]" />
            </button>
            <div
              className={`absolute top-full -left-10 mt-4 w-64 bg-white shadow-2xl rounded-xl p-4 border border-gray-100 transition-all ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/residential-property"
                className="block p-3 hover:bg-soft rounded-lg text-navy"
              >
                Residential Management
              </Link>
              <Link
                href="/commercial-property"
                className="block p-3 hover:bg-soft rounded-lg text-navy"
              >
                Commercial Assets
              </Link>
              <Link
                href="/building-property"
                className="block p-3 hover:bg-soft rounded-lg text-navy"
              >
                Building Management
              </Link>
              <Link
                href="/property-management"
                className="block p-3 hover:bg-soft rounded-lg text-navy"
              >
                Property Management
              </Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Insights
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden sm:block text-navy font-semibold px-6 py-2 border border-navy rounded-full hover:bg-navy hover:text-white transition-all"
          >
            Log In
          </button>
          <Link
            href="/contact"
            className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald transition-all shadow-lg shadow-gold/20"
          >
            Get Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
