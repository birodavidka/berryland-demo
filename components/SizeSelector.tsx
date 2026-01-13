"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  defaultValue?: "small" | "large" | "xlarge";
};

export default function SizeSelector({ defaultValue = "small" }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-medium text-zinc-500">Sizes</p>

      <RadioGroup defaultValue={defaultValue} className="mt-3">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="small" id="size-small" />
            <Label htmlFor="size-small">Small</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="large" id="size-large" />
            <Label htmlFor="size-large">Large</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="xlarge" id="size-xlarge" />
            <Label htmlFor="size-xlarge">Xlarge</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
