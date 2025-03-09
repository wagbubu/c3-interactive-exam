import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  children: React.ReactNode;
}

export default function NavLinkItem({ children }: Props) {
  return (
    <li>
      <Button
        variant="ghost"
        className="py-4 border-moss-cork/10 border-b lg:border-none px-2 uppercase lg:hover:font-semibold lg:shrink-0 hover:text-moss-cork"
      >
        <Link href="#">{children}</Link>
      </Button>
    </li>
  );
}
