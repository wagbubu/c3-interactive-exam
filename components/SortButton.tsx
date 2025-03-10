"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

export default function SortButton({ className }: Props) {
  const [sort, setSort] = useState("name");

  return (
    <div className={cn(className)}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className="cursor-pointer group uppercase focus-visible:ring-0 hover:font-semibold hover:bg-transparent hover:text-moss-cork data-[state=open]:font-semibold data-[state=open]:[&>svg]:rotate-180"
            variant="ghost"
          >
            Sort by <ChevronDown className="transition-transform" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20 rounded-none shadow-sm">
          <DropdownMenuLabel>Sorted by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="rating">Rating</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
