"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "products", href: "/products" },
  { label: "featues", href: "/story" },
  { label: "about", href: "/manufacturing" },
  { label: "FAQ", href: "/packaging" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Left: brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            berryland™
          </span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-950",
                  isActive && "text-neutral-950"
                )}
              >
                {item.label}

                {/* underline */}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 bg-neutral-900 transition-transform duration-200",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: icons */}
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

      {/* Mobile nav (simple) */}
      <div className="mx-auto block max-w-6xl px-4 pb-2 md:hidden">
        <div className="flex gap-5 overflow-x-auto py-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-sm font-medium text-neutral-800",
                  isActive && "underline decoration-2 underline-offset-8"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
