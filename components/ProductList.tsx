"use client";
import ProductCard from "./ProductCard";
import { useProducts } from "@/lib/getProducts";
import { ProductType } from "@/lib/type";

interface Props {
  category: string;
  products: ProductType[];
}

export default function ProductList({ category, products }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {products?.map((product: ProductType) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
