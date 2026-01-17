
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../components/SocialIcons";

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

        <div className="w-max flex justify-center gap-6 text-gray-400 p-4 rounded-full">
          <SocialIcons icons={[faGithub, faXTwitter, faEnvelope]} className="text-xl md:text-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Home
