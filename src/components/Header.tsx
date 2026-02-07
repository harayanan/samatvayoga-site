"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teachings/online-classes", label: "Online Classes" },
  { href: "/teachings/talks", label: "Talks & Archive" },
  { href: "/teachings/travels", label: "Travels" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-saffron-100/50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span>
            <span className="font-serif text-2xl font-semibold text-warm-900 tracking-wide">
              Samatva
            </span>
            <span className="font-serif text-2xl font-light text-saffron-600 tracking-wide ml-1">
              Yoga
            </span>
          </span>
          <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest bg-saffron-500 text-cream-50 rounded-sm leading-tight">
            WIP
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-800/70 hover:text-saffron-700 transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-warm-800 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-md border-t border-saffron-100/50 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base text-warm-800/80 hover:text-saffron-700 transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
