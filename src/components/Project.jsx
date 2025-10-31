import { motion } from "framer-motion";
import port from '../assets/port.png'
import clone from "../assets/clone.png";

export default function Projects() {
  const projects = [
    {
      title: "Cynthia Ugwu Clone",
      desc: "A modern and interactive portfolio website inspired by Cynthia Ugwu’s design. It features smooth scrolling, GSAP animations, and hover-based image interactions for an engaging user experience.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll"],
      img: clone,
      link: "https://jatinpathak072.github.io/Cynthia-clone/",
      github: "https://github.com/jatinpathak072/Cynthia-clone",
    },    
    {
      title: "Portfolio Website",
      desc: "A fully responsive personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "JavaScript"],
      img: port,
      link: "https://portfolio-903dr8pad-jatins-projects-a7a5a2cd.vercel.app",
      github: "https://github.com/jatinpathak072/portfolio",
    },
    {
      title: "Weather App",
      desc: "A weather forecasting app using OpenWeatherMap API with dynamic background updates.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      img: "https://cdn3.f-cdn.com//files/download/189960415/Screenshot_20230115_070813.png?width=780&height=438&fit=crop",
      link: "https://jatinpathak072.github.io/Weather-Forecast/",
      github: "https://github.com/jatinpathak072/Weather-Forecast",
    },
  ];

  return (
    <section
      id="work"
      className="border-t-2 border-gray-700 bg-black text-[#ccd6f6] px-6 sm:px-8 md:px-16 py-16"
    >
      {/* 🔹 Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#1947aad6] mb-12 text-left sm:pl-8">
        Some Things I’ve Built
      </h2>

      {/* 🔸 Projects List */}
      <div className="max-w-6xl mx-auto w-full space-y-20">
        {projects.map((p, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !fromLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* === Project Image === */}
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="relative group w-full max-w-md">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-xl w-full h-auto object-cover shadow-[0_8px_30px_rgba(9,82,159,0.3)] transition duration-500 group-hover:opacity-80 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#0a192f]/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>

              {/* === Project Info === */}
              <div
                className="md:w-1/2 bg-gradient-to-brfrom-[#0b1b3a] to-[#0a254f] p-6 sm:p-8 rounded-xl 
              shadow-[0_8px_30px_rgba(9,82,159,0.3)] 
              hover:shadow-[0_12px_40px_rgba(9,82,159,0.5)] 
              transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2563EB]">
                  {p.title}
                </h3>
                <p className="text-[#8892b0] my-4 leading-relaxed">{p.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 text-sm text-[#2563EB] mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[#112240] px-3 py-1 rounded-md border border-[#2563EB]/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm font-medium">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] underline hover:text-[#1d4ed8] transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] underline hover:text-[#1d4ed8] transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
