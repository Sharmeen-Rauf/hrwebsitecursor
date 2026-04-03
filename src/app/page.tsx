import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AiPlatform } from "@/components/sections/AiPlatform";
import { FAQ } from "@/components/sections/FAQ";
import { GuideAndContact } from "@/components/sections/GuideAndContact";
import { Hero } from "@/components/sections/Hero";
import { MobileApp } from "@/components/sections/MobileApp";
import { Modules } from "@/components/sections/Modules";
import { SliderSection } from "@/components/sections/SliderSection";
import { Standout } from "@/components/sections/Standout";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Standout />
        <Modules />
        <SliderSection />
        <AiPlatform />
        <Testimonials />
        <FAQ />
        <MobileApp />
        <GuideAndContact />
      </main>
      <Footer />
    </div>
  );
}
