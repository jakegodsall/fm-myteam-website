"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Avatar from "@/app/components/UI/Avatar";
import PlusButton from "@/app/components/UI/PlusButton";

import twitterLogo from "@icons/icon-twitter.svg";
import linkedinLogo from "@icons/icon-linkedin.svg";

export default function DirectorItem({
  avatar,
  name,
  role,
  message,
  twitter,
  linkedin,
}) {
  const [flipped, setFlipped] = useState(false);

  const handleButtonClicked = () => {
    setFlipped(!flipped);
  };

  return (
    // Card Outer
    <div className="relative flex h-[25rem] w-[33.3rem] flex-col items-center pb-[5.6rem] pt-[3.2rem]">
      {/* Card Inner */}
      <div className="flex h-full w-full flex-col items-center">
        {/* Front Card */}
        <div
          className={clsx(
            "backface-hidden preserve-3d perspective-full absolute  flex h-full w-full flex-col items-center bg-secondary-green-darker",
            flipped
              ? "rotate-y-180  transition-all duration-700"
              : "transition-all duration-700",
          )}
        >
          <div className="mb-[1.6rem] mt-[3.2rem] h-[9.6rem] w-[9.6rem]">
            <Avatar image={avatar} alt={name} />
          </div>
          <p className="text-[1.8rem] font-bold text-secondary-green-light">
            {name}
          </p>
          <p className="text-[1.5rem] font-medium">{role}</p>
          <div
            className="absolute bottom-[-2.5rem] h-[5.6rem] w-[5.6rem] rounded-full bg-primary-coral transition-all duration-300"
            onClick={handleButtonClicked}
          >
            <PlusButton />
          </div>
        </div>
        {/* Back Card */}
        <div
          className={clsx(
            "backface-hidden perspective-full preserve-3d absolute flex h-full w-full flex-col items-center bg-secondary-green-darker px-[2.3rem] text-center",
            flipped
              ? "transition-all duration-700"
              : "rotate-y-180 transition-all duration-700",
          )}
        >
          <p className="mb-[1rem] mt-[3.2rem] text-[1.8rem] font-bold text-[#79c8c7]">
            {name}
          </p>
          <p className="mb-[2.4rem] text-[1.7rem] leading-[2.5rem]">
            &ldquo;{message}&rdquo;
          </p>
          <div className="flex gap-[2rem]">
            <a href={twitter}>
              <Image
                src={twitterLogo}
                alt="twitter"
                height="20"
                width="20"
                className="h-[2rem] w-[2rem]"
              />
            </a>
            <a href={linkedin}>
              <Image
                src={linkedinLogo}
                alt="twitter"
                height="20"
                width="20"
                className="h-[2rem] w-[2rem]"
              />
            </a>
          </div>
          <div
            className="absolute bottom-[-2.5rem] h-[5.6rem] w-[5.6rem] rounded-full bg-[#79C8C7] transition-all duration-300 hover:scale-[1.1]"
            onClick={handleButtonClicked}
          >
            <PlusButton />
          </div>
        </div>
      </div>
    </div>
  );
}
