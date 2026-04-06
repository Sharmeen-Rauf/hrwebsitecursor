"use client";

import { Section } from "@/components/ui/Section";
import React from "react";

export function GuideAndContact() {
  return (
    <Section id="contact" className="py-24 relative bg-white overflow-hidden border-t border-gray-100">
      <div 
        className="absolute inset-0 z-0 bottom-0 top-[50%] opacity-20 pointer-events-none"
        style={{ 
          backgroundSize: '80px 80px', 
          backgroundImage: 'linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)',
          transform: 'perspective(1000px) rotateX(75deg) scale(2.5)',
          transformOrigin: 'bottom center'
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-6">
          For queries contact
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-600 mb-10 max-w-2xl px-4">
          Straightforward support, no conditions, no confusion and unrestricted assistance designed around your needs.
        </p>

        <a 
          href="#contact-form"
          className="bg-[#eb5544] hover:bg-[#d64131] text-white px-10 py-3.5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-red-500/20"
        >
          Contact Us
        </a>
      </div>
      
      {/* Decorative illustration placeholder aligning with the screenshot */}
      <div className="hidden lg:block absolute right-10 bottom-0 z-10">
        <svg className="w-80 h-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="160" fill="#fdf2f2"/>
          <path d="M150 250H280V270H150V250Z" fill="#333"/>
          <path d="M180 180H250V250H180V180Z" fill="#111"/>
          <circle cx="215" cy="130" r="30" fill="#e5e7eb"/>
          <path d="M150 270H250V350H150V270Z" fill="#ff7f50"/>
        </svg>
      </div>
    </Section>
  );
}
