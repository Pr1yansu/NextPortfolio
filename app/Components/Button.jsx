"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Button = (props) => {
  return (
    <Link href={props.link ? props.link : "/"}>
      <motion.button
        onClick={null}
        className={
          props.className && props.color
            ? props.className + " " + props.color
            : `${props.color} text-slate-50 text-base px-4 py-2 rounded-full shadow-dropShadow hover:bg-opacity-80 transition duration-100 ease-in-out`
        }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {props.name}
      </motion.button>
    </Link>
  );
};

export default Button;
