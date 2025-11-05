import { FaAws, FaCss3Alt, FaDocker, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
   {
      skill: "MongoDB",
      icon: SiMongodb,
    },
    {
      skill: "Express",
      icon: SiExpress,
    },
    {
      skill: "Node.js",
      icon: SiNodedotjs,
    },
    {
      skill: "REST API",
      icon: FaServer, // General server icon for APIs
    },{
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "AWS",
    icon: FaAws,
  }
];

const AllSkillsSM = () => {
  return (
    <div className="grid gap-12 my-12 md:grid-cols-4 sm:grid-cols-2">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="mt-4 text-center">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
