import React from "react";
import { Label } from "@/components/ui/label";
import { Radio, RadioGroup } from "@/components/ui/radio-group";
type Props = {};

const SizeSelector = (props: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-zinc-500">Sizes</h1>
      <RadioGroup defaultValue="next">
        <div className="flex gap-6">
          <Label defaultChecked>
            <Radio value="next" /> Small
          </Label>
          <Label>
            <Radio value="vite" /> Large
          </Label>
          <Label>
            <Radio value="xlarge" /> Xlarge
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizeSelector;
