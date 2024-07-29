import { delay, motion } from "framer-motion";
import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
const links = [
  {
    title: "github",
    link: "https://github.com/Shariful-Islam-Saju",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "youtube",
    link: "https://youtube.com/@shariful12905?si=xkrfedfqnOHk92Za",
    icon: <SlSocialYoutube />,
    delay: 0.85,
  },
  {
    title: "instragram",
    link: "https://github.com/Shariful-Islam-Saju",
    icon: <SlSocialInstagram />,
    delay: 0.9,
  },
  {
    title: "facebook",
    link: "https://github.com/Shariful-Islam-Saju",
    icon: <SlSocialFacebook />,
    delay: 0.95,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {links.map((item, i) => {
        return (
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: item?.delay, ease: "easeIn" }}
            href={item.link}
            target="blank"
            key={i}
          >
            <span className="w-10 h-10 text-xl bg-textBg border-zinc-500 hover:border-designColor text-lightText hover:text-designColor duration-200 border-[1px] inline-flex justify-center rounded-full items-center hover:bg-black">
              {item.icon}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
