import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";

interface Props {
  className?: string;
}

export default function MobileNavbar({ className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-16 flex justify-between items-center px-4",
        className
      )}
    >
      <div className="uppercase font-semibold text-3xl">MOSS</div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
          >
            <p className="uppercase">Menu</p>
            <Menu style={{ width: 24, height: 24 }} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-3 bg-moss-primary">
          <DialogTitle className="font-bold">Menu</DialogTitle>
          <NavLinks />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
