import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Contáctanos
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Mail className="w-8 h-8 text-[#725CAD]" />
        <p className="text-lg text-white">info@milleniumfc.com</p>
      </div>
    </section>
  );
}
