import React from "react";
import { Link } from "react-router-dom";
const Requirement = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">Requirements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            1. Transcripts
          </h3>
          <p className="text-gray-800">
            Official records of your academic performance.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            2. Letter of Recommendation (LoR)
          </h3>
          <p className="text-gray-800">
            References from mentors or supervisors assessing your capabilities.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            3. Statement of Purpose (SoP)
          </h3>
          <p className="text-gray-800">
            Personal essay outlining your academic and career goals.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">4. Resume</h3>
          <p className="text-gray-800">
            Summary of your professional and extracurricular achievements.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            5. Research Statement
          </h3>
          <p className="text-gray-800">
            Detailed description of your research interests and objectives.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            6. Language Exams
          </h3>
          <p className="text-gray-800">
            Demonstrates you have the English communication skills needed to
            succeed at universities around the world
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Learn More
        </Link>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View Examples
        </Link>
      </div>
    </div>
  );
};

export default Requirement;
