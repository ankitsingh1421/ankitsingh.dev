import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       Hi, I’m Ankit Singh — a dedicated full-stack web developer with a passion for building seamless and impactful digital experiences. I specialize in working with MERN stack, Next.js, and modern front-end technologies to create responsive and scalable web applications.

With a strong foundation in both frontend and backend development, I enjoy turning complex problems into simple, intuitive solutions. Whether it’s building real-time apps, integrating APIs, or optimizing performance, I bring a problem-solving mindset to every project.

I`m continuously learning and exploring the latest in tech to stay ahead, and I love sharing knowledge with the community to help others grow in their development journey.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
