import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "cta";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  download?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0059ff] text-white hover:bg-[#0047cc] border-2 border-transparent",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white/10",
  cta: "bg-[#0059ff] text-white uppercase italic font-bold hover:bg-[#0047cc] font-[Crimson_Text]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  download = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-lg md:text-xl font-[Funnel_Display] transition-colors";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
        download={download ? "" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
