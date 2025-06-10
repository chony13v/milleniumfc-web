// pages/_app.tsx
import "@/styles/globals.css"; // Usa "../styles/globals.css" si no tienes alias "@"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
