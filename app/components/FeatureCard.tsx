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
      className={`px-6 py-9 border-2 border-white rounded-xl shadow-md text-left flex flex-col gap-6 items-start ${bgColor}`}
    >
      <Icon size={36} className={`${textColor}`} />
      <p
        className={`text-[24px] leading-[32.74px] font-semibold mt-4 ${textColor}`}
      >
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;
