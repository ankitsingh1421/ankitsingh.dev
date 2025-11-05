import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BiDownload } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const HeroText = () => {
  const handleViewCV = () => {
    window.open(
      "https://drive.google.com/file/d/13dvBXC6IJyueZ_xc1pAZw94e9RtuDLvq/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center h-full gap-4 md:text-left sm:text-center">
      {/* ===== Subheading ===== */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="tracking-wide uppercase lg:text-2xl sm:text-xl text-lightGrey"
      >
        Full Stack Developer
      </motion.h2>

      {/* ===== Name ===== */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Ankit <br className="sm:hidden md:block" />
        Singh
      </motion.h1>

      {/* ===== Description ===== */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg leading-relaxed text-gray-300"
      >
        Crafting elegant solutions to complex problems. <br /> Passionate about
        building scalable applications and contributing to open-source projects.
      </motion.p>

      {/* ===== Buttons ===== */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap justify-center gap-4 mt-8 md:justify-start"
      >
        {/* === Get In Touch Button === */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:-mt-2 md:mt-0">

        <button
          onClick={handleScrollToContact}
          className="flex items-center px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-orange to-pink-600 shadow-md shadow-orange/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,122,0,0.6)] hover:scale-105"
        >
          <FiMail className="w-5 h-5 mr-2" />
          Get In Touch
        </button>

        {/* === Download CV Button === */}
        <button
          onClick={handleViewCV}
          className="flex items-center px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-orange to-pink-600 shadow-md shadow-orange/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,122,0,0.6)] hover:scale-105"
        >
          <BiDownload className="w-5 h-5 mr-2" />
          View CV
        </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
