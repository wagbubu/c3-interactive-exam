import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { XIcon } from "lucide-react";
import { useCart } from "./Cart";

export default function Bag() {
  const { state, dispatch } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          asChild
          className="bg-transparent rounded-none cursor-pointer uppercase hover:text-moss-cork hover:font-semibold"
        >
          <div>
            <p>
              Bag <span>({state.items.length})</span>
            </p>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="uppercase text-2xl font-normal">
            Bag
          </SheetTitle>
          <SheetDescription>Items added to your bag.</SheetDescription>
        </SheetHeader>
        <div className="px-4 space-y-2">
          {state.items.map((item) => (
            <Card
              key={item.id}
              className="relative flex-row p-0 gap-0 rounded-none bg-moss-secondary shadow-none"
            >
              <div className="absolute top-1 right-1 p-0">
                <Button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                  className="rounded-none max-h-min max-w-min cursor-pointer"
                  size="icon"
                  variant="ghost"
                >
                  <XIcon className="h-4 w-4 text-moss-cork" />
                </Button>
              </div>
              <div className="relative h-20 w-20 bg-white shrink-0">
                <Image
                  objectFit="contain"
                  fill
                  alt="cart item"
                  src={item.image}
                />
              </div>
              <div className="flex justify-between w-full px-4 items-center">
                <div>
                  <p className="uppercase line-clamp-2">{item.title}</p>
                  <p className="uppercase text-xs">
                    Quantity: <span>{item.quantity}</span>
                  </p>
                </div>
                <p>£{item.price.toFixed(2)}</p>
              </div>
            </Card>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="bg-moss-orange rounded-none hover:bg-moss-cork cursor-pointer"
              type="submit"
            >
              Proceed to Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
