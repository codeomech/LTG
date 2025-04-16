import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  text: string;
  bgColor: string;
  textColor: string;
}

const FeatureCard = ({ icon: Icon, text, bgColor, textColor }: CardProps) => {
  return (
    <div
      className={`px-4 py-6 md:px-6 md:py-9 border-2 border-white rounded-xl shadow-md text-left flex flex-col gap-4 md:gap-6 items-start ${bgColor}`}
    >
      <Icon size={24} className={`md:size-[36px] ${textColor}`} />
      <p
        className={`text-base md:text-[24px] leading-6 md:leading-[32.74px] font-semibold mt-2 md:mt-4 ${textColor}`}
      >
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
