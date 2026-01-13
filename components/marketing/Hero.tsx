"use client";

import React from "react";
import Section from "@/components/layout/Section";
import SizeSelector from "@/components/SizeSelector";
import CTAHero from "@/components/CTAHero";

export default function Hero() {
  return (
    <Section id="hero" containerClassName="py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* LEFT */}
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
            snailia
          </h1>

          <p className="mt-6 text-sm font-semibold text-emerald-700">
            Natural Inner Beauty
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
            Provide deluxe hydration for those with dry or age-related skin
            concerns...
          </p>

          <div className="mt-8">
            <SizeSelector />
            <CTAHero />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full">
          <div className="relative ml-auto aspect-[4/3] w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-md border border-zinc-200 bg-zinc-50" />
            <div className="absolute right-6 top-6 h-40 w-32 rounded-md border border-zinc-200 bg-white shadow-sm sm:h-56 sm:w-44" />
            <div className="absolute right-24 top-10 h-44 w-36 rounded-md border border-zinc-200 bg-white shadow-sm sm:h-64 sm:w-52" />
            <div className="absolute bottom-6 left-10 right-10 h-14 rounded-full border border-zinc-200 bg-white/70 shadow-sm sm:h-16" />
          </div>
        </div>
      </div>
    </Section>
  );
}
