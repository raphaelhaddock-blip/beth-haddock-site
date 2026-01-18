import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  body: any[];
};

export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAF9] text-[#1C1917] min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/95 backdrop-blur border-b border-[#E7E5E4] px-6 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1C1917]"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-[#1C1917]"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="text-sm text-[#57534E] hover:text-[#1C1917] transition mb-12 inline-block"
          >
            ← Insights
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#57534E] mb-4">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-[#1C1917]">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-[#57534E] leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          {/* Body */}
          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-[#57534E] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1C1917] prose-p:text-[#57534E] prose-p:leading-relaxed prose-li:text-[#57534E]">
              <PortableText value={post.body} />
            </div>
          )}

          {/* Contact */}
          <section className="mt-24 pt-12 border-t border-[#E7E5E4]">
            <p className="text-[#57534E] mb-6">
              Want to discuss how this applies to your situation?
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1917] hover:text-[#57534E] transition border-b border-[#1C1917] hover:border-[#57534E] pb-1"
            >
              Schedule a conversation
            </a>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-[#57534E]">
            © 2026 Beth Haddock
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#57534E] hover:text-[#1C1917] transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-[#57534E] hover:text-[#1C1917] transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
