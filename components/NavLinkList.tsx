interface Props {
  children: React.ReactNode;
}

export default function NavLinkList({ children }: Props) {
  return (
    <nav>
      <ul className="flex lg:flex-row flex-col gap-y-1 lg:text-sm lg:gap-x-4">
        {children}
      </ul>
    </nav>
  );
}
