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
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="insights" alwaysVisible />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4">
            Perspectives
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Insights
          </h1>
          <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-2xl">
            Perspectives on crypto regulation, fintech compliance, and the
            evolution of digital asset markets.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length > 0 ? (
            <div className="space-y-0">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="group block py-8 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
                >
                  <p className="text-sm text-[#D4AF37] tracking-[0.1em] uppercase mb-3">
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-3 group-hover:text-[#D4AF37] transition">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[#A1A1AA] leading-relaxed">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-[#A1A1AA] text-lg">Coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
