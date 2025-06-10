import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-center bg-no-repeat bg-[length:100%_100%] px-6"
      style={{ backgroundImage: "url(/images/bg_milleniumfc.svg)" }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl">
          Millenium FC
        </h1>
        <p className="mt-6 text-xl text-white/90">Formando Campeones</p>
        <Button className="mt-10 bg-[#725CAD] hover:bg-[#5e46b7] text-white rounded-2xl px-10 py-4 shadow-lg">
          Únete al Sueño
        </Button>
      </div>
    </section>
  );
}
