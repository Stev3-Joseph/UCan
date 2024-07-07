import React, { useRef } from "react";
import Guide from "../components/Guide";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Homepage = () => {
  const guideref = useRef(null);

  return (
    <div>
      <div className="h-full w-full">
        <Hero/>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
