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
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/insights"
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium hover:bg-[#a88b63] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="text-sm text-[#a88b63] hover:text-[#1a1a1a] transition mb-8 inline-block"
          >
            ← Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm text-gray-400 mb-4">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600">{post.excerpt}</p>
            )}
          </header>

          {/* Body */}
          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-[#a88b63] prose-a:no-underline hover:prose-a:underline">
              <PortableText value={post.body} />
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Want to discuss how this applies to your company?
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#1a1a1a] text-white font-medium hover:bg-[#a88b63] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2026 Beth Haddock</p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1a1a1a] transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-gray-500 hover:text-[#1a1a1a] transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
