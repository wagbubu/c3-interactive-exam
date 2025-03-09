import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function DesktopHero({ className }: Props) {
  return (
    <div className={cn("bg-moss-primary w-full", className)}>
      <div className="max-w-7xl m-auto px-8 pb-6 flex pt-20">
        <p className="block max-w-44 text-xs">
          Explore our curated range of products to elevate every part of your
          life.
        </p>
        <h1 className="block text-6xl uppercase max-w-2xl tracking-tight ml-28">
          All your favorites in one place
        </h1>
      </div>
    </div>
  );
}
