import { nunito } from "@/app/layout";
import React from "react";

const PricingCard = ({ data }) => {
  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 w-full h-[600px] md:p-8 sm:p-4 max-md:my-6 group cursor-pointer">
        <div className="rounded-2xl relative w-full h-full p-8 z-30">
          <div className="absolute w-full max-sm:hidden h-full bg-[#19243180] z-10 rounded-2xl group-hover:bg-primary duration-300"></div>
          <div className="absolute w-full h-full bg-[#192431]  z-10 rounded-2xl duration-300 left-0 top-0 py-8 flex flex-col justify-between items-center">
            <div>
              <h2
                className={`${nunito.className} text-center md:text-2xl text-xl relative z-20`}
              >
                {data.type}
              </h2>
              <p className="text-description text-base text-center">
                {data.title}
              </p>
            </div>
            <div className="w-full h-36 bg-[#212c3a] group-hover:bg-secondary duration-300 flex justify-center items-center">
              <h2
                className={`${nunito.className} text-center md:text-4xl text-2xl relative z-20 flex justify-center `}
              >
                <span className="text-sm self-start">$</span>
                {data.price}/<span className="text-sm self-end">month</span>
              </h2>
            </div>
            <div>
              {data.features.map((e, i) => {
                return (
                  <p
                    className="text-description text-sm py-1 text-center"
                    key={i}
                  >
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
