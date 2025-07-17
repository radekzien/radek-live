import Link from "next/link"
import { Button } from "./ui/button"

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-center gap-5">
      <Button asChild>
        <Link href="#overview">Overview</Link>
      </Button>
      <Button asChild>
        <Link href="#projects">Projects</Link>
      </Button>
      <Button asChild>
        <Link href="#education">Education and Qualification</Link>
      </Button>
      <Button asChild>
        <Link href="#contact">Contact Me</Link>
      </Button>
    </nav>
  );
};