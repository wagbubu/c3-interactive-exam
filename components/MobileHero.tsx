import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function MobileHero({ className }: Props) {
  return (
    <div className={cn("px-4 bg-moss-secondary space-y-6 py-8", className)}>
      <div className="flex items-center content-center">
        {/*thumbnail and arrow*/}
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            fill
            alt="guy with bonnet and green jacket"
            src="/images/hero-thumbnail.png"
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
        <h1 className="upeprcase text-4xl tracking-tighter leading-12">
          DISCOVER EVERYTHING YOU NEED IN ONE PLACE
        </h1>
      </div>
    </div>
  );
}
