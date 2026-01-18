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

      {/* Header */}
      <section className="pt-48 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight text-[#1C1917]">
            Insights
          </h1>
          <p className="text-[#57534E] text-lg leading-relaxed">
            Perspectives on crypto regulation, fintech compliance, and the
            evolution of digital asset markets.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {posts.length > 0 ? (
            <div className="space-y-12">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block group"
                >
                  <p className="text-sm text-[#57534E] mb-2">
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-2 group-hover:text-[#57534E] transition text-[#1C1917]">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[#57534E] leading-relaxed">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-[#57534E]">No posts yet.</p>
          )}
        </div>
      </section>

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
