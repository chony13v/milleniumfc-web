// lib/firebase.ts
import "@/lib/appCheckDebug"; // 👈 si usas el debug-token en localhost

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

/* ---------- Configuración ---------- */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/* ---------- Inicializar Firebase (singleton) ---------- */
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

/* ---------- Servicios ---------- */
export const db = getFirestore(app);
export const auth = getAuth(app);

/* ---------- App Check ----------
   • En producción se usa reCAPTCHA v3.
   • En localhost funciona gracias al debug-token que copiaste en la consola.
----------------------------------- */
if (typeof window !== "undefined" && !(window as any).__FIREBASE_APP_CHECK__) {
  const isLocalhost = window.location.hostname === "localhost";

  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
    ),
    isTokenAutoRefreshEnabled: true,
  });

  // Marca la inicialización para que no se repita
  (window as any).__FIREBASE_APP_CHECK__ = true;

  // Muestra info útil en consola
  console.info(
    `[App Check] Inicializado con reCAPTCHA v3 (${isLocalhost ? "modo debug" : "producción"})`
  );
}
