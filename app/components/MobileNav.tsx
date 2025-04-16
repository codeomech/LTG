import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavigationProps {
  scrollToSection: (id: string) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  scrollToSection,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setOpen(false); // Close the Sheet
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="p-2">
          <Menu className="h-6 w-6 text-black" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[250px] bg-white shadow-md">
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

          <div className="mt-10 flex flex-col space-y-5 px-4">
            <button
              onClick={() => handleClick("home")}
              className="font-medium hover:text-gray-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleClick("products")}
              className="font-medium hover:text-gray-600 transition"
            >
              Product
            </button>
            <button
              onClick={() => handleClick("about")}
              className="font-medium hover:text-gray-600 transition"
            >
              About us
            </button>
            <button
              onClick={() => handleClick("contact")}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-center hover:bg-gray-700 transition"
            >
              Contact us
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
