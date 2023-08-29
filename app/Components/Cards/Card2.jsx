"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const Card2 = () => {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 left-[10%] bg-slate-50 w-60 py-2 rounded-md px-4 shadow-lg  max-md:hidden"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h5 className="text-primary border-b py-1 text-[14px]">Daily Visits</h5>
      <div className="py-2 flex items-start justify-between px-2">
        <div>
          <div className="flex items-center space-x-2">
            <BsArrowUpRight className="text-primary" size={14} />
            <span>+3.48%</span>
          </div>
          <h4 className="text-primary text-base w-full pt-2">17,209</h4>
        </div>
        <div className="flex space-x-2 items-end">
          <div className="w-1 h-10 bg-tertiary rounded-md"></div>
          <div className="w-1 h-6 bg-tertiary rounded-md"></div>
          <div className="w-1 h-8 bg-tertiary rounded-md"></div>
          <div className="w-1 h-12 bg-tertiary rounded-md"></div>
          <div className="w-1 h-10 bg-tertiary rounded-md"></div>
          <div className="w-1 h-8 bg-tertiary rounded-md"></div>
          <div className="w-1 h-7 bg-tertiary rounded-md"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card2;
