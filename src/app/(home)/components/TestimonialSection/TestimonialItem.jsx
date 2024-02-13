import Image from "next/image";

import quotesIcon from "@icons/icon-quotes.svg";
import Avatar from "@/app/components/UI/Avatar";

export default function TestimonialItem({
  author,
  position,
  testimonial,
  avatar,
}) {
  return (
    <div className="relative flex flex-col items-center">
      <Image
        src={quotesIcon}
        alt="double quotes"
        width="67"
        height="56"
        className="absolute top-[-3.5rem] -z-10"
      />
      <p className="mb-[1.6rem] text-[1.5rem] leading-[2.5rem]">
        "{testimonial}"
      </p>
      <p className="text-[1.8rem] font-bold text-secondary-green-light">
        {author}
      </p>
      <p className="mb-[1.6rem] text-[1.3rem] font-medium italic">{position}</p>
      <div className="h-[6.2rem] w-[6.2rem]">
        <Avatar image={avatar} alt={author} />
      </div>
    </div>
  );
}
