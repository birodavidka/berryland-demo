"use client";

import React from "react";
import SizeSelector from "../SizeSelector";
import CTAHero from "../CTAHero";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <div className="flex flex-col">
            <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
              Berryland
            </h1>

            <p className="mt-6 text-sm font-semibold text-emerald-700">
              pre packed berrys
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              ad necessitatibus iure quidem. Harum, quibusdam velit porro
              doloremque quo, quas delectus labore expedita, incidunt dolore
              minima corporis et fugit tempore.
            </p>

            <SizeSelector />

            <CTAHero />
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Kép helye (később ide jön a next/image) */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              <div className="absolute inset-0 rounded-md border border-zinc-200 bg-zinc-50" />

              {/* “Termék” placeholder blokk */}
              <div className="absolute right-6 top-6 h-40 w-32 rounded-md border border-zinc-200 bg-white shadow-sm sm:h-56 sm:w-44" />

              {/* “Doboz” placeholder blokk */}
              <div className="absolute right-24 top-10 h-44 w-36 rounded-md border border-zinc-200 bg-white shadow-sm sm:h-64 sm:w-52" />

              {/* “Kő talapzat” placeholder */}
              <div className="absolute bottom-6 left-10 right-10 h-14 rounded-full border border-zinc-200 bg-white/70 shadow-sm sm:h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
