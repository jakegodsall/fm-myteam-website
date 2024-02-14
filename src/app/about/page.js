import DirectorsSection from "./components/DirectorsSection/DirectorsSection";
import Hero from "./components/Hero/Hero";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DirectorsSection />
    </main>
  );
}
