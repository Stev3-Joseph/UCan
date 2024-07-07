import React from "react";
import { Link } from "react-router-dom";
const Whentoapply = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">When To Apply?</h2>
      <p className="text-purple-800 text-lg">
        International students applying for graduate programs in the U.S.
        typically have specific application deadlines set by each university.
        <span className="bg-red-200 text-black">
          These deadlines can vary depending on the program and institution.
        </span>{" "}
        In general, it is recommended that international students start
        preparing their applications well in advance and aim to submit their
        materials at least several months before the deadline.
        <span className="bg-red-200 text-black">
          Ideally, students should begin this process during their 7th semester
        </span>{" "}
        or the start of their final year to enter the fall semester of the next
        academic year. It's a good idea to check the specific deadlines for the
        programs you are interested in and ensure that you have enough time to
        gather all required materials, such as transcripts, letters of
        recommendation, test scores, and personal statements.
      </p>

      <div>
        <span className="text-black text-lg ">Takeaway</span>
        <ul className="list-disc">
          <li className="text-purple-800 text-lg">
            First zero down on your college of choice then visit their official
            website to find out deadlines
          </li>
          <li className="text-purple-800 text-lg">
            Ideally, students should begin this process during their 7th
            semester{" "}
          </li>
        </ul>
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

export default Whentoapply;
