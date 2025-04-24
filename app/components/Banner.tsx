import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

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
    <div className="w-full py-10 px-4 md:px-8 lg:px-80 bg-white">
      <div className="flex flex-col max-w-4xl w-full mx-auto items-center justify-center gap-6 text-center">
        <div>
          <h2 className="font-titillium text-2xl md:text-4xl font-bold leading-tight md:leading-[61px]">
            Didn&apos;t find the product you need?
          </h2>
          <p className="mt-3 text-[#777777] md:text-[20px] font-semibold text-base">
            We source a wide range of items beyond what&apos;s listed. Share
            your requirements with us, and we&apos;ll do our best to fulfill
            your request.
          </p>
        </div>
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-[225px] h-[52px] flex items-center pr-[10px] pl-4 py-[10px] bg-[#333333] text-white rounded-full text-[16px] hover:bg-gray-700 transition"
        >
          <span>Request a Product</span>

          <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#444] rounded-full">
            <ArrowRight size={24} className=" text-white" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
