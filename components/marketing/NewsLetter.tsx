"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: image placeholder */}
          <div className="rounded-2xl bg-zinc-50 p-8">
            <div className="flex items-center justify-center">
              {/* Később ezt cseréled képre (next/image) */}
              <div className="relative aspect-[4/3] w-full max-w-lg rounded-xl border border-zinc-200 bg-white" />
            </div>
          </div>

          {/* RIGHT: text + form */}
          <div>
            <h2 className="text-4xl font-light tracking-tight text-emerald-800 sm:text-5xl">
              Subscribe Newsletter
            </h2>

            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Enter your email below for daily updates
            </p>

            <form
              className="mt-10 flex w-full max-w-xl items-stretch gap-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email."
                className="h-14 rounded-none border-zinc-200 text-base shadow-none focus-visible:ring-0"
              />

              <Button
                type="submit"
                className="h-14 rounded-none px-10 text-sm font-medium shadow-lg"
              >
                GET START
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
