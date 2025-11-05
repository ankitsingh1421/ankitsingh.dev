import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const  SingleProject = ({ name, year, align, image, link, githubUrl }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      {/* Text Section */}
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
      <div
  className={`flex items-center gap-4 mt-3 sm:justify-center ${
    align === "left" ? "md:justify-end" : "md:justify-start"
  }`}
>
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md text-cyan hover:bg-cyan hover:text-black"
  >
    View <BsFillArrowUpRightCircleFill />
  </a>

  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 rounded-md hover:bg-gray-700 hover:bg-brown hover:text-white"
  >
      <BsGithub className="w-4 h-4" /> Code
    </a>
  )}
</div>

      </div>

      {/* Image Section */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white block"
      >
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 opacity-50 bg-cyan hover:opacity-0 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </a>
    </motion.div>
  );
};

export default SingleProject;
