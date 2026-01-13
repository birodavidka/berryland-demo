"use client";

import React, { useMemo } from "react";
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
  price: number;
  qty: number;
};

const demoCart: CartItem[] = [
  { id: "1", title: "Eper — Szedd magad", price: 1800, qty: 1 },
  { id: "2", title: "Eper — Előre kimért doboz", price: 2500, qty: 2 },
  { id: "3", title: "Erdei gyümölcs mix", price: 3200, qty: 1 },
];

function formatHuf(n: number) {
  return new Intl.NumberFormat("hu-HU").format(n) + " Ft";
}

export default function CheckOutPage() {
  const subtotal = useMemo(
    () => demoCart.reduce((sum, i) => sum + i.price * i.qty, 0),
    []
  );
  async function createOrder() {
    const payload = {
      customer: {
        email: "you@email.com",
        firstName: "Dávid",
        lastName: "Bíró",
        phone: "+36...",
      },
      pickup: {
        option: "pick",
        day: "Szombat",
        time: "10:00",
        note: "",
      },
      items: demoCart.map((i) => ({
        id: i.id,
        title: i.title,
        qty: i.qty,
        price: i.price,
      })),
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert(err.error ?? "Order create failed");
      return;
    }

    const data = await res.json();
    alert(`Order created: ${data.orderId}`);
  }

  const delivery = 0; // szedd magad / helyszíni átvétel
  const discount = 0;
  const total = subtotal + delivery - discount;

  return (
    <Section id="checkout" containerClassName="py-12 sm:py-16 lg:py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Checkout
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          Most csak demo checkout (UI). Fizetést később kötjük be (Stripe).
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:gap-10">
        {/* LEFT: forms */}
        <div className="space-y-8">
          {/* Contact */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-700">Email</label>
                <Input className="mt-2 h-11" placeholder="you@email.com" />
              </div>

              <div>
                <label className="text-sm text-zinc-700">First name</label>
                <Input className="mt-2 h-11" placeholder="Dávid" />
              </div>

              <div>
                <label className="text-sm text-zinc-700">Last name</label>
                <Input className="mt-2 h-11" placeholder="Bíró" />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-700">Phone</label>
                <Input className="mt-2 h-11" placeholder="+36..." />
              </div>
            </CardContent>
          </Card>

          {/* Pickup / Visit info */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Pickup / Visit
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-700">Option</label>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-xl border border-zinc-200 p-4 text-left hover:border-zinc-300"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      Helyszíni szedés
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      Fizetés mérlegelés után.
                    </p>
                  </button>

                  <button
                    type="button"
                    className="rounded-xl border border-zinc-200 p-4 text-left hover:border-zinc-300"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      Előre kimért átvétel
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      Gyors, kész doboz.
                    </p>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-zinc-700">Preferred day</label>
                <Input className="mt-2 h-11" placeholder="Pl. Szombat" />
              </div>

              <div>
                <label className="text-sm text-zinc-700">Preferred time</label>
                <Input className="mt-2 h-11" placeholder="Pl. 10:00" />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-700">
                  Note for us (optional)
                </label>
                <textarea
                  className="mt-2 min-h-[110px] w-full rounded-xl border border-zinc-200 p-3 text-sm outline-none focus:border-zinc-300"
                  placeholder="Pl. 2 kisgyerekkel érkezünk, rövid átvételt szeretnénk..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Place order */}
          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              <Button
                onClick={createOrder}
                className="h-12 w-full rounded-xl text-base"
              >
                Place order (demo)
              </Button>
              <p className="mt-3 text-xs text-zinc-500">
                Fizetés most még nincs bekötve. Következő lépésben Stripe
                Checkout vagy Payment Element jön.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: summary */}
        <Card className="h-fit rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Order Summary
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              {demoCart.map((i) => (
                <div
                  key={i.id}
                  className="flex items-start justify-between gap-4 text-sm"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-zinc-900">
                      {i.title}
                    </p>
                    <p className="text-xs text-zinc-600">Qty: {i.qty}</p>
                  </div>
                  <p className="font-medium text-zinc-900">
                    {formatHuf(i.price * i.qty)}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-zinc-200" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-zinc-700">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">
                  {formatHuf(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-700">
                <span>Delivery</span>
                <span className="font-medium text-zinc-900">
                  {delivery === 0 ? "-" : formatHuf(delivery)}
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-700">
                <span>Discount</span>
                <span className="font-medium text-zinc-900">
                  {discount === 0 ? "-" : `- ${formatHuf(discount)}`}
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-200" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-zinc-900">Total</span>
              <span className="text-lg font-semibold text-zinc-900">
                {formatHuf(total)}
              </span>
            </div>
          </CardContent>

          {/*           <CardFooter className="flex flex-col gap-3">
            <div className="w-full">
              <label className="text-sm text-zinc-600">Promo code</label>
              <div className="mt-2 flex gap-3">
                <Input className="h-11" placeholder="PROMO2026" />
                <Button variant="outline" className="h-11 px-5">
                  Apply
                </Button>
              </div>
            </div>
          </CardFooter> */}
        </Card>
      </div>
    </Section>
  );
}
