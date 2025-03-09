import BestSellerCard from "./BestSellerCard";
import { sampleBestSeller } from "@/lib/mock";
import { Product } from "@/lib/mock";

export default function BestSellers() {
  return (
    <div className="px-4">
      <h1 className="uppercase tracking-tighter text-3xl my-6">BestSellers</h1>
      {sampleBestSeller.map((item) => (
        <BestSellerCard key={item.id} {...item} />
      ))}
    </div>
  );
}
