import Image from "next/image";

import heroBackground from "@bg/bg-home-hero.svg";

export default function Hero() {
  return (
    <section className="bg-home-hero relative flex flex-col items-center text-center">
      <div className="mx-[2.4rem] mb-[20rem] max-w-[45.7rem] sm:mb-[25.6rem]">
        <h1 className="mb-[1.8rem] text-[4rem] leading-[4rem] sm:mb-[2.4rem] sm:text-[6.4rem] sm:leading-[5.6rem]">
          Find the
          <br /> best <span className="text-primary-coral">talent</span>
        </h1>
        <p className="text-[1.5rem] leading-[2.8rem] opacity-80">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </div>
      <div className="absolute bottom-0">
        <Image src={heroBackground} alt="hero design" />
      </div>
    </section>
  );
}
