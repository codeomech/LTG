import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-4">
      <div className="w-full h-full mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Image
            src="/logo/Logo_white.svg" // Replace with your actual logo path
            alt="Lakshmi Ganpati Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-center md:text-right md:text-[20px]">
          © 2025 LGT Global Traders | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
