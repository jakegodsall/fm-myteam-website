export default function Modal({ children, toggleMenu }) {
  const handleClickBackground = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-60"
      ></div>
      {children}
    </>
  );
}
