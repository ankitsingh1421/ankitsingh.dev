import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Decoding Bollywood Hits",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://decodingbollywoodhits.in",
  },
  {
    name: "Store management APP",

    align: "left",
    image: "../../public/images/website-img-2.jpg",
    link: "https://store-master-ochre.vercel.app",
  },
  {
    name: "Expense Tracker App",

    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://expanse-tracker-seven-phi.vercel.app/",
  },
  {
    name: "Hire Hub",

    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://hire-hub-kappa.vercel.app/",
  },
  {
    name: "Vision Track",

    align: "right",
    image: "../../public/images/website-img-5.jpg",
    link: "https://vision-track.vercel.app/",
  },
  {
    name: "Xora",

    align: "left",
    image: "../../public/images/website-img-6.jpg",
    link: "https://modern-landing-page-oh5s.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
