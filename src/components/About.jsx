import profileImg from "../assets/pic.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
                 bg-black text-[#ccd6f6] px-6 sm:px-10 md:px-20 lg:px-32 py-20 gap-10"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h4 className="text-[#2563EB] mb-2 text-base sm:text-lg font-semibold">
          Hi, my name is
        </h4>
        <h2 className="tracking-wider text-2xl sm:text-4xl leading-relaxed font-bold">
          JATIN PATHAK.
        </h2>
        <h2 className="tracking-wider text-xl sm:text-3xl font-bold text-[#858a97] mt-1">
          I build things for the web.
        </h2>

        <p className="text-[#bec2d0] text-sm sm:text-base py-6 leading-relaxed">
          I’m a MERN developer based in India, passionate about crafting visually
          appealing and responsive websites with a focus on clean design, smooth
          user experience, and modern web technologies.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="border border-[#2563EB] px-5 py-2 rounded-md hover:bg-[#112240] 
                     text-[#2563EB] font-bold shadow-lg transition-all duration-300 cursor-pointer"
        >
          Get In Touch
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="p-2 border-2 border-[#2563EB]/40 rounded-full">
          <motion.img
            src={profileImg}
            alt="Jatin Pathak"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="w-40 sm:w-60 md:w-72 rounded-full shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
