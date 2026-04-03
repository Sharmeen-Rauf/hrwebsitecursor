"use client";

import { Section } from "@/components/ui/Section";

const items = [
  {
    title: "Free of cost",
    desc: "WorkAura is a comprehensive HR software solution that’s absolutely free.",
  },
  {
    title: "Open-source",
    desc: "WorkAura is open-source. You get to call the shots—use it however you see fit.",
  },
  {
    title: "Host Yourself",
    desc: "WorkAura is yours, forever. Host it wherever you like—local or live server.",
  },
];

export function Standout() {
  return (
    <Section id="features" className="py-14 sm:py-18">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What makes WorkAura HRM stand out
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
            Practical, fast, and transparent—built for teams that want control,
            flexibility, and AI-ready insights.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--color-muted)]">
          Two-color theme • Orange + Blue
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--color-surface)]">
                <span className="h-4 w-4 rounded-md bg-[color:var(--color-brand-b)] group-hover:bg-[color:var(--color-brand-a)] transition-colors" />
              </span>
              <div className="text-base font-extrabold">{it.title}</div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

