"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function GuideAndContact() {
  return (
    <Section id="contact" className="py-14 sm:py-18">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-8">
          <div className="text-xs font-semibold text-[color:var(--color-muted)]">
            We will guide you every step of the way
          </div>
          <h3 className="mt-2 text-xl font-extrabold tracking-tight">
            Start with step-by-step video tutorials
          </h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            Learn how to deploy, configure, and run WorkAura—self-hosted or on
            your preferred cloud provider.
          </p>
          <div className="mt-6">
            <Button href="#tutorials" variant="secondary">
              See tutorials
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8">
          <div className="text-xs font-semibold text-[color:var(--color-muted)]">
            For queries contact
          </div>
          <h3 className="mt-2 text-xl font-extrabold tracking-tight">
            Straightforward support
          </h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            No conditions, no confusion—assistance designed around your needs.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact-form" variant="primary">
              Contact Us
            </Button>
            <Button href="#pricing" variant="ghost">
              View pricing
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

