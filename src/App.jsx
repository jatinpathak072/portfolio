import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // 👈 import Lenis
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  useEffect(() => {
    // 👇 Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1, // control scroll speed (1 = normal, >1 = slower)
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen font-mono bg-[#0a192f]">
      <CustomCursor/>
      <Navbar />
      <About/>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
