"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function MobileApp() {
  return (
    <Section id="videos" className="py-14 sm:py-18">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[linear-gradient(135deg,rgba(255,90,31,0.10),rgba(37,99,235,0.10))] p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--color-brand-a)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[color:var(--color-brand-b)]/20 blur-3xl" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Experience Smart HR with WorkAura Mobile App
            </h2>
            <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
              Manage attendance, leaves, employee info, and more effortlessly
              with the WorkAura app. Your HR tasks—simplified & streamlined on
              the go.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#playstore" variant="secondary">
                For Android (Play Store)
              </Button>
              <Button href="#appstore" variant="ghost">
                For iOS (App Store)
              </Button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-background)]/70 px-4 py-2 text-xs font-semibold text-[color:var(--color-muted)]">
              It’s free • It’s open-source • Self-host anytime
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6">
            <div className="text-sm font-extrabold">Mobile preview</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Attendance", "Leave", "Payroll", "Helpdesk", "PMS", "AI"].map(
                (t, i) => (
                  <div
                    key={t}
                    className="aspect-[9/16] rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3"
                  >
                    <div
                      className={`h-2 w-8 rounded-full ${
                        i % 2 === 0
                          ? "bg-[color:var(--color-brand-a)]"
                          : "bg-[color:var(--color-brand-b)]"
                      }`}
                    />
                    <div className="mt-3 text-xs font-bold">{t}</div>
                    <div className="mt-1 text-[10px] font-semibold text-[color:var(--color-muted)]">
                      Quick actions
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

