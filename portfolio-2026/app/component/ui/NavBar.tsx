"use client";

import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#fdfdfd] flex items-center justify-between px-10 md:px-20 py-7 rounded-full shadow-sm font-[Funnel_Display]">
      {/* Logo / Name */}
      <Link
        href="/"
        className="font-bold text-[#171717] text-xl md:text-2xl capitalize tracking-wide"
      >
        JEAN PAUGNAT
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 md:gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#171717] text-lg md:text-xl capitalize hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-[#0059ff] text-white px-4 py-2.5 rounded-lg text-lg md:text-xl uppercase italic font-bold hover:bg-[#0047cc] transition-colors font-[Crimson_Text]"
        >
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}
