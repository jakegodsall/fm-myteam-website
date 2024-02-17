import Image from "next/image";

import contactBackground from "@bg/bg-contact.svg";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative overflow-hidden bg-primary-teal pb-[11rem]">
      <ContactForm />
      <Image
        src={contactBackground}
        width="200"
        height="200"
        className="absolute bottom-[-10rem] right-[-10rem]"
        alt="circle with a square"
      />
    </section>
  );
}
