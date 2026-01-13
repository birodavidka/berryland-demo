export type Product = {
  slug: string;
  title: string;
  short: string;
  description: string;
  priceHuf: number;
  unit: "kg" | "box";
  image?: string; // később
  badge?: string; // pl. "Best seller"
};

export const products: Product[] = [
  {
    slug: "eper-szedd-magad",
    title: "Eper — Szedd magad",
    short: "Friss eper szedése a helyszínen.",
    description:
      "Szedj annyit, amennyit szeretnél. Mérlegelés után fizetsz. Ajánlott reggel érkezni.",
    priceHuf: 1800,
    unit: "kg",
    badge: "Szezon",
  },
  {
    slug: "eper-elore-kimert",
    title: "Eper — Előre kimért doboz",
    short: "Gyors átvétel, sorban állás nélkül.",
    description:
      "Előre kimért, válogatott eper dobozban. Ha sietsz, ez a legjobb opció.",
    priceHuf: 2500,
    unit: "box",
  },
  {
    slug: "erdei-gyumolcs-mix",
    title: "Erdei gyümölcs mix",
    short: "Szezonális bogyós válogatás.",
    description:
      "Szezon függvényében változhat (málna/szeder/áfonya). Elérhetőség: készlettől függ.",
    priceHuf: 3200,
    unit: "box",
    badge: "Limitált",
  },
  {
    slug: "lekvar-hazias",
    title: "Házi lekvár (kóstoló)",
    short: "Kis üveges, ajándéknak is jó.",
    description:
      "Kézműves jellegű, szezonális ízekkel. (Később pontosítjuk a kínálatot.)",
    priceHuf: 1990,
    unit: "box",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
