import Avatar from "@/app/components/UI/Avatar";
import PlusButton from "@/app/components/UI/PlusButton";

export default function DirectorItem({ avatar, name, role }) {
  return (
    <div className="bg-secondary-green-darker relative flex w-full flex-col items-center pb-[5.6rem] pt-[3.2rem]">
      <div className="mb-[1.6rem] h-[9.6rem] w-[9.6rem]">
        <Avatar image={avatar} alt={name} />
      </div>
      <p className="text-[1.8rem] font-bold text-secondary-green-light">
        {name}
      </p>
      <p className="text-[1.5rem] font-medium">{role}</p>
      <div className="absolute bottom-[-2.5rem] h-[5.6rem] w-[5.6rem]">
        <PlusButton />
      </div>
    </div>
  );
}
