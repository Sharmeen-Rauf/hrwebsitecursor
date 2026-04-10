"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    company: "Fashion Bazar",
    person: "Junaid — IT Manager — India",
    text: "We recently switched to WorkAura HRMS and couldn't be happier! After using a multinational brand's HRMS, we found their pricing to be much more sustainable for our operations. The interface is brilliant.",
  },
  {
    company: "Hajgulf",
    person: "Sreehari — IT Manager — Bahrain",
    text: "I’ve been using WorkAura and it’s made my work so much easier. It’s user-friendly, efficient, and has really improved how we manage our daily HR tasks and attendance reporting.",
  },
  {
    company: "MG Steel Industries Pvt Ltd",
    person: "Paras Jain — MD — Nepal",
    text: "My experience with WorkAura team was much better than I had expected. The team offers excellent onboarding support and the HRMS completely transformed our leave policies.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Section id="reviews" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="flex flex-col items-center text-center px-4 mb-20 relative">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
          Words From Our Clients
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-gray-500">
          The proof of our performance lies in the people who use WorkAura every day. 
          Real stories from real users who've transformed their journey.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 z-10">
        <div className="absolute -top-16 -right-4 sm:-right-12 text-[12rem] leading-none text-[#ef4444] font-serif opacity-90 z-0">
          “
        </div>
        
        <div className="relative bg-[#1a1a1a] text-white rounded-[40px] p-10 sm:p-14 lg:p-20 shadow-2xl z-10">
          <div className="absolute -bottom-8 left-16 sm:left-24 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-[#1a1a1a] border-r-[10px] border-r-transparent" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-gray-500 flex items-center justify-center overflow-hidden shrink-0">
              <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold">{testimonials[currentIndex].company}</h4>
              <div className="text-sm text-gray-400 mt-1">{testimonials[currentIndex].person}</div>
              <div className="text-[#facc15] mt-2 tracking-widest text-lg">★★★★★</div>
            </div>
          </div>

          <p className="text-xl sm:text-2xl leading-[1.6] text-gray-200 font-medium">
            We recently switched to WorkAura HRMS and couldn't be happier! After using a multinational brand's HRMS, we found their pricing...
          </p>
          
          <div className="mt-8 text-sm font-semibold text-[#ef4444] cursor-pointer hover:underline inline-block">
            Read More
          </div>

          <div className="flex justify-start gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#ef4444]' : 'w-2.5 bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
