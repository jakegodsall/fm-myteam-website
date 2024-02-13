import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Build from "./components/Build/Build";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Build />
    </main>
  );
}
