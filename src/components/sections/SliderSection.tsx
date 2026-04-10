"use client";

import Image from "next/image";
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type Slide = {
  key:
    | "attendance"
    | "recruitment"
    | "onboarding"
    | "leave"
    | "assets"
    | "employee"
    | "payroll"
    | "offboarding"
    | "helpdesk";
  chip: string;
  heading: string;
  points: { title: string; desc: string }[];
  image: { src: string; alt: string };
};

const slides: Slide[] = [
  {
    key: "attendance",
    chip: "Attendance",
    heading: "Efficient Attendance Management",
    points: [
      {
        title: "Efficient Attendance Management",
        desc: "Streamline employee attendance with automated check-in/out—eliminate manual tracking.",
      },
      {
        title: "Biometric Integration",
        desc: "Ensure precise tracking with seamless biometric device integration for effortless workforce management.",
      },
      {
        title: "Overtime Calculation",
        desc: "Accurately calculate overtime hours while supporting compensation and compliance needs.",
      },
      {
        title: "Late‑Come and Early‑Out Tracking",
        desc: "Track late arrivals and early departures via check in/out to improve punctuality.",
      },
    ],
    image: {
      src: "/slides/horilla-attendance-screenshotfirst.jpg",
      alt: "WorkAura attendance module screenshot",
    },
  },
  {
    key: "recruitment",
    chip: "Recruitment",
    heading: "Manage Recruitment Easily",
    points: [
      {
        title: "Manage Recruitment Easily",
        desc: "Simplify recruitment with an intuitive UI for seamless candidate management.",
      },
      {
        title: "Identify Potential Candidates",
        desc: "Find and evaluate candidates with smart insights on strengths and weaknesses.",
      },
      {
        title: "Manage Recruitment Flow",
        desc: "Design and control your process—manage candidates and transition stages smoothly.",
      },
      {
        title: "Candidate Self Tracking",
        desc: "Provide real-time, transparent application tracking for candidates.",
      },
    ],
    image: {
      src: "/slides/horilla-recruitment-screenshotsecond.jpg",
      alt: "WorkAura recruitment module screenshot",
    },
  },
  {
    key: "onboarding",
    chip: "Onboarding",
    heading: "Seamless Integration and Familiarization",
    points: [
      {
        title: "Seamless Integration and Familiarization",
        desc: "Make onboarding a positive start—help new hires ramp up confidently.",
      },
      {
        title: "Preparation for a Successful Start",
        desc: "Prepare new employees in advance so they feel welcomed, informed, and ready.",
      },
      {
        title: "Enhancing engagement, productivity, and retention",
        desc: "A strong onboarding experience improves retention and productivity.",
      },
    ],
    image: {
      src: "/slides/horilla-onboarding-screenshottird.jpg",
      alt: "WorkAura onboarding module screenshot",
    },
  },
  {
    key: "leave",
    chip: "Leave",
    heading: "Streamlined and Efficient Leave Management",
    points: [
      {
        title: "Streamlined and Efficient Leave Management",
        desc: "Simplify leave applications and approvals—reduce manual paperwork.",
      },
      {
        title: "Leave Planning and Operational Continuity",
        desc: "Proactively manage patterns, identify trends, and minimize absenteeism impact.",
      },
      {
        title: "Enhanced Accuracy and Compliance",
        desc: "Track balances, accruals, and enforce policies with accurate records.",
      },
      {
        title: "Flexible Approval Workflows",
        desc: "Customizable approvals with multiple layers and configurable rules.",
      },
    ],
    image: {
      src: "/slides/horilla-leave-screenshotforth.jpg",
      alt: "WorkAura leave module screenshot",
    },
  },
  {
    key: "assets",
    chip: "Assets",
    heading: "Streamlined Asset Tracking and Accountability",
    points: [
      {
        title: "Streamlined Asset Tracking and Accountability",
        desc: "Track allocation, status, and usage of assets including requests and assignments.",
      },
      {
        title: "Optimized Maintenance and Reliability",
        desc: "Automate maintenance scheduling and predictive alerts to prevent downtime.",
      },
      {
        title: "Improved Compliance and Risk Management",
        desc: "Maintain audit trails and manage risk with visibility across asset lifecycle.",
      },
    ],
    image: {
      src: "/slides/horilla-assets-screenshotfifth.jpg",
      alt: "WorkAura assets module screenshot",
    },
  },
  {
    key: "employee",
    chip: "Employee",
    heading: "Employee Directory and Information Management",
    points: [
      {
        title: "Employee Directory and Information Management",
        desc: "Centralize employee management with efficient organization-wide access.",
      },
      {
        title: "Personal Information Management",
        desc: "Securely manage employee data so HR teams stay accurate and compliant.",
      },
      {
        title: "Work Information Tracking",
        desc: "Track roles, departments, hierarchies, and employment status with clarity.",
      },
    ],
    image: {
      src: "/slides/horilla-employee-screenshotseven.jpg",
      alt: "WorkAura employee module screenshot",
    },
  },
  {
    key: "payroll",
    chip: "Payroll",
    heading: "Manage Contracts & Agreements",
    points: [
      {
        title: "Manage Contracts & Agreements",
        desc: "Streamline payroll agreements and work arrangements effortlessly.",
      },
      {
        title: "Manage Allowances with Ease",
        desc: "Configure allowances with options, eligibility criteria, and allocations.",
      },
      {
        title: "Simplify Deduction Management",
        desc: "Set up deductions with targeted allocation and eligibility settings.",
      },
      {
        title: "Effortless Federal Tax Management",
        desc: "Enable tax calculations for accurate withholdings and payroll processing.",
      },
    ],
    image: {
      src: "/slides/horilla-payroll-screenshotsixth.jpg",
      alt: "WorkAura payroll module screenshot",
    },
  },
  {
    key: "offboarding",
    chip: "Offboarding",
    heading: "Streamlined Resignation Handling",
    points: [
      {
        title: "Streamlined Resignation Handling",
        desc: "Simplify resignation submission and processing with an intuitive interface.",
      },
      {
        title: "Customized Workflows",
        desc: "Design offboarding workflows for resignations, retirements, and terminations.",
      },
      {
        title: "Flexible Offboarding Features",
        desc: "Tailor tasks to organizational and individual needs for smooth transitions.",
      },
    ],
    image: {
      src: "/slides/horilla-offboarding-screenshotnone.jpg",
      alt: "WorkAura offboarding module screenshot",
    },
  },
  {
    key: "helpdesk",
    chip: "Help Desk",
    heading: "Centralized Frequently Asked Questions",
    points: [
      {
        title: "Centralized Frequently Asked Questions",
        desc: "Enable quick solutions, reduce repetitive inquiries, and boost self-service.",
      },
      {
        title: "Efficient Ticket Handling",
        desc: "Robust ticket workflows with real-time updates for efficient resolution.",
      },
      {
        title: "Prioritization and Escalation",
        desc: "Prioritize by urgency and impact so critical issues get solved fast.",
      },
    ],
    image: {
      src: "/slides/horilla-payroll-screenshoteight.jpg",
      alt: "WorkAura helpdesk module screenshot",
    },
  },
];

export function SliderSection() {
  const [idx, setIdx] = React.useState(0);
  const slide = slides[idx];

  const next = React.useCallback(
    () => setIdx((v) => (v + 1) % slides.length),
    []
  );
  const prev = React.useCallback(
    () => setIdx((v) => (v - 1 + slides.length) % slides.length),
    []
  );

  React.useEffect(() => {
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [next]);

  return (
    <Section className="py-24 sm:py-32 bg-white border-t border-b border-gray-100">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-[2rem] sm:text-[2.5rem] font-black tracking-tight text-gray-900 leading-[1.1]">
          See <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#8b5cf6]">WorkAura</span> in Action
        </h2>
        <p className="max-w-2xl text-[17px] leading-relaxed text-gray-500 font-medium">
          Browse module highlights—each slide demonstrates exactly what teams use daily inside the platform.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {slides.map((s, i) => {
          const active = i === idx;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setIdx(i)}
              className={`rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-300 ${
                active
                  ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
              aria-current={active}
            >
              {s.chip}
            </button>
          );
        })}
      </div>

      <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 px-4">
        <div className="flex flex-col gap-8 lg:pr-8">
          <div>
             <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                {slide.chip}
             </div>
             <h3 className="text-[1.5rem] font-black tracking-tight text-gray-900 leading-[1.1]">
               {slide.heading}
             </h3>
          </div>

          <div className="grid gap-6">
            {slide.points.map((p) => (
              <div key={p.title} className="group relative pl-6 border-l-2 border-gray-200 transition-colors hover:border-[#2563eb]">
                <div className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-full bg-gray-200 group-hover:bg-[#2563eb] transition-colors" />
                <div className="text-[17px] font-bold text-gray-900">{p.title}</div>
                <div className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100 mt-2">
            <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transform transition-transform hover:scale-[1.01] duration-500">
          <div className="absolute right-8 top-8 z-10 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm border border-gray-100/50">
            {idx + 1} / {slides.length}
          </div>
          <Image
            key={slide.image.src}
            src={slide.image.src}
            alt={slide.image.alt}
            width={1100}
            height={700}
            className="h-auto w-full object-cover rounded-[24px] border border-gray-50"
            priority={idx === 0}
          />
        </div>
      </div>
    </Section>
  );
}

