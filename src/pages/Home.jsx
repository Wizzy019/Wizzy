
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../components/SocialIcons";
import { Link } from "react-router-dom";

  function Home() {
  return (
    <section className="flex justify-center px-6 py-12">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white cursor-pointer">Hi, I'm <span className="text-blue-900">Wizzy</span></h1>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white cursor-pointer">A Front-end Developer</h2>
        </div>

        <div className="mb-8">
          <p className="text-gray-400 text-lg cursor-pointer">
            I build clean, responsive, and practical web applications focused on
            real-world problems and solid user experience.
          </p>
        </div>

      <div className="flex justify-center gap-4 mt-8 mb-6">
         <Link
            to="/contact"
            className="px-6 py-3 border border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition"
             >
           Hire Me
        </Link>

        < Link
            to="/projects"
          className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            >
           View Projects
           </Link>
          </div>
        <div className="w-max flex justify-center gap-6 text-gray-400 p-4 rounded-full mt-6">
          <SocialIcons icons={[faGithub, faXTwitter, faEnvelope]} className="text-2xl md:text-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Home
