import Image from "next/image";

import heroBackground from "@bg/bg-about-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden text-center">
      <div className="mb-[10.8rem] max-w-[50rem] px-[2.4rem]">
        <h1 className="mb-[1.6rem] text-[4rem]">About</h1>
        <p className="text-[1.5rem] leading-[2.8rem] opacity-80">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We&apos;ll bring those teams to you.
        </p>
      </div>
      <Image
        src={heroBackground}
        alt="quarter of a circle with grating"
        width="200"
        height="200"
        className="absolute bottom-[-10rem] right-[-10rem] sm:bottom-0"
      />
    </section>
  );
}
