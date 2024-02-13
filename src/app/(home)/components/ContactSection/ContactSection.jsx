import Image from "next/image";
import Link from "next/link";

import companyLogo from "@assets/logo.svg";
import SocialBar from "@/app/components/SocialsBar";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center bg-secondary-green-darkest px-[6rem] py-[6.6rem] text-center">
      <Image
        src={companyLogo}
        alt="company logo"
        width="96"
        height="24"
        className="mb-[2.4rem] h-[2.4rem] w-[9.6rem]"
      />
      <div className="mb-[2.4rem] flex gap-[2.4rem]">
        <Link className="text-[1.5rem]" href="/">
          home
        </Link>
        <Link className="text-[1.5rem]" href="/about">
          about
        </Link>
      </div>
      <p className="mb-[4rem] text-[1.5rem] leading-[2.5rem] opacity-60">
        987 Hillcrest Lane
        <br />
        Irvine, CA
        <br />
        California 92714
        <br />
        Call Us : 949-833-7432
      </p>
      <div className="mb-[1.6rem]">
        <SocialBar />
      </div>
      <p className="text-[1.5rem] opacity-60">
        Copyright 2020. All Rights Reserved
      </p>
    </section>
  );
}
