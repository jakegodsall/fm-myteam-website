import Image from "next/image";

import Button from "@/app/components/UI/Button";

import contactBackground from "@bg/bg-home-contact-us.svg";

export default function GetStartedSection() {
  return (
    <div className="relative flex flex-col items-center bg-primary-coral pt-[8.3rem] text-center text-secondary-green-darkest">
      <h2 className="mb-[3rem] max-w-[22rem] text-[3.2rem] font-bold leading-[3.2rem]">
        Ready to get started?
      </h2>
      <div className="mb-[10rem] border-secondary-green-darkest">
        <Button>contact us</Button>
      </div>
      <Image
        src={contactBackground}
        alt="circle with grating"
        width="200"
        height="123"
        className="absolute bottom-0 h-[12.3rem] w-[20rem] self-start"
      />
    </div>
  );
}
