"use client";

import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Sentiment Analyzer",
    desc: "Analyze text for sentiment, risk level, issue type, and recommended action.",
  },
  {
    title: "Burnout Risk Detector",
    desc: "Combine attendance, overtime, late arrivals, and leave signals into a risk score.",
  },
  {
    title: "Organization Health",
    desc: "Cross-module trends: attendance rate, leave patterns, complaint frequency, morale score.",
  },
  {
    title: "Performance Narrator",
    desc: "Auto-generate written performance summaries from KPIs, objectives, and feedback.",
  },
  {
    title: "Complaint Classifier",
    desc: "Categorize complaints: payroll, harassment, workload, manager, policy, leave.",
  },
  {
    title: "Manager Copilot",
    desc: "AI briefings for managers: team status, risks, and next best actions.",
  },
  {
    title: "Action Engine",
    desc: "Suggest HR actions with confidence score and reason—ready for manager review.",
  },
];

export function AiPlatform() {
  return (
    <Section id="cloud" className="py-14 sm:py-18">
      <div className="flex flex-col gap-3">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--color-muted)]">
          Phase 2
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-border)]" />
          Ollama-powered intelligence
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          AI Workforce Intelligence Platform
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
          WorkAura extends your HRMS/CRM with 7 intelligence modules powered by
          Ollama—analyzing live database data across attendance, leave, payroll,
          PMS, and helpdesk. Actions can be suggested, then approved by managers.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-extrabold">{f.title}</div>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                  {f.desc}
                </p>
              </div>
              <div
                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                  i % 2 === 0
                    ? "bg-[color:var(--color-brand-a)]"
                    : "bg-[color:var(--color-brand-b)]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 sm:p-8">
        <div className="text-sm font-extrabold">Suggested endpoints</div>
        <div className="mt-3 grid gap-2 text-sm font-semibold text-[color:var(--color-muted)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[color:var(--color-background)] px-3 py-1">
              GET /ai-assistant/dashboard/
            </span>
            <span>Organization Health Dashboard</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[color:var(--color-background)] px-3 py-1">
              POST /ai-assistant/analyze/
            </span>
            <span>Sentiment / risk analysis JSON API</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[color:var(--color-background)] px-3 py-1">
              POST /ai-assistant/chat/
            </span>
            <span>Chat enhanced with analyzer context</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

