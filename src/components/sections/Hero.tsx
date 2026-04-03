"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { HeroScene } from "@/components/HeroScene";

export function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden pt-14 sm:pt-18">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[url('/home-img-new.avif')] bg-cover bg-center opacity-[0.16]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.75),rgba(255,255,255,0.98))] dark:bg-[linear-gradient(180deg,rgba(7,11,20,0.90),rgba(7,11,20,0.75),rgba(7,11,20,0.96))]"
        aria-hidden="true"
      />
      <HeroScene />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-xs font-semibold text-[color:var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand-a)]" />
          New: AI Workforce Intelligence Platform (Phase 2)
        </div>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Empower Your HR Team with{" "}
          <span className="relative inline-block">
            <span className="text-[color:var(--color-brand-a)]">Free</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[color:var(--color-brand-a)]/35" />
          </span>{" "}
          <br className="hidden sm:block" />
          Open Source Software
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
          WorkAura HRMS offers all the features you would expect from your
          favorite Open Source HR Software and much more.
        </p>

        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href="#demo" variant="primary" className="min-w-[170px]">
            Try Demo
          </Button>
          <Button href="#github" variant="ghost" className="min-w-[170px]">
            View on GitHub
          </Button>
        </div>
      </div>

      <div className="pb-10 sm:pb-14" />
    </Section>
  );
}

