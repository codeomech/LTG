"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 w-full items-center 
              border-b border-[#ECFAFF] bg-white/70  z-50 
              h-[52px] px-[20px] py-[20px]
              md:h-[110px] md:px-[60px] md:py-[30px]`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/logo/Logo_color.svg"
            alt="LakshmiGanpati Logo"
            width={178}
            height={50}
            className="md:w-[178px] md:h-[50px] w-[113px] h-[32px]"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-[60px] items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="font-semibold text-xl hover:text-gray-600"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="font-semibold text-xl hover:text-gray-600"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-semibold text-xl hover:text-gray-600"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gray-900 text-white font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition"
          >
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium hover:text-gray-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="font-medium hover:text-gray-600"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium hover:text-gray-600"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-center hover:bg-gray-700 transition"
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
