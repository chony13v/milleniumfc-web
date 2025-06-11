import React from "react";

export default function Hero() {
  return (
    <section className="-mt-[44px] h-[calc(100vh-64px)] w-full bg-[#1a1a1d]">
      <div
        className="w-full h-full bg-[#1a1a1d] bg-no-repeat bg-cover bg-right overflow-hidden"
        style={{
          backgroundImage: "url(/images/bg_milleniumfc.svg)",
          clipPath: "inset(0% 0% 10% 0%)" // opcional: puedes quitar esto si recorta demasiado
        }}
      />
    </section>
  );
}
