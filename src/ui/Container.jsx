import React from "react";
import Banner from "./Banner";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


const Container = ({ children, className, id }) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto px-4 lg:px-0 ",
    className
  );
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      id={id}
      className={newClassName}
    >
      {children}
    </motion.div>
  );
};

export default Container;
