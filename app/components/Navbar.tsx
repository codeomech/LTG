"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // Navigate to Home with a hash (#id) instead of query parameters
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 
    border-b border-white/20 
    bg-white/40 backdrop-blur-lg 
    shadow-md transition-all duration-300 ease-in-out 
    h-[58px] px-[20px] pb-[20px] pt-3 
    lg:h-[110px] lg:px-[60px] lg:py-[30px]
    ${isScrolled ? "backdrop-blur-lg" : "backdrop-blur-none"}
  `}
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
        {/* Mobile Navigation */}
        <MobileNavigation scrollToSection={scrollToSection} />
      </div>
    </nav>
  );
};

export default Navbar;
