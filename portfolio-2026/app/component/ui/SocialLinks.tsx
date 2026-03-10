import Link from "next/link";

interface SocialLink {
  href: string;
  label: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

const defaultLinks: SocialLink[] = [
  { href: "https://github.com/jeanpaugnat", label: "GitHub" },
  { href: "https://linkedin.com/in/jeanpaugnat", label: "LinkedIn" },
];

export default function SocialLinks({
  links = defaultLinks,
  className = "",
}: SocialLinksProps) {
  return (
    <div
      className={`flex items-center gap-8 font-[Funnel_Display] text-white text-lg ${className}`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
