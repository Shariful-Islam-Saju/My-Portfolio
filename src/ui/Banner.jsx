import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const renderingText = [
  "I build things for the web.",
  "Passionate web developer",
  "Love to learn new ideas",
];

const Banner = () => {
  return (
    <Container
      id="home"
      className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-xl tracking-wide font-semibold text-designColor"
      >
        Hi, My name is{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        Shariful Islam
        <span className="text-darkText font-semibold mt-2 lg:mt-4">
          {" "}
          <Typewriter
            options={{
              strings: renderingText,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="md:max-w-[650px] text-darkText font-medium leading-7"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        saepe commodi, impedit optio deleniti veritatis recusandae
        necessitatibus nemo nisi asperiores tempora? Magni culpa eaque possimus
        sunt, velit perspiciatis quasi nihil assumenda, tempore ut tempora
        tenetur necessitatibus consequatur! Similique, laudantium quis nihil
        quibusdam sapiente fugiat expedita hic ab modi dignissimos nulla.
        <br />
        <a href="" target="blank">
          <span className="text-designColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="w-full absolute h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform  group-hover:translate-x-0 duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        href="#"
        className="w-52 h-14 text-sm border font-semibold border-designColor rounded-md text-designColor tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center"
      >
        Checkout my project!
      </motion.a>
    </Container>
  );
};

export default Banner;
