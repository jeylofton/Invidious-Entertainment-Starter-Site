"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#coming", label: "Coming Soon" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-7 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 py-[14px] backdrop-blur-md"
          : "border-b border-transparent py-[22px]"
      }`}
    >
      <a href="#hero" aria-label="Invidious Entertainment — home" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Invidious Entertainment"
          width={120}
          height={120}
          priority
          className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-[52px]"}`}
        />
      </a>

      <div className="hidden gap-[30px] md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[0.78rem] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-gold"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
