import Container from "./Container";
import ProjectLinks from "./ProjectLinks";
import TitlePage from "./TitlePage";
import image from '../assets/images/download.jpg'

function Projects() {
  return (
    <Container id="project" className="py-24">
      <TitlePage title="Some Things I have Build" />
      <div className="mt-10 flex flex-col  items-center justify-center gap-28">
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href=""
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt="Works1"
              className="w-full h-full object-cover "
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between items-end text-right">
            <div>
              <p className="text-designColor text-sm tracking-wide font-semibold">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16 z-10">
              Lorem ipsum, dolor sit amet ccusantium consectetur adipisicing
              elit. Fugiat minus simLorem ipsum, dolor sit amet consectetur
              adipisicing elit.ilique ratione nesciunt inventore maxime quo ad
              delectus laudantium praesentium facilis, maiores esse dolores hic
              accusantium aspernatur neque quidem nisi. Cupiditate perferendis
              rerum
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Strpe</li>
              <li>Vercel Deployment</li>
              <li>TypeScript</li>
            </ul>
            <ProjectLinks link={"my project link"} />
          </div>
        </div>{" "}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <a
            href=""
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt="Works1"
              className="w-full h-full object-cover "
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between items-start text-left">
            <div>
              <p className="text-designColor text-sm tracking-wide font-semibold">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16 z-10">
              Lorem ipsum, dolor sit amet ccusantium consectetur adipisicing
              elit. Fugiat minus simLorem ipsum, dolor sit amet consectetur
              adipisicing elit.ilique ratione nesciunt inventore maxime quo ad
              delectus laudantium praesentium facilis, maiores esse dolores hic
              accusantium aspernatur neque quidem nisi. Cupiditate perferendis
              rerum
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Strpe</li>
              <li>Vercel Deployment</li>
              <li>TypeScript</li>
            </ul>
            <ProjectLinks link={"my project link"} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href=""
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt="Works1"
              className="w-full h-full object-cover "
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between items-end text-right">
            <div>
              <p className="text-designColor text-sm tracking-wide font-semibold">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon clone 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16 z-10">
              Lorem ipsum, dolor sit amet ccusantium consectetur adipisicing
              elit. Fugiat minus simLorem ipsum, dolor sit amet consectetur
              adipisicing elit.ilique ratione nesciunt inventore maxime quo ad
              delectus laudantium praesentium facilis, maiores esse dolores hic
              accusantium aspernatur neque quidem nisi. Cupiditate perferendis
              rerum
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Strpe</li>
              <li>Vercel Deployment</li>
              <li>TypeScript</li>
            </ul>
            <ProjectLinks link={"my project link"} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
