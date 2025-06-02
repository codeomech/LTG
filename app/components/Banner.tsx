"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-10 px-4 md:px-8 lg:px-80 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full opacity-20 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col max-w-4xl w-full mx-auto items-center justify-center gap-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="font-titillium text-2xl md:text-4xl font-bold leading-tight md:leading-[61px]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #333333, #666666, #333333)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Didn&apos;t find the product you need?
          </motion.h2>
          <motion.p
            className="mt-3 text-[#777777] md:text-[20px] font-semibold text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We source a wide range of items beyond what&apos;s listed. Share
            your requirements with us, and we&apos;ll do our best to fulfill
            your request.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("contact")}
          className="w-[225px] h-[52px] flex items-center justify-between pr-[10px] pl-4 py-[10px] bg-[#333333] text-white rounded-full text-[16px] relative overflow-hidden"
          initial={{
            opacity: 0,
            y: 20,
            boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.6 },
          }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
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
          <span>Request a Product</span>
          <motion.div
            className="w-[32px] h-[32px] flex items-center justify-center bg-[#444] rounded-full"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight size={24} className="text-white" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
