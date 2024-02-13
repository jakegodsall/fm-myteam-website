import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Build from "./components/BuildSection/BuildSection";
import TestamonialSection from "./components/TestimonialSection/TestimonialSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Build />
      <TestamonialSection />
      <ContactUsSection />
    </main>
  );
}
