import { ListFilter } from "lucide-react";
import { Button } from "./ui/button";
import SortButton from "./SortButton";

export default function Shop() {
  return (
    <div className="w-full">
      <div className="max-w-7xl m-auto px-8">
        <div className="grid grid-cols-4 justify-between uppercase py-1 border-b-2 gap-x-4">
          <div className="flex justify-between col-span-1 items-center">
            <p>Filter</p>
            <ListFilter />
          </div>
          <div className="col-span-3">
            <SortButton className="float-end" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-8 grid grid-cols-4 gap-x-4 m-auto">
        <div className="k">test</div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
