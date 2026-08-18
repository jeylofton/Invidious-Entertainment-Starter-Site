import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { getAllPosts, formatDate } from "@/lib/posts";

/* Structured data for search engines (Organization + founder + socials). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Invidious Entertainment",
  alternateName: "Invidious Entertainment Studio",
  url: "https://invidiousentertainment.com/",
  logo: "https://invidiousentertainment.com/logo.png",
  image: "https://invidiousentertainment.com/logo.png",
  description:
    "An independent creative production company founded by Jey Lofton, telling grounded, cinematic, emotionally honest stories.",
  email: "info@invidiousentertainment.com",
  founder: {
    "@type": "Person",
    name: "Jey Lofton",
    jobTitle: "Founder, Producer & Creative Visionary",
  },
  sameAs: [
    "https://www.instagram.com/invidiousentertainment",
    "https://www.youtube.com/@IEGA-FLA",
  ],
};

const themes = [
  { num: "01", title: "Emotional Truth", body: "Characters who bleed real consequence — flawed, human, and honest." },
  { num: "02", title: "Psychological Drama", body: "The quiet tension beneath the surface, where the real conflict lives." },
  { num: "03", title: "Romance & Conflict", body: "Connection and collision — the push and pull that defines people." },
  { num: "04", title: "Personal Growth", body: "Transformation forged under pressure, where change is earned, not given." },
];

const comingTags = ["Films", "Original Stories", "Novels", "Creative Projects", "Collaborations"];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        // Safe: jsonLd is built in this file, never from user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===================== HERO ===================== */}
      <header
        id="hero"
        className="hero-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-7 pb-[100px] pt-[140px] text-center"
      >
        <span className="mb-[26px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
          Independent Creative Production
        </span>

        <Image
          src="/logo.png"
          alt="Invidious Entertainment"
          width={1024}
          height={1024}
          priority
          className="mb-[30px] h-auto w-[clamp(260px,42vw,480px)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />

        {/* Real page heading for SEO & screen readers (logo shows it visually). */}
        <h1 className="visually-hidden">Invidious Entertainment</h1>

        <p className="mx-auto mb-7 max-w-[640px] font-display text-[clamp(1.1rem,2.4vw,1.6rem)] italic text-text">
          Stories Built From Truth, Tension, and Transformation
        </p>
        <p className="mx-auto mb-[44px] max-w-[560px] text-base text-text-muted">
          An independent creative production company telling grounded, cinematic
          stories about who we are — and who we become under pressure.
        </p>

        <div className="inline-flex items-center gap-3 rounded-full border border-border px-[26px] py-3 text-[0.72rem] uppercase tracking-[0.3em] text-gold-soft">
          <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-gold shadow-[0_0_10px_var(--color-gold)]" />
          Projects Coming Soon
        </div>

        <div className="absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[10px] text-[0.65rem] uppercase tracking-[0.3em] text-text-muted">
          <span>Scroll</span>
          <span className="h-10 w-px animate-cue bg-gradient-to-b from-gold to-transparent" />
        </div>
      </header>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="relative border-y border-border bg-bg-soft py-[120px]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1fr_0.85fr] md:gap-[70px]">
          <div className="reveal">
            <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
              About
            </span>
            <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
            <h2 className="mb-[30px] max-w-[780px] font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15]">
              A vision built by <em className="italic text-gold">one creative force.</em>
            </h2>
            <p className="max-w-[680px] text-[1.08rem] text-text">
              Invidious Entertainment is an independent creative production company
              founded by Jey Lofton — producer, writer, filmmaker, and storyteller.
            </p>
            <p className="mt-[22px] max-w-[680px] text-text-muted">
              Jey writes, produces, develops, and creates original stories from the
              ground up. Every idea, character, and frame starts with a single
              creative vision. What begins today as a one-man operation is the
              foundation of something larger — a creative brand built deliberately,
              story by story, with no shortcuts and no compromise on the truth of
              the work.
            </p>
            <Link
              href="/about"
              className="mt-[30px] inline-block border-b border-gold pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70"
            >
              More about the company
            </Link>
          </div>

          <div className="founder-photo reveal relative mx-auto flex aspect-[3/4] w-full max-w-[380px] items-end justify-center overflow-hidden rounded border border-border shadow-[0_30px_60px_rgba(0,0,0,0.5)] md:mx-0 md:max-w-none">
            <Image
              src="/jey.jpeg"
              alt="Jey Lofton, Founder of Invidious Entertainment"
              fill
              sizes="(max-width: 820px) 380px, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===================== VISION ===================== */}
      <section id="vision" className="relative py-[120px]">
        <div className="mx-auto max-w-[1100px] px-7">
          <div className="reveal">
            <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
              Vision
            </span>
            <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
            <h2 className="mb-[30px] max-w-[780px] font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15]">
              Stories that feel <em className="italic text-gold">real, cinematic, and emotionally honest.</em>
            </h2>
            <p className="max-w-[680px] text-[1.08rem] text-text">
              Invidious Entertainment is built on grounded storytelling — work that
              earns its emotion through truth, not spectacle. The mission is simple:
              create stories that stay with people long after the screen goes dark.
            </p>
          </div>

          <div className="reveal mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px border border-border bg-border">
            {themes.map((t) => (
              <div key={t.num} className="bg-bg px-7 py-9 transition-colors hover:bg-bg-soft">
                <span className="mb-4 block text-[0.7rem] tracking-[0.2em] text-gold">{t.num}</span>
                <h3 className="mb-[10px] font-display text-[1.3rem] text-text">{t.title}</h3>
                <p className="text-[0.9rem] text-text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== COMING SOON ===================== */}
      <section id="coming" className="coming-bg relative border-t border-border py-[120px] text-center">
        <div className="reveal mx-auto flex max-w-[1100px] flex-col items-center px-7">
          <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
            On The Horizon
          </span>
          <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
          <h2 className="mb-[30px] max-w-[780px] font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15]">
            Something is <em className="italic text-gold">being built.</em>
          </h2>
          <p className="mx-auto max-w-[680px] text-[1.08rem] text-text">
            The first projects are in development — original films, written stories,
            novels, and creative collaborations shaped with intention.
          </p>
          <p className="mx-auto mt-[22px] max-w-[680px] text-text-muted">
            Details are kept close for now. What matters is the standard: every
            release will reflect the same commitment to truth and craft. Stay tuned.
          </p>

          <div className="mt-[44px] flex flex-wrap justify-center gap-[14px]">
            {comingTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-[22px] py-[10px] text-[0.78rem] uppercase tracking-[0.18em] text-text-muted transition-colors hover:border-gold hover:text-gold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WRITING ===================== */}
      <section id="writing" className="relative border-t border-border bg-bg-soft py-[120px]">
        <div className="reveal mx-auto max-w-[1100px] px-7">
          <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
            Writing
          </span>
          <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
          <h2 className="mb-[30px] max-w-[780px] font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15]">
            Notes from <em className="italic text-gold">inside the work.</em>
          </h2>

          {recentPosts.length > 0 ? (
            <>
              <ul className="mt-[50px] grid gap-px border border-border bg-border">
                {recentPosts.map((post) => (
                  <li key={post.slug} className="bg-bg transition-colors hover:bg-bg-soft">
                    <Link href={`/writing/${post.slug}`} className="block px-7 py-8">
                      <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                        {formatDate(post.date)}
                      </span>
                      <h3 className="mb-[10px] font-display text-[1.4rem] text-text">
                        {post.title}
                      </h3>
                      <p className="max-w-[680px] text-[0.95rem] text-text-muted">
                        {post.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/writing"
                className="mt-[40px] inline-block border-b border-gold pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70"
              >
                All writing
              </Link>
            </>
          ) : (
            <p className="max-w-[680px] text-[1.08rem] text-text">
              Process notes, production diaries, and essays on the craft behind
              the work — published here as the first projects take shape.
            </p>
          )}
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="relative py-[120px] text-center">
        <div className="reveal mx-auto flex max-w-[1100px] flex-col items-center px-7">
          <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
            Contact
          </span>
          <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
          <h2 className="mb-[30px] max-w-[780px] font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15]">
            Let&apos;s create <em className="italic text-gold">something real.</em>
          </h2>
          <p className="max-w-[680px] text-[1.08rem] text-text">
            For inquiries, collaborations, and opportunities — reach out directly.
          </p>

          <ContactForm />

          <div className="mt-[44px] flex gap-7">
            {[
              { href: "https://www.instagram.com/invidiousentertainment", label: "Instagram" },
              { href: "https://www.youtube.com/@IEGA-FLA", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:text-text hover:after:w-full"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
