import React, { useRef } from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Guide from "../components/Guide";
import Footer from "../components/Footer";

const Homepage = () => {
  const guideref = useRef(null);

  return (
    <div>
      <div className="h-full w-full">
        <Navbar guideref={guideref} />
        <Title />
        <div ref={guideref} className="">
          <Guide />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
