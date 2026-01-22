import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";

function ProjectCard({ project }) {
  return (
    <Reveal>
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <div className="md:w-1/2">
          <img
            src={project.image_url_1}
            alt={project.title}
            className="w-full h-64 "
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.short_description}</p>
          </div>

          <div>
            <NavLink
              to={`/projects/${project.id}`}
              className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              See More
            </NavLink>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCard
