"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Product } from "@/lib/mock";

interface Props extends Pick<Product, "title" | "image"> {}

export default function ProductCard({ title, image }: Props) {
  return (
    <Card className="rounded-none bg-moss-tertiary py-2 shadow-none">
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
  );
}
