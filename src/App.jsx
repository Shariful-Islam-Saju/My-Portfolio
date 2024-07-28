import { motion } from "framer-motion";

import About from "./ui/About";
import Arcive from "./ui/Arcive";
import Banner from "./ui/Banner";
import Contacts from "./ui/Contacts";
import Experience from "./ui/Experience";
import Header from "./ui/Header";
import Projects from "./ui/Projects";
import ScrollBtn from './ui/ScrollBtn'

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
      <ScrollBtn/>
    </main>
  );
}

export default App;
