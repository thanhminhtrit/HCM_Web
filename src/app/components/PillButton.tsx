import { Link } from "react-router";
import { ReactNode } from "react";

interface PillButtonProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function PillButton({ to, children, variant = "primary", className = "" }: PillButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:scale-105";

  const variantClasses = {
    primary: "bg-burgundy text-white hover:bg-ochre hover:text-ink",
    secondary: "bg-ochre text-ink hover:bg-burgundy hover:text-white"
  };

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
