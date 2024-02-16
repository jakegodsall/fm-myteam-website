import Image from "next/image";

import mobileMenuBackground from "@bg/bg-about-hero.svg";

import NavBar from "../NavBar/NavBar";
import Button from "../UI/Button";

export default function MobileMenu() {
  return (
    <div className="fixed bottom-0 right-0 top-0 z-30 w-[75%] bg-secondary-green-medium text-[1.8rem]">
      <div className="mx-[4.8rem] mt-[11.2rem]">
        <NavBar isMobile />
        <div className="mt-[5rem]">
          <Button>contact us</Button>
        </div>
      </div>
      <Image
        src={mobileMenuBackground}
        alt="circle with grating"
        width="200"
        height="200"
        className="absolute bottom-0 right-[-10rem]"
      />
    </div>
  );
}
