import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const navigation = [
  {
    title: "Home",
    link: "home",
    value: "",
    delay: 0,
  },
  {
    title: "About",
    link: "about",
    value: "01",
    delay: 0.1,
  },
  {
    title: "Experience",
    link: "experience",
    value: "02",
    delay: 0.2,
  },
  {
    title: "Project",
    link: "project",
    value: "03",
    delay: 0.3,
  },
  {
    title: "Contact",
    link: "contact",
    value: "04",
    delay: 0.4,
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  return (
    <div className="bg-primaryColor sticky z-50 top-0 h-20 shadow-lg shadow-designColor/10 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        <img
          src={logo}
          alt="Logo"
          className="w-14 opacity-75 hover:opacity-100 duration-200 cursor-pointer"
        />
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="text-[13px] gap-7  flex">
            {navigation?.map((item) => (
              <Link
                offset={-80}
                duration={500}
                smooth={true}
                key={item.delay}
                to={item?.link}
                className="font-medium hover:text-designColor cursor-pointer duration-300"
              >
                <motion.li
                  className="relative group inline-flex overflow-x-hidden "
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: item?.delay,
                  }}
                >
                  <span className="uppercase tracking-wide">{item?.title}</span>
                  <span className="w-full absolute h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform  group-hover:translate-x-0 duration-500"></span>
                </motion.li>
              </Link>
            ))}{" "}
          </ul>
          <motion.a
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
            }}
            className="px-4 py-2 rounded-md font-medium text-designColor text-[13px] tracking-wide uppercase border border-designColor hover:bg-hoverColor duration-200"
            href="#"
          >
            Resume
          </motion.a>{" "}
        </div>
        <div
          onClick={() => {
            setShow(true);
          }}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform  group-hover:translate-x-2 transition-all duration-300 "></span>
          <span className="w-full h-[2px] bg-designColor inline-flex  transform translate-x-3 group-hover:translate-x-0 duration-300 "></span>
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1  group-hover:translate-x-2 transition-all duration-300 "></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={(e) => {
              if (e.target.contains(ref.current)) {
                setShow(false)
              }
            }}
            className="absolute z-50 md:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBar"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 duration-200"
              />

              <div className="flex flex-col  gap-7 items-center ">
                <ul className="flex flex-col text-base text-center gap-5">
                  {navigation.map((item, id) => (
                    <Link
                      onClick={() => setShow(false)}
                      offset={-80}
                      duration={500}
                      smooth={true}
                      key={item.delay}
                      to={item?.link}
                      className="font-medium text-darkText hover:text-designColor cursor-pointer duration-200 "
                    >
                      {" "}
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item.delay }}
                        className="cursor-pointer"
                        key={id}
                        to={item.link}
                      >
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <motion.a
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5,
                  }}
                  className="px-4 py-2 rounded-md font-medium text-designColor text-[13px] tracking-wide uppercase border border-designColor hover:bg-hoverColor duration-200"
                  href="#"
                >
                  Resume
                </motion.a>{" "}
                <SocialLinks className="flex items-center gap-5 " />
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2,
                    ease: "easeIn",
                  }}
                  href="mailto:sajukhan12905@gmail.com"
                  className="text-sm w-72 tracking-widest text-designColor text-center mt-4 "
                >
                  <p className="text-darkText hover:text-designColor hover:underline underline-offset-4 duration-200">
                    {" "}
                    sajukhan12905@gmail.com
                  </p>
                </motion.a>{" "}
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
