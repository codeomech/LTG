"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./MobileNav";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const pathname = usePathname();
  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Product" },
    { id: "about", label: "About us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
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
    h-[60px] px-[20px] pb-[20px] pt-3 
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
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-[60px] items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-semibold text-xl px-3 py-1 rounded-full transition 
        ${
          activeTab === item.id
            ? "bg-blue-100 text-blue-400"
            : "hover:text-blue-900"
        }`}
            >
              {item.label}
            </button>
          ))}
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
