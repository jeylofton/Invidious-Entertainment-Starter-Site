import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

/* Pre-render every published post at build time. */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `/writing/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Jey Lofton" },
    publisher: {
      "@type": "Organization",
      name: "Invidious Entertainment",
      logo: {
        "@type": "ImageObject",
        url: "https://invidiousentertainment.com/logo.png",
      },
    },
    mainEntityOfPage: `https://invidiousentertainment.com/writing/${post.slug}`,
  };

  return (
    <main className="px-7 pb-[120px] pt-[160px]">
      <script
        type="application/ld+json"
        // Safe: articleJsonLd is built in this file, never from user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-[720px]">
        <Link
          href="/writing"
          className="mb-10 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-gold"
        >
          ← All writing
        </Link>

        <span className="mb-5 block text-[0.7rem] uppercase tracking-[0.2em] text-gold">
          {formatDate(post.date)}
          <span className="text-text-muted"> · {post.readingMinutes} min read</span>
        </span>

        <h1 className="mb-[26px] font-display text-[clamp(2rem,4.6vw,3rem)] font-semibold leading-[1.15]">
          {post.title}
        </h1>

        {post.description && (
          <p className="mb-[50px] border-l-2 border-gold pl-6 text-[1.08rem] italic text-text-muted">
            {post.description}
          </p>
        )}

        <div
          className="prose"
          // Safe: post HTML comes from markdown authored in this repo.
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
