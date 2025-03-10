"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";

interface Props {
  category: string;
  setCategory: (s: string) => void;
}
export default function Filter({ category, setCategory }: Props) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full mt-4 border-b">
        <AccordionItem value="item-1">
          <AccordionTrigger className="uppercase py-3">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={category}
              onValueChange={(value) => setCategory(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="electronics" id="r1" />
                <Label className="cursor-pointer" htmlFor="r1">
                  Electronics
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="jewelery" id="r2" />
                <Label className="cursor-pointer" htmlFor="r2">
                  Jewelery
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="men's%20clothing" id="r3" />
                <Label className="cursor-pointer" htmlFor="r3">
                  Men's Clothing
                </Label>
              </div>
              <div className="flex items-center space-x-2 ">
                <RadioGroupItem value="women's%20clothing" id="r4" />
                <Label className="cursor-pointer" htmlFor="r4">
                  Women's Clothing
                </Label>
              </div>
            </RadioGroup>
            <Button
              onClick={() => setCategory("")}
              variant="link"
              className="uppercase text-moss-cork mt-4 cursor-pointer"
            >
              Reset
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="uppercase py-3">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="uppercase py-3">Color</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="uppercase py-3">Brands</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="uppercase py-3">
            Fast Shipping
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="mt-8 w-full rounded-none bg-moss-orange uppercase text-xs text-moss-springwood cursor-pointer hover:bg-moss-cork">
        Clear Filters
      </Button>
    </div>
  );
}
