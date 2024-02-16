export default function Modal({ children }) {
  return (
    <>
      <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-60"></div>
      {children}
    </>
  );
}
