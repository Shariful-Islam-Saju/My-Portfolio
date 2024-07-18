import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Work = ({ item }) => {
  const { jobTitle, jobTag, date, details1, details2, details3 } = item;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-lg font-medium flex gap-1">
        {jobTitle}{" "}
        <span className="text-designColor tracking-wide">{jobTag}</span>
      </h3>
      <p className="text-sm mt-1 mb-2 font-medium text-darkText">{date}</p>
      <ul>
        <li className="flex gap-2  mt-2 text-darkText ">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} className="" />
          </span>
          <p>{details1}</p>
        </li>{" "}
        <li className="flex gap-2 mt-2 text-darkText ">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} className="" />
          </span>
          <p>{details2}</p>
        </li>{" "}
        <li className="flex gap-2 mt-2 text-darkText ">
          <span className="text-designColor mt-1">
            <TiArrowForward size={20} className="" />
          </span>
          <p>{details3}</p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Work;
