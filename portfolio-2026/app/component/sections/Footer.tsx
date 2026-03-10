import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Let's talk" },
];

const contactLinks = [
  { href: "https://linkedin.com/in/jeanpaugnat", label: "LinkedIn" },
  { href: "https://github.com/JeanJeanPaugnat", label: "GitHub" },
  { href: "mailto:jeanpaugnat87@gmail.com", label: "Mail" },
];

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Tagline */}
        <p className="font-[Crimson_Text] italic text-2xl md:text-4xl text-[#1a1a1a] text-center mb-16">
          Let&apos;s design your goals together !
        </p>

        {/* Links Grid */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8 max-w-4xl mx-auto mb-16">
          {/* Navigation Links */}
          <div className="flex gap-16 md:gap-24">
            {/* Primary */}
            <div className="flex flex-col gap-6">
              <h3 className="font-[Funnel_Display] text-xl md:text-2xl text-[#1a1a1a]">
                Primary
              </h3>
              <ul className="flex flex-col gap-3 font-[Funnel_Display] text-base text-[#1a1a1a]">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0059ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6">
              <h3 className="font-[Funnel_Display] text-xl md:text-2xl text-[#1a1a1a]">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 font-[Funnel_Display] text-base text-[#1a1a1a] uppercase">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0059ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-5">
            {/* CV Button */}
            <Link
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 px-4 py-2.5 border-2 border-[#0059ff] rounded-lg hover:bg-[#0059ff] hover:text-white transition-colors group"
            >
              <span className="font-[Crimson_Text] italic font-bold text-lg md:text-2xl text-[#1a1a1a] uppercase group-hover:text-white">
                Curriculum Vitae
              </span>
              <FileText className="w-6 h-6 text-[#1a1a1a] group-hover:text-white" />
            </Link>

            {/* Work Together Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-4 py-2.5 bg-[#0059ff] rounded-lg hover:bg-[#0047cc] transition-colors"
            >
              <span className="font-[Crimson_Text] italic font-bold text-lg md:text-2xl text-white uppercase">
                Let&apos;s work together
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Name */}
      <div className="relative h-48 md:h-80 overflow-hidden flex items-center justify-center">
        <p className="font-[Funnel_Display] font-black text-[120px] md:text-[280px] lg:text-[350px] text-[#1a1a1a] uppercase whitespace-nowrap leading-none select-none">
          JEAN PAUGNAT
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a1a1a] px-6 md:px-12 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-[Funnel_Display] text-sm text-white capitalize">
            ©JeanPaugnat
          </p>
          <p className="font-[Funnel_Display] text-sm text-white capitalize">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
