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
    <Link href={`/categories/${encodeURIComponent(product.slug)}`}>
      <div className="justify-items-center">
        {/* Image Container */}
        <div className="group relative lg:w-[312px] lg:h-[312px] w-[180px] h-[180px] cursor-pointer overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-125"
          />
          <button className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight />
          </button>
        </div>
      </div>
      {/* Product Name */}
      <div className="p-4 justify-start">
        <h3 className="text-[20px] font-bold text-[#333333]">{product.name}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
