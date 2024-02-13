import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-[2.4rem]">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
    </nav>
  );
}
