import clsx from "clsx";

export default function HamburgerButton({ mobileMenuOpen }) {
  return (
    <div className="relative flex flex-col gap-[0.6rem]">
      <div
        className={clsx(
          mobileMenuOpen
            ? "h-[0.3rem] w-[2.3rem] translate-y-[0.8rem] rotate-45 bg-primary-white transition-all duration-300"
            : "h-[0.3rem] w-[2.3rem] bg-primary-white transition-all duration-300",
        )}
      ></div>
      <div
        className={clsx(
          mobileMenuOpen
            ? "h-[0.3rem] w-[2.3rem] bg-primary-white opacity-0 transition-all duration-300"
            : "h-[0.3rem] w-[2.3rem] bg-primary-white transition-all duration-300",
        )}
      ></div>
      <div
        className={clsx(
          mobileMenuOpen
            ? "h-[0.3rem] w-[2.3rem] translate-y-[-1rem] rotate-[135deg] bg-primary-white transition-all duration-700"
            : "h-[0.3rem] w-[2.3rem] bg-primary-white transition-all duration-700",
        )}
      ></div>
    </div>
  );
}
