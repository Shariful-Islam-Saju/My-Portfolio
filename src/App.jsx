import { motion } from "framer-motion";

import About from "./ui/About";
import Arcive from "./ui/Arcive";
import Banner from "./ui/Banner";
import Contacts from "./ui/Contacts";
import Experience from "./ui/Experience";
import Header from "./ui/Header";
import Projects from "./ui/Projects";
import ScrollBtn from "./ui/ScrollBtn";
import LeftSide from "./ui/LeftSide";
import RightSide from "./ui/RightSide";

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Arcive />
      <Contacts />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>{" "}


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
      <ScrollBtn />
    </main>
  );
}

export default App;
