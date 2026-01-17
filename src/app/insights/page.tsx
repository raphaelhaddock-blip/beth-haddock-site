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
    <div className="bg-[#faf9f7] text-slate-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#faf9f7]/95 backdrop-blur border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-slate-900 font-medium"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-[#9a7b4f] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#9a7b4f] font-medium text-sm mb-6 tracking-wide">
            INSIGHTS
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 leading-tight text-slate-900">
            Perspectives from the Inside
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
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
                  className="block p-8 border border-slate-200 hover:border-[#9a7b4f] transition group"
                >
                  <p className="text-xs text-slate-400 mb-2">
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                  )}
                  <span className="text-[#9a7b4f] text-sm font-medium mt-4 inline-block group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-500">
              <p className="text-lg">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 Beth Haddock</p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
