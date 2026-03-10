"use client";

import Link from "next/link";
import Button from "./Button";

export default function NavBar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#fdfdfd] flex items-center justify-between px-6 md:px-20 py-5 md:py-7 rounded-full shadow-sm font-[Funnel_Display]">
      {/* Logo / Name */}
      <Link
        href="/"
        className="font-bold text-[#171717] text-lg md:text-2xl capitalize tracking-wide"
      >
        JEAN PAUGNAT
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 md:gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden md:block text-[#171717] text-lg md:text-xl capitalize hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}

        {/* CTA Button */}
        <Button href="/contact" variant="cta" className="text-base md:text-xl px-3 md:px-4 py-2 md:py-2.5">
          Let&apos;s talk
        </Button>
      </div>
    </nav>
  );
}
