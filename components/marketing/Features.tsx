"use client";

import React from "react";
import { HandHeart, ShieldOff, BadgeCheck } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Natural",
    desc: "Yourself required no at thoughts delicate landlord it be.",
    Icon: HandHeart,
  },
  {
    title: "No Side effect",
    desc: "Yourself required no at thoughts delicate landlord it be.",
    Icon: ShieldOff,
  },
  {
    title: "100% Organic",
    desc: "Yourself required no at thoughts delicate landlord it be.",
    Icon: BadgeCheck,
  },
];

const Features = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:py-24">
        {/* Heading */}
        <h2 className="text-4xl font-light tracking-[0.18em] text-emerald-800 sm:text-5xl">
          WHY BERRYLAND?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          Yourself required no at thoughts delicate landlord it be. Branched
          dashwood do is whatever it. Farther be chapter at visited married in
          it pressed.
        </p>

        {/* Items */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center">
                <f.Icon
                  className="h-12 w-12 text-emerald-700"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                {f.title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
                {f.desc}
                <br />
                delicate landlord it be.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
