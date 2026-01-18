import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { supabase } from "../lib/supabase.js";

 function Projects() {

    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const fetchProjects = async () => {

            const { data, error } = await supabase
                .from('projects')
                .select('*');

            if (error) {
                setError(error.message);
            } else {
                setProjects(data);
            }   
        };

        fetchProjects();
    }, []);

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
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
