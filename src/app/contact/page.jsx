import Image from "next/image";

import ContactFormSection from "./ContactFormSection/ContactFormSection";
import Hero from "./Hero/Hero";

import contactTabletBackground from "@bg/bg-about-directors.svg";

export default function ContactPage() {
  return (
    <main className="relative flex flex-col">
      <div>
        <Hero />
        <Image
          src={contactTabletBackground}
          width="200"
          height="200"
          className="absolute left-[-10rem] top-0 sm:bottom-0"
          alt="circle with a square"
        />
        <ContactFormSection />
      </div>
    </main>
  );
}
