"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Card className="rounded-none bg-moss-tertiary py-2 shadow-none">
      <CardContent className="h-60">
        <div className="relative w-full h-full">
          <Image
            fill
            src="/images/mocha-mate.png"
            alt="lunch box"
            objectFit="contain"
          />
        </div>
      </CardContent>
      <CardFooter className="px-2 text-md uppercase flex w-full justify-between">
        <CardTitle className="font-medium">Mocha Mate</CardTitle>
        <ArrowUpRight className="font-medium" size={18} />
      </CardFooter>
    </Card>
  );
}
