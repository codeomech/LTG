"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Product } from "../data/ProductSchema";

interface ProductTableProps {
  product: Product;
}

export default function ProductTable({ product }: ProductTableProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 400) {
      setShowToggle(true);
    }
  }, []);

  return (
    <div className="bg-white p-8 rounded-[16px] shadow-md mb-6 mt-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="lg:rounded-[12px] rounded-[8px] object-cover"
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#333333]">{product.name}</h3>

          <div
            ref={contentRef}
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? "max-h-[1000px]" : "max-h-[400px]"
            }`}
          >
            {product.description && (
              <p className="mt-2 text-[#777777] font-semibold text-[14px] whitespace-pre-wrap">
                {product.description}
              </p>
            )}

            {product.why && product.why.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-[14px] text-[#777777] mb-1">
                  Why our {product.name}?
                </p>
                <ul className="list-disc text-[14px] list-inside font-semibold text-[#333333] space-y-1 whitespace-pre-wrap">
                  {product.why.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.usedFor && product.usedFor.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-[14px] text-[#777777] mb-1">
                  Used For
                </p>
                <ul className="list-disc text-[14px] list-inside font-semibold text-[#333333] space-y-1 whitespace-pre-wrap">
                  {product.usedFor.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-[14px] text-[#777777] mb-1">
                  Applications
                </p>
                <ul className="list-disc text-[14px] list-inside text-[#333333] space-y-1 whitespace-pre-wrap">
                  {product.applications.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.specs && (
              <div className="mt-6">
                <Table className="border border-gray-300 ">
                  <TableBody>
                    {Object.entries(product.specs).map(
                      ([label, value], idx) => (
                        <TableRow
                          className="border-b border-gray-300"
                          key={idx}
                        >
                          <TableCell className="font-semibold text-[14px] text-[#777777]">
                            {label}
                          </TableCell>
                          <TableCell className="font-bold text-[14px] text-[#333333] whitespace-pre-wrap">
                            {value}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </div>
            )}

            {product.paymentTerm && (
              <div className="mt-4">
                <p className="font-semibold text-[14px] text-[#777777] mb-1">
                  Additional Information:
                </p>
                <span className="font-semibold text-[14px] text-[#333333]">
                  Payment Terms:
                </span>
                <span className="font-bold text-[14px] text-[#333333] whitespace-pre-wrap ml-1">
                  {product.paymentTerm}
                </span>
              </div>
            )}
          </div>

          {showToggle && (
            <div className="mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#8855FF] text-[12px] font-semibold underline cursor-pointer"
              >
                {expanded ? "Show Less" : "View Complete Details"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
