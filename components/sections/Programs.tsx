import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar } from "lucide-react";

const programs = [
  {
    icon: <Trophy className="w-10 h-10" />,
    title: "Escuela Formativa",
    desc: "Metodología profesional para impulsar tus habilidades técnicas y tácticas.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Becas Internacionales",
    desc: "Programas de visoría en clubes del extranjero.",
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "Scouting & Torneos",
    desc: "Compite y exhibe tu talento ante reclutadores profesionales.",
  },
];

export default function Programs() {
  return (
    <section id="programas" className="max-w-6xl mx-auto px-6 py-20">
      {/* Título principal */}
      <h2
        className="
          text-4xl md:text-5xl text-center text-white
          font-anton font-bold tracking-wide mb-16
        "
      >
        Programas
      </h2>

      {/* Tarjetas */}
      <div className="grid gap-10 md:grid-cols-3">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(0,0,0,0.35)" }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <Card className="bg-[#0B1D51]/80 rounded-2xl border-none">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                {/* Ícono */}
                <motion.div whileHover={{ scale: 1.15 }} className="text-white">
                  {p.icon}
                </motion.div>

                {/* Título de la tarjeta */}
                <h3 className="text-xl text-white font-anton font-semibold">
                  {p.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-white/80 font-barlowm leading-relaxed">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
