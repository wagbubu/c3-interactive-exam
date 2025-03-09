import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Variant as VariantType } from "@/lib/mock";
import { useContext } from "react";
import { VariantContext } from "./BestSellerCard";

interface Props {
  className?: string;
  variants: VariantType[];
}

export default function Variants({ className, variants }: Props) {
  return (
    <div className={cn("flex gap-x-2", className)}>
      {variants.map((variant) => (
        <Variant key={variant.variantId} {...variant} />
      ))}
    </div>
  );
}

function Variant({ variantId, image }: VariantType) {
  const variantContext = useContext(VariantContext);

  return (
    <Button
      onClick={() => variantContext?.setCurrentVariant({ variantId, image })}
      className={cn(
        "relative w-11 h-11 rounded-md border-1 border-gray-300  overflow-hidden",
        { "brightness-75": variantContext?.currentVariant?.image == image }
      )}
    >
      <Image fill alt="lunchbox" src={image} objectFit="cover" />
    </Button>
  );
}
