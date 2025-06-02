import React, { useState, useEffect, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button"; // Adjust paths based on your project
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have a cn utility function for classNames

interface ProductOption {
  value: string;
  label: string;
}

const products = [
  { value: "fresh-onions", label: "Fresh Onions" },
  { value: "dehydrated-onions", label: "Dehydrated Onions" },
  { value: "red-white-onions", label: "Red & White Onions" },
  { value: "fresh-grapes", label: "Fresh Grapes" },
  { value: "red-pomegranate", label: "Red Pomeogranate" },
  { value: "grapes", label: "Grapes" },
  { value: "banana", label: "Banana" },
  { value: "ripe-banana", label: "Ripe Banana" },
  { value: "soya-beans", label: "Soya Beans" },
  { value: "garlic", label: "Garlic" },
  { value: "mango", label: "Mango" },
  { value: "kiwi", label: "Kiwi" },
  { value: "coconut", label: "Coconut" },
  { value: "yellow-maize", label: "Yellow Maize" },
  { value: "corn-grit", label: "Corn Grit" },
  { value: "basmati-rice", label: "Basmati Rice" },
  { value: "spices", label: "Spices" },
  { value: "fresh-green-chilli", label: "Fresh Green Chilli" },
  { value: "pulses", label: "Pulses" },
  { value: "jaggery-blocks", label: "Jaggery Blocks" },
  { value: "jaggery-cubes", label: "Jaggery Cubes" },
  { value: "jaggery-granules", label: "Jaggery Granules" },
  { value: "jaggery-powder", label: "Jaggery Powder" },
  { value: "mono-cartons", label: "Mono Cartons" },
  { value: "corrugated-boxes", label: "Corrugated Boxes" },
  { value: "paper-bags", label: "Paper Bags" },
  {
    value: "paper-cups-ripple-cups-pla-lids",
    label: "Paper Cups, Ripple Cups & PLA Lids",
  },
  { value: "bagasee-products", label: "Bagasee Products" },
  { value: "others", label: "Others" },
];

export default function ProductMultiSelect() {
  const { control, setValue, watch, formState } = useFormContext();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductOption[]>([]);
  const [otherProduct, setOtherProduct] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousSubmitCount = useRef<number>(0);

  // Check if "Other" is selected
  const isOtherSelected = selectedProducts.some(
    (product) => product.value === "others"
  );

  // Update form value whenever selections change
  useEffect(() => {
    const productList = selectedProducts.map((p) =>
      p.value === "others" && otherProduct ? `Other: ${otherProduct}` : p.label
    );

    setValue("interestedProducts", productList);
  }, [selectedProducts, otherProduct, setValue]);

  // Reset detection using submitCount
  useEffect(() => {
    if (formState.submitCount > previousSubmitCount.current) {
      // Form was submitted, reset local state
      setSelectedProducts([]);
      setOtherProduct("");
      previousSubmitCount.current = formState.submitCount;
    }
  }, [formState.submitCount]);

  // Backup reset detection - watch for empty interestedProducts
  useEffect(() => {
    const subscription = watch((value) => {
      if (
        value.interestedProducts &&
        value.interestedProducts.length === 0 &&
        selectedProducts.length > 0
      ) {
        setSelectedProducts([]);
        setOtherProduct("");
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, selectedProducts.length]);

  // Handle product selection/deselection
  const toggleProduct = (product: ProductOption) => {
    setSelectedProducts((current) => {
      const isSelected = current.some((item) => item.value === product.value);

      if (isSelected) {
        // If removing "other", also clear the other product text
        if (product.value === "others") {
          setOtherProduct("");
        }
        return current.filter((item) => item.value !== product.value);
      } else {
        return [...current, product];
      }
    });
  };

  // Remove a selected product via badge click
  const removeProduct = (productToRemove: ProductOption) => {
    setSelectedProducts((current) =>
      current.filter((item) => item.value !== productToRemove.value)
    );

    if (productToRemove.value === "others") {
      setOtherProduct("");
    }
  };

  return (
    <div className="mt-1 rounded-xl shadow-sm border-solid border-gray-200">
      <Controller
        name="interestedProducts"
        control={control}
        render={({}) => (
          <>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  ref={triggerRef}
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between rounded-xl shadow-sm border-solid border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                >
                  {selectedProducts.length === 0
                    ? "Select products"
                    : `${selectedProducts.length} selected`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[var(--radix-popover-trigger-width)] p-0 border border-gray-200 bg-white"
                align="start"
                sideOffset={4}
              >
                <Command className="rounded-lg bg-white">
                  <CommandInput
                    placeholder="Search products..."
                    className="h-9 border-b border-gray-100"
                  />
                  <CommandEmpty className="py-2 text-center text-sm text-gray-500">
                    No product found.
                  </CommandEmpty>
                  <div className="max-h-52 overflow-y-auto">
                    <CommandGroup className="py-1">
                      {products.map((product) => (
                        <CommandItem
                          key={product.value}
                          value={product.value}
                          onSelect={() => {
                            toggleProduct(product);
                          }}
                          className="px-2 py-1.5 text-sm cursor-pointer hover:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                "mr-2 h-4 w-4 flex items-center justify-center rounded-sm border border-gray-300",
                                selectedProducts.some(
                                  (item) => item.value === product.value
                                )
                                  ? "bg-gray-800 border-gray-800"
                                  : "bg-transparent"
                              )}
                            >
                              <Check
                                className={cn(
                                  "h-3 w-3 text-white",
                                  selectedProducts.some(
                                    (item) => item.value === product.value
                                  )
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </div>
                            {product.label}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </div>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Display selected products as badges */}
            {selectedProducts.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProducts.map((product) => (
                  <Badge
                    key={product.value}
                    variant="secondary"
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    {product.label}
                    <button
                      type="button"
                      className="ml-1 rounded-full h-4 w-4 flex items-center justify-center text-xs bg-gray-300 hover:bg-gray-400 text-gray-700"
                      onClick={() => removeProduct(product)}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Other product input field - only show when "Other" is selected */}
            {isOtherSelected && (
              <div className="mt-2">
                <Input
                  placeholder="Specify other product"
                  value={otherProduct}
                  onChange={(e) => setOtherProduct(e.target.value)}
                  className="rounded-xl shadow-sm border-solid border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                />
              </div>
            )}
          </>
        )}
      />
    </div>
  );
}
