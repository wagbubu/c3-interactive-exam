import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
      <BestSellers />
      <Shop />
    </div>
  );
}
