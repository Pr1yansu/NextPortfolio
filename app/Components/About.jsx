"use client";
import React from "react";
import { nunito } from "../layout";
import Image from "next/image";
import Button from "./Button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Skills from "./Skills";

const About = ({ button = true }) => {
  return (
    <section className="md:w-90% w-full max-w-lg px-4 md:max-w-[1400px] flex py-8 lg:min-h-[50vh] mx-auto flex-wrap relative  max-xl:justify-center items-center">
      {/* animation */}
      <div className="absolute top-[5%] left-[5%] w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl animate-ping"></div>
      <div className="absolute bottom-[-5%] right-0 w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-xl animate-bounce"></div>

      {/* animation end */}
      <AnimatePresence>
        <motion.div
          className="lg:w-1/2 w-full sm:p-5 p-1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            src={"/assets/634.png"}
            height={0}
            width={0}
            sizes="100vw"
            className="w-96 rounded-full lg:ms-auto max-lg:mx-auto"
            alt="About.png"
          />
        </motion.div>
      </AnimatePresence>
      <div className="lg:w-1/2 w-full sm:p-5 p-1 my-4 pt-10 max-xl:text-center max-lg:flex items-center flex-col">
        <h4 className={`${nunito.className} text-secondary text-lg my-4`}>
          About me
        </h4>
        <h2 className={`${nunito.className} my-2 sm:w-80`}>
          Everything About me and my work
        </h2>
        <p className="mt-2 mb-4 text-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum
          error harum doloremque sequi facere quia dolores blanditiis reiciendis
          excepturi provident animi facilis itaque eaque quaerat minima,
          delectus odio ab.
        </p>
        {button && <Button name="About" link="/About" color="bg-primary" />}
      </div>
      <Skills />
    </section>
  );
};

export default About;
