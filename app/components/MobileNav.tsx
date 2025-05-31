import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Menu, Home, Package, Users, Phone } from "lucide-react";

interface MobileNavigationProps {
  scrollToSection: (id: string) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  scrollToSection,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "products", label: "Product", icon: Package },
    { id: "about", label: "About us", icon: Users },
  ];

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="h-6 w-6 text-gray-700" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[280px] bg-gradient-to-br from-white to-gray-50 border-l-0 shadow-2xl"
        >
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigate through different sections of the website
          </SheetDescription>
          {/* Centered Navigation Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            <Image
              src="/logo/Logo_color.svg"
              alt="LakshmiGanpati Logo"
              width={178}
              height={50}
              className="md:w-[178px] md:h-[50px] w-[113px] h-[32px]"
              priority
            />
            {/* Navigation Items */}
            <nav className="flex flex-col items-center space-y-6 w-full">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className="group flex flex-col items-center justify-center w-full py-4 px-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors mb-2" />
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.label}
                    </span>
                  </button>
                );
              })}

              {/* Contact Button - Special Styling */}
              <button
                onClick={() => handleClick("contact")}
                className="group flex flex-col items-center justify-center w-full py-5 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg mt-4"
              >
                <Phone className="h-6 w-6 mb-2 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">Contact us</span>
              </button>
            </nav>

            {/* Footer Text */}
            <div className="text-center mt-8">
              <p className="text-xl text-gray-500">Ready to get started?</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
