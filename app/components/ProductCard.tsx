"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  product,
}: {
  product: {
    image: string;
    name: string;
    slug: string;
    tags: string[];
  };
}) => {
  return (
    <Link
      href={`/categories/${encodeURIComponent(product.slug)}`}
      className="w-full max-w-sm"
    >
      <div className="justify-items-center">
        {/* Image Container */}
        <div className="group relative w-full h-[140px] xs:h-[160px] sm:h-[180px] md:h-[200px] lg:h-[312px] cursor-pointer overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-125"
            sizes="(max-width: 360px) 280px, (max-width: 640px) 300px, (max-width: 768px) 280px, (max-width: 1024px) 220px, 312px"
          />
          <button className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight />
          </button>
        </div>
      </div>
      {/* Product Name */}
      <div className="p-3 sm:p-4 justify-start">
        <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#333333] leading-tight line-clamp-2">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
