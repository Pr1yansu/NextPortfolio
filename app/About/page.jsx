import React from "react";
import AboutSection from "../Components/About";
import { nunito } from "../layout";

export const metadata = {
  title: "About",
  description: "A portfolio of my work",
};

const About = () => {
  return (
    <div className="mt-16">
      <AboutSection button={false} />
      <section className="w-90%  max-w-lg px-4 md:max-w-[1800px] flex py-8 rounded-xl mx-auto max-lg:flex-wrap bg-primary text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full flex-col text-white px-2 flex justify-center items-center py-2 lg:border-r md:border-r ">
          <h4 className={`${nunito.className} md:text-3xl text-xl`}>5 K</h4>
          <p className="sm:text-lg text-sm text-slate-400">Happy Customer</p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex-col text-white px-2 flex justify-center items-center py-2 lg:border-r ">
          <h4 className={`${nunito.className} md:text-3xl text-xl`}>200</h4>
          <p className="sm:text-lg text-sm text-slate-400">Layout</p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex-col text-white px-2 flex justify-center items-center py-2 lg:border-r  md:border-r ">
          <h4 className={`${nunito.className} md:text-3xl text-xl`}>4</h4>
          <p className="sm:text-lg text-sm text-slate-400">Badges</p>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex-col text-white px-2 flex justify-center items-center py-2">
          <h4 className={`${nunito.className} md:text-3xl text-xl`}>120</h4>
          <p className="sm:text-lg text-sm text-slate-400">Projects Done</p>
        </div>
      </section>
    </div>
  );
};

export default About;
