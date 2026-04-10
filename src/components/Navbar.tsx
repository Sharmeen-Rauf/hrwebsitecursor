"use client";

import Link from "next/link";
import * as React from "react";

type NavLink = {
  href: string;
  label: string;
  isNew?: boolean;
  hasDropdown?: boolean;
  isActive?: boolean;
};

const links: NavLink[] = [
  { href: "#home", label: "Home", isActive: true },
  { href: "#crm", label: "CRM", isNew: true },
  { href: "#features", label: "Features", hasDropdown: true },
  { href: "#docs", label: "Docs" },
  { href: "#cloud", label: "Cloud", isNew: true },
  { href: "#blogs", label: "Blogs" },
  { href: "#videos", label: "Videos" },
  { href: "#pricing", label: "Pricing", hasDropdown: true },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all font-sans">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-2 relative">
          {/* Logo icon representation */}
          <span className="flex-shrink-0 text-[#ff4f33]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </span>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Horilla
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Search Icon */}
          <button className="text-gray-400 hover:text-gray-600 px-2 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          <div className="flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`relative flex items-center gap-1 text-[15px] font-medium transition-colors px-3 py-2 rounded-md ${
                  l.isActive ? "text-[#ff4f33]" : "text-gray-700 hover:text-[#ff4f33]"
                }`}
              >
                {l.label}
                {l.hasDropdown && (
                  <svg className="w-4 h-4 ml-0.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {l.isNew && (
                  <span className="absolute -top-1 right-0 rounded-full bg-[#ff4f33] px-1.5 py-[0.5px] text-[9px] font-bold text-white tracking-wider uppercase shadow-sm">
                    New
                  </span>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-900 lg:hidden hover:bg-gray-100 transition-colors border border-gray-200"
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
        <div className="absolute top-full left-0 right-0 border-b border-gray-200 bg-white lg:hidden shadow-xl animate-in slide-in-from-top-2 z-40 max-h-[85vh] overflow-y-auto">
          <div className="flex w-full flex-col gap-1 px-4 py-4">
            <div className="relative mb-4 px-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-100 border-none rounded-lg py-3 px-4 text-[15px] focus:ring-2 focus:ring-[#ff4f33]/30"
              />
            </div>
            
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium transition-colors ${
                  l.isActive ? "bg-red-50 text-[#ff4f33]" : "text-gray-700 hover:bg-gray-50 hover:text-[#ff4f33]"
                }`}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-3">
                  {l.label}
                  {l.isNew && (
                    <span className="rounded-full bg-[#ff4f33] px-2 py-0.5 text-[10px] font-bold text-white tracking-wider uppercase">
                      New
                    </span>
                  )}
                </div>
                {l.hasDropdown && (
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
