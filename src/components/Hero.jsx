import React from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  useGSAP(() => {
    // GSAP animation to tween the width to 600px over 1 second
    gsap.fromTo(
      ".animate",
      { width: 0 },
      {
        width: 800,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 1,
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="h-screen w-screen relative">
      {console.log(sidebar)}
      <img
        src="src/assets/images/bg.avif"
        alt="UCan"
        className="h-screen w-screen object-cover overflow-hidden"
      />
      <div className="h-screen w-screen flex absolute inset-0 items-center ml-96 ">
        <div className="relative h-[500px] w-[500px] bg-black opacity-80 rounded-lg shadow-2xl transform translate-z-10 rotate-1 skew-y-2 mr-10 border-r-8 border-zinc-200 animate"></div>
        <div className="absolute top-[110px] left-[200px] transform translate-z-10 rotate-1 skew-y-3 opacity-0 text">
          <Navbar setSidebar={setSidebar} />
        </div>
        {sidebar ? (
          <div className="absolute top-[250px] left-[1000px] w-[50px] rounded-full shadow-2xl flex flex-col items-center justify-center z-10 opacity-100 transition-opacity duration-500">
            <a href="https://github.com/Stev3-Joseph">
              <img
                src="src/assets/images/git.png"
                alt="git"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://x.com/SteveJosep65438">
              <img
                src="src/assets/images/x.jpg"
                alt="x"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://www.instagram.com/steve.joseph21/?next=%2F">
              <img
                src="src/assets/images/insta.png"
                alt="insta"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        ) : null}

        <div className="absolute top-[300px] left-[90px]">
          <h1 className="text-7xl text-white font-bold opacity-0 text">UCan</h1>
          <p className="text-white text-4xl opacity-0 text">
            Learn, Grow & Share
          </p>
          <Link to="/general">
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white opacity-0 rounded-md text">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
