// Intro.jsx
import { motion } from "framer-motion";
import Logo from '../../public/favicon.png';

const Intro = ({ onFinish }) => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={onFinish}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-4" />
        <div className="text-3xl font-semibold">Wisdom Ndukwu</div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;