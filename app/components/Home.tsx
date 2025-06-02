"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Home = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full md:min-h-screen mt-6 lg:mt-20 flex md:items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-10 md:pt-0 px-6 lg:px-[60px] gap-10 md:gap-20">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-10">
          <motion.h1
            className="font-titillium text-[32px] md:text-[64px] font-bold leading-tight md:leading-[70px]"
            initial={{
              filter: "blur(20px)",
              opacity: 0,
              y: 30,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Global Trade, <br /> Seamless & Reliable
          </motion.h1>
          <p className="text-[#777777] font-bold text-[14px] md:text-[20px] max-w-lg">
            Connecting businesses worldwide with high-quality{" "}
            <span className="font-bold text-[#333333]">Agro Poducts</span> and{" "}
            <span className="font-bold text-[#333333]">
              Sustainable Packaging
            </span>{" "}
            products. Trusted sourcing, seamless logistics, and global reach.
          </p>
          <motion.button
            onClick={() => scrollToSection("products")}
            className="w-[225px] h-[52px] flex items-center justify-between pr-[10px] pl-4 py-[10px] bg-[#333333] text-white rounded-full text-[16px] relative overflow-hidden"
            initial={{ boxShadow: "0 0 0 rgba(59, 130, 246, 0)" }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 0 rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#444444",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
            <span>Explore Our Products</span>
            <motion.div
              className="w-[32px] h-[32px] flex items-center justify-center bg-[#444] rounded-full"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={24} className="text-white" />
            </motion.div>
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-auto">
          <Image
            src="/Hero/hero-image.svg"
            alt="Hero Image"
            width={823}
            height={548}
            className="w-full h-auto max-w-[500px] md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
