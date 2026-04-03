"use client";

import Link from "next/link";
import * as React from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-b)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[color:var(--color-brand-a)] text-white hover:brightness-95 active:brightness-90",
  secondary:
    "bg-[color:var(--color-brand-b)] text-white hover:brightness-95 active:brightness-90",
  ghost:
    "border border-[color:var(--color-border)] bg-transparent text-[color:var(--color-foreground)] hover:bg-[color:var(--color-surface)]",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className ?? ""}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

