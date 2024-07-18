import { FaCode } from "react-icons/fa";
import Container from "./Container";
import TitlePage from "./TitlePage";
import profile from '../assets/images/ProfileImg.jpg'

const links = [
  {
    title: "JavaScript (ES6+)",
    link: "#",
  },
  {
    title: "Next js",
    link: "#",
  },
  {
    title: "React js",
    link: "#",
  },
  {
    title: "Node js",
    link: "#",
  },
  {
    title: "TypeScript",
    link: "#",
  },
  {
    title: "Express js",
    link: "#",
  },
  {
    title: "MongoDB",
    link: "#",
  },
  {
    title: "TailWindCSS",
    link: "#",
  },
];
const About = () => {
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <TitlePage title="About Me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4 ">
          <p>
            Hello, My name is Shariful Islam. I love doing interesting things.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            modi repellat! Quisquam quis in fugiat ab corporis explicabo sunt
            quaerat aliquid quam officiis! Quasi, dicta? Laborum maiores tempora
            eos in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquid consequatur consequuntur reprehenderit{" "}
            <span className="text-designColor">
              praesentium sequi quos qui{" "}
            </span>
            distinctio suscipit porro voluptates dicta sapiente, provident
            debitis incidunt. Recusandae aliquam voluptatem quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequatur praesentium sequi quos qui consequuntur reprehenderit{" "}
            <span className="text-designColor">
              suscipit porro voluptates dicta sapiente{" "}
            </span>
            distinctio, provident debitis incidunt. Recusandae aliquam
            voluptatem quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi
            qui velit praesentium error esse tempora eligendi, facere odit ipsum
            eaque nobis ex beatae quos nesciunt temporibus, possimus omnis,
            voluptatem dignissimos.{" "}
            <span className="text-designColor">
              obcaecati explicabo minima alias distinctio iste necessitatibus{" "}
            </span>{" "}
            Numquam optio, vitae maiores omnis, dolor inventore laborum ducimus
            eum corrupti cumque.
          </p>
          <p>Here are few things I worked with</p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {links.map((item, i) => {
              return (
                <a
                  className="flex items-center gap-2 hover:text-white/80 duration-200 group"
                  key={i}
                  href={item.link}
                >
                  <FaCode className="text-designColor/80 group-hover:text-designColor" />{" "}
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profile}
                alt="My profile Img"
                className=" rounded-lg lg:w-full h-full object-cover"
              />
            </div>
            <div className=" hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
          </div>{" "}
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
