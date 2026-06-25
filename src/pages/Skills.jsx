import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "Responsive Design",
        "Component-Based Architecture",
        "State Management",
        "API Integration",
        "UI Implementation",
        " Form Handling & Validation",
        "Client-Side Routing",
        "Performance Optimization",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "REST API Development",
        "Authentication & Authorization",
        "Role-Based Access Control (RBAC)",
        "CRUD Operations",
        "Database Integration",
        "Business Logic Implementation",
        "Secure API Development",
        "Request Validation & Error Handling",
      ],
    },
    {
      category: "Other Skills",
      skills: [
        "Version Control (Git/GitHub)",
        "Database Design",
        "Data Fetching",
        "Deployment",
        "Technical Documentation",
        "Environment Variable Management",
        "Debugging & Problem Solving",
      ],
    },
  ];

  return (
    <section className="px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-12">
            What I can do
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {skillCategories.map((cat, idx) => (
            <Reveal key={idx}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-md min-h-65">
                <h3 className="text-xl text-center font-semibold mb-4">
                  {cat.category}
                </h3>
                <ul className="h-full flex flex-col list-disc list-inside space-y-2 text-gray-300">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="flex justify-center">
                      <p className="text-white"></p>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-6 text-lg text-gray-300">
            If you need any of these services, feel free to{" "}
            <NavLink
              to="/contact"
              className="text-blue-500 font-semibold hover:underline"
            >
              Contact Me
            </NavLink>
            .
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
