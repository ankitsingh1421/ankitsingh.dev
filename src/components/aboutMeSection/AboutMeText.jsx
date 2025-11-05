import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p>
        Hi, I’m Ankit Singh — a passionate Software Engineer, Full-Stack Web Developer, and DevOps enthusiast with a strong focus on building scalable, efficient, and cloud-ready applications. I specialize in the MERN stack, Next.js, and modern front-end technologies, combined with hands-on experience in Docker, Kubernetes, and AWS for deployment and automation. With a solid grasp of both frontend and backend development, I love transforming complex challenges into elegant, user-focused solutions. Whether it’s designing microservices, integrating APIs, or optimizing CI/CD pipelines, I approach every project with innovation and precision. I’m constantly learning, experimenting, and sharing knowledge to grow alongside the ever-evolving tech landscape.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
