import React from "react";
import { nunito } from "../layout";
import ServiceCard from "./Cards/ServiceCard.jsx";
import { GiTeamIdea } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrStackOverflow } from "react-icons/gr";
import Button from "./Button";

const data = [
  {
    id: 1,
    title: "Team Accounts",
    description:
      "I am a web developer with a passion for crafting exceptional digital experiences.",
    icon: (
      <GiTeamIdea
        size={70}
        className="group-hover:text-tertiary group-hover:bg-slate-50 group-hover:shadow-xl group-hover:border border p-4 rounded-full duration-300"
      />
    ),
    color: "#fcdc00",
  },
  {
    id: 2,
    title: "Digital Support",
    description:
      "I am a web developer with a passion for crafting exceptional digital experiences.",
    icon: (
      <GrStackOverflow
        size={70}
        className="group-hover:text-secondary group-hover:bg-slate-50 group-hover:shadow-xl group-hover:border border p-4 rounded-full duration-300"
      />
    ),
    color: "#fd346e",
  },
  {
    id: 3,
    title: "Customer Support",
    description:
      "I am a web developer with a passion for crafting exceptional digital experiences.",
    icon: (
      <TfiHeadphoneAlt
        size={70}
        className="group-hover:text-primary group-hover:bg-slate-50 group-hover:shadow-xl group-hover:border border p-4 rounded-full duration-300"
      />
    ),
    color: "#6001d3",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "I am a web developer with a passion for crafting exceptional digital experiences.",
    icon: (
      <AiFillApi
        size={70}
        className=" group-hover:text-orange-500 group-hover:bg-slate-50 group-hover:shadow-xl group-hover:border border p-4 rounded-full duration-300"
      />
    ),
    color: "orange-500",
  },
];

const Services = () => {
  return (
    <section className="md:w-90% w-full max-w-lg px-4 md:max-w-[1800px] flex py-8 min-h-screen mx-auto max-xl:flex-wrap">
      <div className="xl:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2 md:px-16 px-4 gap-4 min-h-[800px]">
        <ServiceCard data={data} />
      </div>
      <div className="xl:w-1/3 max-lg:mt-8 w-full max-xl:text-center max-xl:flex justify-center items-center max-xl:flex-col px-2 xl:py-16 py-8">
        <h5 className={`${nunito.className} text-secondary py-4`}>
          Our Services
        </h5>
        <h2
          className={`${nunito.className} text-heading w-72 font-bold mb-3 py-2`}
        >
          All Our Awsome Services
        </h2>
        <p className={`text-description max-w-xl mb-6`}>
          Welcome to my web developer portfolio, where creativity meets
          functionality! I specialize in crafting exceptional digital
          experiences through a combination of innovative code.
        </p>
        <Button name="Read more" color="bg-secondary" />
      </div>
    </section>
  );
};

export default Services;
