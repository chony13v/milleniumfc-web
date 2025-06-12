import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X as Close } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Programas", href: "#programas" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (

    <header className="fixed top-0 w-full z-50 bg-[#1a1a1d] border-b-4 border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 pt-1 pb-4">
        <Link
          href="#"
          className="text-2xl font-barlowsb text-white leading-none"
        >
          Millenium <span className="text-[#725CAD]">FC</span>
        </Link>

        {/* En escritorio */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 font-barlowr hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón móvil */}
        <Button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 bg-transparent hover:bg-transparent shadow-none"
        >
          {open ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
