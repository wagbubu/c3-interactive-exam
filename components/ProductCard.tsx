"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { Button } from "./ui/button";

interface Props
  extends Omit<Product, "id" | "category">,
    Partial<Pick<Product, "category">> {}

export default function ProductCard({
  title,
  image,
  category,
  price,
  rating,
  tag,
  variants,
}: Props) {
  return (
    <>
      <Card className="lg:hidden rounded-none bg-moss-tertiary py-2 shadow-none">
        <CardContent className="h-60">
          <div className="relative w-full h-full">
            <Image fill src={image} alt="lunch box" objectFit="contain" />
          </div>
        </CardContent>
        <CardFooter className="px-2 text-md uppercase flex w-full justify-between">
          <CardTitle className="font-medium">{title}</CardTitle>
          <ArrowUpRight className="font-medium" size={18} />
        </CardFooter>
      </Card>
      <Card className="relative group cursor-pointer hidden lg:block rounded-none border-none py-0 shadow-none">
        <CardContent className="duration-300 ease-in-out group-hover:brightness-50 h-60 bg-moss-secondary">
          <div className="relative w-full h-full">
            <Image fill src={image} alt="lunch box" objectFit="contain" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start py-4 px-2 bg-moss-primary uppercase w-full">
          <p className="text-xs mb-2">{category}</p>
          <div className="flex justify-between items-center w-full">
            <CardTitle className="font-medium">{title}</CardTitle>
            <p className="font-semibold">£{price.toFixed(2)}</p>
          </div>
        </CardFooter>
        <Button className="hover:bg-moss-cork cursor-pointer bg-moss-orange uppercase text-moss-springwood rounded-none absolute bottom-1/3 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          Add to cart
        </Button>
      </Card>
    </>
  );
}
