import Image from "next/image";

import logo from "@assets/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Image src={logo} width="160" height="40" alt="myteam logo" />
      <HamburgerButton />
    </header>
  );
}
