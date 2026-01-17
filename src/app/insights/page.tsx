import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

export const revalidate = 60;

export default async function InsightsPage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

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

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm mb-6 tracking-wide uppercase">
            Insights
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 leading-tight text-stone-900">
            Perspectives from the Inside
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
            Perspectives on crypto regulation, fintech compliance, and AI
            governance—from someone who's been in the room.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block p-8 border border-stone-200 hover:border-stone-400 transition group"
                >
                  <p className="text-xs text-stone-400 mb-2">
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-3 group-hover:text-stone-600 transition text-stone-900">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
                  )}
                  <span className="text-stone-500 text-sm font-medium mt-4 inline-block group-hover:text-stone-900 transition">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-stone-500">
              <p className="text-lg">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

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
