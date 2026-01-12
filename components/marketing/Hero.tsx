import React from "react";
import SizeSelector from "../SizeSelector";
import CTAHero from "../CTAHero";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between ">
        {/* LEFT */}
        <div className="flex flex-col flex-1 gap-3">
          <h1>TITLE</h1>
          <h2>SUBTITLE</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sint.
          </p>
          <SizeSelector />
          <CTAHero />
        </div>
        {/* RIGHT */}
        <div className="flex-1">right</div>
      </div>
    </section>
  );
};

export default Hero;
