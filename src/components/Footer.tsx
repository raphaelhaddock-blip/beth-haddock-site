export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-sm text-[#A1A1AA]">© 2026 Beth Haddock</p>
        <div className="flex gap-8 text-sm">
          <a
            href="https://linkedin.com/in/bethhaddock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#D4AF37] transition py-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:beth@warburtonadvisers.com"
            className="text-[#A1A1AA] hover:text-[#D4AF37] transition py-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
