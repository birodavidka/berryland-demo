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
      <Button className="h-12 rounded-none px-10">Add to your cart</Button>
    </div>
  );
};

export default CTAHero;
