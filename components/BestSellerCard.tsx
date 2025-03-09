"use client";
import { ArrowUpRight, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import Variant from "./Variants";
import { Product, Variant as VariantType } from "@/lib/mock";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const VariantContext = createContext<{
  currentVariant: VariantType;
  setCurrentVariant: (variant: VariantType) => void;
} | null>(null);

interface Props
  extends Omit<Product, "id" | "category">,
    Partial<Pick<Product, "category">> {}

export default function BestSellerCard({
  image,
  price,
  rating,
  title,
  category,
  tag,
  variants,
}: Props) {
  const [currentVariant, setCurrentVariant] = useState(variants![0]);
  return (
    <VariantContext.Provider value={{ currentVariant, setCurrentVariant }}>
      <Card className="rounded-none bg-white border-none py-4 shadow-none">
        <CardContent className="h-96 py-16">
          <div className="relative w-full h-full">
            <Image
              fill
              src={currentVariant.image}
              alt="lunch box"
              objectFit="cover"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-between w-full px-0">
          <div className="flex justify-between w-full p-4 uppercase items-center">
            <CardTitle className="font-medium tracking-tight ">
              <h3 className="text-lg leading-5">{title}</h3>
            </CardTitle>
            {variants && <Variant variants={variants} />}
          </div>
          <div className="w-full flex justify-between bg-linear-to-b from-[#d3d2d0] from-5% via-moss-tertiary via-30% to-moss-tertiary py-3 px-4">
            <div className="flex items-center gap-x-2 text-sm">
              <Star className="stroke-orange-400 fill-orange-400" size={16} />
              <p>{rating} (69 Reviews)</p>
            </div>
            <p className="text-2xl font-semibold">£{price.toFixed(2)}</p>
          </div>
        </CardFooter>
      </Card>
    </VariantContext.Provider>
  );
}
