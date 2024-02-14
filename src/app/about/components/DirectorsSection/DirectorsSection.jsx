import Image from "next/image";

import directorsTopBackground from "@bg/bg-about-directors.svg";
import directorsBottomBackground from "@bg/bg-home-testimonial-box.svg";

import nikitaMarksAvatar from "@avatars/avatar-nikita.jpg";
import cristianDuncanAvatar from "@avatars/avatar-christian.jpg";
import cruzHamerAvatar from "@avatars/avatar-cruz.jpg";
import drakeHeatonAvatar from "@avatars/avatar-drake.jpg";
import griffinWiseAvatar from "@avatars/avatar-griffin.jpg";
import adenAllanAvatar from "@avatars/avatar-aden.jpg";

import DirectorItem from "./DirectorItem";

const data = [
  {
    id: 1,
    avatar: nikitaMarksAvatar,
    name: "Nikita Marks",
    role: "Founder & CEO",
    mesasge:
      "It always amazes me how much talent there is in every corner of the globe.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    avatar: cristianDuncanAvatar,
    name: "Cristian Duncan",
    role: "Co-founder & CEO",
    message:
      "Distributed teams required unique processes. You need to approach work in a new way.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 3,
    avatar: cruzHamerAvatar,
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
    message:
      "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    avatar: drakeHeatonAvatar,
    name: "Drake Heaton",
    role: "Business Development Lead",
    message:
      "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 5,
    avatar: griffinWiseAvatar,
    name: "Griffin Wise",
    role: "Lead Marketing",
    message:
      "Unique perspectives shape unique products, which is what you need to survive these days.",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 6,
    avatar: adenAllanAvatar,
    name: "Aden Allan",
    role: "Head of Talent",
    message:
      "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    twitter: "#",
    linkedin: "#",
  },
];

export default function DirectorsSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-secondary-green-dark pt-[8.8rem]">
      <Image
        src={directorsTopBackground}
        alt="a circle with a square of small circles"
        width="200"
        height="200"
        className="absolute left-[-10rem] top-[-10.5rem]"
      />
      <h2 className="mb-[4.8rem] text-[3.2rem] font-bold">
        Meet the directors
      </h2>
      <ul className="mb-[5.2rem] flex w-full flex-col gap-[5.2rem]  px-[2.4rem]">
        {data.map((director) => (
          <li key={director.id}>
            <DirectorItem
              avatar={director.avatar}
              name={director.name}
              role={director.role}
            />
          </li>
        ))}
      </ul>
      <Image
        src={directorsBottomBackground}
        alt="box with grating"
        width="147"
        height="100"
        className="self-end"
      />
    </section>
  );
}
