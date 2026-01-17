import { useParams } from "react-router-dom";
import { projects } from "../data/project.js";
import ProjectDetails from "../components/ProjectDetails.jsx";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  return <ProjectDetails project={project} />;
}
export default ProjectPage
