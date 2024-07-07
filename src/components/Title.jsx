import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";

// const Spline = React.lazy(() => import("@splinetool/react-spline"));
const Title = () => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    gsap.to(".text1", {
      duration: 1,
      text: "Welcome to",
      ease: "none",
    });

    gsap.to(".text2", {
      duration: 1,
      delay: 1,
      text: "UCan",
      ease: "none",
    });
  }, []);

  return (
    <div className="relative h-screen">
      {" "}
      <img
        src="src\assets\images\bg.avif"
        alt="UCan"
        className="h-full w-full object-cover"
      />
      {/* Ensure the parent div is relative and has a full height */}
      {/* <Spline scene="https://prod.spline.design/5Zbn5eBXdYqj-jex/scene.splinecode" /> */}
      <div className="absolute bottom-32 left-8 text-9xl font-sans text-zinc-50 ">
        {/* Position text at the bottom left */}
        <h1 className="text1"></h1>

        <span className="text2"></span>
        {/* Directly include "UCan" here if dynamic text is not required */}
        <h1 className="inline cursor">_</h1>
      </div>
    </div>
  );
};

export default Title;
