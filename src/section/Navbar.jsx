import React, { useEffect, useState } from "react";
import Menu from "../components/icon/menu.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      setIsAtTop(currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      id="Navbar"
      className={`fixed top-0 left-0 w-full flex items-center p-4 h-20 transition-all duration-500
        ${isAtTop
          ? "bg-transparent text-white"
          : "bg-white backdrop-blur-md text-black shadow-md"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo with hover animation */}
      <div className="px-3 xl:px-10 md:px-4 lg:px-10 relative overflow-hidden group cursor-pointer w-fit">
        <a href="#"
          onClick={() => navigate("/")}
          className="text-xl sm:text-xl md:text-2xl xl:text-[20px] block relative"
          style={{
            fontFamily: '"Stretch Pro", sans-serif',
          }}
        >
          <span className="block transition-transform duration-500 group-hover:-translate-y-full">
            WEB.MOJOO
          </span>
          <span className="block absolute text-blue-700  left-0 top-full transition-transform duration-500 group-hover:-translate-y-full">
            WEB.MOJOO
          </span>
        </a>
      </div>

      {/* Spacer */}
      <div className="grow" />

      {/* Navigation links */}
      <div className="hidden sm:hidden lg:block">
        <div className="flex gap-10 xl:gap-20 hover:cursor-pointer mr-15">
          <a 
          onClick={() => navigate("/fullservice")}
          className="text-xl link-underline hover:text-blue-700">
            Service
          </a>
          <a href="#" className="text-xl link-underline hover:text-blue-700">
            Portfolio
          </a>
          <a href="#" className="text-xl link-underline hover:text-blue-700">
            About us
          </a>
        </div>
      </div>

      {/* Button */}
      <div className="mr-3 hidden md:block xl:mr-10 lg:mr-10">
        <button
          className="liquid-button px-10 rounded-lg text-xl h-13 lg:h-10 md:h-10 lg:w-56 hover:cursor-pointer"
        >
          Build my project
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden px-3 xl:px-10 lg:px-10 md:px-3">
        <Menu color={isAtTop ? "white" : "black"} />
      </div>
    </nav>
  );
};

export default Navbar;
