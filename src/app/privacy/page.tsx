import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Beth Haddock",
  description: "Privacy policy for bethhaddock.com - how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <header className="py-6 px-6 border-b border-[#262626]">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl">
            Beth Haddock
          </Link>
          <Link
            href="/"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#8B8B94] mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Overview
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                Beth Haddock (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard information when you visit bethhaddock.com (the &quot;Site&quot;).
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Information We Collect
              </h2>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">Information You Provide</h3>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li><strong className="text-[#FAFAFA]">Contact Form:</strong> Name, email address, company name, and message content when you reach out through our contact form.</li>
                <li><strong className="text-[#FAFAFA]">Email Signup:</strong> Email address when you subscribe to receive resources or updates.</li>
              </ul>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">Information Collected Automatically</h3>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li><strong className="text-[#FAFAFA]">Analytics Data:</strong> We use Vercel Analytics to collect anonymous usage data including pages visited, time on site, device type, and general geographic location. This data is aggregated and cannot identify you personally.</li>
                <li><strong className="text-[#FAFAFA]">Log Data:</strong> Our servers automatically record information including your IP address, browser type, and referring pages.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                How We Use Your Information
              </h2>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li>To respond to your inquiries and communicate with you</li>
                <li>To send requested resources (such as the compliance checklist)</li>
                <li>To send occasional updates about regulatory developments (only if you opt in)</li>
                <li>To improve our Site and understand how visitors use it</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Information Sharing
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li><strong className="text-[#FAFAFA]">Service Providers:</strong> Third parties that help us operate the Site (hosting, analytics, email delivery). These providers are contractually obligated to protect your information.</li>
                <li><strong className="text-[#FAFAFA]">Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                We use minimal cookies necessary for Site functionality. Vercel Analytics uses privacy-friendly tracking that does not use cookies and does not track users across sites. You can disable cookies in your browser settings, though some Site features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Your Rights
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-[#A1A1AA] leading-relaxed mt-4">
                To exercise these rights,{" "}
                <Link href="/" className="text-[#D4AF37] hover:underline">
                  contact us through our website
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Data Retention
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. Contact form submissions are retained for the duration of any ongoing business relationship. You may request deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Data Security
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                California Privacy Rights
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and how it is used, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                International Visitors
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                If you are visiting from the European Economic Area or other regions with data protection laws, please note that your information may be transferred to and processed in the United States. By using the Site, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Changes to This Policy
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                We may update this policy periodically. We will notify you of material changes by posting the updated policy on this page with a new &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Contact Us
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                If you have questions about this privacy policy or our data practices, please{" "}
                <Link href="/" className="text-[#D4AF37] hover:underline">
                  contact us through our website
                </Link>.
              </p>
              <div className="mt-4 p-6 bg-[#141414] border border-[#262626]">
                <p className="text-[#FAFAFA] font-medium">Beth Haddock</p>
                <p className="text-[#A1A1AA]">Warburton Advisers</p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
