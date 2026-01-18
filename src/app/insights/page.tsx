import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      <Nav active="insights" />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
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

      <Footer />
    </div>
  );
}
