import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-4 md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="uppercase lg:text-2xl sm:text-xl text-lightGrey"
      >
        Full Stack Web Developer
      </motion.h2>

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

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg"
      >
        A Passionate Web Developer <br /> dedicated to learning, building, and helping others grow in tech.
      </motion.p>

      {/* === View CV Button === */}
     <motion.div
  variants={fadeIn("up", 0.8)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0 }}
>
  <a
    href="https://drive.google.com/file/d/13dvBXC6IJyueZ_xc1pAZw94e9RtuDLvq/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 mt-6 font-semibold text-white bg-orange rounded-xl shadow-md border border-transparent transition-all duration-300 hover:bg-transparent hover:border-orange hover:shadow-[0_0_20px_rgba(255,122,0,0.6)]
"
  >
    View CV
  </a>
</motion.div>

    </div>
  );
};

export default HeroText;
