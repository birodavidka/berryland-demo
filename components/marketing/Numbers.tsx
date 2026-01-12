import React from "react";

type Props = {};

const featuredNumbers = [
  {
    label: "Customers",
    value: 25356,
  },
  {
    label: "Followers",
    value: 6050,
  },
  {
    label: "Shops",
    value: 801,
  },
  {
    label: "Happy costumers",
    value: 6050,
    type: "%",
  },
];

const Numbers = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      {featuredNumbers.map((item) => (
        <div key={item.label}>
          <p className="text-3xl">
            {item.value}
            {item.type || ""}
          </p>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;
