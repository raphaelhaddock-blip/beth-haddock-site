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
              className="text-sm text-[#1a1a1a] font-medium"
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

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl mb-4">
            Insights
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Perspectives on crypto regulation, fintech compliance, and AI
            governance—from someone who's been in the room.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block p-6 border border-gray-200 hover:border-[#a88b63] transition"
                >
                  <p className="text-xs text-gray-400 mb-2">
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

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
