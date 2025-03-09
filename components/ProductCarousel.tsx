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
import { productList } from "@/lib/mock";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function ProductCarousel({ className }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn(
        "w-full pt-7 pb-10 pl-4 bg-secondary border-t-2 bg-moss-secondary",
        className
      )}
    >
      <CarouselContent className="[&>div:last-of-type]:mr-4">
        {productList.map((item) => (
          <CarouselItem key={item.id} className="basis-2/3 ">
            <ProductCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
