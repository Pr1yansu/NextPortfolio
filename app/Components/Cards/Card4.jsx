"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { AnimatePresence, motion } from "framer-motion";
const data = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];
const Card4 = () => {
  return (
    <motion.div
      className="absolute bg-slate-50 shadow-dropShadow duration-300 rounded-md lg:-right-4 top-20 right-4 py-4 px-2 max-md:hidden"
      initial={{ opacity: 0, x: 32, y: -32 }}
      exit={{ opacity: 0, x: 100, y: -100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div className="relative">
        <div className="absolute w-full h-full bg-transparent top-0 left-0 flex justify-center items-center">
          <h3 className="w-20 ps-3 text-secondary">2.1k total</h3>
        </div>
        <h5 className="text-base text-center">Total Views</h5>
        <PieChart
          series={[
            {
              paddingAngle: 5,
              innerRadius: 40,
              outerRadius: 80,
              data,
            },
          ]}
          margin={{ right: 5 }}
          width={200}
          height={200}
          legend={{ hidden: true }}
        />
        <h5 className="text-base text-center"> View on Social media</h5>
      </div>
    </motion.div>
  );
};

export default Card4;
