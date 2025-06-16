import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#0B1D51] to-[#725CAD] py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        ¡Tu sueño de jugar en Argentina comienza aquí!
      </h2>

      <p className="mb-10 text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
        Participa en el torneo selectivo que becará a jóvenes talentos para
        entrenar en Argentina con los mejores.
        <br className="hidden md:block" />
        <span className="inline-flex items-center justify-center gap-4 mt-6">
          <img
            src="/images/logo-gadmrio.png"
            alt="Logo Municipio de Riobamba"
            className="h-16 w-auto inline-block"
          />
          <span className="text-white text-2xl font-extrabold"> | Millenium FC |</span>
        </span>
        <br />
        te llevan a lo más alto. ¡Esta es tu oportunidad!
      </p>

      <Link href="/reserva">
        <Button className="bg-black text-white rounded-2xl px-10 py-4 shadow-xl text-lg">
          Reserva tu participación
        </Button>
      </Link>
    </section>
  );
}
