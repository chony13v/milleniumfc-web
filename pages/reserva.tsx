"use client";

// 👇 FIX para TypeScript: declara grecaptcha enterprise
declare global {
  interface Window {
    grecaptcha: any;
  }
}
export {}; // Requerido en archivos con 'declare global'

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  limit,
  getDocs,
} from "firebase/firestore";

/* ---------- Modal reutilizable ---------- */
type AlertModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

function AlertModal({ open, title, message, onClose }: AlertModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-sm p-6 text-center">
        <h2 className="text-xl font-bold text-[#0B1D51] mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#0B1D51] text-white rounded-lg font-semibold hover:bg-[#122f7c] transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

/* ---------- Página ---------- */
export default function ReservaPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExistsModal, setShowExistsModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const router = useRouter();

  // ✅ App Check debug token en desarrollo local
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hostname === "localhost" &&
      !localStorage.getItem("firebase:appCheck-debug-token")
    ) {
      localStorage.setItem("firebase:appCheck-debug-token", "true");
      location.reload();
    }
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setLoading(false);
      return;
    }

    try {
      console.log("🔍 Email normalizado:", normalizedEmail);

      // ✅ reCAPTCHA token
      const token = await window.grecaptcha.execute(
        "6LeBz2ErAAAAACyKkaXUCSF91kqaqCTRaOtxyx_V",
        { action: "RESERVA" }
      );
      console.log("🛡️ Token reCAPTCHA obtenido:", token);

      // 🔍 Buscar en Firebase si ya existe ese email
      const q = query(
        collection(db, "Participantes"),
        where("email", "==", normalizedEmail),
        limit(1)
      );

      const snap = await getDocs(q);
      console.log("📦 Resultado del query:", snap.size);

      if (!snap.empty) {
        console.log("✅ Documento encontrado:", snap.docs[0].data());
        setShowExistsModal(true);
      } else {
        console.log("🚫 No se encontró el email. Redirigiendo al registro.");
        router.push(`/registro?email=${encodeURIComponent(normalizedEmail)}`);
      }
    } catch (err) {
      console.error("❌ Error al consultar Firestore o reCAPTCHA:", err);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AlertModal
        open={showExistsModal}
        title="⚠️ Alerta"
        message="Este correo ya está registrado en la APP MILLENIUMFC"
        onClose={() => setShowExistsModal(false)}
      />
      <AlertModal
        open={showErrorModal}
        title="🚨 Error de conexión"
        message="Estamos experimentando una interrupción en los servicios. Intenta más tarde."
        onClose={() => setShowErrorModal(false)}
      />

      <main className="min-h-screen flex items-center justify-center bg-[#1a1a1d] px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold mb-4 text-center text-[#0B1D51]">
            Primero, verifiquemos tu email
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Ingresa tu correo electrónico para saber si ya estás registrado.
          </p>

          <input
            type="email"
            required
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#725CAD]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1D51] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#122f7c] transition"
          >
            {loading ? "Verificando..." : "Continuar"}
          </button>
        </form>
      </main>
    </>
  );
}
