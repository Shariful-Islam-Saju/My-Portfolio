import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";

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
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: item?.delay,
                  }}
                >
                  <span className="uppercase tracking-wide">{item?.title}</span>
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
      </div>
      <div></div>
    </div>
  );
};

export default Header;
