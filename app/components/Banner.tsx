import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import bananaImg from "../../public/Images/single-banana.jpg";
import carrotImg from "../../public/Images/apple.png";
import onionImg from "../../public/Images/onion-slice.png";
import pineappleImg from "../../public/Images/pineapple.png";

const Banner = () => {
  const bananaRef = useRef(null);
  const carrotRef = useRef(null);
  const onionRef = useRef(null);
  const pineappleRef = useRef(null);
  useEffect(() => {
    // Floating animation
    gsap.to(bananaRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(onionRef.current, {
      x: 30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(pineappleRef.current, {
      y: 30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(carrotRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
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
      <Image
        src={bananaImg}
        ref={bananaRef}
        className="absolute top-4 left-10 w-20 z-0 pointer-events-none hidden lg:block"
        alt="banana"
      />
      <Image
        src={onionImg}
        ref={onionRef}
        className="absolute bottom-12 right-70 w-20 z-0 pointer-events-none hidden lg:block"
        alt="onion"
      />
      <Image
        src={carrotImg}
        ref={carrotRef}
        className="absolute bottom-10 right-10 w-16 z-0 pointer-events-none hidden lg:block"
        alt="carrot"
      />
      <Image
        src={pineappleImg}
        ref={pineappleRef}
        className="absolute top-0 right-28 w-16 z-0 pointer-events-none hidden lg:block"
        alt="pineapple"
      />
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
          className="w-[225px] h-[52px] flex items-center pr-[10px] bg-[#333333] text-white rounded-full text-[16px] hover:bg-gray-700 transition"
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
