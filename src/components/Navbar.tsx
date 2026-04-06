"use client";

import Link from "next/link";
import * as React from "react";

const links = [
  { href: "#crm", label: "Modules" },
  { href: "#ai-intelligence", label: "Intelligence" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-2xl border-b border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.02)] transition-all">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-3 relative group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ff5a1f,#e53935)] shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /></svg>
          </span>
          <span className="text-xl font-black tracking-tight text-gray-900 group-hover:text-[#ef4444] transition-colors">
            WorkAura
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:flex bg-gray-50/80 backdrop-blur rounded-full px-2 border border-gray-200/50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors px-5 py-3 hover:bg-white rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="#github" className="text-[14px] font-bold text-gray-500 hover:text-gray-900 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">
             GitHub
          </a>
          <a href="#demo" className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-6 text-[13px] font-bold tracking-wide text-white transition-all hover:bg-black hover:shadow-lg hover:-translate-y-0.5">
            Try Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-900 md:hidden hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`h-0.5 w-5 bg-current transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 backdrop-blur-xl md:hidden shadow-xl animate-in slide-in-from-top-2">
          <div className="flex w-full flex-col gap-1 px-4 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-2xl px-5 py-4 text-lg font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-6 flex gap-4 px-5 pt-6 border-t border-gray-100">
               <a href="#demo" className="flex-1 inline-flex h-14 items-center justify-center rounded-full bg-gray-900 text-[15px] font-bold text-white shadow-lg">
                 Try Demo
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
