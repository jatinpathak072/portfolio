import logo from "../assets/jp.png";
import { useState } from "react";
import { MoveUpRight, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Experience", "Work", "Skills"];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black flex items-center justify-between px-6 sm:px-12 md:px-20 z-50 shadow-md shadow-gray-800/50">
      {/* 🔷 Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="w-28 rounded-md object-contain hover:scale-105 transition"
        />
      </div>

      {/* 🔹 Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-10 text-[#CCD6F6]">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.toLowerCase()}
            smooth={true}
            duration={600}
            offset={-80}
            spy={true}
            activeClass="active-link"
            className="hover:text-[#2563EB] transition ease-in cursor-pointer"
          >
            {item}
          </Link>
        ))}

        {/* 🔸 Résumé Button */}
        <div className="flex items-center gap-2 hover:text-[#2563EB] cursor-pointer">
          <a href="/resume.pdf" download>
            Résumé
          </a>
          <MoveUpRight size={13} />
        </div>
      </div>

      {/* 🔹 Mobile Menu Button */}
      <div className="md:hidden text-[#CCD6F6] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* 🔸 Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0a192f] text-center text-[#CCD6F6] py-6 flex flex-col space-y-6 md:hidden shadow-md shadow-gray-800/50">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="active-link"
              onClick={() => setIsOpen(false)} // close menu when clicked
              className="hover:text-[#2563EB] transition ease-in cursor-pointer"
            >
              {item}
            </Link>
          ))}

          <div className="flex justify-center items-center gap-2 hover:text-[#2563EB] cursor-pointer">
            <a href="/resume.pdf" download>
              Résumé
            </a>
            <MoveUpRight size={13} />
          </div>
        </div>
      )}
    </nav>
  );
}
