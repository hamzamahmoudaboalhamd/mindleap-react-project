import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

import { motion } from "motion/react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  function handleClose() {
    setIsOpen(false);
  }

  function handelScroll() {
    const sections = [
      "home",
      "services",
      "About us",
      "pricing",
      "testimonials",
    ];
    const scrollPosition = window.scrollY + 200; // Adjust offset as needed for better accuracy

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const handelScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8  sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("home");
            handleClose();
            handelScrollTo("home");
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("services");
            handleClose();
            handelScrollTo("services");
          }}
          href="#services"
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("About us");
            handleClose();
            handelScrollTo("About us");
          }}
          href="#About us"
          className={`text-white ${
            activeSection === "About us" ? "isActive" : ""
          }`}
        >
          About us
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("pricing");
            handleClose();
            handelScrollTo("pricing");
          }}
          href="#pricing"
          className={`text-white ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("testimonials");
            handleClose();
            handelScrollTo("testimonials");
          }}
          href="#testimonials"
          className={`text-white ${
            activeSection === "testimonials" ? "isActive" : ""
          }`}
        >
          Testimonials
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg tex-white py-6 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* navLinks */}
        <div className="hidden lg:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>
        {/* button */}
        <div className="hidden lg:block">
          <a
            onClick={(e) => {
              e.preventDefault();
              handelScrollTo("contact");
            }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 py-2 px-6 rounded"
          >
            Contact
          </a>
        </div>

        {/* hamburger menu */}
        <div className="block lg:hidden">
          <butto
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white " : ""
            }`}
          >
            <HiMenuAlt3 className="size-6" />
          </butto>
        </div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 lg:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
          </ul>
          <li className="py-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
              className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
            >
              Contact Us
            </a>
          </li>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
