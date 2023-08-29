"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nunito } from "@/app/layout";

const ServiceCard = ({ data }) => {
  return (
    <>
      {/* Card 1 */}
      <AnimatePresence>
        <motion.div
          key={data[0].id}
          className={
            "h-full w-full rounded-xl p-8 group cursor-pointer hover:shadow-xl duration-300 border hover:bg-tertiary"
          }
          initial={{ y: -16 }}
          whileInView={{ y: 0 }}
        >
          <i className="text-5xl group-hover:text-slate-50">{data[0].icon}</i>
          <h4
            className={`group-hover:text-slate-50 py-4 text-heading ${nunito.className}`}
          >
            {data[0].title}
          </h4>
          <p className="group-hover:text-slate-50 py-4 text-description">
            {data[0].description}
          </p>
        </motion.div>
        {/* Card 1 end */}
        {/* Card 2 */}
        <motion.div
          key={data[1].id}
          className={`h-full w-full rounded-xl p-8 group cursor-pointer hover:shadow-xl duration-300 border hover:bg-secondary md:mt-10`}
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
        >
          <i className="text-5xl group-hover:text-slate-50">{data[1].icon}</i>
          <h4
            className={`group-hover:text-slate-50 py-4 text-heading ${nunito.className}`}
          >
            {data[1].title}
          </h4>
          <p className="group-hover:text-slate-50 py-4 text-description">
            {data[1].description}
          </p>
        </motion.div>
        {/* Card 2 end */}
        {/* Card 3 */}
        <motion.div
          key={data[2].id}
          className={`h-full w-full rounded-xl p-8 group cursor-pointer hover:shadow-xl duration-300 border hover:bg-primary`}
          initial={{ y: -16 }}
          whileInView={{ y: 0 }}
        >
          <i className="text-5xl group-hover:text-slate-50">{data[2].icon}</i>
          <h4
            className={`group-hover:text-slate-50 py-4 text-heading ${nunito.className}`}
          >
            {data[2].title}
          </h4>
          <p className="group-hover:text-slate-50 py-4 text-description">
            {data[2].description}
          </p>
        </motion.div>
        {/* Card 3 end */}
        {/* Card 4 */}
        <motion.div
          key={data[3].id}
          className={`h-full w-full rounded-xl p-8 group cursor-pointer hover:shadow-xl duration-300 border hover:bg-orange-500 md:mt-10`}
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
        >
          <i className="text-5xl group-hover:text-slate-50">{data[3].icon}</i>
          <h4
            className={`group-hover:text-slate-50 py-4 text-heading ${nunito.className}`}
          >
            {data[3].title}
          </h4>
          <p className="group-hover:text-slate-50 py-4 text-description">
            {data[3].description}
          </p>
        </motion.div>
      </AnimatePresence>
      {/* Card 4 end */}
    </>
  );
};

export default ServiceCard;
