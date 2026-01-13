"use client";

import React from "react";
import Section from "@/components/layout/Section";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"; // coss: Panel (nem Content)

const faqs = [
  {
    id: "hours",
    q: "Mikor érdemes jönni?",
    a: "A legjobb általában délelőtt (8–11) vagy késő délután. Melegben a bogyók gyorsabban puhulnak, ezért érdemes korábban érkezni.",
  },
  {
    id: "booking",
    q: "Kell előre bejelentkezni?",
    a: "Nem kötelező. Szezoncsúcsban érdemes követni a napi státuszt, mert gyorsan fogyhat a szedhető mennyiség.",
  },
  {
    id: "how",
    q: "Hogyan működik a szedd magad?",
    a: "A helyszínen kapsz ládát/dobozt, a kijelölt sorokban szedsz, majd mérlegelés után fizetsz.",
  },
  {
    id: "weather",
    q: "Esőben nyitva vagytok?",
    a: "Enyhe esőben általában igen, de nagy esőben vagy felázott talajnál zárva lehetünk. A napi státuszt a főoldalon kommunikáljuk.",
  },
  {
    id: "payment",
    q: "Lehet kártyával fizetni?",
    a: "Cél, hogy legyen kártyás fizetés is. A pontos opciókat szezon előtt véglegesítjük.",
  },
  {
    id: "parking",
    q: "Van parkolási lehetőség?",
    a: "Igen, a helyszínen lesz kijelölt parkoló. Kérjük, mindig a táblák szerint állj meg.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" containerClassName="py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-emerald-800 sm:text-5xl">
            GYIK
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
            A legfontosabb infók látogatás előtt. Ha kérdésed van, írj
            nyugodtan.
          </p>
        </div>

        <div>
          {/* coss: defaultValue string[]; "multiple" prop a több nyitotthoz */}
          <Accordion className="w-full" defaultValue={[]}>
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-zinc-200"
              >
                <AccordionTrigger className="text-left text-base font-medium text-zinc-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionPanel className="text-sm leading-6 text-zinc-600">
                  {item.a}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Ha több elem is nyitva lehessen egyszerre, csak add hozzá:
              <Accordion className="w-full" multiple defaultValue={[]}>
           */}
        </div>
      </div>
    </Section>
  );
}
