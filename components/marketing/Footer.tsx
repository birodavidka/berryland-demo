"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {/* Col 1: brand + social */}
          <div className="space-y-6">
            <p className="max-w-xs text-sm leading-6 text-zinc-600">
              Learn To Love Growth And Change And You Will Be A Success.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-emerald-700 transition hover:text-emerald-900"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-emerald-700 transition hover:text-emerald-900"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-emerald-700 transition hover:text-emerald-900"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: links */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Links</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>
                <Link className="hover:text-zinc-900" href="/products">
                  Csomagok
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/#features">
                  Miért Berryland?
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/#faq">
                  GYIK
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/#about">
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: contact */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Contact</p>

            <div className="mt-4 space-y-4 text-sm text-zinc-600">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" />
                <p className="leading-6">
                  Szombathely környéke
                  <br />
                  (pontos cím később)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-700" />
                <a className="hover:text-zinc-900" href="tel:+3612345678">
                  +36 12 345 678
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-700" />
                <a
                  className="hover:text-zinc-900"
                  href="mailto:hello@berryland.hu"
                >
                  hello@berryland.hu
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: mini newsletter */}
          <div>
            <p className="max-w-xs text-sm leading-6 text-zinc-600">
              Receive special offers and get our latest updates.
            </p>

            <form
              className="mt-5 flex w-full items-stretch gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                placeholder="Enter e-mail"
                className="h-11 rounded-none border-zinc-300 text-sm shadow-none focus-visible:ring-0"
                type="email"
              />
              <Button
                type="submit"
                className="h-11 rounded-none px-6 text-sm font-medium"
              >
                JOIN
              </Button>
            </form>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-12 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Berryland™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
