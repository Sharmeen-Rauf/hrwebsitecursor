"use client";

import { Section } from "@/components/ui/Section";
import React from "react";

const features = [
  {
    title: "Sentiment & Risk Analysis",
    desc: "Analyses text for sentiment, risk level, issue type, and recommended action across feedback and tickets.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2} strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    bgColor: "bg-red-50",
  },
  {
    title: "Burnout Risk Detector",
    desc: "Combines attendance, late arrivals, overtime, and leave patterns to generate accurate staff risk scores.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    bgColor: "bg-indigo-50",
  },
  {
    title: "Org Health Generator",
    desc: "Cross-module analysis of attendance rates, leave trends, complaint frequency, and team morale score.",
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12l2-2 1.5 1.5L16 9" />
      </svg>
    ),
    bgColor: "bg-pink-50",
  },
  {
    title: "Performance Narrator",
    desc: "Auto-generates written performance summaries straight from KPIs, objectives, constraints, and peer feedback.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
    bgColor: "bg-blue-50",
  },
  {
    title: "Complaint Classifier",
    desc: "Intelligently categorizes complaints (payroll, harassment, workload, management) for faster resolution.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    bgColor: "bg-red-50",
  },
  {
    title: "Manager Copilot",
    desc: "Provides AI briefings for managers about their team, acting as a personal advisory resource.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    bgColor: "bg-purple-50",
  },
];

export function AiPlatform() {
  return (
    <Section id="ai-intelligence" className="py-20 sm:py-24 bg-[#fbfbfb]">
      <div className="flex flex-col gap-3 text-center px-4">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-gray-900">
          AI Workforce Intelligence Platform
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-gray-500 max-w-2xl mx-auto">
          WorkAura extends your HRMS/CRM with intelligence modules—analyzing live database data across attendance, leave, payroll, PMS, and helpdesk.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col rounded-[20px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className={`mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${f.bgColor}`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
