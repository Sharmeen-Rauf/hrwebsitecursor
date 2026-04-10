"use client";

import React from "react";

const items = [
  {
    title: "100% Free Forever",
    desc: "WorkAura is a comprehensive HR software solution that’s absolutely free, without hidden enterprise pricing traps.",
    iconSvg: <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Open-Source Power",
    desc: "WorkAura is open-source. You get unlimited access to the codebase—customize, extend, and integrate as you fit.",
    iconSvg: <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: "Host Wherever You Want",
    desc: "WorkAura is yours forever. Keep your data completely secure by hosting it locally or on your own cloud servers.",
    iconSvg: <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
  },
];

export function Standout() {
  return (
    <section id="standout" className="w-full py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic dark background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#ff5a1f]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-[#2563eb]/10 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-6">
            What makes WorkAura <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a1f] to-[#ff8c42]">Stand Out</span>
          </h2>
          <p className="max-w-2xl text-[17px] leading-relaxed text-gray-400">
            Practical, fast, and completely transparent—built from the ground up for modern teams that demand full control, extreme flexibility, and AI-ready insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative flex flex-col items-center text-center rounded-[32px] bg-white/[0.03] border border-white/10 p-10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff5a1f]/10"
            >
              <div className="relative flex h-24 w-24 items-center justify-center mb-8">
                {/* Glowing ring effects */}
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-[#ff5a1f]/40 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-2 rounded-full border border-white/10 group-hover:border-[#ff5a1f]/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {it.iconSvg}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white mb-4">{it.title}</h3>
              <p className="text-[15px] leading-relaxed text-gray-400">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
