interface Props {
  children: React.ReactNode;
}

export default function NavLinkList({ children }: Props) {
  return (
    <nav>
      <ul className="flex flex-col gap-y-1">{children}</ul>
    </nav>
  );
}
