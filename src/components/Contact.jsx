import { Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black border-t-2 border-gray-700 text-white px-6 sm:px-10 py-16 flex flex-col md:flex-row md:justify-center md:items-center overflow-hidden"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ===== Left Side (Info) ===== */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider leading-snug">
            Do You Have A Project To Discuss?
          </h2>
          <h4 className="text-lg sm:text-xl font-semibold text-[#559cfa]">
            Get in Touch
          </h4>

          {/* Contact Info + Social */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10 mt-10">
            {/* Contact Info */}
            <div className="w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-medium mb-2 text-[#559cfa]">
                Contact
              </h3>
              <a
                href="mailto:JatinPathak@463@gmail.com"
                className="text-[#559cfa] hover:text-[#0ef] transition-all duration-300"
              >
                JatinPathak@463@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-medium mb-2 text-[#559cfa]">
                Social Media
              </h3>
              <div className="flex justify-center sm:justify-start items-center gap-5">
                {[
                  {
                    icon: <Linkedin size={16} />,
                    link: "https://www.linkedin.com/in/jatin-pathak-30785b2b2",
                  },
                  {
                    icon: <Github size={16} />,
                    link: "https://github.com/jatinpathak072",
                  },
                  {
                    icon: <Instagram size={16} />,
                    link: "https://www.instagram.com/jatin_pathak_1?igsh=bTg0OHUxMWpuYWt2",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? 5 : -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-[#559cfa] hover:bg-[#0ef] hover:text-black shadow-[0_0_10px_#0ef] transition-all"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Right Side (Form) ===== */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-md mx-auto md:mx-0"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-6 text-center md:text-left">
            Contact Form
          </h2>
          <form className="space-y-5">
            <motion.div whileHover={{ scale: 1.03 }}>
              <h3 className="text-sm mb-2 text-gray-300">Name</h3>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded-2xl focus:outline-none focus:border-[#0ef] transition-all text-sm sm:text-base"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <h3 className="text-sm mb-2 text-gray-300">Email</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded-2xl focus:outline-none focus:border-[#0ef] transition-all text-sm sm:text-base"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <h3 className="text-sm mb-2 text-gray-300">Message</h3>
              <textarea
                placeholder="Enter your message"
                rows="4"
                className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded-2xl focus:outline-none focus:border-[#0ef] transition-all resize-none text-sm sm:text-base"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px #0ef" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-auto bg-[#0ef] text-black font-semibold py-3 px-10 rounded-full shadow-[0_0_15px_#0ef] hover:shadow-[0_0_25px_#0ef] transition-all text-sm sm:text-base"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
