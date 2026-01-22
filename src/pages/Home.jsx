import { motion } from "framer-motion";
import {
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../components/SocialIcons";
import { Link } from "react-router-dom";


const container = {
  hidden: {},
  show: {
    transition:{
      staggerChildren: 0.25
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

  function Home() {
  return (
    <motion.section className="flex justify-center px-6 py-12"
    variants={container}
    initial="hidden"
    animate="show"
    >
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        <div className="mb-4">
          <motion.h1 className="text-2xl font-bold text-white cursor-pointer"
          variants={item}
          >Hi, I'm <span className="text-blue-900">Wizzy</span></motion.h1>
        </div>

        <div className="mb-6">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white cursor-pointer leading-tight"
          variants={item}
          >A Front-end Developer</motion.h2>
        </div>

        <div className="mb-8">
          <motion.p className="text-gray-400 text-lg cursor-pointer"
          variants={item}>
            Building reliable digital products with focus, discipline, and real-world impact.
          Web developer crafting clean interfaces, scalable logic, and practical solutions—one shipped project at a time.
          </motion.p>
        </div>

      <motion.div className="flex justify-center gap-4 mt-8 mb-6" variants={item}>
         <Link
            to="/contact"
            className="px-6 py-3 border border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition"
             >
           Hire Me
        </Link>

        <Link
            to="/projects"
          className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            >
           View Projects
           </Link>
          </motion.div>   
        <motion.div className="w-max flex justify-center gap-6 text-gray-400 p-4 rounded-full mt-6" variants={item}>
          <SocialIcons icons={[faGithub, faXTwitter, faEnvelope]} className="text-2xl md:text-2xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home
