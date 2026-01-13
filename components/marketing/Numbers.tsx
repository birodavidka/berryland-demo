"use client";

import React from "react";
import Section from "@/components/layout/Section";
import { NumberTicker } from "@/components/ui/number-ticker";

const items = [
  { label: "Happy Customers", value: 25356 },
  { label: "Followers", value: 6050 },
  { label: "Shops", value: 851 },
  { label: "Happy Customers", value: 95, suffix: "%" },
];

export default function Numbers() {
  return (
    <Section id="numbers" containerClassName="py-10">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-center sm:grid-cols-4 sm:gap-x-12">
        {items.map((item) => (
          <div
            key={item.label + item.value}
            className="flex flex-col items-center"
          >
            <div className="flex items-baseline justify-center gap-1">
              <NumberTicker
                value={item.value}
                className="text-5xl font-semibold tracking-tight text-emerald-800 sm:text-6xl"
              />
              {item.suffix ? (
                <span className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl">
                  {item.suffix}
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-sm font-medium text-zinc-800 sm:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
