"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-[#8B8B94] mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Agreement to Terms
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                By accessing or using bethhaddock.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
              </p>
            </section>

            <section className="bg-[#141414] border border-[#262626] p-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#D4AF37] mb-4">
                Important Professional Disclaimer
              </h2>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">No Attorney-Client Relationship</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Use of this Site does not create an attorney-client relationship between you and Beth Haddock or Warburton Advisers. No such relationship is formed until a formal engagement agreement is signed by both parties.
              </p>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">Not Legal Advice</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                The content on this Site, including articles, guides, and other materials, is provided for general informational and educational purposes only. It does not constitute legal, financial, tax, or other professional advice. The information may not reflect the most current legal or regulatory developments.
              </p>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">No Guarantees</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Every situation is unique. The information on this Site should not be relied upon as a substitute for professional advice tailored to your specific circumstances. Past results or case studies do not guarantee similar outcomes.
              </p>

              <h3 className="text-lg text-[#FAFAFA] mt-6 mb-3">Consult a Professional</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Before making any decisions based on information found on this Site, you should consult with a qualified attorney or other professional who can evaluate your specific needs and circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Use of the Site
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed mb-4">
                You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="text-[#A1A1AA] space-y-2 list-disc list-inside">
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Use the Site to transmit any harmful code or malware</li>
                <li>Interfere with or disrupt the Site or its servers</li>
                <li>Scrape, harvest, or collect information from the Site without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Intellectual Property
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                All content on this Site, including text, graphics, logos, and images, is the property of Beth Haddock or Warburton Advisers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Third-Party Links
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                The Site may contain links to third-party websites or resources. These links are provided for convenience only. We have no control over the content, privacy policies, or practices of third-party sites and assume no responsibility for them.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                To the fullest extent permitted by law, Beth Haddock and Warburton Advisers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on any information provided. This includes, without limitation, damages for loss of profits, data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                The Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components, or that any content is accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Indemnification
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                You agree to indemnify, defend, and hold harmless Beth Haddock and Warburton Advisers from any claims, damages, losses, or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Governing Law
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Site shall be resolved in the courts located in New York.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Changes to Terms
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] mb-4">
                Contact
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed">
                If you have questions about these Terms, please{" "}
                <Link href="/" className="text-[#D4AF37] hover:underline">
                  contact us through our website
                </Link>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
