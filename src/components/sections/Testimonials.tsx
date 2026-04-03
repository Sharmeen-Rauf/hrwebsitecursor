"use client";

import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    company: "Fashion Bazar",
    person: "Junaid — IT Manager — India",
    text: "We recently switched to WorkAura HRMS and couldn't be happier! After using a multinational brand's HRMS, we found their pricing…",
  },
  {
    company: "Hajgulf",
    person: "Sreehari — IT Manager — Bahrain",
    text: "I’ve been using WorkAura and it’s made my work so much easier. It’s user-friendly, efficient, and has really improved how…",
  },
  {
    company: "MG Steel Industries Pvt Ltd",
    person: "Paras Jain — MD — Nepal",
    text: "My experience with WorkAura team was much better than I had expected. Though my work had not been completed due…",
  },
  {
    company: "Just Simply Marketing",
    person: "Lianna — Operations Consultant — Malaysia",
    text: "WorkAura provided a free and efficient software for our HR needs with our start-up. It’s a great alternative to expensive…",
  },
  {
    company: "Betasaurus",
    person: "Mohith — Founder — India",
    text: "WorkAura is good, above expectations. Received good installation support also. However some modules like user addition and management should be…",
  },
  {
    company: "Whitehorse Manpower Pvt. Ltd",
    person: "Mahesh — Operations Manager — India",
    text: "Efficient and User-Friendly HRMS Solution. We at Whitehorse Manpower have been using WorkAura for managing our HR operations, and…",
  },
];

export function Testimonials() {
  return (
    <Section id="blogs" className="py-14 sm:py-18">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Words From Our Clients
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)] sm:text-base">
            The proof of our performance lies in the people who use WorkAura
            every day—real stories from real users.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={`${t.company}-${i}`}
            className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] p-6 shadow-sm"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--color-brand-b)]/10 blur-2xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-extrabold">{t.company}</div>
                <div className="mt-1 text-xs font-semibold text-[color:var(--color-muted)]">
                  {t.person}
                </div>
              </div>
              <div className="text-sm font-extrabold text-[color:var(--color-brand-a)]">
                ★★★★★
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
              “{t.text}”
            </p>
            <div className="mt-5 text-sm font-semibold text-[color:var(--color-brand-b)]">
              Read More
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

