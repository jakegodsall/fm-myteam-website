import ContactSection from "../components/ContactSection/ContactSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";
import Hero from "./Hero/Hero";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ContactFormSection />
      <ContactSection />
    </main>
  );
}
