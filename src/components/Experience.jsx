import project from "../assets/project4.avif";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Experience() {
  const jobs = [
    {
      role: "Web Developer Intern",
      company: "Encryptix Solution",
      duration: "Aug 2024 - Nov 2024",
      desc: [
        "Applied modern front-end techniques to improve design consistency, user experience, and performance.",
        "Developed and deployed 3 responsive Web projects using HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap, enhancing consistency on both mobile and desktop devices.",
        "Received Certificate of Completion for successful internship contribution",
      ],
    },
  ];

  // Animation logic
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <section
      id="experience"
      className="border-t-2 border-gray-700 min-h-screen bg-black text-[#ccd6f6] px-6 sm:px-8 md:px-16 py-16 flex flex-col"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#1947aad6] mb-10 sm:mb-14 text-left sm:pl-8">
        Experience
      </h2>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={project}
            alt="Experience Illustration"
            className="w-64 sm:w-80 md:w-96 h-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Card */}
        <div
          className="flex-1 space-y-6 bg-gradient-to-brfrom-[#082654] to-[#0b3a75] p-6 sm:p-8 rounded-2xl 
                     shadow-[0_8px_30px_rgba(9,82,159,0.3)] 
                     hover:shadow-[0_12px_40px_rgba(9,82,159,0.5)] 
                     transition-all duration-300 w-full"
        >
          {jobs.map((job, i) => (
            <div key={i}>
              <h3 className="text-lg sm:text-xl font-semibold">
                {job.role}{" "}
                <span className="text-[#1947aad6]">@ {job.company}</span>
              </h3>
              <p className="text-sm text-[#8892b0]">{job.duration}</p>
              <ul className="mt-3 text-sm space-y-2 text-[#8892b0] leading-relaxed">
                {job.desc.map((d, idx) => (
                  <li key={idx}>▹ {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
