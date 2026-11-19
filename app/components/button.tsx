import React from "react";

import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "red";
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  download?: boolean | string;
  "aria-label"?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  type = "button",
  href,
  disabled = false,
  target,
  rel,
  download,
  "aria-label": ariaLabel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full px-5 py-2.5 text-base tracking-wide transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variantClasses = {
    primary:
      "bg-primary text-secondary border border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-inner",
    secondary:
      "bg-secondary text-primary border-2 border-primary hover:bg-primary hover:text-secondary shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    outline:
      "bg-transparent text-primary border border-primary/40 hover:border-primary hover:bg-primary/5 active:scale-[0.98]",
    red: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  }[variant];

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    if (download || target === "_blank" || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
