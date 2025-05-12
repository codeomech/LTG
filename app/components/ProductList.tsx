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
    <div className="w-full min-h-screen flex flex-col items-center mx-auto lg:px-14 lg:py-10 px-3 justify-center">
      <div className="text-center mb-6">
        <h2 className="font-titillium md:text-[40px] text-3xl font-bold">
          Our Products
        </h2>
        <p className="mt-3 text-[#777777] font-semibold text-xl">
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
          <div className="flex justify-center">
            <TabsList className="bg-white rounded-full border w-full max-w-[400px] h-[44px] lg:max-w-[565px] border-[#E8E8E8] p-1 mx-auto ">
              <TabsTrigger
                value="perishable"
                className="w-1/2 px-5 py-1 text-[12px] leading-[24px] tracking-[0px] md:text-base md:font-semibold font-nunito data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
              >
                Agro Products
              </TabsTrigger>
              <TabsTrigger
                value="non-perishable"
                className="w-1/2 px-5 py-1 text-[12px] leading-[24px] tracking-[0px] md:text-base md:font-semibold font-nunito data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-full transition-all duration-300"
              >
                Sustainable Packaging Products
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="perishable">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-items-center">
              {categoryData?.subcategories.map((subcategory, index) => (
                <ProductCard key={index} product={subcategory} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-perishable">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
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
