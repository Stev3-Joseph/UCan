import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import Roadmap from "../components/Roadmap";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Component() {
  const [choice, setChoice] = useState(null);
  const choicesetter = (choice) => {
    setChoice(choice);
  };
  const getColorClass = () => {
    switch (choice) {
      case 1:
        return "bg-purple-600";
      case 2:
        return "bg-red-600";
      case 3:
        return "bg-green-600";
      case 4:
        return "bg-blue-600";
      case 5:
        return "bg-teal-600";
      case 6:
        return "bg-orange-600";
      default:
        return "bg-purple-600";
    }
  };
  return (
    <div>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-100 p-4 border-r">
          <div className="flex items-center mb-6">
            <AndroidLogo className="h-8 w-8" />
            <Link className="ml-2 text-xl font-bold" to="/">
              UCan
            </Link>
          </div>
          <div className="relative mb-6">
            <SearchIcon className="absolute right-8 top-4 h-5 w-5 text-gray-400" />
            <TextField type="search" placeholder="Search" className="" />
          </div>
          <nav className="space-y-4 ">
            <div className="sticky top-0 left-0">
              <h3 className="text-xs font-semibold text-gray-500 uppercase">
                Get Started
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-purple-300"
                    prefetch={false}
                    onClick={() => choicesetter(1)}
                  >
                    Getting Comfortable
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-red-300"
                    prefetch={false}
                    onClick={() => choicesetter(2)}
                  >
                    Qualification Exams
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-green-300"
                    prefetch={false}
                    onClick={() => choicesetter(3)}
                  >
                    Language Exams
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-blue-300"
                    prefetch={false}
                    onClick={() => choicesetter(4)}
                  >
                    Applying to a University
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-teal-300"
                    prefetch={false}
                    onClick={() => choicesetter(5)}
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-1 px-2 rounded hover:bg-orange-300"
                    prefetch={false}
                    onClick={() => choicesetter(6)}
                  >
                    Recap
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <div className="flex-1 p-8">
          <header className="flex items-center justify-between mb-8">
            <nav className="flex space-x-4">
              <Link href="#" className="text-gray-700" prefetch={false}>
                Dashboard
              </Link>
              <Link href="#" className="text-gray-700" prefetch={false}>
                Docs
              </Link>
              <Link href="#" className="text-gray-700" prefetch={false}>
                API reference
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Log in</Button>
              <Button>Sign up</Button>
            </div>
          </header>
          <section>
            <h1 className="text-3xl font-bold mb-4 mx-[50px]">
              Your College RoadMap
            </h1>

            <div className="mb-8">
              {(choice === 1 || choice === null) && <Roadmap />}
              {choice === 2 && (
                <div className="text-2xl font-semibold">
                  Qualification Exams
                </div>
              )}
              {choice === 3 && (
                <div className="text-2xl font-semibold">Language Exams</div>
              )}
              {choice === 4 && (
                <div className="text-2xl font-semibold">
                  Applying to a University
                </div>
              )}
              {choice === 5 && (
                <div className="text-2xl font-semibold">Documentation</div>
              )}

              {choice === 6 && (
                <div className="text-2xl font-semibold">Recap</div>
              )}
            </div>
          </section>
        </div>

        <div className="fixed bottom-3 right-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`${getColorClass()} text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
          >
            Scroll Up
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

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

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
