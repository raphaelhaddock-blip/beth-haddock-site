"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-[#1a1a1a] border border-[#333] w-full max-w-md p-8 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="font-playfair text-2xl text-white mb-2">Get in Touch</h2>
              <p className="text-gray-400 text-sm mb-6">
                Tell me about your situation. I&apos;ll respond within 48 hours.
              </p>

              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="text-[#a88b63] text-4xl mb-4">✓</div>
                  <p className="text-white text-lg mb-2">Message sent</p>
                  <p className="text-gray-400 text-sm">I&apos;ll be in touch soon.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 border border-[#a88b63] text-[#a88b63] hover:bg-[#a88b63] hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Name (required)</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#333] px-4 py-3 text-white placeholder-gray-500 focus:border-[#a88b63] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email (required)</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#333] px-4 py-3 text-white placeholder-gray-500 focus:border-[#a88b63] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="sr-only">Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#333] px-4 py-3 text-white placeholder-gray-500 focus:border-[#a88b63] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">Message (required)</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="How can I help? *"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#333] px-4 py-3 text-white placeholder-gray-500 focus:border-[#a88b63] focus:outline-none resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#a88b63] text-white py-3 font-medium tracking-wide hover:bg-[#8a7352] transition-colors disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
