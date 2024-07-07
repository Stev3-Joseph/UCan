import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Whentoapply from "../subcomponents/Whentoapply";
import Degree from "../subcomponents/Degree";
import StdTest from "../subcomponents/StdTest";
import Requirement from "../subcomponents/Requirement";

import AppliComp from "../subcomponents/AppliComp";
import Scholarships from "../subcomponents/Scholarships";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Roadmap = () => {
  const aref = useRef(null);
  const bref = useRef(null);
  const cref = useRef(null);
  const dref = useRef(null);
  const eref = useRef(null);

  useGSAP(() => {
    const divs = document.querySelectorAll(".animate");
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".text", {
      duration: 1,
      text: "Let's begin with the basics!",
      ease: "none",
    });
    divs.forEach((div) => {
      gsap.fromTo(
        div,
        { opacity: 0 }, // Initial state: fully transparent
        {
          opacity: 1, // Final state: fully opaque
          duration: 1, // Animation duration
          scrollTrigger: {
            trigger: div,
            start: "top 60%", // Start animation when top of element reaches 80% from top of viewport
            toggleActions: "play none none reverse",
            // Play animation on enter, do nothing on leave
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="px-6 py-8 md:px-12 lg:py-2 max-w-[1200px] mx-auto">
        <div className="prose prose-lg prose-gray mx-auto dark:prose-invert">
          <div className="space-y-6 not-prose mb-9">
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl lg:leading-[4rem] text"></h1>

            <div className="flex justify-between text-muted-foreground text-lg tracking-wide leading-relaxed">
              <Link
                onClick={() => {
                  aref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p className="text-purple-800">When to apply?</p>
              </Link>
              <Link
                onClick={() => {
                  bref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p className="text-purple-800">Types Of Degrees</p>
              </Link>
              <Link
                onClick={() => {
                  cref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p className="text-purple-800">Standard tests</p>
              </Link>
              <Link
                onClick={() => {
                  dref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p className="text-purple-800">Requirements</p>
              </Link>
              <Link
                onClick={() => {
                  eref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p className="text-purple-800">Scholarships</p>
              </Link>
            </div>
          </div>
          <div class="relative w-[640px] h-[360px] overflow-hidden rounded-lg mx-auto">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/j1LpqqbuZi0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="mt-16 space-y-12">
            <div className="animate">
              <AppliComp />
              {/* APPLICATION COMPONENT */}
            </div>
            <div ref={aref} className="animate">
              <Whentoapply />
              {/* WHEN TO APPLY */}
            </div>
            <div ref={bref} className="animate">
              <Degree />
            </div>
            <div ref={cref} className="animate">
              <StdTest />
            </div>
            <div ref={dref} className="animate">
              <Requirement />
            </div>
            <div ref={eref} className="animate">
              <Scholarships />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
