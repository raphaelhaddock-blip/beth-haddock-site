import Link from "next/link";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <p className="text-sm text-[#A1A1AA]">© 2026 Beth Haddock</p>
          <span className="hidden sm:inline text-[#262626]">·</span>
          <Link
            href="/about"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            About
          </Link>
          <span className="hidden sm:inline text-[#262626]">·</span>
          <Link
            href="/warburton"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            Warburton Advisers
          </Link>
          <span className="hidden sm:inline text-[#262626]">·</span>
          <Link
            href="/privacy"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            Privacy
          </Link>
          <span className="hidden sm:inline text-[#262626]">·</span>
          <Link
            href="/terms"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            Terms
          </Link>
          <span className="hidden sm:inline text-[#262626]">·</span>
          <Link
            href="/sitemap.xml"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition"
          >
            Sitemap
          </Link>
        </div>
        <div className="flex gap-8 text-sm">
          <a
            href="https://linkedin.com/in/bethhaddock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#D4AF37] transition py-2"
          >
            LinkedIn
          </a>
          <ContactButton className="text-[#A1A1AA] hover:text-[#D4AF37] transition py-2">
            Contact
          </ContactButton>
        </div>
      </div>
    </footer>
  );
}
