import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[60px] gap-10 md:gap-20">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-10">
          <h1 className="font-titillium text-[32px] md:text-[64px] font-bold leading-tight md:leading-[70px]">
            Global Trade, <br /> Seamless & Reliable
          </h1>
          <p className="text-[#777777] font-bold text-[14px] md:text-[20px] max-w-lg">
            Connecting businesses worldwide with high-quality{" "}
            <span className="font-semibold text-[#333333]">Agro Poducts</span>{" "}
            and{" "}
            <span className="font-semibold text-[#333333]">
              Sustainable Packaging
            </span>{" "}
            products. Trusted sourcing, seamless logistics, and global reach.
          </p>
          <Button
            onClick={() => scrollToSection("products")}
            className="w-[225px] h-[52px] flex items-center justify-between pr-[10px] pl-4 py-[10px] bg-[#333333] text-white rounded-full text-[16px] hover:bg-gray-700 transition"
          >
            <span>Explore Our Products</span>

            <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#444] rounded-full">
              <ArrowRight size={24} className=" text-white" />
            </div>
          </Button>
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
