/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectLinks = ({ link }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
      <a
        target="blank"
        href="https://github.com/Shariful-Islam-Saju"
        className="hover:text-designColor duration-200 "
      >
        <TbBrandGithub />
      </a>{" "}
      <a
        target="blank"
        href="https://youtube.com/@shariful12905?si=xkrfedfqnOHk92Za"
        className="hover:text-designColor duration-200 "
      >
        <AiOutlineYoutube />
      </a>{" "}
      <a
        target="blank"
        href={link}
        className="hover:text-designColor duration-200 "
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectLinks;
