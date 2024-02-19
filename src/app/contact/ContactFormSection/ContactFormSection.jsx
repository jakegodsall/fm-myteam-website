import Image from "next/image";

import contactBackground from "@bg/bg-contact.svg";

import ContactForm from "./ContactForm/ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-primary-teal pb-[11rem]">
      <div className="w-full max-w-[45rem] sm:w-[70%] sm:max-w-[54rem]">
        <ContactForm />
        <Image
          src={contactBackground}
          width="200"
          height="200"
          className="absolute bottom-[-10rem] right-[-10rem] sm:bottom-0"
          alt="circle with a square"
        />
      </div>
    </section>
  );
}
