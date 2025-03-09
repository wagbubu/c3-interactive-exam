import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import NavLinkItem from "./NavLinkItem";
import NavLinkList from "./NavLinkList";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";
import LoginAndBag from "./LoginAndBag";

interface Props {
  className?: string;
}

export default function DesktopNavbar({ className }: Props) {
  return (
    <div className={cn("w-full", className)}>
      <div className="max-w-7xl h-16 flex justify-between items-center px-8 m-auto">
        <div className="uppercase font-semibold text-3xl">MOSS</div>
        <NavLinks />
        <LoginAndBag />
      </div>
    </div>
  );
}
