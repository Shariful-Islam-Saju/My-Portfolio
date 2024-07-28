import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollBtn = () => {
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 100 ? setEffect(true) : setEffect(false);
    });
  }, []);

  if (effect) {
    return (
      <div
        className="fixed bottom-10 right-20 z-50 bg-darkText/40 text-lightText/80 p-3 rounded-full cursor-pointer hover:bg-black  transition duration-300"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MdArrowUpward size={24} className="ab" />
      </div>
    );
  } else {
    return "";
  }
};

export default ScrollBtn;
