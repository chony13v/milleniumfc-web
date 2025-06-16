// pages/index.tsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Philosophy from "@/components/sections/Philosophy";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Programs />
        <Philosophy />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
