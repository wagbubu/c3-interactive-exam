import BestSellers from "@/components/BestSellers";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCarousel className="lg:hidden" />
      <BestSellers />
      <Shop />
    </div>
  );
}
