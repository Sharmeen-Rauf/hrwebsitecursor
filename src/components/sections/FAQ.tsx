"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";

const faqs = [
  {
    q: "Why do businesses make use of HRMS software?",
    a: "Companies use human resource management software to automate HR activities, increase productivity, decrease mistakes, and assure labor law compliance.",
  },
  {
    q: "Can WorkAura be customized to fit specific business requirements?",
    a: "Yes. WorkAura’s open-source framework lets you tailor modules, workflows, and features to match your processes.",
  },
  {
    q: "Is WorkAura ideal for both small and large businesses?",
    a: "Yes. Its modular and scalable design works for startups through enterprises across industries.",
  },
  {
    q: "How does WorkAura improve HR operations?",
    a: "WorkAura reduces manual work, improves accuracy for attendance and payroll, and delivers insights for better workforce decisions.",
  },
];

function Item({
  i,
  q,
  a,
  open,
  onToggle,
}: {
  i: number;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-5 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div className="text-sm font-extrabold sm:text-base">{q}</div>
        <div
          className={`grid h-9 w-9 place-items-center rounded-2xl border border-[color:var(--color-border)] ${
            open ? "bg-[color:var(--color-surface)]" : "bg-transparent"
          }`}
        >
          <span className="text-lg font-black text-[color:var(--color-brand-b)]">
            {open ? "–" : "+"}
          </span>
        </div>
      </button>
      {open ? (
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
          {a}
        </p>
      ) : null}
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState<number>(0);
  return (
    <Section id="docs" className="py-14 sm:py-18">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
          Quick answers about WorkAura’s flexibility, customization, and fit.
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {faqs.map((f, i) => (
          <Item
            key={f.q}
            i={i}
            q={f.q}
            a={f.a}
            open={open === i}
            onToggle={() => setOpen((cur) => (cur === i ? -1 : i))}
          />
        ))}
      </div>
    </Section>
  );
}

