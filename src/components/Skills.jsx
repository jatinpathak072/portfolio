import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "GitHub", src: "https://img.icons8.com/ios11/512/FFFFFF/github.png" },
  ];

  // Animation variants (group behavior)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="border-t-2 border-gray-700 min-h-[80vh] bg-black text-[#ccd6f6] px-6 sm:px-8 py-12 sm:py-16"
    >
      {/* 🔹 Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1947aad6] mb-8 text-center md:text-left pl-16 font-semibold">
        Skills
      </h2>

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center mb-12 text-base sm:text-lg">
          The skills, tools and technologies I use:
        </p>

        {/* 🔸 Skill Icons Grid */}
        <motion.div
          className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2}}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center justify-center cursor-pointer hover:drop-shadow-[0_0_10px_#09529f]"
            >
              <motion.img
                src={skill.src}
                alt={skill.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
              <p className="mt-4 text-sm sm:text-base text-[#8892b0]">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
