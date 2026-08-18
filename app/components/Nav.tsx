"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/#coming", label: "Coming Soon" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Only the home page has a full-bleed hero for the nav to float over.
  // Everywhere else it starts solid so it never sits on bare background.
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-7 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-bg/80 py-[14px] backdrop-blur-md"
          : "border-b border-transparent py-[22px]"
      }`}
    >
      <Link href="/" aria-label="Invidious Entertainment — home" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Invidious Entertainment"
          width={120}
          height={120}
          priority
          className={`w-auto transition-all duration-300 ${solid ? "h-10" : "h-[52px]"}`}
        />
      </Link>

      <div className="hidden gap-[30px] md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-[0.78rem] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-gold"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
