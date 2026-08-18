import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Invidious Entertainment is an independent creative production company founded by Jey Lofton — producer, writer, and filmmaker building grounded, cinematic stories.",
  alternates: { canonical: "/about" },
};

/* NOTE FOR JEY — this page is built from the copy that was already on the
   home page, restructured into a real page at its own URL. Nothing here is
   invented. Where you see the markers below, expand in your own words: the
   more specific and first-hand this page is, the more weight it carries
   with both readers and search engines.

   Worth adding when you can:
     • What you were doing before Invidious, and why you started it
     • The specific films, books, or records that shaped your taste
     • What "grounded storytelling" means to you in concrete terms
     • Where the name Invidious came from
*/

const principles = [
  {
    num: "01",
    title: "Emotional Truth",
    body: "Characters who bleed real consequence — flawed, human, and honest.",
  },
  {
    num: "02",
    title: "Psychological Drama",
    body: "The quiet tension beneath the surface, where the real conflict lives.",
  },
  {
    num: "03",
    title: "Romance & Conflict",
    body: "Connection and collision — the push and pull that defines people.",
  },
  {
    num: "04",
    title: "Personal Growth",
    body: "Transformation forged under pressure, where change is earned, not given.",
  },
];

export default function About() {
  return (
    <main className="px-7 pb-[120px] pt-[160px]">
      <div className="mx-auto max-w-[900px]">
        <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
          About
        </span>
        <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
        <h1 className="mb-[36px] font-display text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.15]">
          A vision built by <em className="italic text-gold">one creative force.</em>
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.7fr] md:gap-[60px]">
          <div className="prose">
            <p>
              Invidious Entertainment is an independent creative production
              company founded by Jey Lofton — producer, writer, filmmaker, and
              storyteller.
            </p>
            <p>
              Jey writes, produces, develops, and creates original stories from
              the ground up. Every idea, character, and frame starts with a
              single creative vision. What begins today as a one-man operation
              is the foundation of something larger — a creative brand built
              deliberately, story by story, with no shortcuts and no compromise
              on the truth of the work.
            </p>

            <h2>The standard</h2>
            <p>
              Invidious Entertainment is built on grounded storytelling — work
              that earns its emotion through truth, not spectacle. The mission
              is simple: create stories that stay with people long after the
              screen goes dark.
            </p>
            <p>
              That standard applies the same way to a feature, a short, or a
              chapter of a novel. The medium changes; the demand that the work
              be honest does not.
            </p>

            <h2>What we&apos;re building</h2>
            <p>
              The first projects are in development — original films, written
              stories, novels, and creative collaborations shaped with
              intention. Details are kept close for now. What matters is the
              standard: every release will reflect the same commitment to truth
              and craft.
            </p>
          </div>

          <div className="founder-photo relative mx-auto flex aspect-[3/4] w-full max-w-[340px] items-end justify-center overflow-hidden rounded border border-border shadow-[0_30px_60px_rgba(0,0,0,0.5)] md:mx-0 md:max-w-none">
            <Image
              src="/jey.jpeg"
              alt="Jey Lofton, Founder of Invidious Entertainment"
              fill
              sizes="(max-width: 820px) 340px, 34vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* ===================== PRINCIPLES ===================== */}
        <h2 className="mb-[30px] mt-[90px] font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold">
          What the work returns to
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px border border-border bg-border">
          {principles.map((p) => (
            <div key={p.num} className="bg-bg px-7 py-9 transition-colors hover:bg-bg-soft">
              <span className="mb-4 block text-[0.7rem] tracking-[0.2em] text-gold">
                {p.num}
              </span>
              <h3 className="mb-[10px] font-display text-[1.3rem] text-text">{p.title}</h3>
              <p className="text-[0.9rem] text-text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-[70px] flex flex-wrap gap-8">
          <Link
            href="/writing"
            className="border-b border-gold pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70"
          >
            Read the writing
          </Link>
          <Link
            href="/#contact"
            className="border-b border-border pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-text-muted transition-colors hover:border-gold hover:text-gold"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
