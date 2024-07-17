import React from "react";

export default function TitlePage(props) {
  return (
    <h2 className="text-2xl font-semibold  hidden md:inline-flex  items-center">
      {props.title}
      <span className=" md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
}
