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
        src="https://media.istockphoto.com/id/1334065509/photo/mature-teacher-and-group-of-his-students-using-laptop-at-the-university.jpg?s=612x612&w=0&k=20&c=ea2toHRuxhIxv_QW5utXncxZtt7Hv-AuaEdlDDhJ4to="
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
            <a href="data:image/png;base64,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">
              <img
                src="src/assets/images/git.png"
                alt="git"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://i.pinimg.com/736x/2b/a7/17/2ba717ac010d3b9f8d26e9db4da291b8.jpg">
              <img
                src="src/assets/images/x.jpg"
                alt="x"
                className="rounded-full mb-4 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="data:image/jpeg;base64,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">
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
