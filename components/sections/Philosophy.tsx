import React from "react";

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center"
    >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-anton font-bold text-white mb-10">
        Nuestra Filosofía
      </h2>

      {/* Cita de Juan Pablo Montoya */}
      <blockquote className="text-lg md:text-xl text-white/90 font-barlowm leading-relaxed italic max-w-xl">
        “En Colombia les encantan los ganadores, pero nadie quiere ser parte del
        proceso de crear ganadores.”
        <br />
        <span className="mt-4 block text-white/60 not-italic font-normal">
          — Juan Pablo Montoya
        </span>
      </blockquote>

      {/* Frase institucional */}
      <p className="mt-12 text-2xl md:text-3xl font-anton text-[#725CAD]">
        Formando Campeones
      </p>
    </section>
  );
}
