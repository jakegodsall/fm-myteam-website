import ContactSection from "../components/ContactSection/ContactSection";
import ContactForm from "./ContactForm/ContactForm";
import Hero from "./Hero/Hero";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ContactForm />
      <ContactSection />
    </main>
  );
}
