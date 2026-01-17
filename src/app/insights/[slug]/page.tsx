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
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 backdrop-blur border-b border-stone-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-stone-900 font-medium"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="text-sm text-stone-500 hover:text-stone-900 transition mb-8 inline-block"
          >
            ← Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm text-stone-400 mb-4">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-stone-900">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-stone-600 leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          {/* Body */}
          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-stone-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-900 prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600">
              <PortableText value={post.body} />
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-stone-200">
            <p className="text-stone-600 mb-6 text-lg">
              Want to discuss how this applies to your company?
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-stone-900 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition"
            >
              Schedule a Conversation
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-stone-900 mb-2">
              Beth Haddock
            </p>
            <p className="text-sm text-stone-400">© 2026. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
