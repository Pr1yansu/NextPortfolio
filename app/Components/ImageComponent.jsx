"use client";
import React from "react";
import Image from "next/image";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import { motion } from "framer-motion";

const ImageComponent = () => {
  return (
    <div className="2xl:w-1/2 xl:w-2/3 w-full max-xl:order-1 relative flex justify-center">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={"/assets/634.png"}
          alt="logo.png"
          height={600}
          width={500}
          className=" rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default ImageComponent;
