import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ProjectDetails({ project }) {
  const [comments, setComments] = useState(null);
  const [form, setForm] = useState({ 
    name: "", email: "", comment: "", project_id: project.id, date: new Date().toLocaleString()});

  const handleInputChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.comment) {
      return;
    }

    const { error } = await supabase.from("comments").insert([form]);

    if (error) {
      console.log("Error updating comments:", error.message);
    }

      setForm({ name: "", email: "", comment: "",});
    
  };

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase.from("comments").select("*").eq('project_id', project.id);

      if (error) {
        console.log("Error fetching comments:", error.message);
      } else {
        setComments(data);
        console.log(data);
        
      } 
    };

    fetchComments();
  }, [project.id]);
  
  
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="grid md:grid-cols-2 gap-4">
          <img src={project.image_url_2} alt={project.title} />
          <img src={project.image_url_3} alt={project.title} />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.full_description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Live Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">
            Comments ({comments?.length})
          </h3>

          <div className="space-y-4 mb-8">
            {comments?.map((c, idx) => (
              <div key={idx} className="bg-gray-800 p-4 rounded">
                <p className="font-semibold">{c.name}</p>
                <p className="text-gray-400 text-sm mb-2">{c.date}</p>
                <p>{c.comment}</p>
              </div>
            ))}
            {comments?.length === 0 && (
              <p className="text-gray-400">No comments yet.</p>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-gray-800 p-6 rounded"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
            </div>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleInputChange}
              placeholder="Your Comment"
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails
