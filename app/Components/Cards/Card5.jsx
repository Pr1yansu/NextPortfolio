"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Card5 = () => {
  return (
    <motion.div
      className="w-64 bg-secondary px-6 py-4 bottom-[5%] absolute rounded-xl right-0 flex space-x-4 items-center max-md:hidden"
      initial={{ opacity: 0, x: 32, y: 32 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 100, y: 100 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Image
        src={"/assets/634.png"}
        height={40}
        width={40}
        alt="profile.png"
        className="rounded-full"
      />
      <div>
        <h5 className="text-slate-50 text-base">Name Name</h5>
        <p className="text-slate-300 text-[14px]">location</p>
      </div>
    </motion.div>
  );
};

export default Card5;
