import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar } from "lucide-react";

const programs = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Escuela Formativa",
    desc: "Metodología profesional para impulsar tus habilidades técnicas y tácticas.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Becas Internacionales",
    desc: "Programas de visoría en clubes del extranjero.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Scouting & Torneos",
    desc: "Compite y exhibe tu talento ante reclutadores profesionales.",
  },
];

export default function Programs() {
  return (
    <section id="programas" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Programas
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <Card
            key={i}
            className="bg-[#0B1D51]/80 rounded-2xl shadow-xl border-0"
          >
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
              <motion.div whileHover={{ scale: 1.1 }}>{p.icon}</motion.div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-white/80">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
