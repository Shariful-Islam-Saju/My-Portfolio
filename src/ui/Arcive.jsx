import Container from "./Container";
import { projectArray } from "../constance/ArchiveList";
import { useRef, useState } from "react";
import ArciveCart from "./ArciveCart";
import { AnimatePresence, motion } from "framer-motion";

export default function Arcive() {
  const [showMore, setShowMore] = useState(false);
  const projectRef = useRef(null);

  const displayedArray = showMore ? projectArray : projectArray.slice(0, 6);
  return (
    <Container className="py-24 max-w-5xl mx-auto">
      <div className="flex  flex-col items-center">
        <h2 className="text-3xl font-semibold my-4">
          Other NoteWorthy Projects
        </h2>
        <p className="text-sm text-designColor tracking-wide">
          View the archive
        </p>
      </div>
      <div
        ref={projectRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10"
      >
        <AnimatePresence>
          {displayedArray.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: id * 0.1 }}
            >
              {" "}
              <ArciveCart item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button
          onClick={() => {
            setShowMore(!showMore);
            showMore
              ? projectRef.current.scrollIntoView({ behavior: "smooth" })
              : "";
          }}
          className="w-36 h-12 rounded-md text-designColor text-sm  border border-designColor hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show Less" : "Show More "}
        </button>
      </div>
    </Container>
  );
}
