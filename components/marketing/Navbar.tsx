"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { cn } from "@/lib/utils";
import { Search, ShoppingBag, User } from "lucide-react";

const navItems = [
  { label: "features", id: "features" },
  { label: "about", id: "about" },
  { label: "faq", id: "faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => {
    // ha nem a landing-en vagyunk, menjünk vissza oda hash-sel
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    // landing-en vagyunk: AnchorLink intézi
  };

  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Berryland™
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {/* Products külön oldal */}
          <Link
            href="/shop"
            className={cn(
              "relative text-sm font-medium text-neutral-800 hover:text-neutral-950",
              pathname === "/shop" && "text-neutral-950"
            )}
          >
            Products
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-neutral-900 transition-transform duration-200",
                pathname === "/shop" && "scale-x-100"
              )}
            />
          </Link>

          {/* In-page szekciók */}
          {navItems.map((item) => {
            const href = `#${item.id}`;

            // landing-en AnchorLink (smooth + offset)
            if (pathname === "/") {
              return (
                <AnchorLink
                  key={item.id}
                  href={href}
                  offset="80"
                  className="relative text-sm font-medium text-neutral-800 hover:text-neutral-950"
                >
                  {item.label}
                </AnchorLink>
              );
            }

            // más oldalon sima gomb -> visszanavigál a landingre hash-sel
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className="relative text-sm font-medium text-neutral-800 hover:text-neutral-950"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* jobb oldali ikonok maradhatnak */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-neutral-800 transition hover:bg-neutral-900/5 hover:text-neutral-950"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/cart"
            aria-label="Cart"
            className="rounded-full p-2 text-neutral-800 transition hover:bg-neutral-900/5 hover:text-neutral-950"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>

          <Link
            href="/account"
            aria-label="Account"
            className="rounded-full p-2 text-neutral-800 transition hover:bg-neutral-900/5 hover:text-neutral-950"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
