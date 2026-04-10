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
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`overflow-hidden rounded-[24px] border ${open ? 'border-[#ff5a1f]/30 bg-[#ff5a1f]/[0.02] shadow-sm' : 'border-gray-100 bg-white hover:bg-gray-50'} transition-all duration-300`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left"
        aria-expanded={open}
      >
        <div className={`text-base sm:text-[17px] font-bold pr-4 transition-colors ${open ? 'text-[#e53935]' : 'text-gray-900'}`}>{q}</div>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${open ? 'bg-[#ff5a1f]/10 text-[#e53935] rotate-180' : 'bg-gray-100 text-gray-500'}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100 pb-6 px-6 sm:px-8' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
           <p className="text-[15px] leading-relaxed text-gray-600">
             {a}
           </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState<number>(0);
  return (
    <Section id="docs" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16 px-4">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-black tracking-tight text-gray-900 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl text-[17px] text-gray-500 font-medium">
            Quick answers about WorkAura’s flexibility, customization, and fit for your business.
          </p>
        </div>

        <div className="grid gap-4 px-4 w-full">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen((cur) => (cur === i ? -1 : i))}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
