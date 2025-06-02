"use client";

import { Globe, Package, Shield, CheckCircle } from "lucide-react";
import FeatureCard from "./FeatureCard"; // Import the reusable component
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full md:min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex py-10 px-6 md:px-24 flex-col-reverse lg:flex-row justify-center items-center gap-12 md:gap-[100px]">
        {/* Left: Feature Cards */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4 md:gap-6 max-w-[500px] w-full justify-items-center"
        >
          <FeatureCard
            icon={Globe}
            text="Global network with seamless logistics"
            bgColor="bg-[#E0EEFF]"
            textColor="text-blue-700"
          />
          <FeatureCard
            icon={Package}
            text="End-to-end supply chain expertise"
            bgColor="bg-[#FEFCE5]"
            textColor="text-brown-700"
          />
          <FeatureCard
            icon={Shield}
            text="Stringent quality assurance at every stage"
            bgColor="bg-[#FFF6E7]"
            textColor="text-orange-700"
          />
          <FeatureCard
            icon={CheckCircle}
            text="Sustainable & ethical sourcing"
            bgColor="bg-[#E7FCE9]"
            textColor="text-green-700"
          />
        </motion.div>

        {/* Right: About Us Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="max-w-[500px] text-center md:text-left"
        >
          <h2 className="font-titillium text-2xl md:text-[40px] font-bold leading-tight md:leading-[61px]">
            About Us
          </h2>
          <p className="mt-3 text-[#777777] text-[20px] font-semibold md:text-xl">
            With years of expertise in import-export logistics, we bridge
            markets, ensuring smooth trade operations for our global partners.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
