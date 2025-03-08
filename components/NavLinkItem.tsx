import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function NavLinkItem({ children }: Props) {
  return (
    <li className="py-4 border-moss-cork/10 border-b px-2 rounded-md">
      <Link href="#">{children}</Link>
    </li>
  );
}
