"use client";

import { Section } from "@/components/ui/Section";

const modules = [
  "Attendance",
  "Employee",
  "Leave",
  "Onboarding",
  "Payroll",
  "PMS",
  "Recruitment",
  "Offboarding",
  "Helpdesk",
];

export function Modules() {
  return (
    <Section id="crm" className="py-14 sm:py-18">
      <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 sm:p-10">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          All the modules you’ll ever need in one software
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
          Built to scale from startup to enterprise—activate only what you need.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, idx) => (
            <div
              key={m}
              className="flex items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-5 py-4"
            >
              <div className="font-semibold">{m}</div>
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  idx % 2 === 0
                    ? "bg-[color:var(--color-brand-a)]"
                    : "bg-[color:var(--color-brand-b)]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

