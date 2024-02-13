import Image from "next/image";

import BuildItem from "./BuildItem";

import personIcon from "@icons/icon-person.svg";
import cogIcon from "@icons/icon-cog.svg";
import chartIcon from "@icons/icon-chart.svg";

import buildBackground from "@bg/bg-home-build.svg";

const data = [
  {
    id: 1,
    image: personIcon,
    imageAlt: "a person smiling",
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    id: 2,
    image: cogIcon,
    imageAlt: "a cog with a tick in the centre",
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    id: 3,
    image: chartIcon,
    imageAlt: "a bar chart with increasing values",
    title: "Enhanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

export default function BuildSection() {
  return (
    <div className="bg-secondary-green-darkest">
      <div className="mb-[5.6rem] flex overflow-hidden">
        <div className="pl-[2.4rem] pt-[6.4rem]">
          <div className="mb-[3.2rem] h-[0.4rem] w-[5rem] bg-primary-coral"></div>
          <h2 className="max-w-[24rem] self-end text-[3.2rem] leading-[3.2rem]">
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <Image
          src={buildBackground}
          width="200"
          height="244"
          className="h-[24.4rem] w-[20rem] translate-x-[45%]"
        />
      </div>
      <ul className="mx-[2.4rem] mb-[6.4rem] flex flex-col items-center gap-[4.8rem] ">
        {data.map((buildItem) => (
          <li key={buildItem.id}>
            <BuildItem
              image={buildItem.image}
              imageAlt={buildItem.imageAlt}
              title={buildItem.title}
              description={buildItem.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
