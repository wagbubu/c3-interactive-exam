import Link from "next/link";
import { Button } from "./ui/button";
import Bag from "./Bag";

export default function LoginAndBag() {
  return (
    <div className="flex">
      <Button
        asChild
        variant="ghost"
        onClick={() => alert("login")}
        className="bg-transparent border-r border-moss-cork rounded-none uppercase hover:text-moss-cork hover:font-semibold"
      >
        <Link href="#">Login</Link>
      </Button>
      <Bag />
    </div>
  );
}
