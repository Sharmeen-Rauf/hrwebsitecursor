"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#crm", label: "CRM" },
  { href: "#features", label: "Features" },
  { href: "#docs", label: "Docs" },
  { href: "#cloud", label: "Cloud" },
  { href: "#blogs", label: "Blogs" },
  { href: "#videos", label: "Videos" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--color-surface)]">
            <span className="h-4 w-4 rounded-md bg-[color:var(--color-brand-a)]" />
          </span>
          <span className="text-sm font-extrabold tracking-tight">
            Work<span className="text-[color:var(--color-brand-b)]">Aura</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" href="#demo">
            Try Demo
          </Button>
          <Button variant="secondary" href="#github">
            View on GitHub
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-[color:var(--color-foreground)]" />
            <span className="h-0.5 w-5 bg-[color:var(--color-foreground)]" />
            <span className="h-0.5 w-5 bg-[color:var(--color-foreground)]" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background)] md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-foreground)]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button variant="ghost" href="#demo" className="flex-1">
                Try Demo
              </Button>
              <Button variant="secondary" href="#github" className="flex-1">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

