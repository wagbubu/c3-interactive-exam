"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full py-4 pl-4 bg-secondary border-t-2"
    >
      <CarouselContent className="[&>div:last-of-type]:mr-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-2/3 ">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
