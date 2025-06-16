// lib/appCheckDebug.ts

// Activar App Check Debug Token fijo solo en desarrollo local
if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development" &&
  window.location.hostname === "localhost"
) {
  // 🔐 Token fijo generado manualmente desde Firebase Console
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = "AEDC9480-2F4A-453E-9B1C-7FD242D3E3E1";
}
