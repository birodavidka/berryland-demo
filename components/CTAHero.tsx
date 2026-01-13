"use client";

import React from "react";
import { Button } from "./ui/button";

type Props = {
  label?: string;
  onClick?: () => void;
};

const CTAHero = ({ label = "Add to your cart", onClick }: Props) => {
  return (
    <div className="pt-6">
      <Button
        onClick={onClick}
        className="h-12 w-fit rounded-none px-10 text-sm font-medium"
      >
        {label}
      </Button>
    </div>
  );
};

export default CTAHero;
