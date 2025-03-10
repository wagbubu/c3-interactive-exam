"use client";
import { Product, productList } from "@/lib/mock";
import ProductCard from "./ProductCard";
import { useProducts } from "@/lib/getProducts";
import { ProductType } from "@/lib/type";

export default function ProductList() {
  const products = useProducts();

  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {products.data?.map((product: ProductType) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
