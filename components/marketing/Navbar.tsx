import React from "react";

type Props = {};

const NavLinks = [
  {
    title: "products",
    href: "/products",
  },
  {
    title: "features",
    href: "/features",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "faq",
    href: "/faq",
  },
];

const Navbar = (props: Props) => {
  return (
    <nav className="flex w-full items-center justify-between gap-10">
      {/* LOGO */}
      <div>logo</div>
      {/* ELEMENTS */}
      <div className="flex w-1/4 items-center justify-between">
        {NavLinks.map((link) => (
          <a key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
      {/* SIDE MENU */}
      <div>side menu</div>
    </nav>
  );
};

export default Navbar;
