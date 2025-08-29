"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import LogoButton from "./LogoButton";

export default function DemoNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Handler
  const handleScroll = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsScrolled(window.scrollY > 10);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-500 backdrop-blur md:backdrop-blur-none ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
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
        )}

        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative z-10">
          <LogoButton />

          <div className="hidden md:flex gap-6 text-lg font-semibold">
            <Link
              href="/"
              className={`transition-all duration-300 text-white ${
                isScrolled
                  ? "opacity-30 hover:opacity-100 hover:scale-110"
                  : "opacity-100 hover:scale-110"
              }`}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
