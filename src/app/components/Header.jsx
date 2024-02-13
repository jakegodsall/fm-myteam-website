import Image from "next/image";

import logo from "@assets/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";
import NavBar from "./NavBar";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Image
        src={logo}
        width="160"
        height="40"
        alt="myteam logo"
        className="w-[12.8rem]"
      />
      <div className="ml-[4.8rem] hidden w-full items-center justify-between text-[1.8rem] sm:flex">
        <NavBar fontSize={1.8} />
        <Button>contact us</Button>
      </div>
      <div className="sm:hidden">
        <HamburgerButton />
      </div>
    </header>
  );
}
