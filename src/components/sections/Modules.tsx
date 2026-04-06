"use client";

import { Section } from "@/components/ui/Section";
import React from "react";

type ModuleItem = {
  key: string;
  title: string;
  desc: string;
  accent: "a" | "b";
  IconSvg: React.ReactNode;
};

const modules: ModuleItem[] = [
  {
    key: "Attendance",
    title: "Attendance",
    desc: "Shift, check-in/out, overtime and punctuality.",
    accent: "a",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  },
  {
    key: "Employee",
    title: "Employee",
    desc: "Directory, roles, departments and profiles.",
    accent: "b",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    key: "Leave",
    title: "Leave",
    desc: "Balances, accruals, policies and approvals.",
    accent: "a",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
  {
    key: "Onboarding",
    title: "Onboarding",
    desc: "Tasks, documents and day-one readiness.",
    accent: "b",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    key: "Payroll",
    title: "Payroll",
    desc: "Payslips, deductions, allowances and tax.",
    accent: "a",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
  },
  {
    key: "PMS",
    title: "PMS",
    desc: "Goals, reviews, feedback and insights.",
    accent: "b",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  },
  {
    key: "Recruitment",
    title: "Recruitment",
    desc: "Pipeline, candidates and hiring stages.",
    accent: "a",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>,
  },
  {
    key: "Offboarding",
    title: "Offboarding",
    desc: "Clearance, handover and exit workflows.",
    accent: "b",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
  },
  {
    key: "Helpdesk",
    title: "Helpdesk",
    desc: "Tickets, FAQs and escalation workflows.",
    accent: "a",
    IconSvg: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
  },
];

export function Modules() {
  return (
    <Section id="crm" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-black tracking-tight text-gray-900 leading-[1.1]">
            All the modules you’ll ever need
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-500 font-medium">
            Built to scale from startup to enterprise—activate only what you need, entirely seamlessly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.key}
              className="group relative flex flex-col rounded-[24px] bg-white p-8 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient glow inside card on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 ${
                m.accent === "a" ? "bg-gradient-to-br from-[#ff5a1f] to-transparent" : "bg-gradient-to-br from-[#2563eb] to-transparent"
              }`} />

              <div className="flex items-start gap-5 relative z-10">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] transition-colors duration-300 ${
                    m.accent === "a"
                      ? "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                      : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  }`}
                >
                  {m.IconSvg}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-gray-500">
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
