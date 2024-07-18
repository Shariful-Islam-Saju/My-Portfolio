import { useState } from "react";
import Container from "./Container";
import TitlePage from "./TitlePage";
import JobInfo from "./jobInfo";
import Work from "./work";
import jobInfo from "./jobInfo";

const Experience = () => {
  const [workInfo, setWorkInfo] = useState({
    workReactBD: true,
    workGoogle: false,
    workApple: false,
    workAmazon: false,
  });
  function setBoolean(item) {
    const method1 = item.jobMethod;
    if (workInfo[`${method1}`]) {
      return true;
    } else {
      return false;
    }
  }
  // const [workGoogle, setWorkGoogle] = useState(false);
  // const [workApple, setWorkApple] = useState(false);
  // const [workAmazon, setWorkAmazon] = useState(false);

  function handleChange(setChange) {
    setWorkInfo({
      workReactBD: false,
      workGoogle: false,
      workApple: false,
      workAmazon: false,
      [setChange]: true,
    });
  }

  const { workAmazon, workApple, workGoogle, workReactBD } = workInfo;
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <TitlePage title="Experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {JobInfo.map((item, i) => {
            let method = setBoolean(item);
            return (
              <li
                key={i}
                onClick={() => {
                  handleChange(item.jobMethod);
                }}
                className={`${
                  method
                    ? "border-l-designColor text-designColor"
                    : "border-l-hoverColor text-darkText"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              >
                {item.jobTag}
              </li>
            );
          })}
        </ul>
        {jobInfo.map((item, i) => {
          const method = setBoolean(item);

          return method && <Work key={i} item={item} />;
        })}
      </div>
    </Container>
  );
};

export default Experience;
