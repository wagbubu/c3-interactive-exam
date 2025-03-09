import BestSellerCard from "./BestSellerCard";
import { sampleBestSeller } from "@/lib/mock";
import { Product } from "@/lib/mock";

export default function BestSellers() {
  return (
    <div className="px-4 lg:hidden">
      <h1 className="uppercase tracking-tighter text-3xl my-6">BestSellers</h1>
      <div className="pb-4">
        {sampleBestSeller.map((item) => (
          <BestSellerCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
