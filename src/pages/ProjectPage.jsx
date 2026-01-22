import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import ProjectDetails from '../components/ProjectDetails.jsx';

function ProjectPage() {
 
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  const project = projects.find((proj) => proj.id.toString() === id);

  useEffect(() => { 
          const fetchProjects = async () => {
  
              const { data, error } = await supabase
                  .from('projects')
                  .select('*')
  
              if (error) {
                return;
              } else {
                  setProjects(data);
              }   
          };
  
          fetchProjects();
      }, []);

  
  if (!project) return <p className="min-h-screen text-center mt-20">Project not found</p>;

  return <ProjectDetails project={project} />;
}
export default ProjectPage
