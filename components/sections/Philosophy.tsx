import React from "react";
import { Button } from "@/components/ui/button";

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Nuestra Filosofía
        </h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Creemos en un desarrollo integral: fundamentos técnicos, táctica
          avanzada y valores humanos que forman atletas completos capaces de
          afrontar retos nacionales e internacionales.
        </p>
        <Button className="mt-8 bg-[#725CAD] rounded-2xl">Conoce Más</Button>
      </div>

      <img
        src="/about.jpg"
        className="rounded-2xl shadow-lg object-cover max-h-[450px] w-full"
        alt="Sesión de entrenamiento en Millenium FC"
      />
    </section>
  );
}
