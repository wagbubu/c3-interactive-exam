"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <MobileNavbar className="lg:hidden" />
      <DesktopNavbar className="hidden lg:block" />
    </>
  );
}
