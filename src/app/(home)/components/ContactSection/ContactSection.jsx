import Image from "next/image";
import Link from "next/link";

import companyLogo from "@assets/logo.svg";
import SocialBar from "@/app/components/SocialsBar";
import NavBar from "@/app/components/NavBar";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center bg-secondary-green-darkest px-[6rem] py-[6.6rem] text-center sm:flex-row sm:items-stretch sm:justify-between">
      <div className="flex w-1/2 flex-col sm:relative">
        <Image
          src={companyLogo}
          alt="company logo"
          width="96"
          height="24"
          className="mb-[2.4rem] h-[2.4rem] w-[9.6rem] sm:mb-[5.6rem]"
        />
        <div className="mb-[2.4rem] text-[1.5rem]">
          <NavBar />
        </div>
        <div className="hidden sm:absolute sm:bottom-0 sm:block">
          <SocialBar />
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-end sm:text-right">
        <p className="mb-[4rem] text-[1.5rem] leading-[2.5rem] opacity-60">
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </p>
        <div className="mb-[1.6rem] sm:hidden">
          <SocialBar />
        </div>
        <p className="text-[1.5rem] opacity-60">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </section>
  );
}
