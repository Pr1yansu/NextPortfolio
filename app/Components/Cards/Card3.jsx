"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { BsStack } from "react-icons/bs";

const Card3 = () => {
  return (
    <motion.div
      className="max-md:hidden p-6 rounded-full text-primary bg-tertiary absolute bottom-0 left-[15%]"
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <BsStack size={36} />
    </motion.div>
  );
};

export default Card3;
