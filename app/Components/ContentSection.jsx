"use client";
import React from "react";
import Button from "./Button";
import { nunito } from "../layout";
import { motion } from "framer-motion";

const ContentSection = () => {
  return (
    <div className="2xl:w-1/2 xl:w-1/3 w-full max-xl:order-2 max-xl:flex max-xl:justify-center max-xl:flex-col max-xl:items-center max-xl:py-10 max-xl:text-center">
      <motion.h4
        className={`${nunito.className} text-secondary mb-6`}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I am a web developer
      </motion.h4>
      <motion.h1
        className={`${nunito.className} text-heading max-w-2xl font-bold mb-3`}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Coding Experiences, Crafting Possibilities Explore My Web Developer
        Portfolio
      </motion.h1>
      <motion.p
        className={`text-description max-w-xl mb-6`}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Welcome to my web developer portfolio, where creativity meets
        functionality! I specialize in crafting exceptional digital experiences
        through a combination of innovative code.
      </motion.p>
      <motion.div
        className="flex flex-wrap"
        initial={{ opacity: 0, y: "-200%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Button name={"Get Started"} color="bg-secondary" />
      </motion.div>
    </div>
  );
};

export default ContentSection;
