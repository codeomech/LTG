// components/ProductMultiSelect.tsx
"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import productsData from "../data/products.json";
import { ArrowDown } from "lucide-react";

export default function ProductMultiSelect() {
  const { setValue, watch } = useFormContext();
  const selectedProducts = watch("interestedProducts") || [];

  const [allProducts, setAllProducts] = useState<string[]>([]);

  useEffect(() => {
    const flattenProducts = () => {
      const categories = productsData?.categories || [];
      const result: string[] = [];

      categories.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
          sub.products.forEach((prod) => {
            result.push(prod.name);
          });
        });
      });

      setAllProducts(result);
    };

    flattenProducts();
  }, []);

  const toggleProduct = (product: string) => {
    const updated = selectedProducts.includes(product)
      ? selectedProducts.filter((p: string) => p !== product)
      : [...selectedProducts, product];
    setValue("interestedProducts", updated);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-full mt-1 rounded-xl shadow-sm border-solid border-gray-200 justify-between"
          variant="outline"
        >
          {selectedProducts.length > 0
            ? `${selectedProducts.length} product(s) selected`
            : "Select Products"}
          <ArrowDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2">
        <ScrollArea className="h-64">
          <div className="flex flex-col gap-2">
            {allProducts.map((product) => (
              <label
                key={product}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedProducts.includes(product)}
                  onCheckedChange={() => toggleProduct(product)}
                />
                <span>{product}</span>
              </label>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
