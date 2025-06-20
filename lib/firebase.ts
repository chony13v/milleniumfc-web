// lib/firebase.ts
import "@/lib/appCheckDebug"; // ✅ Debug token en localhost si aplica

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/* ---------- Configuración de Firebase ---------- */
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
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

/* ---------- Servicios ---------- */
export const db = getFirestore(app);
export const auth = getAuth(app);

// ❌ No inicializamos App Check aquí para evitar ejecución global
