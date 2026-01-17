import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const techStacks = [
  { name: "HTML5", icon: faHtml5, level: "Advanced" },
  { name: "CSS3 / Tailwind", icon: faCss3Alt, level: "Advanced" },
  { name: "JavaScript", icon: faJsSquare, level: "Experienced" },
  { name: "Git / GitHub", icon: faGitAlt, level: "Experienced" },
  { name: "React", icon: faReact, level: "Experienced" },
  { name: "Tailwind CSS", icon: faCss3Alt, level: "Experienced" },
];

function About() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/your-photo.jpg"
              alt="Wizzy"
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-900"
            />
          </div>

          <div className="md:w-2/3 flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Wisdom Ndukwu</h2>
            <p className="text-gray-300 text-lg">
              I am a Front-end Developer building clean, scalable, and
              responsive web applications. I focus on delivering seamless user
              experiences and practical solutions.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max bg-blue-900 px-6 py-3 rounded hover:bg-blue-800 transition font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">My Tech Stacks</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStacks.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-4 bg-gray-500/50 rounded-lg p-6 shadow-md hover:shadow-xl transition"
              >
                <FontAwesomeIcon icon={tech.icon} size="3x" className="text-blue-500" />
                <h4 className="text-xl font-semibold">{tech.name}</h4>
                <p className="text-gray-400">{tech.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
