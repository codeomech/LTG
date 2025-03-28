"use client";

import { Globe, Package, Shield, CheckCircle } from "lucide-react";
import FeatureCard from "./FeatureCard"; // Import the reusable component

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex py-10 px-24 flex-col md:flex-row items-center justify-between gap-24">
        {/* Left: Feature Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-[500px] max-h-[482px]">
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
        </div>

        {/* Right: About Us Text */}
        <div className="max-w-[500px]">
          <h2 className=" font-titillium md:text-[40px] leading-[61px] text-3xl font-bold ">
            About Us
          </h2>
          <p className="mt-3 text-gray-600 font-semibold text-xl">
            With years of expertise in import-export logistics, we bridge
            markets, ensuring smooth trade operations for our global partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
