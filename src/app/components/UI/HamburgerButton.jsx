export default function HamburgerButton() {
  return (
    <div className="relative">
      <div className="h-[0.3rem] w-[2.3rem] bg-primary-white before:absolute before:top-[-0.8rem] before:h-[0.3rem] before:w-[2.3rem] before:bg-primary-white after:absolute after:top-[0.8rem] after:h-[0.3rem] after:w-[2.3rem] after:bg-primary-white"></div>
    </div>
  );
}
