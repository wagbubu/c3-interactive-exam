import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
      <BestSellers />
    </div>
  );
}
