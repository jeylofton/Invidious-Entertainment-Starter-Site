import Link from "next/link";

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

const socialLinks = [
  { href: "https://www.instagram.com/invidiousentertainment", label: "Instagram" },
  { href: "https://www.youtube.com/@IEGA-FLA", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-7 py-14 text-[0.78rem] tracking-[0.05em] text-text-muted">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <span className="mb-3 block font-display uppercase tracking-[0.16em] text-text">
            Invidious<span className="text-gold">.</span> Entertainment
          </span>
          <p className="max-w-[280px]">
            An independent creative production company founded by Jey Lofton.
          </p>
        </div>

        <nav aria-label="Site" className="flex flex-col gap-2">
          {siteLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Legal and social" className="flex flex-col gap-2">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </Link>
          ))}
          {socialLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-[1100px] border-t border-border pt-7 text-center">
        &copy;{" "}{new Date().getFullYear()}{" "}Invidious Entertainment. All rights reserved.
        &nbsp;|&nbsp; Founded by Jey Lofton.
      </div>
    </footer>
  );
}
