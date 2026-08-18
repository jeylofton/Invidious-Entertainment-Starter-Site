import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Process notes, production diaries, and essays on the craft behind the work at Invidious Entertainment.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <main className="px-7 pb-[120px] pt-[160px]">
      <div className="mx-auto max-w-[820px]">
        <span className="mb-[18px] inline-block text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
          Writing
        </span>
        <div className="mb-[30px] h-px w-16 bg-gold opacity-70" />
        <h1 className="mb-[30px] font-display text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.15]">
          Notes from <em className="italic text-gold">inside the work.</em>
        </h1>
        <p className="max-w-[680px] text-[1.08rem] text-text">
          Production diaries, craft essays, and the reasoning behind the
          decisions that shape each project — written from inside the process
          rather than about it from a distance.
        </p>

        {posts.length > 0 ? (
          <ul className="mt-[70px] flex flex-col gap-px border border-border bg-border">
            {posts.map((post) => (
              <li key={post.slug} className="bg-bg transition-colors hover:bg-bg-soft">
                <Link href={`/writing/${post.slug}`} className="block px-7 py-9">
                  <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                    {formatDate(post.date)}
                    <span className="text-text-muted">
                      {" "}
                      · {post.readingMinutes} min read
                    </span>
                  </span>
                  <h2 className="mb-[10px] font-display text-[1.5rem] text-text">
                    {post.title}
                  </h2>
                  <p className="max-w-[680px] text-[0.95rem] text-text-muted">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-[70px] border border-border px-7 py-16 text-center">
            <p className="font-display text-[1.4rem] italic text-text">
              The first pieces are being written.
            </p>
            <p className="mx-auto mt-4 max-w-[520px] text-[0.95rem] text-text-muted">
              Check back shortly, or reach out directly in the meantime.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block border-b border-gold pb-1 text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70"
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
