import React from "react";
import { Link } from "react-router-dom";
const Degree = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Types of Degrees</h2>
      <p className="text-purple-800 text-lg">
        Master's and doctoral programs in the US provide specialized education
        across a variety of fields. The MA and MS focus on humanities/social
        sciences and STEM, respectively. The MBA prepares for business
        leadership, while the MPA and MSW target public administration and
        social work. The MTech focuses on advanced engineering and technology,
        and the PhD emphasizes original research. Each program offers unique
        coursework, practical experience, and career opportunities, supporting
        advanced roles and further study in their respective disciplines.
      </p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="p-4 border-l-4 border-purple-800 bg-purple-100">
          <h2 className="text-xl text-purple-800 font-bold">
            MS Master of Science
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Focus: Science, technology, engineering, and mathematics (STEM)
              fields.
            </li>
            <li>
              When to Take: After completing a bachelor's degree in a related
              field
            </li>
            <li>
              Course Structure: Advanced topics in the chosen field, lab work,
              may involve a thesis or research project.
            </li>
            <li>
              Research vs. Practical: Often includes hands-on laboratory work or
              practical projects.
            </li>
            <li>
              Scope: Careers in technology, engineering, healthcare, research,
              and academia; some may pursue doctoral studies (PhD).
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-red-800 bg-purple-200">
          <h2 className="text-xl text-red-800 font-bold">MA Master of Arts</h2>
          <ul className="list-disc pl-5">
            <li>
              Focus: Humanities, social sciences, fine arts, and liberal arts.
            </li>
            <li>
              When to Take: After completing a bachelor's degree in fields like
              English, history, sociology, psychology, philosophy, etc.
            </li>
            <li>
              Course Structure: Advanced study of theories, concepts, and
              methodologies; some require a thesis or final project.
            </li>
            <li>
              Research vs. Practical: Can be research-oriented or
              coursework-focused.
            </li>
            <li>
              Scope: Careers in education, journalism, public relations, social
              work, counseling, arts administration; further study at the
              doctoral level (PhD).
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-blue-800 bg-purple-100">
          <h2 className="text-xl text-blue-800 font-bold">
            MTech Master of Technology
          </h2>
          <ul className="list-disc pl-5">
            <li>Focus: Advanced engineering and technology.</li>
            <li>
              When to Take: After completing a bachelor's degree in engineering
              or a related field.
            </li>
            <li>
              Course Structure: In-depth technical coursework, projects, and
              sometimes a thesis.
            </li>
            <li>
              Research vs. Practical: Balanced between advanced technical
              training and practical applications.
            </li>
            <li>
              Scope: Careers in advanced engineering roles, research and
              development, and technology management; some may pursue further
              study (PhD).
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-green-800 bg-purple-200">
          <h2 className="text-xl text-green-800 font-bold">
            MBA Master of Business Administration
          </h2>
          <ul className="list-disc pl-5">
            <li>Focus: Business administration and management.</li>
            <li>
              When to Take: After completing a bachelor's degree, often with
              some work experience.
            </li>
            <li>
              Course Structure: Covers finance, marketing, operations, strategy,
              leadership; includes practical experiences like internships and
              consulting projects.
            </li>
            <li>
              Research vs. Practical: Primarily practical, preparing for
              leadership roles in business.
            </li>
            <li>
              Scope: Careers in corporate management, consulting,
              entrepreneurship, finance, marketing; some may pursue doctoral
              programs (DBA or PhD) for academic or research careers.
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-yellow-800 bg-purple-100">
          <h2 className="text-xl text-yellow-800 font-bold">
            MPA Master of Public Administration
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Focus: Public administration, public policy, and governmental
              management.
            </li>
            <li>
              When to Take: After completing a bachelor's degree, typically for
              those interested in public service or nonprofit organizations.
            </li>
            <li>
              Course Structure: Topics include public policy analysis, public
              finance, organizational management, ethics; may include
              internships or capstone projects.
            </li>
            <li>
              Research vs. Practical: Combines theoretical and practical
              components, preparing for careers in public service.
            </li>
            <li>
              Scope: Careers in government agencies, nonprofit organizations,
              international organizations, public policy research institutes;
              some may pursue doctoral studies (PhD).
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-orange-800 bg-purple-200">
          <h2 className="text-xl text-orange-800 font-bold">
            MSW Master of Social Work
          </h2>
          <ul className="list-disc pl-5">
            <li>Focus: Social work practice and leadership.</li>
            <li>
              When to Take: After completing a bachelor's degree, often in
              social sciences or human services.
            </li>
            <li>
              Course Structure: Includes social work theory, clinical practice,
              policy analysis, human behavior; requires field placements or
              internships.
            </li>
            <li>
              Research vs. Practical: Emphasizes practical skills in social work
              practice, with some research components.
            </li>
            <li>
              Scope: Careers in healthcare, schools, community organizations,
              mental health agencies, government agencies; some may pursue
              doctoral studies (PhD) for advanced research and teaching roles.
            </li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-gray-800 bg-purple-100">
          <h2 className="text-xl text-gray-800 font-bold">
            PhD Doctor of Philosophy
          </h2>
          <ul className="list-disc pl-5">
            <li>Focus: Original research and academic scholarship.</li>
            <li>
              When to Take: After completing a relevant master's or bachelor's
              degree.
            </li>
            <li>
              Course Structure: Extensive research, coursework, comprehensive
              exams, dissertation.
            </li>
            <li>Research vs. Practical: Highly research-focused.</li>
            <li>
              Scope: Careers in academia, research institutions, industry
              leadership, and specialized consulting roles.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span className="text-black text-lg">Takeaway</span>
        <ul className="list-disc">
          <li className="text-purple-800 text-lg">
            While having a background in the field of study is recommended, it
            is not a strict requirement for pursuing a particular degree.
          </li>
          <li className="text-purple-800 text-lg">
            Diverse academic and professional experiences can also be valuable
            and applicable to graduate studies.
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

export default Degree;
