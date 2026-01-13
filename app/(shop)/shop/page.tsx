import { products } from "@/lib/products";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
              Csomagok & termékek
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
              4 egyszerű termékkel indulunk. Később jön a fizetés és a
              készletkezelés.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  );
}
