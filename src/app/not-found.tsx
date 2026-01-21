"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <Nav alwaysVisible />

      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <h1 className="font-playfair text-7xl md:text-9xl text-[#a88b63] mb-6">
            404
          </h1>
          <h2 className="font-playfair text-2xl md:text-3xl mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#a88b63] text-white font-medium tracking-wide hover:bg-[#8a7352] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/warburton"
              className="inline-block px-8 py-3 border border-[#a88b63] text-[#a88b63] font-medium tracking-wide hover:bg-[#a88b63] hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
