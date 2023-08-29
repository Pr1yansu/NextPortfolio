"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";

const Card1Images = [
  {
    id: 1,
    width: 20,
    height: 20,
    src: "/assets/Logo.png",
  },
  {
    id: 2,
    width: 20,
    height: 20,
    src: "/assets/Logo.png",
  },
  {
    id: 3,
    width: 20,
    height: 20,
    src: "/assets/Logo.png",
  },
  {
    id: 4,
    width: 20,
    height: 20,
    src: "/assets/Logo.png",
  },
];

const Card1 = () => {
  return (
    <motion.div
      className="absolute p-4 lg:w-72 shadow-dropShadow rounded-md border left-[5%] bg-slate-50 max-md:hidden"
      initial={{ opacity: 0, x: -32, y: -32 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4 border-b border-zinc-400 py-2">
        <div>
          <AiOutlineAntDesign
            className="p-1 bg-primary text-white rounded-full"
            size={28}
          />
        </div>
        <div>
          <h5 className="text-[14px]">Web Design</h5>
          <p className="text-[12px] text-description">Web management</p>
        </div>
      </div>
      <div className="text-center py-2">
        <h5 className="text-[14px] text-primary py-1">Web Designers:</h5>
        <span className="text-[12px] text-description py-1">4 members</span>
        <div className="flex justify-evenly py-2 px-4">
          {Card1Images.map((image) => {
            return (
              <Image
                key={image.id}
                src={image.src}
                alt="Logo.png"
                height={image.height}
                width={image.width}
              />
            );
          })}
        </div>
        <Button
          name="view Details"
          className="px-2 py-2 rounded-sm text-white text-[12px] w-full bg-opacity-70 hover:bg-opacity-100"
          color="bg-primary"
          link="/About"
        />
      </div>
    </motion.div>
  );
};

export default Card1;
