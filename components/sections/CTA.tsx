import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#0B1D51] to-[#725CAD] py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">
        ¿Listo para dar el siguiente paso?
      </h2>
      <p className="mb-8 text-white/90 max-w-2xl mx-auto">
        Reserva una prueba y únete a la familia Millenium. Llevaremos tu talento
        al máximo nivel.
      </p>
      <Button className="bg-black text-white rounded-2xl px-8 py-3 shadow-lg">
        Agenda tu prueba
      </Button>
    </section>
  );
}
