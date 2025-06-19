"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RegistroPage() {
  const router = useRouter();
  const email = (router.query.email as string) || "";

  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "Participantes"), {
        email: email.trim().toLowerCase(),
        fullName: nombre.trim(),
        createdAt: serverTimestamp(),
      });

      alert("¡Registro completo! Nos pondremos en contacto pronto.");
      router.push("/");
    } catch (error: any) {
      alert("Error al registrar. Intenta más tarde.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#725CAD]/10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-[#0B1D51]">
          Completa tu inscripción
        </h1>

        <input
          type="text"
          required
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-black focus:outline-none focus:ring-2 focus:ring-[#725CAD]"
        />

        <input
          type="email"
          value={email}
          readOnly
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 bg-gray-100 text-gray-600"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0B1D51] text-white font-semibold py-3 rounded-lg hover:bg-[#06214a] transition"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  );
}
