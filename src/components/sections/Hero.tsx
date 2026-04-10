"use client";

import { Section } from "@/components/ui/Section";
import React from "react";

export function Hero() {
  return (
    <Section id="home" className="relative overflow-visible pt-24 sm:pt-36 pb-24 border-b border-gray-100">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 bg-[#fefefe] pointer-events-none overflow-hidden">
        {/* Soft radial gradients for glassmorphic depth */}
        <div className="absolute top-[-5%] left-[5%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#ff5a1f]/15 to-[#e53935]/5 blur-[120px] opacity-70" />
        <div className="absolute bottom-[5%] right-[0%] w-[45%] h-[45%] rounded-full bg-gradient-to-tl from-[#2563eb]/10 to-[#8b5cf6]/10 blur-[100px] opacity-70" />
        
        {/* Elegant dotted mesh overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center px-4">
        {/* Sleek Pill Callout */}
        <a href="#ai-intelligence" className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-gray-200/60 bg-white/60 px-4 py-2 text-[13px] font-bold text-gray-700 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:shadow-md hover:border-gray-300">
           <span className="flex h-2 w-2 rounded-full bg-[#ef4444] animate-pulse" />
           Introducing WorkAura AI Intelligence
           <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
        </a>

        <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-[-0.03em] text-gray-900 drop-shadow-sm">
          Empower Your HR With <br className="hidden md:block" />
          <span className="relative inline-block pb-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a1f] to-[#e53935]">
              Free
            </span>
          </span> Open Source Software
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg sm:text-[21px] leading-[1.6] text-gray-500 font-medium tracking-tight">
          WorkAura HRMS provides completely free, open-source access to all the enterprise-grade features you need to run an efficient, smart organization.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center w-full max-w-sm sm:max-w-none">
          <a href="#demo" className="relative group inline-flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-10 text-base font-bold text-white transition-all hover:bg-black hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
            Try Demo
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="#github" className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-gray-200 bg-white/80 px-10 text-base font-bold text-gray-900 backdrop-blur transition-all hover:bg-gray-50 hover:border-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            View on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
