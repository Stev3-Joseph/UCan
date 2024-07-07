import React from "react";
import { Link } from "react-router-dom";
const Scholarships = () => {
  return (
    <div>
      <div className="py-8 space-y-8">
        <h2 className="text-3xl font-bold mb-4">US Government Scholarships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-purple-100 rounded-lg p-6 shadow-lg">
            <h3 className="text-purple-800 font-bold text-xl">
              Boren Fellowships
            </h3>
            <p className="text-purple-800 mt-2">
              Boren Fellowships provide up to $30,000 to US graduate students to
              add an important international and language component to their
              graduate education. It supports language study, optional research,
              and internships abroad in areas critical to US interests.
            </p>
            <p className="text-purple-800 mt-2">
              Boren Fellows apply their advanced degrees to work in the federal
              government for at least 1 year after graduation.
            </p>
            <Link
              to="#"
              className="inline-block mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-purple-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-purple-800 font-bold text-xl">
              Thomas J. Watson Fellowship
            </h3>
            <p className="text-purple-800 mt-2">
              Provides fellowships to graduating seniors for a year of
              independent study and travel abroad. It offers a stipend of
              $40,000 for projects that can be completed independently, without
              formal study at a foreign institution.
            </p>
            <Link
              to="#"
              className="inline-block mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-purple-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-purple-800 font-bold text-xl">
              Eisenhower Global Scholars
            </h3>
            <p className="text-purple-800 mt-2">
              American college graduates travel abroad for a fully funded
              academic year to pursue a Master's degree at the University of
              Oxford or IE University. Candidates must be US citizens or
              residents with proven leadership potential.
            </p>
            <Link
              to="#"
              className="inline-block mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-purple-400 rounded-lg p-6 shadow-lg">
            <h3 className="text-purple-800 font-bold text-xl">
              Congress-Bundestag Youth Exchange for Young Professionals (CBYX)
            </h3>
            <p className="text-purple-800 mt-2">
              Provides opportunities for young professionals to study, intern,
              and live with a host in Germany for a year. It's designed for
              young Americans in business, vocational, technical, and
              agricultural fields.
            </p>
            <Link
              to="#"
              className="inline-block mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://www.profellow.com/fellowships/fulbright-us-student-grant-alternatives/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <a href="https://www.profellow.com/fellowships/fulbright-us-student-grant-alternatives/">
              Learn
            </a>
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Examples
          </Link>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl font-bold  mb-4">
              University Provided Scholarships
            </h2>
            <div className="bg-purple-500 rounded-lg p-6 shadow-lg">
              <p className="text-purple-800">
                These scholarships may or may not be provided by the college you
                are looking to get admitted to. Always check with your specific
                institution for available scholarships.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mt-12 mb-4">
              Criteria for Scholarships
            </h2>
            <div className="space-y-8">
              <div className="bg-purple-600 rounded-lg p-6 shadow-lg">
                <h3 className="text-purple-100 font-bold text-xl">
                  Teaching Based
                </h3>
                <p className="text-purple-100 mt-2">
                  Scholarships awarded based on teaching experience or
                  potential.
                </p>
              </div>

              <div className="bg-purple-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-purple-100 font-bold text-xl">
                  Research Based
                </h3>
                <p className="text-purple-100 mt-2">
                  Scholarships awarded based on research accomplishments or
                  proposals.
                </p>
              </div>

              <div className="bg-purple-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-purple-100 font-bold text-xl">
                  Achievement Based
                </h3>
                <p className="text-purple-100 mt-2">
                  Scholarships awarded based on academic, extracurricular, or
                  professional achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
