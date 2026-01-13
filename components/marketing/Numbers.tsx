"use client";

import React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

type FeaturedNumber = {
  label: string;
  value: number;
  suffix?: string; // pl. "%"
};

const featuredNumbers: FeaturedNumber[] = [
  { label: "Happy Customers", value: 25356 },
  { label: "Followers", value: 6050 },
  { label: "Shops", value: 851 },
  { label: "Happy Customers", value: 95, suffix: "%" },
];

const Numbers = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-y-10 text-center sm:grid-cols-4">
          {featuredNumbers.map((item) => (
            <div
              key={item.label + item.value}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <NumberTicker
                  value={item.value}
                  className="text-4xl font-semibold tracking-tight text-emerald-800 sm:text-6xl"
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
      </div>
    </section>
  );
};

export default Numbers;
