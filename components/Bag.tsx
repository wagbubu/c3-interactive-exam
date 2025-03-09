import { Button } from "./ui/button";
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

export default function Bag() {
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
              Bag <span>(03)</span>
            </p>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
