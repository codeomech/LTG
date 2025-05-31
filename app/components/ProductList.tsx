"use client";

import { useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample Product Data

const ProductList = () => {
  const [activeTab, setActiveTab] = useState<"perishable" | "non-perishable">(
    "perishable"
  );

  const categoryData = productsData.categories.find(
    (cat) => cat.slug === activeTab
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center mx-auto px-3 sm:px-6 lg:px-14 py-6 sm:py-8 lg:py-10 justify-center">
      <div className="text-center mb-6">
        <h2 className="font-titillium text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
          Our Products
        </h2>
        <p className="mt-2 sm:mt-3 text-[#777777] font-semibold text-base sm:text-lg lg:text-xl px-2">
          We ensure reliable sourcing and global delivery with excellence.
        </p>
      </div>
      <div className="flex mx-auto w-full">
        <Tabs
          defaultValue="perishable"
          className="w-full"
          onValueChange={(value) =>
            setActiveTab(value as "perishable" | "non-perishable")
          }
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="bg-white rounded-full border w-full max-w-[280px] h-[40px] xs:max-w-[320px] xs:h-[44px] sm:max-w-[400px] lg:max-w-[565px] lg:h-[48px] border-[#E8E8E8] p-1 mx-auto">
              <TabsTrigger
                value="perishable"
                className="w-1/2 px-2 xs:px-3 sm:px-5 py-1 text-[10px] xs:text-[11px] sm:text-[12px] md:text-base leading-tight xs:leading-[20px] sm:leading-[24px] tracking-[0px] font-nunito md:font-semibold data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
              >
                <span className="block xs:hidden">Agro</span>
                <span className="hidden xs:block sm:hidden">Agro Products</span>
                <span className="hidden sm:block">Agro Products</span>
              </TabsTrigger>
              <TabsTrigger
                value="non-perishable"
                className="w-1/2 px-2 xs:px-3 sm:px-5 py-1 text-[10px] xs:text-[11px] sm:text-[12px] md:text-base leading-tight xs:leading-[20px] sm:leading-[24px] tracking-[0px] font-nunito md:font-semibold data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
              >
                <span className="block xs:hidden">Packaging</span>
                <span className="hidden xs:block sm:hidden">
                  Packaging Products
                </span>
                <span className="hidden sm:block">
                  Sustainable Packaging Products
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="perishable" className="mt-0">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 justify-items-center">
              {categoryData?.subcategories.map((subcategory, index) => (
                <ProductCard key={index} product={subcategory} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-perishable" className="mt-0">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 justify-items-center">
              {categoryData?.subcategories.map((subcategory, index) => (
                <ProductCard key={index} product={subcategory} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductList;
