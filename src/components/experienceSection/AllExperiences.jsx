import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web developer Intern ",
    company: "ENGINEERS CRADLE",
    date: "jan 2025 - may 2025",
    responsibilities: [
      "Validated and optimized  for seamless backend-to-frontend  using express and RESTful APIs.",
      " Ensured smooth data flow and schema validation with Zod while collaborating on telemetry data systems .",

    ],
  },
  {
    job: "Web Developer ",
    company: "PINNACLE LABS",
    date: "Apr 2024 - may 2024",
    responsibilities: [
       "Developed a cloud-based solution to automate and enhance the engineering process  using react and express.",
      " Consulted with other teams to jump start cloud-technology adoptionand solutions throughout the company .",
    ],
  },
  {
    job: "Freelance",
    company: "DECODING BOLLYWOOD HITS PVT LTD",
    date: "Dec 2024 - Present",
    responsibilities: [
      "Developed a music platform using React, TypeScript, andExpress  offering interactive features and a responsive.",
      "design for exploring DBH and learning musical instruments.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
