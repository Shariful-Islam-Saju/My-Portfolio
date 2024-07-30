import React from "react";
import SocialLink from "./SocialLinks";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-lightText">
      <SocialLink className="flex flex-col gap-y-5" />
      <div className="w-[1px] bg-darkText h-32 " />
    </div>
  );
};

export default LeftSide;
