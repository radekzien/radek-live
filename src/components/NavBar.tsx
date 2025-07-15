import Link from "next/link"

export const NavBar = () => {
    return(
    <nav>
        <Link href ="#overview">Overview</Link>
        <Link href ="#projects">Projects</Link>
        <Link href ="#education">Education and Qualification</Link>
        <Link href = "#contact">Contact Me</Link>
    </nav>
    )
}