import {
  SiCss,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import MyImage from "../assets/wizzy_image.jpg";
import Reveal from "../components/Reveal";
const techStacks = [
  {
    name: "HTML5",
    icon: SiHtml5,
    level: "Advanced",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    level: "Advanced",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Experienced",
    color: "#F7DF1E",
  },
  {
    name: "Git / GitHub",
    icon: SiGit,
    level: "Experienced",
    color: "#F05032",
  },
  {
    name: "React",
    icon: SiReact,
    level: "Experienced",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Experienced",
    color: "#06B6D4",
  },
  {
    name: "Python",
    icon: SiPython,
    level: "Experienced",
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Experienced",
    color: "#3178C6",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    level: "Experienced",
    color: "#009688",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    level: "Experienced",
    color: "#3ECF8E",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "Experienced",
    color: "#4169E1",
  },
];

function About() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img
                src={MyImage}
                alt="Wizzy"
                className="w-48 h-48 object-cover rounded-4xl border-4 border-blue-900"
              />
            </div>

            <div className="md:w-2/3 flex flex-col items-center gap-6">
              <h2 className="text-4xl font-bold text-center">Wisdom Ndukwu</h2>
              <p className="text-gray-300 text-lg text-center">
                I'm a full-stack developer passionate about software
                engineering, building scalable applications, and solving
                real-world problems through technology. I enjoy creating robust
                systems, crafting intuitive user experiences, and exploring how
                AI can be integrated into modern software.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-max bg-blue-900 px-6 py-3 rounded hover:bg-blue-800 transition font-semibold"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            My Tech Stacks
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {techStacks.map((tech, idx) => {
              const Icon = tech.icon;

              return (
                <Reveal key={idx}>
                  <div className="w-max md:w-full flex items-center gap-4 bg-gray-500/50 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                    <Icon size={40} style={{ color: tech.color }} />
                    <div className="hidden md:block text-center">
                      <h4 className="text-xl font-semibold">{tech.name}</h4>
                      <p className="text-gray-400 ">{tech.level}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
