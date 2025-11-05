// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const projects = [
//   {
//     name: "Decoding Bollywood Hits",
//     align: "right",
//     image: "/images/website-img-1.jpg",
//     link: "https://decodingbollywoodhits.in",
//   },
//   {
//     name: "Store management APP",

//     align: "left",
//     image: "/images/website-img-2.jpg",
//     link: "https://store-master-ochre.vercel.app",
//   },
//   {
//     name: "Expense Tracker App",

//     align: "right",
//     image: "/images/website-img-3.jpg",
//     link: "https://www.websitegrowth.agency/",
//   },
//   {
//     name: "Hire Hub",

//     align: "left",
//     image: "/images/website-img-4.jpg",
//     link: "https://hire-hub-kappa.vercel.app/",
//   },
//   {
//     name: "Vision Track",

//     align: "right",
//     image: "/images/website-img-5.jpg",
//     link: "https://vision-track.vercel.app/",
//   },
//   {
//     name: "Xora",

//     align: "left",
//     image: "/images/website-img-6.jpg",
//     link: "https://modern-landing-page-oh5s.vercel.app/",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//               link={project.link}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;


import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Decoding Bollywood Hits",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://decodingbollywoodhits.in",
    githubUrl: "https://github.com/ankitsingh1421",
    description:
      "A content-driven platform analyzing and ranking Bollywood music using React and API integration.",
    tech: ["React", "Tailwind", "API Integration"],
  },
  {
    name: "Store Management App",
    align: "left",
    image: "/images/website-img-2.jpg",
    link: "https://store-master-ochre.vercel.app",
    githubUrl: "https://github.com/ankitsingh1421/store-app",
    description:
      "A MERN-based store management system for tracking products, sales, and analytics.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "Expense Tracker App",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://www.websitegrowth.agency/",
    githubUrl: "https://github.com/ankitsingh1421/expense-tracker",
    description:
      "Track and visualize your daily expenses with an intuitive dashboard built using modern UI tools.",
    tech: ["React", "Chart.js", "Firebase"],
  },
  {
    name: "Hire Hub",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://hire-hub-kappa.vercel.app/",
    githubUrl: "https://github.com/ankitsingh1421/hire-hub",
    description:
      "A job portal that connects employers and developers with seamless UI and authentication flow.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase"],
  },
  {
    name: "Vision Track",
    align: "right",
    image: "/images/website-img-5.jpg",
    link: "https://vision-track.vercel.app/",
    githubUrl: "https://github.com/ankitsingh1421/vision-track",
    description:
      "Real-time task monitoring dashboard built for productivity and project management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Xora Landing Page",
    align: "left",
    image: "/images/website-img-6.jpg",
    link: "https://modern-landing-page-oh5s.vercel.app/",
    githubUrl: "https://github.com/ankitsingh1421/xora",
    description:
      "A futuristic, animated landing page built with Next.js and Framer Motion.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
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
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
            githubUrl={project.githubUrl}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;

