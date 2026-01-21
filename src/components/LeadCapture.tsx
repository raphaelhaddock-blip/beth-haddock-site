"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type LeadCaptureProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "inline" | "card";
};

export default function LeadCapture({
  title = "2026 Regulatory Priorities Checklist",
  description = "Get the framework I use to help clients prepare for regulatory changes. Covers SEC, NYDFS, GENIUS Act compliance, and emerging AI governance.",
  buttonText = "Get the Checklist",
  variant = "card",
}: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      return;
    }

    setStatus("loading");

    // Simulate API call - replace with actual email service integration
    // e.g., Mailchimp, ConvertKit, Buttondown, etc.
    try {
      // For now, just simulate success after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // TODO: Replace with actual API call
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          variant === "card"
            ? "bg-[#141414] border border-[#262626] p-8 md:p-10"
            : ""
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#D4AF37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-[family-name:var(--font-playfair)] text-xl text-[#FAFAFA]">
            Check your inbox
          </p>
        </div>
        <p className="text-[#A1A1AA]">
          The checklist is on its way. Keep an eye out for regulatory insights and updates.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={`${
        variant === "card"
          ? "bg-[#141414] border border-[#262626] p-8 md:p-10"
          : ""
      }`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-[#D4AF37]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#FAFAFA] mb-2">
            {title}
          </h3>
          <p className="text-[#A1A1AA] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 bg-[#0A0A0A] border border-[#262626] text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-[#D4AF37] text-[#0A0A0A] font-medium hover:bg-[#F5D77A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </form>

      {status === "error" && (
        <p className="text-red-400 text-sm mt-3">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="text-[#71717A] text-xs mt-4">
        No spam. Unsubscribe anytime. Your email stays private.
      </p>
    </div>
  );
}
