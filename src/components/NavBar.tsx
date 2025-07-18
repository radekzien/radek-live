import Link from "next/link"
import { Button } from "./ui/button"

export const NavBar = () => {
  return (
    <nav className="fixed top-0 shadow-sm z-50 w-full flex justify-between gap-4 m-2">
      <div className="text-lg font-semibold">Radek.net</div>
      <div className="flex gap-6 text-lg font-semibold mr-2">
        <Link href="#overview" className="hover:scale-110 hover:font-bold">Overview</Link>
        <Link href="#projects" className="hover:scale-110 hover:font-bold">Projects</Link>
        <Link href="#education" className="hover:scale-110 hover:font-bold">Education and Qualification</Link>
        <Link href="#contact" className="hover:scale-110 hover:font-bold">Contact Me</Link>
        </div>
      </nav>
  );
};