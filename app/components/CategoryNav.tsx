"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import productsData from "../data/products.json";

const CategoryNav = ({
  activeTab,
  activeSubcategory,
  onCategoryChange,
}: {
  activeTab: "perishable" | "non-perishable";
  activeSubcategory?: string;
  onCategoryChange?: (subcategory: string) => void;
}) => {
  const pathname = usePathname();
  // If activeSubcategory is provided, use it; otherwise extract from pathname
  const decodedCategory =
    activeSubcategory || pathname.split("/categories/")[1];

  const categoryData = productsData.categories.find(
    (category) => category.slug === activeTab
  );

  if (!categoryData) return null;

  const handleCategoryClick = (slug: string, e: React.MouseEvent) => {
    if (onCategoryChange) {
      e.preventDefault(); // Prevent default Link behavior when using client-side navigation
      onCategoryChange(slug);
    }
    // If onCategoryChange is not provided, Link will handle navigation normally
  };

  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4">
      {categoryData.subcategories.map((subcategory, index) => {
        const isActive = subcategory.slug === decodedCategory;

        return (
          <Link
            key={index}
            href={`/categories/${subcategory.slug}`}
            onClick={(e) => handleCategoryClick(subcategory.slug, e)}
          >
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
