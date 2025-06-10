import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-sm text-white/80">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} Millenium FC. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <Link href="/terminos" className="hover:text-white">
            Términos
          </Link>
          <Link href="/privacidad" className="hover:text-white">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
