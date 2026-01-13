"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  defaultValue?: string;
};

const SizeSelector = ({ defaultValue = "small" }: Props) => {
  return (
    <div className="pt-6">
      <p className="text-sm font-medium text-zinc-500">Sizes</p>

      <RadioGroup defaultValue={defaultValue} className="mt-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="small" id="size-small" />
            <Label htmlFor="size-small" className="text-sm text-zinc-700">
              Small
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="large" id="size-large" />
            <Label htmlFor="size-large" className="text-sm text-zinc-700">
              Large
            </Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizeSelector;
