import React from "react";
import { Link } from "react-router-dom";
const AppliComp = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">A Short Glimpse</h2>
      <p className="text-purple-800 text-lg">
        Most applications for graduate programs in the U.S. will include several
        key components. Here is a quick overview for those who are in a hurry:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-purple-800">
        <div>
          <ul className="list-disc pl-5">
            <li>Application form</li>
            <li>Standardized test scores</li>
            <li>Transcripts</li>
            <li>
              Personal statement - also called the Statement of Purpose (SoP)
            </li>
            <li>
              Separate research statement (sometimes required) - describing your
              research interests and plans
            </li>
            <li>2-3 Recommendation Letters</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-5">
            <li>
              CV (sometimes required) - listing your professional and
              extracurricular accomplishments
            </li>
            <li>
              An Interview may be requested for some students (such as MBA
              applicants), while an audition is likely to be required for
              students applying for programs in the arts
            </li>
            <li>
              Arts students may also submit a portfolio of work, while students
              applying for research-focused degrees may be asked to submit a
              writing sample
            </li>
            <li>Application fee of approximately $50-100 per application</li>
          </ul>
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

export default AppliComp;
