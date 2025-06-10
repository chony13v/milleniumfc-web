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
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#" className="text-2xl font-extrabold text-white">
          Millenium <span className="text-[#725CAD]">FC</span>
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* mobile toggle */}
        <Button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 bg-transparent hover:bg-transparent shadow-none"
        >
          {open ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 pb-6 flex flex-col gap-4">
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
