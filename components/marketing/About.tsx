"use client";

import React from "react";
import { Leaf, MapPin, Sprout } from "lucide-react";

type WhyCard = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const cards: WhyCard[] = [
  {
    title: "Friss, helyi bogyósok",
    desc: "Szezonban frissen szedhető eper és bogyósok – rövid ellátási lánc, igazi íz.",
    Icon: Leaf,
  },
  {
    title: "Könnyű megközelítés",
    desc: "Szombathely környékén, egyszerű parkolással és gyors bejutással a sorokhoz.",
    Icon: MapPin,
  },
  {
    title: "Élmény + minőség",
    desc: "Szedd magad élmény családoknak is. Gondozott sorok, tiszta terület, egyértelmű szabályok.",
    Icon: Sprout,
  },
];

function CrossCard({ title, desc, Icon }: WhyCard) {
  return (
    <div className="flex gap-5 border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-100">
        <Icon className="h-6 w-6 text-emerald-700" strokeWidth={1.8} />
      </div>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-emerald-800">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-600">{desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: image placeholder */}
          <div className="relative">
            <div className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl bg-zinc-50">
              {/* Kép placeholder (később next/image) */}
              <div className="absolute inset-0 rounded-2xl border border-zinc-200 bg-white" />

              {/* finom “döntött” hatás */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-50/60 [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]" />

              {/* belső üres hely */}
              <div className="absolute inset-10 rounded-xl border border-zinc-200 bg-white/60" />
            </div>
          </div>

          {/* RIGHT: text + cards */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
              Miért a Berryland?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
              Szedd magad élmény Szombathely közelében: friss bogyósok,
              kiszámítható információk, és egy családbarát hely, ahová jó
              visszajönni.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {cards.map((c) => (
                <CrossCard key={c.title} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
