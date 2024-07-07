import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ guideref }) => {
  return (
    <div className="flex gap-5 h-24 w-full items-center justify-center m-auto bg-black text-white sticky top-0 z-30 ">
      <AndroidLogo className="w-14 h-14 absolute left-0 ml-6 mb-3" />
      <div className="text-2xl text-black p-1 bg-white">
        <Link to="/">UCan</Link>
      </div>
      <div className="text-2xl ">
        <Link
          onClick={() => {
            guideref.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Guide
        </Link>
      </div>
      <div className="text-2xl ">
        <Link>AI Assist</Link>
      </div>
      <div className="text-2xl ">
        <Link>Contact</Link>
      </div>
    </div>
  );
};

const AndroidLogo = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2500 2500"
      xmlSpace="preserve"
    >
      <style type="text/css">{`.st0 { fill: #a4c639; }`}</style>
      <g>
        <path
          className="st0"
          d="M1701.9,485.9l160.8-279.1c6.1-10.6,2.5-24-8.1-30.1c-10.6-6.1-24-2.5-30.1,8.1l-163.4,283.7
          c-138-65.4-300.5-102.3-476.5-102.3c-176,0-338.5,36.8-476.5,102.3L448.2,184.8c-6.1-10.6-19.5-14.2-30.1-8.1
          c-10.6,6.1-14.2,19.5-8.1,30.1l160.8,279.1C243.8,635.4,85,819.3,0,1035.7h2500C2415,819.3,2256.2,635.4,1701.9,485.9z
           M889.1,403.4c0-33.6,27.3-60.9,60.9-60.9s60.9,27.3,60.9,60.9s-27.3,60.9-60.9,60.9S889.1,437,889.1,403.4z M1440,464.3
          c-33.6,0-60.9-27.3-60.9-60.9s27.3-60.9,60.9-60.9c33.6,0,60.9,27.3,60.9,60.9S1473.6,464.3,1440,464.3z"
        />
        <path
          className="st0"
          d="M2176.1,1274.1H2069v685.3c0,40.5-32.8,73.3-73.3,73.3h-146.5c-40.5,0-73.3-32.8-73.3-73.3v-685.3H723.1v685.3
          c0,40.5-32.8,73.3-73.3,73.3H503.3c-40.5,0-73.3-32.8-73.3-73.3v-685.3H323.9c-49.5,0-89.8,40.3-89.8,89.8v1061.3
          c0,49.5,40.3,89.8,89.8,89.8h1852.2c49.5,0,89.8-40.3,89.8-89.8V1363.9C2266,1314.4,2225.7,1274.1,2176.1,1274.1z"
        />
        <path
          className="st0"
          d="M1158.3,1791.3v610.3c0,24.5-19.9,44.4-44.4,44.4h-95.4c-24.5,0-44.4-19.9-44.4-44.4v-610.3
          c0-24.5,19.9-44.4,44.4-44.4h95.4C1138.4,1746.9,1158.3,1766.8,1158.3,1791.3z"
        />
        <path
          className="st0"
          d="M1525.9,1746.9h-95.4c-24.5,0-44.4,19.9-44.4,44.4v610.3c0,24.5,19.9,44.4,44.4,44.4h95.4
          c24.5,0,44.4-19.9,44.4-44.4v-610.3C1570.3,1766.8,1550.4,1746.9,1525.9,1746.9z"
        />
      </g>
    </svg>
  );
};

export default Navbar;
