import React from "react";
import { nunito } from "../layout";
import PricingCard from "./Cards/PricingCard";

const Plans = [
  {
    id: 1,
    title: "Basic",
    type: "Designing",
    price: 19,
    description: "For most businesses that want to optimize web queries",
    features: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "Limited support",
    ],
  },
  {
    id: 2,
    title: "Pro",
    type: "Development",
    price: 29,
    description: "For most businesses that want to optimize web queries",
    features: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "Limited support",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    type: "Both",
    price: 49,
    description: "For most businesses that want to optimize web queries",
    features: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "Limited support",
    ],
  },
];

const Pricing = () => {
  return (
    <main className="bg-[#081420] py-16 lg:min-h-[50vh]">
      <section className="md:w-90% mx-auto w-full max-w-lg px-4 md:max-w-[1400px] flex max-xl:flex-wrap text-white flex-col items-center">
        <h3
          className={`${nunito.className} text-lg text-secondary text-center w-full`}
        >
          Pricing
        </h3>
        <h2
          className={`${nunito.className} text-center  sm:w-[400px] w-full md:text-3xl text-2xl`}
        >
          Choose The Right Plan For Your Business
        </h2>
        <div className="w-full flex max-lg:flex-wrap py-8 ">
          {Plans.map((e) => {
            return <PricingCard data={e} key={e.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
