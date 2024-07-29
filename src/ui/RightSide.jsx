import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-lightText">
      <a href="mailto:sajukhan12905@gmail.com">
        <p className="text-sm rotate-90 w-96 tracking-widest text-designColor/80 hover:text-designColor duration-200">sajukhan12905@gmail.com</p>
      </a>
      <div className="w-[1px] bg-darkText h-32 " />
    </div>
  );
};

export default RightSide;
