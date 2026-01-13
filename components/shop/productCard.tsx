import Link from "next/link";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";

type Props = {
  product: Product;
};

function formatHuf(n: number) {
  return new Intl.NumberFormat("hu-HU").format(n) + " Ft";
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="flex h-full flex-col border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="relative">
        <div className="aspect-[4/3] w-full border border-zinc-200 bg-zinc-50" />
        {product.badge ? (
          <span className="absolute left-2 top-2 bg-emerald-700 px-2 py-1 text-xs font-medium text-white">
            {product.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-base font-semibold text-zinc-900">
        {product.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{product.short}</p>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="text-sm font-semibold text-emerald-800">
          {formatHuf(product.priceHuf)}
          <span className="ml-1 text-xs font-medium text-zinc-500">
            / {product.unit === "kg" ? "kg" : "doboz"}
          </span>
        </div>

        <Link href={`/shop/${product.slug}`}>
          <Button className="h-9 rounded-none px-4 text-xs">Megnézem</Button>
        </Link>
      </div>
    </div>
  );
}
