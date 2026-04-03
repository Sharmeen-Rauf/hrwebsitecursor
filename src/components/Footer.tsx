"use client";

import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Documentation", href: "#docs" },
      { label: "Features", href: "#features" },
      { label: "Blog", href: "#blogs" },
      { label: "Sitemap", href: "#home" },
    ],
  },
  {
    title: "Discover WorkAura",
    links: [
      { label: "What is WorkAura?", href: "#home" },
      { label: "WorkAura Stories", href: "#blogs" },
      { label: "Compare Competitors", href: "#pricing" },
      { label: "Client Locations", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Attendance", href: "#crm" },
      { label: "Employee", href: "#crm" },
      { label: "Leave", href: "#crm" },
      { label: "Onboarding", href: "#crm" },
      { label: "Payroll", href: "#crm" },
      { label: "PMS", href: "#crm" },
      { label: "Recruitment", href: "#crm" },
      { label: "Offboarding", href: "#crm" },
      { label: "Helpdesk", href: "#crm" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[color:var(--color-border)] bg-[color:var(--color-background)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-surface)]">
                <span className="h-4 w-4 rounded-md bg-[color:var(--color-brand-a)]" />
              </span>
              <div className="text-sm font-extrabold tracking-tight">
                Work<span className="text-[color:var(--color-brand-b)]">Aura</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
              Free and open-source HRMS + CRM with AI workforce intelligence.
              Host it yourself, integrate it your way.
            </p>
            <div className="mt-5 text-sm font-semibold text-[color:var(--color-muted)]">
              Get it on Play Store • Get it on App Store
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-extrabold">{c.title}</div>
                <div className="mt-4 flex flex-col gap-2">
                  {c.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-sm font-semibold text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--color-border)] pt-6 text-sm font-semibold text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} WorkAura. All rights reserved.</div>
          <a
            className="text-[color:var(--color-brand-b)] hover:underline"
            href="https://www.horilla.com/"
            target="_blank"
            rel="noreferrer"
          >
            Source inspiration
          </a>
        </div>
      </div>
    </footer>
  );
}

