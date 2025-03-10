import { productList } from "@/lib/mock";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {productList.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
