"use client";
import { Hamburger, HamburgerIcon, MenuSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Overview", "Projects", "Education", "Contact"]
  const wrapperRef = useRef<HTMLDivElement>(null);


  //Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) { 
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  //Click Off Handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-500 backdrop-blur md:backdrop-blur-none${
        isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        WebkitMaskImage: isScrolled
          ? "linear-gradient(to bottom, black 0%, transparent 100%)"
          : "none",
        maskImage: isScrolled
          ? "linear-gradient(to bottom, black 0%, transparent 100%)"
          : "none",
      }}
    >
      <div style={{ position: "relative" }}>
        {isScrolled && (
          <>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40px",
                pointerEvents: "none",
                zIndex: 10,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />
          </>
        )}

        <div  ref={wrapperRef} className="max-w-7xl mx-auto flex justify-between items-center p-4 relative z-10">
          <div className="text-3xl font-semibold text-white select-none">Radek.net</div>


          <div className="relative md:hidden">
            {/*Hamburger menu for mobile */}
            <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}><MenuSquare /></Button>

            {/*Mobile Menu*/}
            {isMenuOpen && (
              <div className="absolute top-16 z-50 right-4 bg-black/80 px-6 pb-4 pt-2 space-y-2 text-lg font-semibold text-white transition-all duration-300">
                {navLinks.map((section, index) => (
                  <Link
                    key={index}
                    href={`#${section}`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                    className="block hover:text-gray-300"
                  >
                    {section === "Education"
                      ? "Education and Qualifications"
                      : section}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/*Desktop menu */}
          <div className="hidden md:flex gap-6 text-lg font-semibold">
            {navLinks.map((section, index) => (
              <Link
                key={index}
                href={`#${section}`}
                className={`transition-all duration-300 text-white ${
                  isScrolled
                    ? "opacity-30 hover:opacity-100 hover:scale-110"
                    : "opacity-100 hover:scale-110"
                }`}
              >
                {section === "Education" ? "Education and Qualifications" : section}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  </>
  );
}
