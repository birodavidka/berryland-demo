"use client";

import React, { useMemo } from "react";
import { Minus, Plus, Trash2, Heart } from "lucide-react";

import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CartItem = {
  id: string;
  title: string;
  variant?: string;
  size?: string;
  note?: string;
  price: number;
  qty: number;
};

const demoCart: CartItem[] = [
  {
    id: "1",
    title: "Eper — Szedd magad",
    variant: "Helyszíni szedés",
    size: "1 kg",
    note: "Szezonális",
    price: 1800,
    qty: 1,
  },
  {
    id: "2",
    title: "Eper — Előre kimért doboz",
    variant: "Dobozos",
    size: "1 doboz",
    note: "Gyors átvétel",
    price: 2500,
    qty: 2,
  },
  {
    id: "3",
    title: "Erdei gyümölcs mix",
    variant: "Válogatás",
    size: "1 doboz",
    note: "Limitált",
    price: 3200,
    qty: 1,
  },
];

function formatHuf(n: number) {
  return new Intl.NumberFormat("hu-HU").format(n) + " Ft";
}

export default function CartPage() {
  // demo: állandó értékek, később state-ből jön
  const subtotal = useMemo(
    () => demoCart.reduce((sum, i) => sum + i.price * i.qty, 0),
    []
  );

  const delivery = 0; // szedd magadnál tipikusan 0
  const discount = 0;
  const total = subtotal + delivery - discount;

  return (
    <Section id="cart" containerClassName="py-12 sm:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr] lg:gap-10">
        {/* LEFT: cart items */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold tracking-tight">
              Cart
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {demoCart.map((item, idx) => (
              <div key={item.id} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-[140px_1fr_auto] sm:items-start">
                  {/* image placeholder */}
                  <div className="h-[140px] w-[140px] rounded-xl bg-zinc-100" />

                  {/* info */}
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900">
                          {item.title}
                        </h3>
                        <div className="mt-2 space-y-1 text-sm text-zinc-600">
                          {item.variant ? <p>Variant: {item.variant}</p> : null}
                          {item.size ? <p>Size: {item.size}</p> : null}
                          {item.note ? <p>{item.note}</p> : null}
                        </div>
                      </div>
                    </div>

                    {/* actions: wishlist + remove */}
                    <div className="mt-5 flex items-center gap-4 text-zinc-600">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 hover:text-zinc-900"
                      >
                        <Heart className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 hover:text-zinc-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* price + qty */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="text-xl font-semibold text-zinc-900">
                      {formatHuf(item.price)}
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-10 w-10 rounded-full p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-6 text-center text-sm font-medium text-zinc-900">
                        {item.qty}
                      </span>

                      <Button
                        type="button"
                        variant="outline"
                        className="h-10 w-10 rounded-full p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* divider */}
                {idx !== demoCart.length - 1 ? (
                  <div className="h-px w-full bg-zinc-200" />
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* RIGHT: order summary */}
        <Card className="h-fit rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Order Summary
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>Subtotal</span>
              <span className="font-medium text-zinc-900">
                {formatHuf(subtotal)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>Delivery</span>
              <span className="font-medium text-zinc-900">
                {delivery === 0 ? "-" : formatHuf(delivery)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-700">
              <span>Discount</span>
              <span className="font-medium text-zinc-900">
                {discount === 0 ? "-" : `- ${formatHuf(discount)}`}
              </span>
            </div>

            <div className="my-4 h-px w-full bg-zinc-200" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-zinc-900">Total</span>
              <span className="text-lg font-semibold text-zinc-900">
                {formatHuf(total)}
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button className="h-12 w-full rounded-xl text-base">
              Checkout
            </Button>
            {/* 
            <div className="w-full">
              <label className="text-sm text-zinc-600">Use a promo code</label>
              <div className="mt-2 flex gap-3">
                <Input className="h-11" placeholder="PROMO2026" />
                <Button variant="outline" className="h-11 px-5">
                  Apply
                </Button>
              </div>
            </div> */}
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
}
