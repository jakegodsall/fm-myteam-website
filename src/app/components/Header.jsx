import Image from "next/image";

import logo from "@assets/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";

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
      <HamburgerButton />
    </header>
  );
}
