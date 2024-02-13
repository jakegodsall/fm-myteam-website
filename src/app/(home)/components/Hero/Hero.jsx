import Image from "next/image";

import heroBackground from "@bg/bg-home-hero.svg";

export default function Hero() {
  return (
    <section className="bg-home-hero relative h-[40rem] text-center">
      <h1 className="mb-[1.8rem] px-[2.4rem] text-[4rem] leading-[4rem]">
        Find the
        <br /> best <span className="text-primary-coral">talent</span>
      </h1>
      <p className="mb-[9.7rem] px-[2.4rem] text-[1.5rem] leading-[2.8rem]">
        Finding the right people and building high performing teams can be hard.
        Most companies aren't tapping into the abundance of global talent. We're
        about to change that.
      </p>
      <div className="absolute bottom-0">
        <Image src={heroBackground} alt="hero design" />
      </div>
    </section>
  );
}
