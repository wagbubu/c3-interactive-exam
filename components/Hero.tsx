import Image from "next/image";
import heroThumbnail from "@/lib/assets/hero-thumbnail.png";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="px-4 bg-moss-cork/5 space-y-6 py-8">
      <div className="flex items-center content-center">
        {/*thumbnail and arrow*/}
        <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
          <Image
            fill
            alt="guy with bonnet and green jacket"
            src={heroThumbnail}
          />
        </div>
        <div className="bg-moss-orange w-min rounded-full text-white p-4 relative right-2">
          <ArrowUpRight size={16} />
        </div>
        <div>
          <p className="capitalize">
            30% Flat Sale
            <br />
            Last-Minute Deals
          </p>
        </div>
      </div>
      <div>
        <h1 className="upeprcase text-4xl">
          DISCOVER EVERYTHING YOU NEED IN ONE PLACE
        </h1>
      </div>
    </div>
  );
}
