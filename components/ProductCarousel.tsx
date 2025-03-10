"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";
import { useProducts } from "@/lib/getProducts";
import { ProductType } from "@/lib/type";

interface Props {
  className?: string;
}

export default function ProductCarousel({ className }: Props) {
  const products = useProducts("");
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
        {products.data?.map((item: ProductType) => (
          <CarouselItem key={item.id} className="basis-2/3 ">
            <ProductCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
