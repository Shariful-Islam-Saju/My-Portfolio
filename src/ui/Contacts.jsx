import React from "react";
import Container from "./Container";

export default function Contacts() {
  return (
    <Container
      id="contact"
      className="pb-10 lg:pb-32  flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-designColor font-semibold tracking-wide">
        What&lsquo;s Next?
      </p>
      <h2 className="text-5xl font-semibold">Get IN Touch</h2>
      <p className="max-w-xl mx-auto text-center text-darkText">
        Actually I&lsquo;m student right now. But I also searching opportunities
        for learning and develop new skill. If you have anything to share or
        just want say &quot;Hello&quot; I&lsquo;ll try my best to reach you.
      </p>
      <a href="mailto:sajukhan12905@gmail.com">
        <p className="w-40 h-14 border border-designColor font-semibold mt-6 text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">Say Hello</p>
      </a>
    </Container>
  );
}
