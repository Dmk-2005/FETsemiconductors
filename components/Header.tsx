"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300">
      <nav className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center -my-8 py-0 flex-shrink-0">
            <Image 
              src="/logo.png.png" 
              alt="FET Semiconductors" 
              width={600} 
              height={150}
              className="w-48 md:w-56 lg:w-64 h-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-bold tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-navy-700 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-600"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-navy-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 font-medium transition-colors ${
                  pathname === link.href
                    ? "text-orange-500 bg-orange-50"
                    : "text-navy-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
