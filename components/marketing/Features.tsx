"use client";

import React from "react";
import Section from "@/components/layout/Section";
import { HandHeart, ShieldOff, BadgeCheck } from "lucide-react";

const features = [
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

export default function Features() {
  return (
    <Section id="features" containerClassName="py-16 lg:py-24">
      <div className="text-center">
        <h2 className="text-4xl font-light tracking-[0.18em] text-emerald-800 sm:text-5xl">
          WHY SNAILLIA?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          Yourself required no at thoughts delicate landlord it be...
        </p>

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
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
