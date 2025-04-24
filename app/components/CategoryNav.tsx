"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import productsData from "../data/products.json";

const CategoryNav = ({
  activeTab,
}: {
  activeTab: "perishable" | "non-perishable";
}) => {
  const pathname = usePathname();
  const decodedCategory = pathname.split("/categories/")[1];

  const categoryData = productsData.categories.find(
    (category) => category.slug === activeTab
  );

  if (!categoryData) return null;

  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4">
      {categoryData.subcategories.map((subcategory, index) => {
        const isActive = subcategory.slug === decodedCategory;

        return (
          <Link key={index} href={`/categories/${subcategory.slug}`}>
            <div className="cursor-pointer flex flex-col items-center">
              <div
                style={{ backgroundImage: `url(${subcategory.image})` }}
                className={`w-20 h-20 bg-center bg-cover rounded-full border-4 transition-all ${
                  isActive
                    ? "border-[#13BBFF] scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />

              <span className="text-sm mt-2 font-semibold truncate max-w-[100px] text-center">
                {subcategory.name}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryNav;
