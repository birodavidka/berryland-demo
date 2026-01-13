import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";
import { Button } from "@/components/ui/button";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getProduct(slug);
  if (!product) return notFound();

  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <Link
          href="/shop"
          className="text-sm text-zinc-600 hover:text-zinc-900"
        >
          ← Vissza a termékekhez
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="border border-zinc-200 bg-zinc-50">
            <div className="aspect-[4/3] w-full" />
          </div>

          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
              {product.title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              {product.description}
            </p>

            <div className="mt-8 flex gap-3">
              <Button className="h-12 rounded-none px-8">Kosárba (demo)</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
