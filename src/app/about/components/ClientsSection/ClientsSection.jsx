import Image from "next/image";

import clientsBackground from "@bg/bg-about-clients.svg";

import theVergeLogo from "@logos/logo-the-verge.png";
import theJakartaPostLogo from "@logos/logo-jakarta-post.png";
import theGuardianLogo from "@logos/logo-the-guardian.png";
import techRadarLogo from "@logos/logo-tech-radar.png";
import gadgetsNowLogo from "@logos/logo-gadgets-now.png";

const clients = [
  {
    id: 1,
    name: "The Verge",
    logo: theVergeLogo,
    link: "#",
  },
  {
    id: 2,
    name: "The Jakarta Post",
    logo: theJakartaPostLogo,
    link: "#",
  },
  {
    id: 3,
    name: "The Guardian",
    logo: theGuardianLogo,
    link: "#",
  },
  {
    id: 4,
    name: "Tech Radar",
    logo: techRadarLogo,
    link: "#",
  },
  {
    id: 5,
    name: "Gadgets Now",
    logo: gadgetsNowLogo,
    link: "#",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-secondary-green-darker relative flex flex-col items-center overflow-hidden pt-[8.8rem]">
      <Image
        src={clientsBackground}
        alt="a circle"
        width="200"
        height="200"
        className="absolute left-[-10rem] top-[-10rem]"
      />
      <h2 className="mb-[6.4rem] text-[3.2rem] font-bold">
        Some of our clients
      </h2>
      <ul className="mb-[8.2rem] flex max-w-[15rem] flex-col items-center gap-[5.5rem] sm:mx-[4rem] sm:max-w-none sm:flex-row">
        {clients.map((client) => (
          <li key={client.id}>
            <a href={client.link}>
              <Image src={client.logo} alt={client.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}