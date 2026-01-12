import React from "react";

type Props = {};

const FeaturesList = [
  {
    icon: "",
    value: "Natural",
    desc: "asdadasdaosdhaslfdnjlsdnfjalsdkaslm",
  },
  {
    icon: "",
    value: "No sideeffect",
    desc: "asdadasdaosdhaslfdnjlsdnfjalsdkaslm",
  },
  {
    icon: "",
    value: "100% organic",
    desc: "asdadasdaosdhaslfdnjlsdnfjalsdkaslm",
  },
];

const Features = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl">Features</h1>
      <h2 className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea illum
        quia et porro consectetur veniam numquam officiis, magnam, placeat
        itaque inventore. Ad amet eos expedita. Minima architecto quo
        laboriosam.
      </h2>
      <div className="flex">
        {FeaturesList.map((feature) => (
          <div className="flex flex-col" key={feature.value}>
            <div>{feature.icon}</div>
            <h3>{feature.value}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
