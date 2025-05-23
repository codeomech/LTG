"use client";

import { use, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryNav from "@/app/components/CategoryNav";

import productsData from "../../data/products.json";
import ProductTable from "@/app/components/ProductTable";
import { Product } from "@/app/data/ProductSchema";

export default function CategoryPage({
  params: paramsPromise,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(paramsPromise); // ✅ Unwrap params using use()
  const decodedCategory = decodeURIComponent(category);

  // 🧠 Find the parent category dynamically
  const initialCategory = productsData.categories.find((cat) =>
    cat.subcategories.some((subCat) => subCat.slug === decodedCategory)
  );

  // If no match found, fallback to "perishable"
  const [activeTab, setActiveTab] = useState<"perishable" | "non-perishable">(
    (initialCategory?.slug as "perishable" | "non-perishable") || "perishable"
  );

  // Track the active subcategory
  const [activeSubcategory, setActiveSubcategory] = useState(decodedCategory);

  // Track if the tab was changed by user interaction (not during initial load)
  const [wasTabChangedByUser, setWasTabChangedByUser] = useState(false);

  // When tab changes, set active subcategory to first subcategory of the new tab
  // BUT only if the tab was changed by user interaction
  useEffect(() => {
    if (wasTabChangedByUser) {
      const firstSubcategoryOfTab = productsData.categories.find(
        (cat) => cat.slug === activeTab
      )?.subcategories[0]?.slug;

      if (firstSubcategoryOfTab) {
        setActiveSubcategory(firstSubcategoryOfTab);
      }
    }
  }, [activeTab, wasTabChangedByUser]);

  // Find the current category data based on activeTab and activeSubcategory
  const categoryData = productsData.categories
    .find((cat) => cat.slug === activeTab)
    ?.subcategories.find((subCat) => subCat.slug === activeSubcategory);

  // Handle category change from CategoryNav
  const handleCategoryChange = (subcategorySlug: string) => {
    setActiveSubcategory(subcategorySlug);
  };

  return (
    <div className="container mx-auto lg:px-[60px] px-4 py-8 md:mt-16 mt-8">
      <h2 className="font-titillium md:text-[40px] text-3xl font-bold">
        Our Products
      </h2>
      <p className="mt-3 text-[#777777] font-semibold text-xl">
        We ensure reliable sourcing and global delivery with excellence.
      </p>

      <Tabs
        defaultValue={activeTab}
        className="w-full"
        onValueChange={(value) => {
          setWasTabChangedByUser(true);
          setActiveTab(value as "perishable" | "non-perishable");
        }}
      >
        <div className="mt-6">
          <TabsList className="bg-white rounded-full border w-full max-w-[400px] lg:max-w-[565px] border-[#E8E8E8] p-1 mx-auto ">
            <TabsTrigger
              value="perishable"
              className="w-1/2 px-5 py-1 text-[12px] lg:text-base font-semibold font-nunito data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Agro Products
            </TabsTrigger>
            <TabsTrigger
              value="non-perishable"
              className="w-1/2 px-5 py-1 text-[12px] lg:text-base font-semibold font-nunito data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
            >
              Sustainable Packaging Products
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="perishable">
          <CategoryNav
            activeTab="perishable"
            activeSubcategory={activeSubcategory}
            onCategoryChange={handleCategoryChange}
          />
        </TabsContent>

        <TabsContent value="non-perishable">
          <CategoryNav
            activeTab="non-perishable"
            activeSubcategory={activeSubcategory}
            onCategoryChange={handleCategoryChange}
          />
        </TabsContent>
      </Tabs>

      {/* Display Subcategories and Products */}
      {categoryData ? (
        <div className="mt-8">
          <div className="md:max-w-[700px] flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{categoryData.name}</h2>
            <p className="text-[#777777] font-semibold text-xl">
              {categoryData.label}
            </p>
          </div>
          {categoryData.products &&
            categoryData?.products.map((product: Product) => (
              <ProductTable
                key={product.name}
                product={{
                  name: product.name,
                  description: product?.description || "",
                  image: product.image,
                  tags: product.tags || [],
                  why: product?.why || [],
                  usedFor: product?.usedFor || [],
                  applications: product?.applications || [],
                  specs: product.specs || {},
                  paymentTerm: product?.paymentTerm || "",
                }}
              />
            ))}
        </div>
      ) : (
        <p className="text-red-600 font-bold mt-4">
          No products found for this category.
        </p>
      )}
    </div>
  );
}
