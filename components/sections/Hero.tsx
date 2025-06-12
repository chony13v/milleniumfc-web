import React from "react";

export default function Hero() {
  return (
    <section className="-mt-[44px] h-[calc(100vh-64px)] w-full bg-[#1a1a1d] relative">
      {/* Imagen de fondo distinta según el tamaño de pantalla */}
      <div
        className={`
          absolute top-0 left-0 w-full h-full z-0
          bg-no-repeat bg-center bg-contain
          bg-[url('/images/profile_bg1.jpg')] 
          md:bg-[url('/images/bg_milleniumfc.svg')]
        `}
      />

      {/* Texto abajo en móvil */}
      <div className="relative z-10 md:hidden w-full flex justify-center">
        <h1 className="text-4xl font-anton tracking-tight text-white text-center mt-[calc(100vh-180px)] px-4">
          Millenium <span className="text-[#725CAD]">FC</span>
        </h1>
      </div>
    </section>
  );
}
