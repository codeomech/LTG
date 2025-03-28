import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="w-full min-h-screen mt-20 flex">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Left Content */}
        <div className="flex flex-col text-left gap-10">
          <h1 className="font-titillium text-[64px] font-bold leading-[70px]">
            Global Trade, <br /> Seamless & Reliable
          </h1>
          <p className="text-gray-600 font-semibold text-[20px] max-w-lg">
            Connecting businesses worldwide with high-quality{" "}
            <span className="font-bold text-gray-900">Perishable</span> and{" "}
            <span className="font-bold text-gray-900">Non-perishable</span>{" "}
            products. Trusted sourcing, seamless logistics, and global reach.
          </p>
          <Button className="w-[225px] h-[52px] flex items-center justify-center gap-[10px] px-[16px] py-[10px] bg-gray-800 text-white rounded-[50px] text-lg hover:bg-gray-700 transition">
            Explore Our Products →
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center mt-10 md:mt-0   ">
          <Image
            src="/Hero/hero-image.svg"
            alt="Hero Image"
            width={823}
            height={548}
            className="w-full h-full relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
