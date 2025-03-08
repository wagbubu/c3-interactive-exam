"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import NavLinkItem from "./NavLinkItem";
import NavLinkList from "./NavLinkList";

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4">
      <div className="uppercase font-semibold text-3xl">MOSS</div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="bg-moss-springwood bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
          >
            <p className="uppercase">Menu</p>
            <Menu style={{ width: 24, height: 24 }} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-3 bg-moss-springwood">
          <DialogTitle className="font-bold">Menu</DialogTitle>
          <NavLinkList>
            <NavLinkItem>Discover</NavLinkItem>
            <NavLinkItem>Apparel</NavLinkItem>
            <NavLinkItem>Bags</NavLinkItem>
            <NavLinkItem>Shoes</NavLinkItem>
            <NavLinkItem>Holiday Picks</NavLinkItem>
            <NavLinkItem>Other</NavLinkItem>
          </NavLinkList>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
