"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-500 ${
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

        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative z-10">
          <div className="text-3xl font-semibold text-white select-none">Radek.net</div>
          <div className="flex gap-6 text-lg font-semibold">
            {["Overview", "Projects", "Education", "Contact"].map((section, index) => (
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
  );
};
