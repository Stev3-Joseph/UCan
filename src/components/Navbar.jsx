import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const handleContactClick = () => {
    setSidebar((prev) => !prev); // Toggle the sidebar state
  };

  return (
    <div className="flex gap-5 h-24 w-full items-center justify-center m-auto text-white sticky top-0 z-30">
      <div className="text-2xl text-black p-1 bg-white hover:scale-110 transition-transform duration-200">
        <Link to="/">UCan</Link>
      </div>
      <div className="text-2xl hover:scale-110 transition-transform duration-200">
        <Link to="/general">Guide</Link>
      </div>
      <div className="text-2xl hover:scale-110 transition-transform duration-200">
        <Link to="/ai-assist">AI Assist</Link>
      </div>
      <div
        className="text-2xl hover:scale-110 transition-transform duration-200 cursor-pointer"
        onClick={handleContactClick}
      >
        Contact
      </div>
      <div className="text-2xl hover:scale-110 transition-transform duration-200 cursor-pointer">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
