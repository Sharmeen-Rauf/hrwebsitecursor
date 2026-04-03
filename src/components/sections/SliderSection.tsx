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
    <Section className="py-14 sm:py-18">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          All the modules you’ll ever need in one software
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
          Browse module highlights—each slide shows what teams use daily inside
          WorkAura.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {slides.map((s, i) => {
          const active = i === idx;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setIdx(i)}
              className={`rounded-full px-4 py-2 text-xs font-extrabold transition ${
                active
                  ? "bg-[color:var(--color-brand-a)] text-white"
                  : "border border-[color:var(--color-border)] bg-[color:var(--color-background)] text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface)]"
              }`}
              aria-current={active}
            >
              {s.chip}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 sm:p-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-extrabold text-[color:var(--color-muted)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand-b)]" />
            {slide.chip}
          </div>
          <h3 className="mt-4 text-xl font-extrabold tracking-tight sm:text-2xl">
            {slide.heading}
          </h3>

          <div className="mt-5 grid gap-4">
            {slide.points.map((p) => (
              <div key={p.title} className="border-b border-[color:var(--color-border)] pb-4 last:border-b-0 last:pb-0">
                <div className="text-sm font-extrabold">{p.title}</div>
                <div className="mt-1 text-sm leading-6 text-[color:var(--color-muted)]">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <Button variant="ghost" onClick={prev}>
              Prev
            </Button>
            <Button variant="secondary" onClick={next}>
              Next
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-sm">
          <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 px-3 py-1 text-xs font-extrabold text-[color:var(--color-muted)] backdrop-blur">
            {idx + 1}/{slides.length}
          </div>
          <Image
            key={slide.image.src}
            src={slide.image.src}
            alt={slide.image.alt}
            width={1100}
            height={700}
            className="h-auto w-full rounded-2xl border border-[color:var(--color-border)] bg-white object-cover"
            priority={idx === 0}
          />
        </div>
      </div>
    </Section>
  );
}

