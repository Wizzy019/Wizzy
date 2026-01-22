import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal";

 function Skills() {
  const skillCategories = [
    {
      category: "Web Design",
      skills: [
        "Wireframing & Prototyping",
        "UI Layouts & Components",
        "Responsive Design",
        "Color & Typography Choices",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "React.js Applications",
        "Tailwind CSS Styling",
        "State Management",
        "API Integration",
        "Form Handling",
      ],
    },
    {
      category: "Other Skills",
      skills: [
        "Version Control (Git/GitHub)",
        "Supabase Integration",
        "Debugging & Problem Solving",
      ],
    },
  ];

  return (
    <section className="px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-12">What I can do</h2>
      </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {skillCategories.map((cat, idx) => (
            <Reveal key={idx}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">{cat.category}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {cat.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
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

export default Skills