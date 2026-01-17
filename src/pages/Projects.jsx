import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    id: "workconnect",
    name: "WorkConnect",
    shortDescription: "Connects local skilled workers with clients efficiently.",
    image: "/screenshots/workconnect.png",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    shortDescription: "A showcase of my work and skills as a front-end developer.",
    image: "/screenshots/portfolio.png",
  },
];

 function Projects() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects
