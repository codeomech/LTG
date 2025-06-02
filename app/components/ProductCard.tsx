"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      className="w-full max-w-sm"
      // Entrance animation
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Hover animations
    >
      <Link
        href={`/categories/${encodeURIComponent(product.slug)}`}
        className="block"
      >
        <motion.div
          className="justify-items-center"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 },
          }}
        >
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
            <motion.button
              className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Product Name */}
        <motion.div
          className="p-3 sm:p-4 justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#333333] leading-tight line-clamp-2">
            {product.name}
          </h3>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
