import React from "react";
import { Link } from "react-router-dom";

const StdTest = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold" >
        Standardized Tests for Graduate Admissions
      </h2>
      <p className="text-purple-800 text-lg">
        Various standardized tests are required for admission to different
        graduate programs in the U.S. Each test is tailored to a specific field
        of study and helps universities assess the preparedness of applicants.
        <span className="bg-red-200 text-black">
          It is important to identify the tests required for your desired
          program and prepare accordingly.
        </span>{" "}
        Here are some of the key standardized tests you may need to take:
      </p>

      <div>
        <span className="text-black text-lg">Key Standardized Tests</span>
        <ul className="list-disc">
          <li className="text-purple-800 text-lg">
            Graduate Record Examinations (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/gre/"
            >
              GRE
            </a>
            ) - for liberal arts, science, math
          </li>
          <li className="text-purple-800 text-lg">
            Graduate Management Admission Test (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/gmat/"
            >
              GMAT
            </a>
            ) - for business schools/study for MBA (Masters in Business
            Administration) programs
          </li>
          <li className="text-purple-800 text-lg">
            Law School Admission Testing Program (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/lsat/"
            >
              LSAT
            </a>
            ) - for law schools
          </li>
          <li className="text-purple-800 text-lg">
            Medical College Admission Test (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/mcat/"
            >
              MCAT
            </a>
            ) - for medical schools
          </li>
          <li className="text-purple-800 text-lg">
            Dental Admission Testing Program (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/dat/"
            >
              DAT
            </a>
            ) - for dental schools
          </li>
          <li className="text-purple-800 text-lg">
            Pharmacy College Admission Test (
            <a
              className="text-orange-500 underline"
              href="https://www.aacp.org/resource/pharmacy-college-admission-test#:~:text=The%20PCAT%20is%20a%20specialized,to%20pharmacy%20colleges%20and%20schools."
            >
              PCAT
            </a>
            )
          </li>
          <li className="text-purple-800 text-lg">
            Optometry Admission Testing Program (
            <a
              className="text-orange-500 underline"
              href="https://www.internationalstudent.com/test-prep/oat/"
            >
              OAT
            </a>
            )
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

export default StdTest;
