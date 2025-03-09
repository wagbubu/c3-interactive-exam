import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function Hero() {
  return (
    <>
      <MobileHero className="lg:hidden" />
      <DesktopHero className="hidden lg:block" />
    </>
  );
}
