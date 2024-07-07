import React from "react";
import { Link } from "react-router-dom";

const Guidecard = ({ image, title, description, link }) => {
  return (
    <Link to={link}>
      <div className="bg-slate-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden border-l-8 border-b-8 border-[#1e3a8a] transition-all duration-300 hover:scale-105 h-[400px]">
        <div className="flex flex-col items-center justify-between p-5 h-full ">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              {title}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{description}</p>
          </div>
          <button className="px-4 py-2 bg-[#1e3a8a] text-white rounded-lg transition-colors duration-300 hover:bg-[#162d6a]">
            <Link to={link}>View Now</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Guidecard;
