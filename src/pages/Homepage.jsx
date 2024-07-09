import React, { useRef } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Homepage = () => {
  const guideref = useRef(null);

  return (
    <div className="min-h-screen ">
      <div>
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
