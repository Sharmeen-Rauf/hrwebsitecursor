"use client";

import Link from "next/link";
import Image from "next/image";

const columns: { title: string; links: { label: string; href: string; highlight?: boolean }[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home", highlight: true },
      { label: "Documentation", href: "#docs" },
      { label: "Features", href: "#features" },
      { label: "Blog", href: "#blogs" },
      { label: "Sitemap", href: "#home" },
    ],
  },
  {
    title: "Discover WorkAura",
    links: [
      { label: "What is WorkAura?", href: "#home" },
      { label: "WorkAura Stories", href: "#blogs" },
      { label: "Compare Competitors", href: "#pricing" },
      { label: "Client Locations", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Assets", href: "#crm" },
      { label: "Attendance", href: "#crm" },
      { label: "Employee", href: "#crm" },
      { label: "Leave", href: "#crm" },
      { label: "Onboarding", href: "#crm" },
      { label: "Payroll", href: "#crm" },
      { label: "PMS", href: "#crm" },
      { label: "Recruitment", href: "#crm" },
      { label: "Offboarding", href: "#crm" },
      { label: "Helpdesk", href: "#crm" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[15px] font-bold text-white mb-6 tracking-wide">{c.title}</div>
              <div className="flex flex-col gap-4">
                {c.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className={`text-[14px] font-medium transition-colors ${l.highlight ? 'text-[#ef4444]' : 'text-gray-400 hover:text-white'}`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Source and Legal Column */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-[15px] font-bold text-white mb-6 tracking-wide">Source</div>
              <div className="flex flex-col gap-4">
                <a href="#github" className="text-[14px] font-medium text-gray-400 hover:text-white">GitHub</a>
              </div>
            </div>
            
            <div>
               <div className="text-[15px] font-bold text-white mb-6 tracking-wide">Legal</div>
               <div className="flex flex-col gap-4 mb-8">
                 <Link href="#privacy" className="text-[14px] font-medium text-gray-400 hover:text-white">Privacy Policy</Link>
               </div>
               
               <div className="flex flex-col gap-3">
                 <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-[160px] h-[48px]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M5.5 4l10.5 7.5-10.5 7.5v-15z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                       <span className="text-[9px] uppercase font-semibold text-gray-300">GET IT ON</span>
                       <span className="text-[13px] font-bold">Google Play</span>
                    </div>
                 </button>
                 <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-700 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors w-[160px] h-[48px]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                       <span className="text-[9px] uppercase font-semibold text-gray-300">Download on the</span>
                       <span className="text-[13px] font-bold">App Store</span>
                    </div>
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-gray-800/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[14px] font-medium text-gray-500">
            © {new Date().getFullYear()} WorkAura. All rights reserved.
          </div>
          
          <div className="flex items-center gap-3">
             <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ff5a1f,#e53935)]">
               <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /></svg>
             </span>
             <span className="text-2xl font-black tracking-tight text-white">
                WorkAura
             </span>
          </div>

          <div className="flex items-center gap-5 text-gray-500">
             {/* Note: In a real app we would use exact social icons like FontAwesome or Radix */}
             {['facebook', 'twitter', 'instagram', 'linkedin', 'github', 'youtube'].map((social) => (
                <a key={social} href={`#${social}`} className="hover:text-white transition-colors flex items-center justify-center w-8 h-8" aria-label={social}>
                   <div className="w-5 h-5 rounded-md border border-current"></div>
                </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
